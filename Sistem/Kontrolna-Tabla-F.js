function PopUp(a, c) {
	var popup = document.getElementById("myPopup"+ c + a);
	popup.classList.toggle("show");
}
function PopUpAso(popup){
	var txt = document.getElementById(popup);
	if(txt.innerHTML != ""){
		txt.classList.toggle("show");
	}
}
var pocetne_upute, last_clicked;
var muzika_dozvola = true, zvuk_dozvola = true;
function Upute(naslov, id, chr, lsc){
	pocetne_upute = document.getElementById("up-body").innerHTML;
	document.getElementById("up-body").innerHTML = "";
	document.getElementById("up-body").innerHTML = document.getElementById(id).innerHTML;
	document.getElementById("naslov").innerHTML = naslov;
	document.getElementById("cls").style.display = "none";
	document.getElementById("bck").style.display = "block";
	document.getElementById(chr).scrollIntoView(true);
	last_clicked = lsc;
}
function GlavniUpit(){
	document.getElementById("naslov").innerHTML = "Uputstvo za igru";
	document.getElementById("up-body").innerHTML = "";
	document.getElementById("up-body").innerHTML = pocetne_upute;
	document.getElementById("cls").style.display = "block";
	document.getElementById("bck").style.display = "none"
	document.getElementById(last_clicked).scrollIntoView(true);
}
var muzika_u_pozadini = new Audio("Izvori/bgm.mp3");
var vrijeme;
function PustiZvuk(ime){
	if(zvuk_dozvola){
		var sound = new Audio("Izvori/" + ime + ".mp3");
		sound.play();
	}
}
function PustiMuziku(a){
	if(muzika_dozvola == true){
		if(a.innerHTML == "play"){
			muzika_u_pozadini.play();
			muzika_u_pozadini.loop = true;
			a.innerHTML = "stop";
		}else{
			muzika_u_pozadini.pause();
			a.innerHTML = "play";
		}
	}
}
function Otvori_Slovo_Po_Slovo(a){
	document.getElementById("slovo-po-slovo").style.display = "block";
	document.getElementById("kontrolna-tabla").style.display = "none";
	a.disabled = true;
	ZadajFr();
}
function Otvori_Moj_Broj(a){
	a.disabled = true;
	document.getElementById("moj-broj").style.display = "block";
	document.getElementById("kontrolna-tabla").style.display = "none";
	document.getElementById("tajmer").value = 155;
	vrijeme = setInterval(TajmerMB, 1000);
	vrijeme1 = setInterval(ZadajBr, 50);
}
function Otvori_Licitacije(a){
	a.disabled = true;
	document.getElementById("licitacije").style.display = "block";
	document.getElementById("kontrolna-tabla").style.display = "none";
	document.getElementById("tajmer").value = 7;
	MainLIC();
}
function Otvori_KTTP(a){
	document.getElementById("ko-to-tamo-pjeva").style.display = "block";
	document.getElementById("kontrolna-tabla").style.display = "none";
	var a = document.getElementById("bgmc");
	if(a.innerHTML == "stop"){
		PustiMuziku(a)
		a.innerHTML = "stop";
	}
	
	muzika_dozvola = false;
	PlayKTTP();
	vrijeme = setInterval(TajmerKTTP, 1000);
	a.disabled = true;
}
function Otvori_Zid(a){
	document.getElementById("zid").style.display = "block";
	document.getElementById("kontrolna-tabla").style.display = "none";
	a.disabled = true;
	Zid_Main();
}
function Otvori_Asocijacije(a){
	document.getElementById("asocijacije").style.display = "block";
	document.getElementById("kontrolna-tabla").style.display = "none";
	a.disabled = true;
	document.getElementById("tajmer").value = 180;
	Zadaj_asoc();
	vrijeme = setInterval(TajmerAso, 1000)
}
function Otvori_KPK(a){
	document.getElementById("korak-po-korak").style.display = "block";
	document.getElementById("kontrolna-tabla").style.display = "none";
	a.disabled = true;
	br = Math.floor(Math.random() * 10) + 1;
	rjesenjekpk = RjesenjaKPK(br);
	document.getElementById("kpkkasa" + broj_koraka).innerHTML = 20;
	document.getElementById("kpkk" + broj_koraka).innerHTML = Zadaj_KPK(br, broj_koraka);
	var rijec = document.getElementById("kpkk" + broj_koraka).innerHTML;
	if(rijec.length > 30){
	document.getElementById("PopUpK" + broj_koraka).innerHTML = rijec;
	rijec = rijec.slice(0, 31) + "...";
	document.getElementById("kpkk" + broj_koraka).innerHTML = rijec
	}
	vrijeme = setInterval(PoeniKPK, 1000);
}
function Otvori_Spajalica(a){
	document.getElementById("spajalica").style.display = "block";
	document.getElementById("kontrolna-tabla").style.display = "none";
	a.disabled = true;
	document.getElementById("lsb1").classList.add("marker");
	Zadaj_Spajalica();
	document.getElementById("tajmer").value = 60;
	vrijeme = setInterval(TajmerS, 1000);
}
function Otvori_Parovi(a){
	document.getElementById("parovi").style.display = "block";
	document.getElementById("kontrolna-tabla").style.display = "none";
	a.disabled = true;
	document.getElementById("tajmer").value = 180;
	vrijeme = setInterval(TajmerP, 1000);
	IzmjesajP();
}
function Otvori_Put_Oko_Svijeta(a){
	document.getElementById("put-oko-svijeta").style.display = "block";
	document.getElementById("kontrolna-tabla").style.display = "none";
	a.disabled = true;
	document.getElementById("tajmer").value = 20;
	document.getElementById("pos-brigre").innerHTML = Math.floor(Math.random() * 10) + 1;
	Zadaj_Zastave();
}
function Otvori_Premetaljka(a){
	document.getElementById("tajmer").value = 30;
	document.getElementById("vreteno").style.display = "block";
	document.getElementById("kontrolna-tabla").style.display = "none";
	a.disabled = true;
	Zadaj_Slova();
	vrijeme = setInterval(Tajmer_PRE, 1000);
}
function Otvori_Potjera(a){
	var pts = document.getElementById("poeni");
	if(pts.innerHTML >= 30){document.getElementById("potjera").style.display = "block";
	document.getElementById("kontrolna-tabla").style.display = "none";
	a.disabled = true;}
	else{alert("Morate prvo ukupno imati najmanje 30 poena kako biste mogli igrati igru Potjera.")}
}
function Otvori_Sef(a){
	document.getElementById("sef").style.display = "block";
	document.getElementById("kontrolna-tabla").style.display = "none";
	a.disabled = true;
	document.getElementById("tajmer").value = 100;
	vrijeme = setInterval(SefTajmer, 1000)
	SefCode();
}
function Otvori_MI(a){
	document.getElementById("moji-izrazi").style.display = "block";
	document.getElementById("kontrolna-tabla").style.display = "none";
	a.disabled = true;
	document.getElementById("tajmer").value = 60;
	vrijeme = setInterval(MI_Tajmer, 1000);
	MI_Dalje();
}