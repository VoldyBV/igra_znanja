var pre_brigr, pre_brkor = 1;
function Zadaj_Slova(){
	pre_brigr = Math.floor(Math.random() * 10) + 1;
	document.getElementById("vre-slova").innerHTML = Slova_PRE(pre_brigr);
	var inHTML = "<ol>"
	for(var i = 1;i <= 7;i++){
		inHTML = inHTML + "<li>" + Opis_PRE(pre_brigr, i) + "</li>";
	}
	inHTML += "</ol>";
	document.getElementById("vre-opis").innerHTML = inHTML;
}
function Provjeri_PRE(a, eve){if(eve.keyCode == 13){
	var rjesenje = Rijeci_PRE(pre_brigr, pre_brkor);
	var odgovor = a.value;
	if(odgovor == rjesenje){
		PustiZvuk("tacno");
		document.getElementById("vre-kasa").innerHTML = document.getElementById("vre-kasa").innerHTML * 1 + (odgovor.length - 2);
		for(var i = 1;i <= odgovor.length;i++){
			document.getElementById("p" + pre_brkor + "-" + i).innerHTML = odgovor[i-1];
			document.getElementById("p" + pre_brkor + "-" + i).classList.add("tacno");
		}	
		pre_brkor++;
		document.getElementById("tajmer").value = 30;
			if(pre_brkor > 7){document.getElementById("tajmer").value = 0}
	}
	else{
			PustiZvuk("netacno");
		}
		a.value = "";
	}
}
function Tajmer_PRE(){
	var tajmer = document.getElementById("tajmer");
	if(tajmer.value <= 0){
		if(pre_brkor <= 7){
			tajmer.value = 31;
			var odgovor = Rijeci_PRE(pre_brigr, pre_brkor);
			for(var i = 1;i <= odgovor.length;i++){
				document.getElementById("p" + pre_brkor + "-" + i).innerHTML = odgovor[i-1];
				document.getElementById("p" + pre_brkor + "-" + i).classList.add("netacno");
			}
			var zvuk = new Audio("Izvori/netacno.mp3");zvuk.play();
			pre_brkor++;
		}else{
			tajmer.value = 0;
			Kraj_PRE();
			clearInterval(vrijeme);
		}
	}
	tajmer.value -= 1;
}
function Kraj_PRE(){
	var pts = document.getElementById("vre-kasa").innerHTML * 1;
	var bonus = Math.floor(pts * 14 / 16);
	alert("Osvojeni poeni: " + pts + "\nBonus: " + bonus + "\nUkupno: " + (bonus+pts));
	pts+= bonus;
	var ukupno = document.getElementById("poeni");
	ukupno.innerHTML = ukupno.innerHTML * 1 + pts;
	ukupno = document.getElementById("vre");
	ukupno.innerHTML = ukupno.innerHTML + ": " + pts;
	document.getElementById("vreteno").style.display = "none";
	document.getElementById("kontrolna-tabla").style.display = "block";
}