import os
import shutil
import exifread
from datetime import datetime, timedelta

# Utiliser le répertoire courant comme chemin des photos
photos_path = os.getcwd()
# Dériver base_path en supprimant tout jusqu'à 'static' inclus
base_index = photos_path.find('/static/')   # +1 pour garder 'static' dans le résultat
if base_index > 0:
    base_path = photos_path[:base_index] + '/static/'
else:
    raise ValueError("Le chemin ne contient pas 'static'.")

# Seuil de temps pour considérer un nouvel événement (en minutes)
event_threshold = 30

def read_photo_datetime(photo_path):
    with open(photo_path, 'rb') as f:
        tags = exifread.process_file(f)
        datetime_str = tags.get('EXIF DateTimeOriginal')
        if datetime_str:
            return datetime.strptime(str(datetime_str), '%Y:%m:%d %H:%M:%S')
    return None

def generate_output_line(event_dir):
    # Extraire la partie spécifique du chemin pour la sortie
    specific_path = event_dir.replace(base_path, '')
    return f'{{{{< picture-grid folder={specific_path} >}}}}'

def main():
    photos = [os.path.join(photos_path, f) for f in os.listdir(photos_path) if f.lower().endswith(('jpg', 'jpeg', 'png'))]
    photos.sort(key=lambda x: read_photo_datetime(x) or datetime.min)
    
    event_start = None
    last_photo_datetime = None

    for photo in photos:
        photo_datetime = read_photo_datetime(photo)
        if photo_datetime is None:
            continue
        
        if last_photo_datetime is None or photo_datetime - last_photo_datetime > timedelta(minutes=event_threshold):

            event_start = photo_datetime
            # S'assurer que le répertoire de l'événement est sous 'static'
            event_dir = os.path.join(photos_path,  event_start.strftime('%Y-%m-%d_%H-%M-%S'))
            if not os.path.exists(event_dir):
                os.makedirs(event_dir)
                # Générer et afficher la ligne de sortie pour le nouveau dossier
                output_line = generate_output_line(event_dir)
                print(output_line)

        last_photo_datetime = photo_datetime
        shutil.move(photo, event_dir)

if __name__ == '__main__':
    main()
