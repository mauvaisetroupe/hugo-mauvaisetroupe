#!/bin/bash

if [ $# -ne 1 ]; then
    echo "Usage: $0 <dossier>"
    exit 1
fi

folder="$1"

if [ ! -d "$folder" ]; then
    echo "Erreur : le dossier n'existe pas : $folder"
    exit 1
fi

find "$folder" -type f -iname "*.jpg" -exec sips \
    --cropToHeightWidth 959 1280 {} \;