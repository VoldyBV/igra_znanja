var odgovori_pot = ["", ""];
var broj_pitanja_pot;
function PopUpPOT(){
	var elem = document.getElementById("pot-pitanje-sve");
	if(elem.innerHTML != "" && elem.style.display == "none"){
		elem.style.display = "block";
	}else{elem.style.display = "none";}
}
function Zadaj_Pitanje_POT(){
	broj_pitanja_pot = Math.floor(Math.random() * 70) + 1;
	document.getElementById("pot-pitanje").innerHTML = Pitanja_POT(broj_pitanja_pot);
	document.getElementById("pot-od" + Math.floor(Math.random() * 3)).innerHTML = Tacni_Odgovori_POT(broj_pitanja_pot);
	var id = "";
	for(var i = 0;i < 3;i++){
		elem = document.getElementById("pot-od" + i);
		if(elem.innerHTML != ""){continue}
		id += i;
	}
	
	Pogresni_Odgovori_POT(broj_pitanja_pot);
	
	for(var i = 0;i < 2;i++){
		ide = id[i] * 1;
		document.getElementById("pot-od" + ide).innerHTML = odgovori_pot[i];
	}
	document.getElementById("tajmer").value =  20;
	vrijeme = setInterval(Tajmer_Odgovor_Igraca, 1000);
	var pitanje = Pitanja_POT(broj_pitanja_pot);
	if(pitanje.length > 50){
		pitanje = pitanje.slice(0, 46) + "...";
		document.getElementById("pot-pitanje-sve").innerHTML = Pitanja_POT(broj_pitanja_pot);
		document.getElementById("pot-pitanje").innerHTML = pitanje;
	}
}
function Select_POT(elem){
	var elem2 = document.getElementById("pot-odgovori"), elem3 = document.getElementById("pot-igrac-odg");
	if(elem2.style.display == "none"){
		elem3.style.borderRadius = "40px 40px 0px 0px";
		elem2.style.display = "block";
		elem2.classList.toggle("pot-animacija1");
		elem2.classList.toggle("pot-animacija2");
	}else{
		setTimeout(function(){elem2.style.display = "none";elem3.style.borderRadius = "40px"}, 400);
		elem2.classList.toggle("pot-animacija1");
		elem2.classList.toggle("pot-animacija2");
	}
	elem3.innerHTML = elem.innerHTML;
}
function Samo_Brojevi_POT(polje, eve){
	if(eve.which != 8 && eve.which != 0 && eve.which != 13 && eve.which < 48 || eve.which > 57){
		polje.value = polje.value.slice(0, polje.value.length - 1);
	}
}
function Ulog_POT(eve, dis){if(eve.keyCode == 13){
	var ulog = dis.value;
	if(ulog * 1 >= 15 && ulog * 1 <= 30){
		ulog *= 1;
		document.getElementById("pot-korak3").innerHTML = Math.floor(ulog * 1.5);
		document.getElementById("pot-korak4").innerHTML = Math.floor(ulog * 1.25);
		document.getElementById("pot-korak5").innerHTML = ulog;
		dis.value = "";
	}else{
		dis.value = 15;
		alert("Ulog mora biti veci ili jednak 15 i mora biti manji ili jednak 30!");
	}
}}
function Start_POT(elem, multiplicator){if(elem.innerHTML != ""){
	var pts = document.getElementById("poeni");
	var elem2 = document.getElementById("pot-korak5");
	pts.innerHTML -= elem2.innerHTML;
	var id = elem.id[elem.id.length - 1] * 1;
	for(i = 3;i <= 11;i++){
		if(i == id){continue;}
		document.getElementById("pot-korak" + i).innerHTML = "";
		if(i < id){continue;}
		document.getElementById("pot-korak" + i).classList.remove("marker");
		document.getElementById("pot-korak" + i).classList.remove("tacno");
		document.getElementById("pot-korak" + i).classList.add("marker");
	}
	document.getElementById("pot-igrac-korak").innerHTML = id;
	document.getElementById("pot-ulog").style.display = "none";
	document.getElementById("pot-multiplicator").innerHTML = multiplicator;
	Zadaj_Pitanje_POT();
}}
function Odgovor_Lovca_POT(){
	var brodg = Math.floor(Math.random() * 5);
	var odg_lovca;
	if(brodg){odg_lovca = Tacni_Odgovori_POT(broj_pitanja_pot);}
	else{odg_lovca = odgovori_pot[0];}
	document.getElementById("pot-lovac-odg").innerHTML = odg_lovca
}

