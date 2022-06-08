var hint, sps_sifra;
//Baza podataka
function BazaSPS(){
	var br = Math.floor(Math.random() * 10) + 1;
	var a;
	var clue;
	switch(br){
		case 1: a = "Hari Poter i relikvije smrti";break;
		case 2: a = "Ko drugom jamu kopa sam u nju upada";break;
		case 3: a = "Crnogorci ne ljube lance";break;
		case 4: a = "Ja znam da nista ne znam";break;
		case 5: a = "Ko sa djavolom tikve sadi o glavu mu se lupaju";break;
		case 6: a = "Alibaba i cetrdeset razbojnika";break;
		case 7: a = "Alisa sa one strane ogledala";break;
		case 8: a = "Ko ce kome ako ne svoj svome";break;
		case 9: a = "Hari Poter i odaja tajni";break;
		case 10: a = "Ipak se okrece";break;
		default: break;
	}
	switch(br){
		case 1: clue = "Knjiga/Film";break;
		case 2: clue = "Narodna poslavica";break;
		case 3: clue = "Misao Petra Petrovica Njegosa";break;
		case 4: clue = "Misao Sokrata";break;
		case 5: clue = "Narodna poslavica";break;
		case 6: clue = "Bajka";break;
		case 7: clue = "Bajka";break;
		case 8: clue = "Narodna poslovica";break;
		case 9: clue = "Knjiga/Film";break;
		case 10: clue = "Misao Galileja";break;
		default: break;
	}
	hint = clue;
	return a;
}
//Zadajem Frazu
function ZadajFr(){
	var fraza = BazaSPS(), sifrovano = "";
	var n = fraza.length;
	fraza = fraza.toUpperCase();
	var i = 0;
	for(i = 0; i < n; i++){
		if(fraza[i] != " ") sifrovano += "*";
		else if(fraza[i] == " ") sifrovano += " ";
	}
	document.getElementById("sps-fraza").innerHTML = sifrovano;
	sps_sifra = sifrovano;
	document.getElementById("rjsps").innerHTML = fraza;
	document.getElementById("tajmer").value = 100;
	vrijeme = setInterval(TajmerSPS, 1000);
	var rijec = fraza.slice(0, 7) + "...";
	document.getElementById("clue").innerHTML = rijec;
}
//Trazilica slova
function ProvjeriFr(ev, el){
	var fraza = document.getElementById("rjsps").innerHTML;
	var n = fraza.length;
	var i = 0;
	var p;
	var s = el.value;
	if(ev.keyCode == 13){
		for(i = 0; i < n; i++){
			if(s == fraza[i]){
				var part1 = sps_sifra.slice(0, i);
				var part2 = sps_sifra.slice(i+1, fraza.length);
				sps_sifra = part1 + s + part2;
			}
		}
		if(fraza.search(s) != -1){
			PustiZvuk("tacno");
		}
		document.getElementById("sps-fraza").innerHTML = sps_sifra;
		document.getElementById("kasasps").value -= 1;
		if(fraza.search(s) == -1){document.getElementById("kasasps").value -= 2;PustiZvuk("netacno")}
	}
	el.value = "";
}
//Time limit
function TajmerSPS(){
	var time = document.getElementById("tajmer");
	if(time.value * 1 > 0){
		time.value -= 1;
	}else{
		KrajSPS();
	}
}
//Kraj igre
function KrajSPS(){
	var a = document.getElementById("rjsps").innerHTML;
	var d = document.getElementById("clue").innerHTML;
	var b = prompt(hint, "");
	b = b.toUpperCase();
	if(a == b){
		var dopo = document.getElementById("poeni").innerHTML * 1;
		var sadpo = document.getElementById("kasasps").value * 1;
		dopo += sadpo;
		document.getElementById("sps").innerHTML = document.getElementById("sps").innerHTML + ": " + sadpo;
		document.getElementById("poeni").innerHTML = dopo;
		alert("Cestitam!\n\nOsvojili ste " + sadpo + " poena.\nUkupno imate " + dopo + " poena");
	}else{var c = document.getElementById("rjsps").innerHTML;alert("Rjesenje:\n\n" + c);document.getElementById("sps").innerHTML += ": 0"}
	document.getElementById("kontrolna-tabla").style.display = "block";
	document.getElementById("slovo-po-slovo").style.display = "none";
	clearInterval(vrijeme);
}
function PomocSPS(elem){
	elem.innerHTML = document.getElementById("clue").innerHTML;
	document.getElementById("tajmer").value -= 20;
	document.getElementById("kasasps").value -= 10;
	elem.disabled = true;
}