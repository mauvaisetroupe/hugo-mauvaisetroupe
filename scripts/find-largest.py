import argparse
import os
from statistics import mean
from PIL import Image

# ============================================================
# GESTION DES ARGUMENTS
# ============================================================
parser = argparse.ArgumentParser(
    description="Analyse les images d'un dossier et de ses sous-dossiers."
)
parser.add_argument(
    "folder",
    type=str,
    help="Chemin du dossier à analyser (obligatoire)"
)
args = parser.parse_args()

target_folder = args.folder

# Vérification que le dossier existe bien
if not os.path.isdir(target_folder):
    print(f"Erreur : Le dossier '{target_folder}' n'existe pas.")
    exit(1)

# ============================================================
# PARCOURS ET ANALYSE DES IMAGES
# ============================================================
images = []
extensions = (".jpg", ".jpeg", ".png", ".heic", ".webp", ".gif")

for root, _, files in os.walk(target_folder):
    for f in files:
        if f.lower().endswith(extensions):
            path = os.path.join(root, f)

            try:
                file_size = os.path.getsize(path)

                with Image.open(path) as img:
                    w, h = img.size
                    pixels = w * h

                    images.append(
                        {
                            "pixels": pixels,
                            "width": w,
                            "height": h,
                            "size": file_size,
                            "path": path,
                            "format": img.format,
                            "mode": img.mode,
                        }
                    )

            except Exception:
                pass


def format_size(size):
    """Convertit une taille en octets en Ko/Mo."""
    if size >= 1024 * 1024:
        return f"{size / (1024 * 1024):.2f} Mo"
    return f"{size / 1024:.1f} Ko"


def print_image(img, rank):
    print(
        f"{rank:2}. "
        f"{format_size(img['size']):>10} | "
        f"{img['pixels']:>10,} px | "
        f"{img['width']}x{img['height']:<5} | "
        f"{img['format']:<5} | "
        f"{img['mode']:<6} | "
        f"{img['size'] / img['pixels']:.3f} octet/px | "
        f"{img['path']}"
    )


# ============================================================
# STATISTIQUES GLOBALES
# ============================================================

if images:
    total_size = sum(img["size"] for img in images)
    total_pixels = sum(img["pixels"] for img in images)

    print("=" * 120)
    print(f"STATISTIQUES GLOBALES : {os.path.abspath(target_folder)}")
    print("=" * 120)

    print(f"Nombre d'images       : {len(images):,}")
    print(f"Poids total           : {format_size(total_size)}")
    print(f"Poids moyen           : {format_size(total_size / len(images))}")
    print(f"Pixels totaux         : {total_pixels:,}")
    print(f"Taille moyenne        : {total_pixels / len(images):,.0f} px")
    print()

    # ============================================================
    # TOP 20 PAR POIDS DE FICHIER
    # ============================================================

    print("=" * 120)
    print("TOP 20 — PLUS GROS FICHIERS")
    print("=" * 120)

    for rank, img in enumerate(
        sorted(images, key=lambda x: x["size"], reverse=True)[:20], start=1
    ):
        print_image(img, rank)

    print()

    # ============================================================
    # TOP 20 PAR NOMBRE DE PIXELS
    # ============================================================

    print("=" * 120)
    print("TOP 20 — PLUS GRANDES IMAGES EN NOMBRE DE PIXELS")
    print("=" * 120)

    for rank, img in enumerate(
        sorted(images, key=lambda x: x["pixels"], reverse=True)[:20], start=1
    ):
        print_image(img, rank)

    print()

    # ============================================================
    # TOP 20 — PLUS GROS RAPPORT OCTETS / PIXEL
    # ============================================================

    print("=" * 120)
    print("TOP 20 — PLUS LOURDES PAR PIXEL")
    print("=" * 120)

    for rank, img in enumerate(
        sorted(images, key=lambda x: x["size"] / x["pixels"], reverse=True)[:20],
        start=1,
    ):
        print_image(img, rank)

else:
    print(f"Aucune image trouvée dans : {target_folder}")