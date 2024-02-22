for f in *.md
do
	filename=`echo $f | cut -f1 -d'.'`;
	filename="../../static/images/20130413_srilanka/$filename"
	mkdir "$filename" 
done

