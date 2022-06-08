var brpjs = 1;
var muzika;
//za pustanje muzike
function PlayKTTP(){
	switch(brpjs){
		case 6: clearInterval(vrijeme);KrajKTTP();break;
		default: var n = Math.floor(Math.random() * 45) + 1;muzika = new Audio("Izvori/KTTP/" + n + ".mp3");muzika.play();brpjs++;document.getElementById("pjs").innerHTML = n;document.getElementById("tajmer").value = 45;break;
	}
}
//tajmer
function TajmerKTTP(){
	var tajmer = document.getElementById("tajmer");
	if(tajmer.value *1 == 0){
		ProvjeriKTTP();
		PlayKTTP();
	}
	tajmer.value -= 1;
}
//provjeravam
function ProvjeriKTTP(){
	var a = document.getElementById("pjs").innerHTML * 1;
	var naziv = document.getElementById("naziv").value, naziv_g;
	var izvodjac = document.getElementById("izvodjac").value, izvodjac_g;
	switch(a){
		case 1: naziv_g = "ZELENE SU BILE OCI TE";izvodjac_g = "PLAVI ORKESTAR";break;
		case 2: naziv_g = "SUADA";izvodjac_g = "PLAVI ORKESTAR";break;
		case 3: naziv_g = "PITA";izvodjac_g = "PLAVI ORKESTAR";break;
		case 4: naziv_g = "JOVANKA";izvodjac_g = "PLAVI ORKESTAR";break;
		case 5: naziv_g = "BISER";izvodjac_g = "PLAVI ORKESTAR";break;
		case 6: naziv_g = "LICNA KARTA";izvodjac_g = "ACA LUKAS";break;
		case 7: naziv_g = "BAJPAS";izvodjac_g = "ACA LUKAS";break;
		case 8: naziv_g = "SUNCOKRETI";izvodjac_g = "ACA LUKAS";break;
		case 9: naziv_g = "PJEVAM DANJU PJEVAM NOCU";izvodjac_g = "ACA LUKAS";break;
		case 10: naziv_g = "RECI";izvodjac_g = "ACA LUKAS";break;
		case 11: naziv_g = "MILE VOLI DISKO";izvodjac_g = "LEPA BRENA";break;
		case 12: naziv_g = "JOJ MIKI";izvodjac_g = "LEPA BRENA";break;
		case 13: naziv_g = "UDRI MUJO";izvodjac_g = "LEPA BRENA";break;
		case 14: naziv_g = "LUDA ZA TOBOM";izvodjac_g = "LEPA BRENA";break;
		case 15: naziv_g = "HAJDE DA SE VOLIMO";izvodjac_g = "LEPA BRENA";break;
		case 16: naziv_g = "LUDACA";izvodjac_g = "JELENA KARLEUSA";break;
		case 17: naziv_g = "KAZINO";izvodjac_g = "JELENA KARLEUSA";break;
		case 18: naziv_g = "JELENA";izvodjac_g = "JELENA KARLEUSA";break;
		case 19: naziv_g = "NIJE ONA NEGO JA";izvodjac_g = "JELENA KARLEUSA";break;
		case 20: naziv_g = "DEVOJKE VOLE DIJAMANTE";izvodjac_g = "JELENA KARLEUSA";break;
		case 21: naziv_g = "SODOMA GOMORA";izvodjac_g = "JELENA KARLEUSA";break;
		case 22: naziv_g = "MUSKARAC KOJI MRZI ZENE";izvodjac_g = "JELENA KARLEUSA";break;
		case 23: naziv_g = "BAS JE DOBRO BITI JA";izvodjac_g = "JELENA KARLEUSA";break;
		case 24: naziv_g = "INSOMNIJA";izvodjac_g = "JELENA KARLEUSA";break;
		case 25: naziv_g = "TIHI UBICA";izvodjac_g = "JELENA KARLEUSA";break;
		case 26: naziv_g = "UPRAVO OSTAVLJENA";izvodjac_g = "JELENA KARLEUSA";break;
		case 27: naziv_g = "PLAVA SEHEREZADA";izvodjac_g = "JELENA KARLEUSA";break;
		case 28: naziv_g = "KARANTENA";izvodjac_g = "JELENA ROZGA";break;
		case 29: naziv_g = "OKUS MENTOLA";izvodjac_g = "JELENA ROZGA";break;
		case 30: naziv_g = "BIZUTERIJA";izvodjac_g = "JELENA ROZGA";break;
		case 31: naziv_g = "MINUS I PLUS";izvodjac_g = "JELENA ROZGA";break;
		case 32: naziv_g = "SOLO IGRACICA";izvodjac_g = "JELENA ROZGA";break;
		case 33: naziv_g = "LIJEPE ZENE";izvodjac_g = "SELMA BAJRAMI";break;
		case 34: naziv_g = "KO TI TO BAJE";izvodjac_g = "JELENA KARLEUSA";break;
		case 35: naziv_g = "ZENA OD SULTANA";izvodjac_g = "TIJANA EM";break;
		case 36: naziv_g = "VEO SRECE";izvodjac_g = "DJOGANI";break;
		case 37: naziv_g = "GLJIVA LUDARA";izvodjac_g = "DJOGANI";break;
		case 38: naziv_g = "HLADNO HLADNO";izvodjac_g = "DJOGANI";break;
		case 39: naziv_g = "HEJ TUGO MOJA";izvodjac_g = "DJOGANI";break;
		case 40: naziv_g = "PARA NA PARU";izvodjac_g = "DJOGANI";break;
		case 41: naziv_g = "GRAD BEZ LJUDI";izvodjac_g = "SEVERINA";break;
		case 42: naziv_g = "ALKATRAZ";izvodjac_g = "SEVERINA";break;
		case 43: naziv_g = "UNO MOMENTO";izvodjac_g = "SEVERINA";break;
		case 44: naziv_g = "TARAPANA";izvodjac_g = "SEVERINA";break;
		case 45: naziv_g = "UZBUNA";izvodjac_g = "SEVERINA";break;
		default:break;
	}
	var poeni = document.getElementById("kasakttp").value * 1;var g1 = 0,g2 = 0,g3 = 0;
	var msg = "Osvojeni poeni:\n\nNaziv: ";
	var pts = 0;
	if(naziv == naziv_g){
		poeni += 2;
		g1+=2;
		pts += 2;
	}
	else g1 = naziv_g;
	msg += g1 + "\nIzvodjac: ";
	if(izvodjac_g == izvodjac){
		poeni += 5;
		g2+=5;
		pts += 5;
	}
	else g2 = izvodjac_g;
	msg += g2 + "\nBonus: ";
	if(naziv == naziv_g && izvodjac == izvodjac_g){
		poeni += 3;
		g3+=3;
		pts += 3;
	}
	msg += g3 + "\nUkupno: " + pts;
	if(naziv == naziv_g || izvodjac == izvodjac_g){
		PustiZvuk("tacno");
	}else{PustiZvuk("netacno");}
	document.getElementById("kasakttp").value = poeni; 
	muzika.pause();
	alert(msg);
	document.getElementById("naziv").value = document.getElementById("izvodjac").value = "";
}
//Kraj
function KrajKTTP(){
	muzika_dozvola = true;
	var a = document.getElementById("bgmc");
	if(a.innerHTML == "stop"){
		a.innerHTML = "play";
		PustiMuziku(a);
	}
	var dopo = document.getElementById("poeni").innerHTML * 1;
	var poeni = document.getElementById("kasakttp").value * 1;
	dopo += poeni;
	alert("Osvojeni poeni: " + poeni + "\nUkupno: " + dopo);
	document.getElementById("kttp").innerHTML += ": ";
	document.getElementById("kttp").innerHTML += poeni;
	document.getElementById("poeni").innerHTML = dopo;
	document.getElementById("ko-to-tamo-pjeva").style.display = "none";
	document.getElementById("kontrolna-tabla").style.display = "block";
}