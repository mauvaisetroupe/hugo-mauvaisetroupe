import sys
import re
import unicodedata
from pathlib import Path

def normalize_filename(filename: str) -> str:
    # 1. Remplace les espaces et apostrophes par des tirets
    name = re.sub(r"['’\s]", "-", filename)
    
    # 2. Décompose et supprime les accents (NFD -> ASCII)
    nfkd_form = unicodedata.normalize('NFD', name)
    name = "".join([c for c in nfkd_form if not unicodedata.combining(c)])
    
    # 3. Passage en minuscules
    name = name.lower()
    
    # 4. Remplace 2 points ou plus (...) par un tiret
    name = re.sub(r"\.{2,}", "-", name)
    
    # 5. Supprime les caractères non autorisés (garde a-z, 0-9, ., _, -)
    name = re.sub(r"[^a-z0-9._-]", "", name)
    
    # 6. Évite les tirets multiples (ex: "--" -> "-")
    name = re.sub(r"-+", "-", name)
    
    return name

def process_directory(folder_path: Path):
    if not folder_path.is_dir():
        print(f"Erreur : Le dossier '{folder_path}' n'existe pas.")
        sys.exit(1)

    # Parcourt récursivement tous les fichiers .md
    for file_path in folder_path.rglob("*.md"):
        old_filename = file_path.name
        new_filename = normalize_filename(old_filename)

        if old_filename != new_filename:
            new_file_path = file_path.with_name(new_filename)
            print(f"Renommage : \"{file_path}\" -> \"{new_file_path}\"")
            file_path.rename(new_file_path)

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python normalize_md.py <chemin_du_dossier>")
        sys.exit(1)

    target_folder = Path(sys.argv[1])
    process_directory(target_folder)