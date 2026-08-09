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

find "$folder" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) -exec sh -c '

for img do

    width=$(sips -g pixelWidth "$img" | awk "/pixelWidth:/{print \$2}")
    height=$(sips -g pixelHeight "$img" | awk "/pixelHeight:/{print \$2}")

    if [ "$width" -gt 1280 ] || [ "$height" -gt 1280 ]; then
        echo "Resize : $img ($width x $height)"
        sips --resampleHeightWidthMax 1280 "$img" --out "$img"
    fi

done

' sh {} +