function Tajmer_Odgovor_Igraca(){
	var tajmer = document.getElementById("tajmer");
	if(tajmer.value * 1 == 0){
		clearInterval(vrijeme);
		tajmer.value = 5;
		document.getElementById("pot-lovac-odg").innerHTML = "RAZMISLJAM";
		setTimeout(Odgovor_Lovca_POT, 4500);
		vrijeme = setInterval(Tajmer_Odgovor_Lovca, 1000);
	}else{
		tajmer.value -= 1;
	}
}
function Tajmer_Odgovor_Lovca(){
	var tajmer = document.getElementById("tajmer");
	if(tajmer.value == 0){
		clearInterval(vrijeme);
		Dalje_POT();
	}
	tajmer.value -= 1;
}
function Dalje_POT(){
	Provjeri_Odgovor_Igraca();
	var provjeri = document.getElementById("pot-igrac-korak").innerHTML * 1;
	if(provjeri < 12){
		setTimeout(Provjeri_Odgovor_Lovca, 2000);
	}else{
		var poeni = document.getElementById("pot-korak12").innerHTML * 1;
		var multiplicator = document.getElementById("pot-multiplicator").innerHTML * 1;
		setTimeout(function(){Kraj_POT(multiplicator, poeni);}, 1000);
	}
}
function Provjeri_Odgovor_Igraca(){
	var odgovor = document.getElementById("pot-igrac-odg").innerHTML;
	var rjesenje = Tacni_Odgovori_POT(broj_pitanja_pot);
	if(odgovor == rjesenje){
		alert("Tacan odgovor.");
		var zvuk = new Audio("Izvori/tacno.mp3");zvuk.play();
		var korak = document.getElementById("pot-igrac-korak").innerHTML * 1 + 1;
		document.getElementById("pot-igrac-korak").innerHTML = korak;
		document.getElementById("pot-korak" + korak).classList.remove("marker");
		document.getElementById("pot-korak" + korak).classList.add("tacno");
		document.getElementById("pot-korak" + korak).innerHTML = document.getElementById("pot-korak" + (korak-1)).innerHTML;
		document.getElementById("pot-korak" + (korak-1)).innerHTML = "";
	}else{var zvuk = new Audio("Izvori/netacno.mp3");zvuk.play();alert("Tacan odgovor je:  " + rjesenje);}
}
function Provjeri_Odgovor_Lovca(){
	var odgovor = document.getElementById("pot-lovac-odg").innerHTML;
	var rjesenje = Tacni_Odgovori_POT(broj_pitanja_pot);
	if(odgovor == rjesenje){
		alert("Lovac je dao tacan odgovor.");
		var zvuk = new Audio("Izvori/tacno.mp3");zvuk.play();
		var korak = document.getElementById("pot-lovac-korak").innerHTML * 1 + 1;
		document.getElementById("pot-lovac-korak").innerHTML = korak;
		document.getElementById("pot-korak" + korak).classList.remove("tacno");
		document.getElementById("pot-korak" + korak).classList.add("netacno");
		document.getElementById("pot-korak" + korak).innerHTML = document.getElementById("pot-korak" + (korak-1)).innerHTML;
		document.getElementById("pot-korak" + (korak-1)).innerHTML = "";
	}else{var zvuk = new Audio("Izvori/netacno.mp3");zvuk.play();alert("Lovac je dao netacan odgovor.");}
	var korak2 = document.getElementById("pot-igrac-korak").innerHTML * 1;
	Clear_POT();
	var korak = document.getElementById("pot-lovac-korak").innerHTML * 1;
	if(korak < korak2){setTimeout(Zadaj_Pitanje_POT(), 1000);}
	else{document.getElementById("pot-korak"+korak).innerHTML = 0;
		setTimeout(function(){Kraj_POT(0, 0)}, 1000);
	}
}
function Clear_POT(){
	document.getElementById("pot-pitanje").innerHTML = document.getElementById("pot-pitanje-sve").innerHTML = "";
	document.getElementById("pot-lovac-odg").innerHTML = "ODGOVOR LOVCA";
	document.getElementById("pot-igrac-odg").innerHTML = "Izaberi odgovor";
	for(var i = 0;i < 3;i++){document.getElementById("pot-od" + i).innerHTML = ""}
}
function Kraj_POT(multiplicator, poeni){
	var bonus = Math.floor((multiplicator - 1) * poeni);
	alert("Osvojeni poeni: " + poeni + "\nBonus: " + bonus + "\nUkupno: " + (bonus+poeni));
	poeni += bonus;
	var elem = document.getElementById("poeni");
	elem.innerHTML = elem.innerHTML * 1 + poeni;
	elem = document.getElementById("pot");
	elem.innerHTML = elem.innerHTML + ": " + poeni;
	document.getElementById("potjera").style.display = "none";
	document.getElementById("kontrolna-tabla").style.display = "block";
}