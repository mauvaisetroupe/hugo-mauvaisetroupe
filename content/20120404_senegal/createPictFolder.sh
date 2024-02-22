for f in *.md
do
	filename=`echo $f | cut -f1 -d'.'`;
	filename="../../static/images/20120404_senegal/$filename"
	mkdir "$filename" 
done

