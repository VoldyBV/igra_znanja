var brspaj = 1, rjesenjas = "";
var brs
function Zadaj_Spajalica(){
	brs = Math.floor(Math.random() * 10) + 1;
	document.getElementById("spajalica-tema").innerHTML = TemaS(brs);
	for(var i = 1;i <= 8;i++){
		document.getElementById("lsb" + i).innerHTML = ColA(brs, i);
		document.getElementById("dsb" + i).innerHTML = ColB(brs, i);
	}
	IzmjesajS();
}
function ProvjeriS(odg){
	if(brspaj == odg){
		document.getElementById("lsb" + brspaj).classList.remove("marker");
		document.getElementById("lsb" + odg).classList.add("tacno");
		document.getElementById("dsb" + odg).classList.add("tacno");
		document.getElementById("dsb" + odg).disabled = true;
		document.getElementById("spajalica-kasa").innerHTML = document.getElementById("spajalica-kasa").innerHTML * 1 + 2;
		PustiZvuk("tacno");
	}else{
		document.getElementById("lsb" + brspaj).classList.remove("marker");
		document.getElementById("lsb" + brspaj).classList.add("netacno");
		PustiZvuk("netacno");
		rjesenjas = rjesenjas + ColA(brs, brspaj) + " - " + ColB(brs, brspaj) + "\n";
	}
	brspaj++;
	if(brspaj > 8){
		document.getElementById("tajmer").value = 2;
	}
	document.getElementById("lsb" + brspaj).classList.add("marker");
}
function IzmjesajS(){
	var dugmici = ['', '', '', '', '', '', '', ''];
	for(var i = 1;i <= 8;i++){
		dugmici[i-1] = document.getElementById("ds" + i).innerHTML;
		document.getElementById("ds" + i).innerHTML = "";
	}
	var raspored = "01234567";
	for(var i = 1;i <= 8;i++){
		var n = raspored.length;
		var rng = Math.floor(Math.random() * n);
		id = raspored[rng] * 1;
		var part1 = raspored.slice(0, rng);
		var part2 = raspored.slice(rng+1, n);
		raspored = part1 + part2;
		document.getElementById("ds" + i).innerHTML = dugmici[id];
	}
}
function KrajS(){
	var poeni = document.getElementById("spajalica-kasa").innerHTML * 1;
	multiplikator = poeni / 16;
	var bonus = Math.floor(multiplikator * 14);
	alert(rjesenjas + "\n" + "Osvojeni poeni: " + poeni + "\nBonus: " + bonus + "\nUkupno: " + (poeni+bonus));
	var pn = document.getElementById("spa");
	pn.innerHTML = pn.innerHTML + ": " + (poeni+bonus);
	document.getElementById("spajalica").style.display = "none";
	document.getElementById("kontrolna-tabla").style.display = "block";
	pn = document.getElementById("poeni");
	pn.innerHTML = pn.innerHTML * 1 + poeni + bonus;
}
function TajmerS(){
	var tajmer = document.getElementById("tajmer");
	if(tajmer.value <= 0){
		clearInterval(vrijeme);
		for(var i = brspaj;i <= 8;i++){
			rjesenjas = rjesenjas + ColA(brs, brspaj) + " - " + ColB(brs, brspaj) + "\n";
		}
		KrajS();
	}
	tajmer.value -= 1;
}