posYmenu = 0;
bgcolor='#000000';
bgcolor2='#6699CC';
needcenter =true;
if(!needcenter)
	posXmenu = 0;
else
	{	if (document.all)
		posXmenu = (document.body.clientWidth/2)-(700/2);
	else
		posXmenu = (window.innerWidth/2)-(700/2); 
	}
document.write('<style type="text/css">');
document.write('.popper { POSITION: absolute; VISIBILITY: hidden; z-index:3; }')
document.write('#topgauche { position:absolute; top:'+posYmenu+'px; left:'+posXmenu+'px; z-index:10; }')
document.write('A:hover.ejsmenu {color:#FFFFFF; text-decoration:none;}')
document.write('A.ejsmenu {color:#FFFFFF; text-decoration:none;}')
document.write('</style>')
document.write('<DIV class=popper id=topdeck></DIV>');
/*
SCRIPT EDITE SUR L'EDITEUR JAVACSRIPT
http://www.editeurjavascript.com
*/

/*
LIENS
*/
zlien = new Array;
zlien[0] = new Array;
zlien[1] = new Array;
zlien[2] = new Array;
zlien[3] = new Array;
zlien[4] = new Array;
zlien[5] = new Array;
zlien[6] = new Array;
zlien[7] = new Array;
zlien[0][0] = '<A HREF="can.htm" CLASS=ejsmenu>Canada</A>';
zlien[0][1] = '<A HREF="car.htm" CLASS=ejsmenu>Caraïbes</A>';
zlien[0][2] = '<A HREF="haw.htm" CLASS=ejsmenu>Hawaï</A>';
zlien[0][3] = '<A HREF="islande.htm" CLASS=ejsmenu>Islande</A>';
zlien[0][4] = '<A HREF="mex.htm" CLASS=ejsmenu>Mexique</A>';
zlien[0][5] = '<A HREF="usa.htm" CLASS=ejsmenu>U.S.A</A>';
zlien[0][6] = '<A HREF="bahamas.htm" CLASS=ejsmenu>Bahamas</A>';
zlien[1][0] = '<A HREF="argent.htm" CLASS=ejsmenu>Argentine</A>';
zlien[1][1] = '<A HREF="http://www.cap-horn.com" CLASS=ejsmenu>Chili : Cap-Horn</A>';
zlien[1][2] = '<A HREF="paq.htm" CLASS=ejsmenu>Chili : Ile de Paques</A>';
zlien[1][3] = '<A HREF="malou.htm" CLASS=ejsmenu>Iles Malouines</A>';
zlien[1][4] = '<A HREF="equ.htm" CLASS=ejsmenu>Equateur</A>';
zlien[1][5] = '<A HREF="gal.htm" CLASS=ejsmenu>Galapagos</A>';
zlien[1][6] = '<A HREF="bresil.htm" CLASS=ejsmenu>Brésil</A>';
zlien[1][7] = '<A HREF="colombie.htm" CLASS=ejsmenu>Colombie</A>';
zlien[1][8] = '<A HREF="perou.htm" CLASS=ejsmenu>Pérou</A>';
zlien[1][9] = '<A HREF="uruguay.htm" CLASS=ejsmenu>Uruguay</A>';
zlien[2][0] = '<A HREF="egypte.htm" CLASS=ejsmenu>Egypte</A>';
zlien[2][1] = '<A HREF="afri.htm" CLASS=ejsmenu>Afrique du Sud</A>';
zlien[2][2] = '<A HREF="ken.htm" CLASS=ejsmenu>Kenya</A>';
zlien[2][3] = '<A HREF="tunis.htm" CLASS=ejsmenu>Tunisie</A>';
zlien[2][4] = '<A HREF="maroc.htm" CLASS=ejsmenu>Maroc</A>';
zlien[2][5] = '<A HREF="maurice.htm" CLASS=ejsmenu>Ile Maurice</A>';
zlien[2][6] = '<A HREF="reunion.htm" CLASS=ejsmenu>Ile de la Réunion</A>';
zlien[3][0] = '<A HREF="pen.htm" CLASS=ejsmenu>Péninsule</A>';
zlien[4][0] = '<A HREF="anglo.htm" CLASS=ejsmenu>Iles Anglo-Normandes</A>';
zlien[4][1] = '<A HREF="irlande.htm" CLASS=ejsmenu>Irlande</A>';
zlien[4][2] = '<A HREF="malte.htm" CLASS=ejsmenu>Malte</A>';
zlien[4][3] = '<A HREF="port.htm" CLASS=ejsmenu>Portugal</A>';
zlien[4][4] = '<A HREF="made.htm" CLASS=ejsmenu>Madère</A>';
zlien[4][5] = '<A HREF="ileferoe.htm" CLASS=ejsmenu>Iles féroe</A>';
zlien[4][6] = '<A HREF="finlande.htm" CLASS=ejsmenu>Finlande</A>';
zlien[4][7] = '<A HREF="grece.htm" CLASS=ejsmenu>Grèce</A>';
zlien[4][8] = '<A HREF="islande.htm" CLASS=ejsmenu>Islande</A>';
zlien[4][9] = '<A HREF="norvege.htm" CLASS=ejsmenu>Norvège</A>';
zlien[4][10] = '<A HREF="russie.htm" CLASS=ejsmenu>Russie</A>';
zlien[5][0] = '<A HREF="chine.htm" CLASS=ejsmenu>Chine</A>';
zlien[5][1] = '<A HREF="inde.htm" CLASS=ejsmenu>Inde</A>';
zlien[5][2] = '<A HREF="sril.htm" CLASS=ejsmenu>Srilanka</A>';
zlien[5][3] = '<A HREF="indo.htm" CLASS=ejsmenu>Indonésie</A>';
zlien[5][4] = '<A HREF="abudhabi.htm" CLASS=ejsmenu>Abu Dhabi</A>';
zlien[5][5] = '<A HREF="chypre.htm" CLASS=ejsmenu>Chypre</A>';
zlien[5][6] = '<A HREF="japon.htm" CLASS=ejsmenu>Japon</A>';
zlien[5][7] = '<A HREF="jordanie.htm" CLASS=ejsmenu>Jordanie</A>';
zlien[5][8] = '<A HREF="malaisingap.htm" CLASS=ejsmenu>Malaise - Singapour</A>';
zlien[5][9] = '<A HREF="nepal.htm" CLASS=ejsmenu>Népal</A>';
zlien[5][10] = '<A HREF="philippines.htm" CLASS=ejsmenu>Philippines</A>';
zlien[5][11] = '<A HREF="thailande.htm" CLASS=ejsmenu>Thaïlande</A>';
zlien[5][12] = '<A HREF="turquie.htm" CLASS=ejsmenu>Turquie</A>';
zlien[5][13] = '<A HREF="yemen.htm" CLASS=ejsmenu>Yemen</A>';
zlien[6][0] = '<A HREF="australie.htm" CLASS=ejsmenu>Australie</A>';
zlien[6][1] = '<A HREF="nz.htm" CLASS=ejsmenu>Nouvelle Zélande</A>';
zlien[6][2] = '<A HREF="ilefidji.htm" CLASS=ejsmenu>Iles Fidji</A>';
zlien[6][3] = '<A HREF="polynesie.htm" CLASS=ejsmenu>Polynésie Francaise</A>';
zlien[7][0] = '<A HREF="actu.htm" CLASS=ejsmenu>Actualité du Site</A>';
zlien[7][1] = '<A HREF="/forum/index.php" CLASS=ejsmenu>Forum de Discussions</A>';
zlien[7][2] = '<A HREF="liens.htm" CLASS=ejsmenu>Liens utiles</A>';
zlien[7][3] = '<A HREF="index.htm" CLASS=ejsmenu>Accueil</A>';
var nava = (document.layers);
var dom = (document.getElementById);
var iex = (document.all);
if (nava) { skn = document.topdeck }
else if (dom) { skn = document.getElementById("topdeck").style }
else if (iex) { skn = topdeck.style }
skn.top = posYmenu+24;

