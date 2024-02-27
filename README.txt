## Whats is ithis repository ?

Git repository for building www.mauvaisetroupe.con website using Hugo

## Tools

On macos, resize jpg images with sips: 
```
find . -type f \( -name "*.jpg" -o -name "*.png" \) -exec sh -c '
    for img; do
        width=$(sips -g pixelWidth "$img" | awk "/pixelWidth:/{print \$2}")
        height=$(sips -g pixelHeight "$img" | awk "/pixelHeight:/{print \$2}")
        if [ "$width" -gt 1280 ] || [ "$height" -gt 1280 ]; then
            sips --resampleHeightWidthMax 1280 "$img" --out "$img"
        fi
    done
' sh {} +
```
(resampleHeightWidthMax increase size if picture is not larger enough)


