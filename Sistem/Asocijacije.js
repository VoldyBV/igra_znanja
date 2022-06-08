var bpasoc = [4, 4, 4, 4, 4];
var tabela = [
//	   0    1    2    3
/*0*/[" ", " ", " ", " "],
/*1*/[" ", " ", " ", " "],
/*2*/[" ", " ", " ", " "],
/*3*/[" ", " ", " ", " "],
/*4*/[" ", " ", " ", " "]
];
var rjesenje_aso = "";
function Zadaj_asoc(){
	var br = Math.floor(Math.random() * 10) + 1;
	for(var x = 0;x < 4;x++){
		for(var y = 0;y < 5; y++){
			tabela[y][x] = Asocijacije_main(br, y*10+x);
		}
	}
	rjesenje_aso = RjesenjaA(br);
}
function Otvori_Polje(y, x, elem, popup, trig){//Otvaram polje
	elem.disabled = true;
	document.getElementById(popup).innerHTML = elem.innerHTML = tabela[y][x];
	if(elem.innerHTML.length >= 9){
		var n = elem.innerHTML.length;
		var nova_rijec = "";
		for(var i = 0;i < 7;i++){
			nova_rijec += elem.innerHTML[i];
		}
		nova_rijec += "...";
		elem.innerHTML = nova_rijec;
		if(trig){document.getElementById(popup).classList.toggle("show")};
	}else{document.getElementById(popup).innerHTML = "";}
	bpasoc[x] -= 1;
}
function PKA(eve, elem, y, x, popup, trig){if(eve == 13){if(elem.value == tabela[y][x]){//provjeravam rjesenje kolone
	elem.disabled = true;
	document.getElementById(popup).innerHTML = elem.value = tabela[y][x];
	if(elem.value.length >= 9){
		var n = elem.value.length;
		var nova_rijec = "";
		for(var i = 0;i < 7;i++){
			nova_rijec += elem.value[i];
		}
		nova_rijec += "...";
		elem.value = nova_rijec;
		if(trig){document.getElementById(popup).classList.toggle("show")};
	}else{document.getElementById(popup).innerHTML = "";}
	
	var points, alertbox;
	points = 5;
	alertbox = "Poeni za tacno rjesenje: " + points;
	alertbox = alertbox + "<div></div>Bonus za neotvorena polja: " + bpasoc[x];
	points += bpasoc[x];
	alertbox = alertbox + "<div></div>Ukupno: " + points;
	var pn = document.getElementById("kasaaso");
	
	if(trig){pn.innerHTML = pn.innerHTML * 1 + points;PustiZvuk("tacno");var box = document.getElementById("alertbox");box.innerHTML = alertbox;box.classList.add("alertbox");setTimeout(function(){box.classList.remove("alertbox")}, 3500)}
	for(var i = 0;i < 4;i++){
		var id = "aso:" + i + "-" + x;
		elem = document.getElementById(id);
		var popupid = x * 10 + i + 1;
		var popupn = "PopUpA" + popupid;
		Otvori_Polje(i, x, elem, popupn, 0);
	}
	
	var i = 4;
	document.getElementById("aso:" + i + "-" + x).classList.add("tacno");i--;
	setTimeout(function(){document.getElementById("aso:" + i + "-" + x).classList.add("tacno");i--;}, 150);
	setTimeout(function(){document.getElementById("aso:" + i + "-" + x).classList.add("tacno");i--;}, 300);
	setTimeout(function(){document.getElementById("aso:" + i + "-" + x).classList.add("tacno");i--;}, 450);
	setTimeout(function(){document.getElementById("aso:" + i + "-" + x).classList.add("tacno");i--;}, 600);
	bpasoc[4] -= 1;
	bpasoc[x] = 0;
}else{PustiZvuk("netacno");elem.value = "";}}}
function PRA(eve, elem, trig){if(eve == 13){if(elem.value == rjesenje_aso){clearInterval(vrijeme);//provjeravam konacno rjesenje
	elem.disabled = true;
	elem.value = rjesenje_aso;
	elem.classList.add("tacno");
	if(trig){var points = 6, alertbox, bpn = 0;
	alertbox = "Osvojeni poeni: " + points;
	bpn += bpasoc[0]
	bpn += bpasoc[1]
	bpn += bpasoc[2]
	bpn += bpasoc[3]
	bpn = bpn + bpasoc[4] * 6;
	var pn = document.getElementById("kasaaso");
	alertbox = alertbox + "<div></div>Bonus: " + bpn;
	alertbox = alertbox + "<div></div>Poeni iz kase: " + pn.innerHTML;
	pn.innerHTML = pn.innerHTML * 1 + points + bpn;
	alertbox = alertbox + "<div></div>Ukupno: " + pn.innerHTML;
	var box = document.getElementById("alertbox");box.innerHTML = alertbox;box.classList.add("alertbox");setTimeout(function(){box.classList.remove("alertbox")}, 3500)
	var zvuk = new Audio("Izvori/tacno.mp3");zvuk.play();}
	for(var i = 0;i < 4; i++){
		var id = "aso:4-" + i;
		var dis = document.getElementById(id);
		dis.value = tabela[4][i]
		var popup = "PopUpA" + (i*10+5);
		PKA(13, dis, 4, i, popup, 0);
	}
	setTimeout(Ugasi, 7000);
}else{var zvuk = new Audio("Izvori/netacno.mp3");zvuk.play();elem.value = "";}}}
function KrajAso(){//kraj
	PustiZvuk("netacno");
	for(var x = 0;x < 4;x++){
		for(var y = 0;y < 4;y++){
			var id = "aso:" + y + "-" + x;
			document.getElementById(id).disabled = true;
			document.getElementById(id).innerHTML = tabela[y][x];
		}
	}
	for(var i = 0;i < 4;i++){
		var id = "aso:4-" + i;
		document.getElementById(id).value = tabela[4][i];
		document.getElementById(id).disabled = true;
	}
	document.getElementById("rjaso").value = rjesenje_aso;
	document.getElementById("rjaso").disabled = true;
	document.getElementById("rjaso").classList.add("netacno");
	Run1();
	setTimeout(Run2, 150);
	setTimeout(Run3, 300);
	setTimeout(Run4, 450);
	setTimeout(Run5, 600);
	setTimeout(Ugasi, 7000);
}
function TajmerAso(){//tajmer
	var tajmer = document.getElementById("tajmer");
	if(tajmer.value < 1){
		KrajAso();
		clearInterval(vrijeme);
	}
	tajmer.value -= 1;
}
	function Run1(){
		document.getElementById("aso:4-3").classList.add("netacno");
		document.getElementById("aso:4-2").classList.add("netacno");
		document.getElementById("aso:4-1").classList.add("netacno");
		document.getElementById("aso:4-0").classList.add("netacno");
	}
	function Run2(){
		document.getElementById("aso:3-3").classList.add("netacno");
		document.getElementById("aso:3-2").classList.add("netacno");
		document.getElementById("aso:3-1").classList.add("netacno");
		document.getElementById("aso:3-0").classList.add("netacno");
	}
	function Run3(){
		document.getElementById("aso:2-3").classList.add("netacno");
		document.getElementById("aso:2-2").classList.add("netacno");
		document.getElementById("aso:2-1").classList.add("netacno");
		document.getElementById("aso:2-0").classList.add("netacno");
	}
	function Run4(){
		document.getElementById("aso:1-3").classList.add("netacno");
		document.getElementById("aso:1-2").classList.add("netacno");
		document.getElementById("aso:1-1").classList.add("netacno");
		document.getElementById("aso:1-0").classList.add("netacno");
	}
	function Run5(){
		document.getElementById("aso:0-3").classList.add("netacno");
		document.getElementById("aso:0-2").classList.add("netacno");
		document.getElementById("aso:0-1").classList.add("netacno");
		document.getElementById("aso:0-0").classList.add("netacno");
	}
function Ugasi(){//vraca na komandnu tablu
	var pn = document.getElementById("kasaaso");
	document.getElementById("poeni").innerHTML = document.getElementById("poeni").innerHTML * 1 + pn.innerHTML*1;
	pn.innerHTML = ": " + pn.innerHTML;
	document.getElementById("aso").innerHTML += pn.innerHTML;
	document.getElementById("kontrolna-tabla").style.display = "block";
	document.getElementById("asocijacije").style.display="none";
	alert("Pritisnite 'OK' da bi ste se vratili na pocetni meni.")
}