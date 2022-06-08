//varijable
var brzida;
var pitanjaz = ["", "", "", "", "", "", "", "", "", "", "", ""];
var odgovoriz = ["", "", "", "", "", "", "", "", "", "", "", ""];
var odustaniodzida;
function Zid_Main(){//Ja zadajem temu zida i pitanja 
	brzida = Math.floor(Math.random() * 8) + 1;
	document.getElementById("temazid").value = TemeZida(brzida);
	var slika = "url(Izvori/Zid/" + brzida + ".png)";
	document.getElementById("ozid").style.backgroundImage = slika;
	PitanjaZida(brzida);
}
function ZidP(eve, provjeri, el){//Provjeravam konacno rjesenje
	if(eve.keyCode == 13){var rjesenje;
	rjesenje = RjesenjaZida(brzida);
	if(provjeri == rjesenje){
		for(var i = 1; i <= 12; i++){
			document.getElementById("cigl" + i).style.display = "none";
		}
		PustiZvuk("tacno");
		var points = document.getElementById("kasazid").value * 1;
		var bonuszid = document.getElementById("bonuszid").value * 1;
		var alertuj = "Osvojeni poeni: " + points + "\nBonus: " + bonuszid + "\nUkupno: " + (bonuszid + points);
		points += bonuszid;
		var a = document.getElementById("zd");
		a.innerHTML = a.innerHTML + ": " + points;
		a = document.getElementById("poeni");
		a.innerHTML = a.innerHTML * 1 + points;
		setTimeout(function(){alert(alertuj);document.getElementById("zid").style.display = "none";document.getElementById("kontrolna-tabla").style.display = "block";}, 1000);
	}else{PustiZvuk("netacno");el.value = "";}
}}
function OtvoriPZ(a, el){//Postavljam pitanje
	document.getElementById("pitanjez").innerHTML = "<b id='brptz'></b>." + pitanjaz[a];
	document.getElementById("brptz").innerHTML = a + 1;
	document.getElementById("kutijazid").style.display = "block";
	document.getElementById("ozid").style.display = "none";
	document.getElementById("tajmer").value = 30;
	el.innerHTML = "";
	el.disabled = true;
	vrijeme = setInterval(TajmerZid, 1000);
}
function ProvjeriOdgovorZ(){//Provjeravam odgovor
	var id = document.getElementById("brptz").innerHTML - 1;
	var datiodgovor = document.getElementById("odgovorz").value;
	document.getElementById("odgovorz").value = "";
	document.getElementById("kutijazid").style.display = "none";
	document.getElementById("ozid").style.display = "block";
	if(datiodgovor == odgovoriz[id]){
		PustiZvuk("tacno");
		document.getElementById("kasazid").value = document.getElementById("kasazid").value * 1 + 3;
		document.getElementById("bonuszid").value -= 4;
		document.getElementById("cigl" + (id+1)).style.display = "none";
		id += 5;
		if(id <= 12){document.getElementById("cigl" + id).style.border = "solid 3px #963634";}
	}
	else{
		PustiZvuk("netacno");
		document.getElementById("kasazid").value -= 2;
		document.getElementById("bonuszid").value -= 2;
		alert("Tacan odgovor je: \n\n" + odgovoriz[id]);
	}
}
function TajmerZid(){//Postavljam vremensko ogranicenje
	var tajmer = document.getElementById("tajmer");
	if(tajmer.value * 1 == 0){
		ProvjeriOdgovorZ();
		clearInterval(vrijeme);
	}
	tajmer.value -= 1;
}
function Odustani(){//Odustajem od igre
	var points = document.getElementById("kasazid").value;
	var rjesenje = RjesenjaZida(brzida);
	alert("Rjesenje zida:\n" + rjesenje + "\nOsvojeni poeni: " + points);
	for(var i = 1; i <= 12; i++){
		document.getElementById("cigl" + i).style.display = "none";
	}
	var a = document.getElementById("zd");
	a.innerHTML = a.innerHTML + ": " + points;
	setTimeout(function(){alert(alertuj);}, 1000);
	clearInterval(vrijeme);
}
function Ignitez(){odustaniodzida = Odustani();setTimeout(function(){document.getElementById("zid").style.display = "none";document.getElementById("kontrolna-tabla").style.display = "block";}, 3000)}
function Ugasiz(){clearTimeout(odustaniodzida);}