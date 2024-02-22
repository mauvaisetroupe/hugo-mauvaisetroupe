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
var absLEFT = 	190;		// absolute left or right position (if menu is left or right aligned)
var absTOP = 	80; 		// absolute top position

var staticMENU = false;		// static positioning mode (ie5,ie6 and ns4 only)

var stretchMENU = true;		// show empty cells
var showBORDERS = true;		// show empty cell borders

	// base path to .js files for the script (ie: resources/)
var zORDER = 	1000;		// base z-order of nav structure (not ns4)

var mCOLOR = 	""; //"#000066";	// main nav cell color
var rCOLOR = 	""; // "#003399";	// main nav cell rollover color
var bSIZE = 	1;		// main nav border size
var bCOLOR = 	""		// main nav border color
var aLINK = 	"#00CC00";	// main nav link color
var aHOVER = 	"#ccccff";		// main nav link hover-color (dual purpose)
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

var smCOLOR = 	"#000000";	// submenu cell color

var srCOLOR = 	"#222222";	// submenu cell rollover color
var sbSIZE = 	1;		// submenu border size
var sbCOLOR = 	"#222222"		// submenu border color
var saLINK = 	"#00CC00";	// submenu link color
var saHOVER = 	"#ccccff";		// submenu link hover-color (dual purpose)
var saDEC = 	"none";		// submenu link decoration
var sfFONT = 	"";// submenu font face
var sfSIZE = 	13;		// submenu font size (pixels)
var sfWEIGHT = 	"normal"	// submenu font weight
var stINDENT = 	5;		// submenu text indent (if text is left or right aligned)
var svPADDING = 1;		// submenu vertical cell padding
var svtOFFSET = 0;		// submenu vertical text offset (+/- pixels from middle)

var shSIZE =	2;		// submenu drop shadow size
var shCOLOR =	"cccccc";	// submenu drop shadow color
var shOPACITY = 100;		// submenu drop shadow opacity (not ie4,ns4 or opera)

var keepSubLIT = true;		// keep submenu rollover color when browsing child menu
var chvOFFSET = -12;		// shift the child menus vertically
var chhOFFSET = 7;		// shift the child menus horizontally

var closeTIMER = 330;		// menu closing delay time

var cellCLICK = true;		// links activate on TD click
var aCURSOR = "hand";		// cursor for active links (not ns4 or opera)

var altDISPLAY = "";		// where to display alt text
var allowRESIZE = false;		// allow resize/reload

var redGRID = false;		// show a red grid
var gridWIDTH = 0;		// override grid width
var gridHEIGHT = 0;		// override grid height
var documentWIDTH = 0;		// override document width

var hideSELECT = false;		// auto-hide select boxes when menus open (ie only)
var allowForSCALING = false;	// allow for text scaling in mozilla 5


var pathToRoot = "";
for (var i =0; i < level; i++) {
  pathToRoot = pathToRoot + "../";
}


var baseHREF = pathToRoot + "js/menu/";





//** LINKS ***********************************************************


// add main link item ("url","Link name",width,"text-alignment","_target","alt text",top position,left position,"key trigger")
addMainItem(pathToRoot + "portal.html","<span class='u'>A</span>ccueil",80,"left","","",0,0,"a");



// *** change these to absolutes

// add main link item ("url","Link name",width,"text-alignment","_target","alt text",top position,left position,"key trigger")

addMainItem("","<span class='u'>N</span>ous",60,"left","","",0,0,"n");

	// define submenu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
	defineSubmenuProperties(150,"left","left",-4, 7,"");

	// add submenu link items ("url","Link name","_target","alt text")
	addSubmenuItem(pathToRoot + "nous/index.html","Les grimaceurs","","");
	addSubmenuItem(pathToRoot + "nous/potes.html","A la maison","","");
	addSubmenuItem(pathToRoot + "nous/marion.html","Marion vu par Lionel","","");
	addSubmenuItem(pathToRoot + "nous/lionel.html","Lionel vu par Marion","","");
	addSubmenuItem(pathToRoot + "livredor/contentLivredor.php3","Livre d'Or","","");
	addSubmenuItem(pathToRoot + "mailing/default.htm","Mailing list","","");	

