for f in *.md
do
	filename=`echo $f | cut -f1 -d'.'`;
	filename="../../static/images/20180627_vietnam/$filename"
	mkdir "$filename" 
done

