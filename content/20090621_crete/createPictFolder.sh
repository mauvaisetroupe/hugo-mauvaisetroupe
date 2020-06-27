for f in *.md
do
	filename=`echo $f | cut -f1 -d'.'`;
	filename="../../static/images/20090621_crete/$filename"
	mkdir "$filename" 
done