function pop(msg,pos)
{
skn.visibility = "hidden";
a=true
skn.left = posXmenu+pos;
var content ="<TABLE BORDER=0 CELLPADDING=0 CELLSPACING=0 BGCOLOR=#000000 WIDTH=150><TR><TD><TABLE WIDTH=100% BORDER=0 CELLPADDING=0 CELLSPACING=1>";
pass = 0
while (pass < msg.length)
	{
	content += "<TR><TD BGCOLOR="+bgcolor+" onMouseOver=\"this.style.background='"+bgcolor2+"'\" onMouseOut=\"this.style.background='"+bgcolor+"'\" HEIGHT=20><FONT SIZE=1 FACE=\"Verdana\">  "+msg[pass]+"</FONT></TD></TR>";
	pass++;
	}
content += "</TABLE></TD></TR></TABLE>";
if (nava)
  {
    skn.document.write(content);
	  skn.document.close();
	  skn.visibility = "visible";
  }
    else if (dom)
  {
	  document.getElementById("topdeck").innerHTML = content;
	  skn.visibility = "visible";
  }
    else if (iex)
  {
	  document.all("topdeck").innerHTML = content;
	  skn.visibility = "visible";
  }
}
function kill()
{
	skn.visibility = "hidden";
}
document.onclick = kill;
document.write('<DIV ID=topgauche><TABLE BORDER=0 CELLPADDING=0 CELLSPACING=0 BGCOLOR=#000000 WIDTH=700><TR><TD><TABLE CELLPADING=0 CELLSPACING=1 BORDER=0 WIDTH=100% HEIGHT=25><TR>')
document.write('<TD WIDTH=100 ALIGN=center BGCOLOR='+bgcolor+' onmouseover="this.style.background=\''+bgcolor2+'\';pop(zlien[0],0)" onmouseout="this.style.background=\''+bgcolor+'\'"><A onclick="return(false)" onmouseover="pop(zlien[0],0)" href=# CLASS=ejsmenu><FONT SIZE=1 FACE="Verdana">Amerique du Nord</FONT></a></TD>')
document.write('<TD WIDTH=100 ALIGN=center BGCOLOR='+bgcolor+' onmouseover="this.style.background=\''+bgcolor2+'\';pop(zlien[1],100)" onmouseout="this.style.background=\''+bgcolor+'\'"><A onclick="return(false)" onmouseover="pop(zlien[1],100)" href=# CLASS=ejsmenu><FONT SIZE=1 FACE="Verdana">Amerique du Sud</FONT></a></TD>')
document.write('<TD WIDTH=100 ALIGN=center BGCOLOR='+bgcolor+' onmouseover="this.style.background=\''+bgcolor2+'\';pop(zlien[2],200)" onmouseout="this.style.background=\''+bgcolor+'\'"><A onclick="return(false)" onmouseover="pop(zlien[2],200)" href=# CLASS=ejsmenu><FONT SIZE=1 FACE="Verdana">Afrique</FONT></a></TD>')
document.write('<TD WIDTH=100 ALIGN=center BGCOLOR='+bgcolor+' onmouseover="this.style.background=\''+bgcolor2+'\';pop(zlien[3],300)" onmouseout="this.style.background=\''+bgcolor+'\'"><A onclick="return(false)" onmouseover="pop(zlien[3],300)" href=# CLASS=ejsmenu><FONT SIZE=1 FACE="Verdana">Antarctique</FONT></a></TD>')
document.write('<TD WIDTH=100 ALIGN=center BGCOLOR='+bgcolor+' onmouseover="this.style.background=\''+bgcolor2+'\';pop(zlien[4],400)" onmouseout="this.style.background=\''+bgcolor+'\'"><A onclick="return(false)" onmouseover="pop(zlien[4],400)" href=# CLASS=ejsmenu><FONT SIZE=1 FACE="Verdana">Europe</FONT></a></TD>')
document.write('<TD WIDTH=100 ALIGN=center BGCOLOR='+bgcolor+' onmouseover="this.style.background=\''+bgcolor2+'\';pop(zlien[5],500)" onmouseout="this.style.background=\''+bgcolor+'\'"><A onclick="return(false)" onmouseover="pop(zlien[5],500)" href=# CLASS=ejsmenu><FONT SIZE=1 FACE="Verdana">Asie</FONT></a></TD>')
document.write('<TD WIDTH=100 ALIGN=center BGCOLOR='+bgcolor+' onmouseover="this.style.background=\''+bgcolor2+'\';pop(zlien[6],600)" onmouseout="this.style.background=\''+bgcolor+'\'"><A onclick="return(false)" onmouseover="pop(zlien[6],600)" href=# CLASS=ejsmenu><FONT SIZE=1 FACE="Verdana">Océanie</FONT></a></TD>')
document.write('<TD WIDTH=100 ALIGN=center BGCOLOR='+bgcolor+' onmouseover="this.style.background=\''+bgcolor2+'\';pop(zlien[7],700)" onmouseout="this.style.background=\''+bgcolor+'\'"><A onclick="return(false)" onmouseover="pop(zlien[7],700)" href=# CLASS=ejsmenu><FONT SIZE=1 FACE="Verdana">Site Web</FONT></a></TD>')
document.write('</TR></TABLE></TD></TR></TABLE></DIV>')


