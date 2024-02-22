//UDMv3.4.1.1b
//**DO NOT EDIT THIS *****
if (!exclude) { //********
//************************



///////////////////////////////////////////////////////////////////////////
//
//  ULTIMATE DROPDOWN MENU VERSION 3.4.1b by Brothercake
//  http://www.brothercake.com/dropdown/ 
//
//  Link-wrapping routine by Brendan Armstrong
//  KDE modifications by David Joham
//  Opera reload/resize routine by Michael Wallner
//  http://www.wallner-software.com/
//
//  This script featured on Dynamic Drive (http://www.dynamicdrive.com)
//
///////////////////////////////////////////////////////////////////////////



// *** POSITIONING AND STYLES *********************************************


var menuALIGN = "left";		// alignment
var absLEFT = 	20;		// absolute left or right position (if menu is left or right aligned)
var absTOP = 	50; 		// absolute top position

var staticMENU = false;		// static positioning mode (ie5,ie6 and ns4 only)

var stretchMENU = true;		// show empty cells
var showBORDERS = true;		// show empty cell borders

	// base path to .js files for the script (ie: resources/)
var zORDER = 	1000;		// base z-order of nav structure (not ns4)

var mCOLOR = 	"#000066"; //"#000066";	// main nav cell color
var rCOLOR = 	"#003399"; // "#003399";	// main nav cell rollover color
var bSIZE = 	1;		// main nav border size
var bCOLOR = 	"#003399"		// main nav border color
var aLINK = 	"#FFCC00";	// main nav link color
var aHOVER = 	"#FFFF00";		// main nav link hover-color (dual purpose)
var aDEC = 	"none";		// main nav link decoration
var fFONT = 	"arial";	// main nav font face
var fSIZE = 	13;		// main nav font size (pixels)
var fWEIGHT = 	"bold"		// main nav font weight
var tINDENT = 	7;		// main nav text indent (if text is left or right aligned)
var vPADDING = 	7;		// main nav vertical cell padding
var vtOFFSET = 	0;		// main nav vertical text offset (+/- pixels from middle)

var keepLIT =	false;		// keep rollover color when browsing menu
var vOFFSET = 	5;		// shift the submenus vertically
var hOFFSET = 	4;		// shift the submenus horizontally

var smCOLOR = 	"#000066";	// submenu cell color

var srCOLOR = 	"#003399";	// submenu cell rollover color
var sbSIZE = 	1;		// submenu border size
var sbCOLOR = 	"#003399"		// submenu border color
var saLINK = 	"#FFCC00";	// submenu link color
var saHOVER = 	"";		// submenu link hover-color (dual purpose)
var saDEC = 	"none";		// submenu link decoration
var sfFONT = 	"";// submenu font face
var sfSIZE = 	13;		// submenu font size (pixels)
var sfWEIGHT = 	"normal"	// submenu font weight
var stINDENT = 	5;		// submenu text indent (if text is left or right aligned)
var svPADDING = 1;		// submenu vertical cell padding
var svtOFFSET = 0;		// submenu vertical text offset (+/- pixels from middle)

var shSIZE =	2;		// submenu drop shadow size
var shCOLOR =	"cccccc";	// submenu drop shadow color
var shOPACITY = 75;		// submenu drop shadow opacity (not ie4,ns4 or opera)

var keepSubLIT = true;		// keep submenu rollover color when browsing child menu
var chvOFFSET = -12;		// shift the child menus vertically
var chhOFFSET = 7;		// shift the child menus horizontally

var closeTIMER = 330;		// menu closing delay time

var cellCLICK = true;		// links activate on TD click
var aCURSOR = "hand";		// cursor for active links (not ns4 or opera)

var altDISPLAY = "";		// where to display alt text
var allowRESIZE = true;		// allow resize/reload

var redGRID = false;		// show a red grid
var gridWIDTH = 0;		// override grid width
var gridHEIGHT = 0;		// override grid height
var documentWIDTH = 0;		// override document width

var hideSELECT = true;		// auto-hide select boxes when menus open (ie only)
var allowForSCALING = false;	// allow for text scaling in mozilla 5

level = 1;

var pathToRoot = "";
for (var i =0; i < level; i++) {
  pathToRoot += "../"
}

var baseHREF = pathToRoot + "js/menu/";


//** LINKS ***********************************************************


// add main link item ("url","Link name",width,"text-alignment","_target","alt text",top position,left position,"key trigger")
addMainItem("default.htm","<span class='u'>A</span>ccueil",100,"left","","",0,0,"a");



// *** change these to absolutes

// add main link item ("url","Link name",width,"text-alignment","_target","alt text",top position,left position,"key trigger")

addMainItem("","<span class='u'>N</span>ous",100,"left","","",0,0,"n");

	// define submenu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
	defineSubmenuProperties(150,"left","left",-4, 7,"");

	// add submenu link items ("url","Link name","_target","alt text")
	addSubmenuItem(pathToRoot + "nous/index.html","Les grimaceurs","","");
	addSubmenuItem(pathToRoot + "nous/marion.htm","Marion vu par Lionel","","");
	addSubmenuItem(pathToRoot + "nous/lionel.htm","Lionel vu par Marion","","");


addMainItem("","<span class='u'>T</span>our du monde",150,"left","","",0,0,"s");

	defineSubmenuProperties(200,"left","left",-4,7,"");

	addSubmenuItem(pathToRoot + "tdm/index.html","Intro, 2 ans après","","");
	addSubmenuItem(pathToRoot + "tdm/preparations.html","Les préparatifs","","");
	addSubmenuItem(pathToRoot + "tdm/photo.html","ABCDaire photo","","");
	addSubmenuItem(pathToRoot + "tdm/pays/resume.html","Résumé des pays visités","","");

	addSubmenuItem("","&nbsp;&nbsp;- Jordanie","","");

		// define child menu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
		defineChildmenuProperties(200,"left","left",0,-20,"");
		

		// add child menu link items ("url","Link name","_target","alt text")
		addChildmenuItem("http://www.vancouversun.com","Résumé des villes visitées","","");
		addChildmenuItem("http://www.vancouversun.com","&nbsp;&nbsp;- Arrivée a amman","","");
		addChildmenuItem("http://www.vancouversun.com","&nbsp;&nbsp;- La mer rouge","","");
		addChildmenuItem("http://www.vancouversun.com","Les photos","","");
		addChildmenuItem("http://www.vancouversun.com","Le parcours sur la carte","","");
		
	
	addSubmenuItem("","&nbsp;&nbsp;- Inde","","");

		// define child menu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
		defineChildmenuProperties(200,"left","left",0,-20,"");
		

		// add child menu link items ("url","Link name","_target","alt text")
		addChildmenuItem("http://www.vancouversun.com","Résumé de villes visitées","","");
		addChildmenuItem("http://www.vancouversun.com","Les photos","","");
		addChildmenuItem("http://www.vancouversun.com","Le parcours sur la carte","","");

addMainItem("","<span class='u'>A</span>utres pays",120,"left","","",0,0,"t");

	defineSubmenuProperties(120,"left","left",-4,7,"");


	addSubmenuItem("http://www.space.com/","Madagascar","","");
	addSubmenuItem("http://www.slashdot.org","Pérou","","");






//**DO NOT EDIT THIS *****
}//***********************
//************************