addMainItem("","<span class='u'>T</span>our du monde",120,"left","","",0,0,"s");

	defineSubmenuProperties(200,"left","left",-4,7,"");

	addSubmenuItem(pathToRoot + "tour.du.monde/index.html","Deux ans après","","");		
	
	
	addSubmenuItem("","Infos pratiques","","");
		// define child menu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
		defineChildmenuProperties(250,"left","left",-10,-100,"");
		

		// add child menu link items ("url","Link name","_target","alt text")
		addChildmenuItem(pathToRoot + "tour.du.monde/preparations.html","Les préparatifs et conseils","","");
		addChildmenuItem(pathToRoot + "tour.du.monde/tour-du-monde.html","Le site et les photos","","");
		addChildmenuItem(pathToRoot + "tour.du.monde/trajet.html","Les trajets (distances et coût)","","");
		addChildmenuItem(pathToRoot + "tour.du.monde/hotels.html","Les hôtels","","");
		addChildmenuItem(pathToRoot + "tour.du.monde/repas.html","Les repas","","");
		
	
	addSubmenuItem(pathToRoot + "tour.du.monde/photo.html","ABCDaire photo","","");
	addSubmenuItem(pathToRoot + "tour.du.monde/friends.html","Les rencontres","","");
	addSubmenuItem(pathToRoot + "tour.du.monde/pays/resume.html","Parcours et résumé","","");

	addSubmenuItem(pathToRoot +  "tour.du.monde/pays/jordanie20010205/carnet.de.voyage.html","&nbsp;&nbsp;- Jordanie","","");
		// define child menu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
		defineChildmenuProperties(250,"left","left",-51,-100,"");
		

		// add child menu link items ("url","Link name","_target","alt text")
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/jordanie20010205/itineraire.html","Le parcours sur la carte","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/jordanie20010205/photo1.html","Les photos","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/jordanie20010205/infos-pratiques.html","Infos pratiques","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/jordanie20010205/carnet.de.voyage.html","Résumé des villes visitées","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/jordanie20010205/l-arrivee-a-amman.html","&nbsp;&nbsp;- L'arrivée à Amman","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/jordanie20010205/la-visite-de-jerash.html","&nbsp;&nbsp;- La visite de Jerash","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/jordanie20010205/du-cote-de-la-mer-morte.html","&nbsp;&nbsp;- Du côté de la mer morte","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/jordanie20010205/aquaba.html","&nbsp;&nbsp;- Aquaba","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/jordanie20010205/plongees-en-mer-rouge.html","&nbsp;&nbsp;- Plongées en mer Rouge","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/jordanie20010205/le-wadi-rum.html","&nbsp;&nbsp;- Le Wadi Rum","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/jordanie20010205/petra.html","&nbsp;&nbsp;- Petra","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/jordanie20010205/retour-vers-amman.html","&nbsp;&nbsp;- Retour vers Amman","","");
		
	addSubmenuItem(pathToRoot +  "tour.du.monde/pays/inde20010218/carnet.de.voyage.html","&nbsp;&nbsp;- Inde","","");
		// define child menu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
		defineChildmenuProperties(250,"left","left",-123,-100,"");
		

		// add child menu link items ("url","Link name","_target","alt text")
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/inde20010218/itineraire.html","Le parcours sur la carte","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/inde20010218/photo1.html","Les photos","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/inde20010218/infos-pratiques.html","Infos pratiques","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/inde20010218/carnet.de.voyage.html","Résumé des villes visitées","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/inde20010218/arrivee-a-delhi.html","&nbsp;&nbsp;- Arrivée à Delhi","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/inde20010218/agra-et-le-taj-mahal.html","&nbsp;&nbsp;- Agra et le Taj Mahal","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/inde20010218/premier-jour-a-jaipur.html","&nbsp;&nbsp;- Premier jour à Jaïpur","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/inde20010218/pushkar-au-pays-des-baba-cools.html","&nbsp;&nbsp;- Pushkar, au pays des baba cools","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/inde20010218/udaipur.html","&nbsp;&nbsp;- Udaïpur","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/inde20010218/en-route-pour-goa.html","&nbsp;&nbsp;- En route pour Goa","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/inde20010218/vacances-a-goa.html","&nbsp;&nbsp;- Vacances à Goa","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/inde20010218/un-bien-long-trajet-en-train.html","&nbsp;&nbsp;- Un bien long trajet en train","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/inde20010218/cochin.html","&nbsp;&nbsp;- Cochin","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/inde20010218/allepey--quillon-les-backwaters.html","&nbsp;&nbsp;- Allepey - Quillon, Les backwaters","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/inde20010218/varkala.html","&nbsp;&nbsp;- Varkala","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/inde20010218/kovalam.html","&nbsp;&nbsp;- Kovalam","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/inde20010218/kodaikanal-un-peu-de-montagne.html","&nbsp;&nbsp;- Kodaikanal... un peu de montagne","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/inde20010218/madurai.html","&nbsp;&nbsp;- Madurai","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/inde20010218/pondichery-chery.html","&nbsp;&nbsp;- Pondichery ... chery","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/inde20010218/mahabalipuram.html","&nbsp;&nbsp;- Mahabalipuram","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/inde20010218/tirukalikundram.html","&nbsp;&nbsp;- Tirukalikundram","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/inde20010218/le-train-pour-puri.html","&nbsp;&nbsp;- Le train pour Puri","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/inde20010218/calcutta.html","&nbsp;&nbsp;- Calcutta","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/inde20010218/varanasi.html","&nbsp;&nbsp;- Varanasi","","");
		
	addSubmenuItem(pathToRoot +  "tour.du.monde/pays/nepal20010411/carnet.de.voyage.html","&nbsp;&nbsp;- Népal","","");
		// define child menu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
		defineChildmenuProperties(250,"left","left",-39,-100,"");
		

		// add child menu link items ("url","Link name","_target","alt text")
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/nepal20010411/itineraire.html","Le parcours sur la carte","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/nepal20010411/photo1.html","Les photos","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/nepal20010411/infos-pratiques.html","Infos pratiques","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/nepal20010411/carnet.de.voyage.html","Résumé des villes visitées","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/nepal20010411/pokhara.html","&nbsp;&nbsp;- Pokhara","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/nepal20010411/kathmandou.html","&nbsp;&nbsp;- Kathmandou","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/nepal20010411/swayambunath.html","&nbsp;&nbsp;- Swayambunath","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/nepal20010411/patan.html","&nbsp;&nbsp;- Patan","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/nepal20010411/bhaktapur.html","&nbsp;&nbsp;- Bhaktapur","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/nepal20010411/la-jungle.html","&nbsp;&nbsp;- La jungle","","");
		
	addSubmenuItem(pathToRoot +  "tour.du.monde/pays/inde20010428/carnet.de.voyage.html","&nbsp;&nbsp;- Inde","","");
		// define child menu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
		defineChildmenuProperties(250,"left","left",-15,-100,"");
		

		// add child menu link items ("url","Link name","_target","alt text")
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/inde20010428/itineraire.html","Le parcours sur la carte","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/inde20010428/photo1.html","Les photos","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/inde20010428/infos-pratiques.html","Infos pratiques","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/inde20010428/carnet.de.voyage.html","Résumé des villes visitées","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/inde20010428/daarjeeling.html","&nbsp;&nbsp;- Daarjeeling","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/inde20010428/au-revoir-calcutta.html","&nbsp;&nbsp;- Au revoir Calcutta","","");
		
	addSubmenuItem(pathToRoot +  "tour.du.monde/pays/thailande20010505/carnet.de.voyage.html","&nbsp;&nbsp;- Thailande","","");
		// define child menu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
		defineChildmenuProperties(250,"left","left",-75,-100,"");
		

		// add child menu link items ("url","Link name","_target","alt text")
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/thailande20010505/itineraire.html","Le parcours sur la carte","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/thailande20010505/photo1.html","Les photos","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/thailande20010505/infos-pratiques.html","Infos pratiques","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/thailande20010505/carnet.de.voyage.html","Résumé des villes visitées","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/thailande20010505/bangkok-et-pak-chong.html","&nbsp;&nbsp;- Bangkok et Pak Chong","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/thailande20010505/metro-bateau-wat-pho.html","&nbsp;&nbsp;- Métro, bâteau... Wat Pho","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/thailande20010505/le-pont-de-la-riviere-kwai.html","&nbsp;&nbsp;- Le pont  de la rivière Kwai","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/thailande20010505/nakhon-pathom.html","&nbsp;&nbsp;- Nakhon Pathom","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/thailande20010505/ayutthaya.html","&nbsp;&nbsp;- Ayutthaya","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/thailande20010505/depart-pour-chiang-mai.html","&nbsp;&nbsp;- Départ pour Chiang Mai","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/thailande20010505/pai.html","&nbsp;&nbsp;- Paï","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/thailande20010505/retour-a-chiang-mai.html","&nbsp;&nbsp;- Retour à Chiang Maï","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/thailande20010505/sukhotai.html","&nbsp;&nbsp;- Sukhotaï","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/thailande20010505/chiang-khan.html","&nbsp;&nbsp;- Chiang Khan","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/thailande20010505/khon-kaen.html","&nbsp;&nbsp;- Khon Kaen","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/thailande20010505/khon-chiam.html","&nbsp;&nbsp;- Khon Chiam","","");
		
	addSubmenuItem(pathToRoot +  "tour.du.monde/pays/laos20010602/carnet.de.voyage.html","&nbsp;&nbsp;- Laos","","");
		// define child menu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
		defineChildmenuProperties(250,"left","left",-51,-100,"");
		

		// add child menu link items ("url","Link name","_target","alt text")
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/laos20010602/itineraire.html","Le parcours sur la carte","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/laos20010602/photo1.html","Les photos","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/laos20010602/infos-pratiques.html","Infos pratiques","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/laos20010602/carnet.de.voyage.html","Résumé des villes visitées","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/laos20010602/pakse.html","&nbsp;&nbsp;- Paksé","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/laos20010602/si-phan-don.html","&nbsp;&nbsp;- Si Phan Don","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/laos20010602/paksong.html","&nbsp;&nbsp;- Paksong","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/laos20010602/savannakhet.html","&nbsp;&nbsp;- Savannakhet","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/laos20010602/vientiane.html","&nbsp;&nbsp;- Vientiane","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/laos20010602/vang-vieng.html","&nbsp;&nbsp;- Vang Vieng","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/laos20010602/luang-prabang.html","&nbsp;&nbsp;- Luang Prabang","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/laos20010602/retour-a-vientiane.html","&nbsp;&nbsp;- Retour à Vientiane","","");
		
	addSubmenuItem(pathToRoot +  "tour.du.monde/pays/vietnam20010616/carnet.de.voyage.html","&nbsp;&nbsp;- Vietnam","","");
		// define child menu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
		defineChildmenuProperties(250,"left","left",-99,-100,"");
		

		// add child menu link items ("url","Link name","_target","alt text")
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/vietnam20010616/itineraire.html","Le parcours sur la carte","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/vietnam20010616/photo1.html","Les photos","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/vietnam20010616/infos-pratiques.html","Infos pratiques","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/vietnam20010616/carnet.de.voyage.html","Résumé des villes visitées","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/vietnam20010616/hanoi.html","&nbsp;&nbsp;- Hanoï","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/vietnam20010616/reflexions-en-bus.html","&nbsp;&nbsp;- Réflexions en bus","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/vietnam20010616/sapa.html","&nbsp;&nbsp;- Sapa","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/vietnam20010616/culture-a-hanoi.html","&nbsp;&nbsp;- Culture à Hanoï","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/vietnam20010616/tours-organises-autour-d-hanoi.html","&nbsp;&nbsp;- Tours organisés autour d'Hanoï","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/vietnam20010616/le-lac-d-hanoi.html","&nbsp;&nbsp;- Le lac d'Hanoï","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/vietnam20010616/la-baie-d-along.html","&nbsp;&nbsp;- La baie d'Along","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/vietnam20010616/adieu-hanoi.html","&nbsp;&nbsp;- Adieu Hanoï","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/vietnam20010616/hue.html","&nbsp;&nbsp;- Hué","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/vietnam20010616/hoi-an.html","&nbsp;&nbsp;- Hoï An","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/vietnam20010616/my-son.html","&nbsp;&nbsp;- My Son","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/vietnam20010616/nha-trang.html","&nbsp;&nbsp;- Nha Trang","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/vietnam20010616/saigon.html","&nbsp;&nbsp;- Saigon","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/vietnam20010616/bus-pour-can-tho.html","&nbsp;&nbsp;- Bus pour Can Tho","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/vietnam20010616/can-tho.html","&nbsp;&nbsp;- Can Tho","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/vietnam20010616/retour-a-saigon.html","&nbsp;&nbsp;- Retour à Saïgon","","");
		
	addSubmenuItem(pathToRoot +  "tour.du.monde/pays/cambodge20010715/carnet.de.voyage.html","&nbsp;&nbsp;- Cambodge","","");
		// define child menu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
		defineChildmenuProperties(250,"left","left",-51,-100,"");
		

		// add child menu link items ("url","Link name","_target","alt text")
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/cambodge20010715/itineraire.html","Le parcours sur la carte","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/cambodge20010715/photo1.html","Les photos","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/cambodge20010715/infos-pratiques.html","Infos pratiques","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/cambodge20010715/carnet.de.voyage.html","Résumé des villes visitées","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/cambodge20010715/en-route-pour-phnom-penh.html","&nbsp;&nbsp;- En route pour Phnom Penh","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/cambodge20010715/phnom-penh--premier-contact.html","&nbsp;&nbsp;- Phnom Penh - premier contact","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/cambodge20010715/phnom-penh.html","&nbsp;&nbsp;- Phnom Penh","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/cambodge20010715/en-route-pour-siem-reap.html","&nbsp;&nbsp;- En route pour Siem Reap","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/cambodge20010715/autour-de-siem-reap.html","&nbsp;&nbsp;- Autour de Siem Reap","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/cambodge20010715/angkor-et-encore.html","&nbsp;&nbsp;- Angkor et encore","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/cambodge20010715/battambang.html","&nbsp;&nbsp;- Battambang","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/cambodge20010715/vers-la-frontiere.html","&nbsp;&nbsp;- Vers la frontière","","");
		
	addSubmenuItem(pathToRoot +  "tour.du.monde/pays/thailande20010724/carnet.de.voyage.html","&nbsp;&nbsp;- Thailande","","");
		// define child menu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
		defineChildmenuProperties(250,"left","left",-9,-100,"");
		

		// add child menu link items ("url","Link name","_target","alt text")
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/thailande20010724/itineraire.html","Le parcours sur la carte","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/thailande20010724/photo1.html","Les photos","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/thailande20010724/infos-pratiques.html","Infos pratiques","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/thailande20010724/carnet.de.voyage.html","Résumé des villes visitées","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/thailande20010724/un-peu-de-repos.html","&nbsp;&nbsp;- Un peu de repos","","");
		
	addSubmenuItem(pathToRoot +  "tour.du.monde/pays/japon20010801/carnet.de.voyage.html","&nbsp;&nbsp;- Japon","","");
		// define child menu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
		defineChildmenuProperties(250,"left","left",-21,-100,"");
		

		// add child menu link items ("url","Link name","_target","alt text")
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/japon20010801/itineraire.html","Le parcours sur la carte","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/japon20010801/photo1.html","Les photos","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/japon20010801/infos-pratiques.html","Infos pratiques","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/japon20010801/carnet.de.voyage.html","Résumé des villes visitées","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/japon20010801/arrivee-a-tokyo.html","&nbsp;&nbsp;- Arrivée à Tokyo","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/japon20010801/premier-jour-a-tokyo.html","&nbsp;&nbsp;- Premier jour à Tokyo","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/japon20010801/le-quartier-des-jeunes.html","&nbsp;&nbsp;- Le quartier des jeunes","","");
		
	addSubmenuItem(pathToRoot +  "tour.du.monde/pays/chili20010804/carnet.de.voyage.html","&nbsp;&nbsp;- Chili","","");
		// define child menu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
		defineChildmenuProperties(250,"left","left",-75,-100,"");
		

		// add child menu link items ("url","Link name","_target","alt text")
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/chili20010804/itineraire.html","Le parcours sur la carte","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/chili20010804/photo1.html","Les photos","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/chili20010804/infos-pratiques.html","Infos pratiques","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/chili20010804/carnet.de.voyage.html","Résumé des villes visitées","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/chili20010804/arrivee-a-santiago.html","&nbsp;&nbsp;- Arrivée à Santiago","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/chili20010804/santiago-les-colines.html","&nbsp;&nbsp;- Santiago les colines","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/chili20010804/villarica.html","&nbsp;&nbsp;- Villarica","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/chili20010804/valdivia.html","&nbsp;&nbsp;- Valdivia","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/chili20010804/chiloe.html","&nbsp;&nbsp;- Chiloé","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/chili20010804/le-parc-national-de-cucao.html","&nbsp;&nbsp;- Le parc national de Cucao","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/chili20010804/la-croisiere-s-amuse.html","&nbsp;&nbsp;- La croisière s'amuse","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/chili20010804/la-patagonie-puerto-natales.html","&nbsp;&nbsp;- La Patagonie-Puerto Natales","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/chili20010804/torres-del-paine.html","&nbsp;&nbsp;- Torres Del Paine","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/chili20010804/le-fort-de-punta-arenas.html","&nbsp;&nbsp;- Le fort de Punta Arenas","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/chili20010804/terre-de-feu.html","&nbsp;&nbsp;- Terre de Feu","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/chili20010804/punta-arenas.html","&nbsp;&nbsp;- Punta Arenas","","");
		
	addSubmenuItem(pathToRoot +  "tour.du.monde/pays/argentine20010902/carnet.de.voyage.html","&nbsp;&nbsp;- Argentine","","");
		// define child menu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
		defineChildmenuProperties(250,"left","left",-39,-100,"");
		

		// add child menu link items ("url","Link name","_target","alt text")
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/argentine20010902/itineraire.html","Le parcours sur la carte","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/argentine20010902/photo1.html","Les photos","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/argentine20010902/infos-pratiques.html","Infos pratiques","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/argentine20010902/carnet.de.voyage.html","Résumé des villes visitées","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/argentine20010902/le-perito-moreno.html","&nbsp;&nbsp;- Le Perito Moreno","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/argentine20010902/les-baleines.html","&nbsp;&nbsp;- Les baleines","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/argentine20010902/buenos-aires.html","&nbsp;&nbsp;- Buenos Aires","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/argentine20010902/iguazu.html","&nbsp;&nbsp;- Iguazu","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/argentine20010902/salta.html","&nbsp;&nbsp;- Salta","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/argentine20010902/tilcara.html","&nbsp;&nbsp;- Tilcara","","");
		
	addSubmenuItem(pathToRoot +  "tour.du.monde/pays/bolivie20010921/carnet.de.voyage.html","&nbsp;&nbsp;- Bolivie","","");
		// define child menu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
		defineChildmenuProperties(250,"left","left",-93,-100,"");
		

		// add child menu link items ("url","Link name","_target","alt text")
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/bolivie20010921/itineraire.html","Le parcours sur la carte","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/bolivie20010921/photo1.html","Les photos","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/bolivie20010921/infos-pratiques.html","Infos pratiques","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/bolivie20010921/carnet.de.voyage.html","Résumé des villes visitées","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/bolivie20010921/en-route.html","&nbsp;&nbsp;- En route...","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/bolivie20010921/sucre.html","&nbsp;&nbsp;- Sucre","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/bolivie20010921/potosi.html","&nbsp;&nbsp;- Potosi","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/bolivie20010921/uyuni.html","&nbsp;&nbsp;- Uyuni","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/bolivie20010921/les-lagunes.html","&nbsp;&nbsp;- Les lagunes","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/bolivie20010921/sud-lipez.html","&nbsp;&nbsp;- Sud Lipez","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/bolivie20010921/arrivee-a-la-paz.html","&nbsp;&nbsp;- Arrivée à La Paz","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/bolivie20010921/coroico.html","&nbsp;&nbsp;- Coroico","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/bolivie20010921/retour-a-la-paz.html","&nbsp;&nbsp;- Retour à La Paz","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/bolivie20010921/tiahuanaco-et-titicaca.html","&nbsp;&nbsp;- Tiahuanaco et Titicaca","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/bolivie20010921/cochabamba.html","&nbsp;&nbsp;- Cochabamba","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/bolivie20010921/vers-l-amazonie.html","&nbsp;&nbsp;- Vers l'Amazonie...","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/bolivie20010921/rurrenabaque.html","&nbsp;&nbsp;- Rurrenabaque","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/bolivie20010921/pirogue-en-amazonie.html","&nbsp;&nbsp;- Pirogue en Amazonie","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/bolivie20010921/guaranamerin.html","&nbsp;&nbsp;- Guaranamerin","","");
		
	addSubmenuItem(pathToRoot +  "tour.du.monde/pays/bresil20011027/carnet.de.voyage.html","&nbsp;&nbsp;- Brésil","","");
		// define child menu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
		defineChildmenuProperties(250,"left","left",-27,-100,"");
		

		// add child menu link items ("url","Link name","_target","alt text")
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/bresil20011027/itineraire.html","Le parcours sur la carte","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/bresil20011027/photo1.html","Les photos","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/bresil20011027/infos-pratiques.html","Infos pratiques","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/bresil20011027/carnet.de.voyage.html","Résumé des villes visitées","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/bresil20011027/porto-velho.html","&nbsp;&nbsp;- Porto Velho","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/bresil20011027/bateau-pour-manaus.html","&nbsp;&nbsp;- Bateau pour Manaus","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/bresil20011027/manaus.html","&nbsp;&nbsp;- Manaus","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/bresil20011027/rio-de-janeiro.html","&nbsp;&nbsp;- Rio de Janeiro","","");
		
	addSubmenuItem(pathToRoot +  "tour.du.monde/pays/mexique20011107/carnet.de.voyage.html","&nbsp;&nbsp;- Mexique","","");
		// define child menu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
		defineChildmenuProperties(250,"left","left",-51,-100,"");
		

		// add child menu link items ("url","Link name","_target","alt text")
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/mexique20011107/itineraire.html","Le parcours sur la carte","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/mexique20011107/photo1.html","Les photos","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/mexique20011107/infos-pratiques.html","Infos pratiques","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/mexique20011107/carnet.de.voyage.html","Résumé des villes visitées","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/mexique20011107/mexico.html","&nbsp;&nbsp;- Mexico","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/mexique20011107/uxmal.html","&nbsp;&nbsp;- Uxmal","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/mexique20011107/chichen-itza.html","&nbsp;&nbsp;- Chichen Itza","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/mexique20011107/isla-mujeres.html","&nbsp;&nbsp;- Isla Mujeres","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/mexique20011107/palenque.html","&nbsp;&nbsp;- Palenque","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/mexique20011107/san-cristobal-de-las-casas.html","&nbsp;&nbsp;- San Cristobal de las Casas","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/mexique20011107/san-juan-de-chamula.html","&nbsp;&nbsp;- San Juan de Chamula","","");
		addChildmenuItem(pathToRoot +  "tour.du.monde/pays/mexique20011107/zipolite.html","&nbsp;&nbsp;- Zipolite","","");
		

addMainItem("","<span class='u'>A</span>utres voyages",120,"left","","",0,0,"t");

	defineSubmenuProperties(120,"left","left",-4,7,"");


	addSubmenuItem(pathToRoot +  "voyages/pays/indonesie/index.htm","Indonésie","","");
	addSubmenuItem(pathToRoot +  "voyages/pays/madagascar/index.htm","Madagascar","","");
	addSubmenuItem(pathToRoot +  "voyages/pays/tchequie/index.htm","Prague","","");
	addSubmenuItem(pathToRoot +  "voyages/pays/cuba20050322/carnet.de.voyage.html","Cuba","","");

addMainItem(pathToRoot +  "liens/index.html","<span class='u'>L</span>iens",120,"left","","",0,0,"l");


addMainItem(pathToRoot +  "blog/portal.html.php","<span class='u'>N</span>ews",120,"left","","",0,0,"l");



//**DO NOT EDIT THIS *****
}//***********************
//************************






