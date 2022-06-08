function Zadaj_Zastave(){
	vrijeme = setInterval(Tajmer_POS, 1000);
	var folder = document.getElementById("pos-brigre").innerHTML;
	var slika = document.getElementById("pos-brzastave").innerHTML * 1 + 1;
	var img = "<img src='Izvori/Pos/" + folder + "/" + slika + ".png' height='300px' width='600px'>"
	document.getElementById("pos-zastava").innerHTML = img;
	Zadaj_Odgovore();
}
function Select(){
	var elem = document.getElementById("pos-opcije");
	if(elem.style.display == "none"){
		elem.style.display = "block";
		elem.classList.toggle("pos-opcije-animacija1");
		elem.classList.toggle("pos-opcije-animacija2");
	}else{
		elem.classList.toggle("pos-opcije-animacija1");
		elem.classList.toggle("pos-opcije-animacija2");
		setTimeout(function(){elem.style.display = "none";}, 400);
	}
	document.getElementById("tajmer").focus();
}
function Zadaj_Odgovore(){
	var a = document.getElementById("pos-brigre").innerHTML * 1 - 1;
	var b = document.getElementById("pos-brzastave").innerHTML * 1;
	var niz_foldera = "";
	for(var i = 0;i < 10;i++){
		if(i == a){continue;}
		niz_foldera += i;
	}
	a++;
	
	// tacan odgovor
	
	var id_op = Math.floor(Math.random() * 3) + 1;
	document.getElementById("pos-op" + id_op).innerHTML = DataBase(a, b);
	
	//netacni odgovori
	
	for(var i = 1;i <= 3;i++){
		var elem = document.getElementById("pos-op" + i);
		if(elem.innerHTML != "Izaberi drzavu"){continue;}
		var folder = niz_foldera[Math.floor(Math.random() * niz_foldera.length)] * 1;
		niz_foldera = niz_foldera.slice(0, folder) + niz_foldera.slice(folder+1, niz_foldera.length);
		folder++;
		elem.innerHTML = DataBase(folder, Math.floor(Math.random() * 5));
	}
}
function Select_Change(odgovor){
	document.getElementById("pos-selekcija").innerHTML = odgovor;
	Select();
}
function Provjera_POS(){
	var a = document.getElementById("pos-brigre").innerHTML * 1, b = document.getElementById("pos-brzastave").innerHTML * 1;
	var odgovor = document.getElementById("pos-selekcija").innerHTML;
	var rjesenje = DataBase(a, b);
	var zvuk;
	if(odgovor == rjesenje){
		PustiZvuk("tacno");
		var pts = document.getElementById("pos-kasa");
		pts.innerHTML = pts.innerHTML * 1 + 5;
	}else{
		PustiZvuk("netacno");
		alert(rjesenje);
	}
	for(var i = 1;i <= 3;i++){
		document.getElementById("pos-op" + i).innerHTML = "Izaberi drzavu";
	}
}
function Kraj_POS(){
	var pts = document.getElementById("pos-kasa").innerHTML * 1;
	var bonus = 5 + pts / 5;
	alert("Osvojeni poeni: " + pts + "\nBonus: " + bonus + "\nUkupno: " + (bonus+pts));
	var ukupno = document.getElementById("poeni");
	ukupno.innerHTML = ukupno.innerHTML * 1 + (pts + bonus);
	document.getElementById("pos").innerHTML = document.getElementById("pos").innerHTML + ": " + (bonus+pts);
	document.getElementById("pos").style.fontSize = 25;
	document.getElementById("put-oko-svijeta").style.display = "none";
	document.getElementById("kontrolna-tabla").style.display = "block";
}
function Tajmer_POS(){
	var tajmer = document.getElementById("tajmer");
	if(tajmer.value * 1 == 0){
		clearInterval(vrijeme)
		Provjera_POS();
		var n = document.getElementById("pos-brzastave").innerHTML * 1;
		if(n < 4){
			document.getElementById("pos-brzastave").innerHTML = n + 1;
			Zadaj_Zastave();
			tajmer.value = 21;
			document.getElementById("pos-selekcija").innerHTML = "Izaberi drzavu";
		}else{
			Kraj_POS();
			clearInterval(vrijeme);
		}
	}
	tajmer.value -= 1;
}