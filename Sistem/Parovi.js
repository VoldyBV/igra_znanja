var idkartica = ["", ""];
function IzmjesajP(){
	var sis = "0123456789abcdefghij";
	var id;
	for(var i = 1; i <= 20; i++){
		var n = sis.length;
		var m = Math.floor(Math.random() * n);
		var b = id = sis[m];
		var part1 = sis.slice(0, m);
		var part2 = sis.slice(m+1, n);
		sis = part1 + part2;
		var argument;
		switch(b){
			case '0': case '1': b = 1;break;
			case '2': case '3': b = 2;break;
			case '4': case '5': b = 3;break;
			case '6': case '7': b = 4;break;
			case '8': case '9': b = 5;break;
			case 'a': case 'b': b = 6;break;
			case 'c': case 'd': b = 7;break;
			case 'e': case 'f': b = 8;break;
			case 'g': case 'h': b = 9;break;
			case 'i': case 'j': b = 10;break;
			default: break;
		}
		document.getElementById("p" + i).classList.add("par" + b);
		var imgclc = "<button style='height: 100px;width: 100px;padding: 0px 0px 0px 0px;background-image: url(css/Parovi/poledjina.png)'onclick='SelectP(" + i + ", this)'" + "id='brkar" + i + "'></button>";
		document.getElementById("p" + i).innerHTML = imgclc;
	}
}
function SelectP(i){
	document.getElementById("brkar" + i).style.display = "none";
	var unesi = document.getElementById("prviklik");
	var unosim = document.getElementById("p" + i).classList;
	if(unesi.innerHTML == ""){
		unesi.innerHTML = unosim;
		idkartica[0] = "brkar" + i;
	}else{
		document.getElementById("drugiklik").innerHTML = unosim;
		idkartica[1] = "brkar" + i;
		var klik1 = document.getElementById("prviklik").innerHTML;
		var klik2 = document.getElementById("drugiklik").innerHTML;
		ProvjeriP(klik1, klik2);
	}
}
function ProvjeriP(klik1, klik2){
	document.getElementById("prviklik").innerHTML = document.getElementById("drugiklik").innerHTML = "";
	Disable();
	clearInterval(vrijeme);
	if(klik1 == klik2){
		Enable();
		PustiZvuk("tacno");
		idkartica = ["", ""];
		StopS();
	}else{
		PustiZvuk("netacno");
		setTimeout(function(){document.getElementById(idkartica[0]).style.display = "block";document.getElementById(idkartica[1]).style.display = "block";Enable();vrijeme = setInterval(TajmerP, 1000)}, 1000);
		document.getElementById("parovi-kasa").innerHTML -= 2;
		if(document.getElementById("parovi-kasa").innerHTML <= 0){document.getElementById("tajmer").value = 1;}
	}
}
function Disable(){
	for(var i = 1;i <= 20;i++){document.getElementById("brkar" + i).disabled = true;};
}
function Enable(){
	for(var i = 1;i <= 20;i++){document.getElementById("brkar" + i).disabled = false;};
}
function StopS(){
	var bool = 0;
	for(var i = 1;i <= 20;i++){
		var dali = document.getElementById("brkar" + i).style.display;
		if(dali == "block"){dali = 1;break;}
	}
	if(dali != 1){KrajP1()}
}
function KrajP1(){
	clearInterval(vrijeme);
	var poeni = document.getElementById("parovi-kasa").innerHTML * 1;
	multiplikator = document.getElementById("tajmer").value / 180;
	bonus = Math.floor(multiplikator * 20);
	pn = document.getElementById("par");
	pn.innerHTML = pn.innerHTML + ": " + (bonus+poeni);
	pn = document.getElementById("poeni");
	pn.innerHTML = pn.innerHTML * 1 + bonus + poeni;
	alert("Osvojeni poeni: " + poeni + "\nBonus: " + bonus + "\nUkupno: " + (bonus+poeni));
	document.getElementById("parovi").style.display = "none";
	document.getElementById("kontrolna-tabla").style.display = "block";
}
function KrajP2(){
	alert("Nazalost niste osvojili nista.");
	document.getElementById("parovi").style.display = "none";
	document.getElementById("kontrolna-tabla").style.display = "block";
	pn = document.getElementById("par");
	pn.innerHTML = pn.innerHTML + ": 0";
	clearInterval(vrijeme)
}
function TajmerP(){
	var tajmer = document.getElementById("tajmer");
	if(tajmer.value <= 0){KrajP2()}
	tajmer.value -= 1;
}