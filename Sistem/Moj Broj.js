//Zadajem brojeve
var vrijeme1;
function ZadajBr(){
	document.getElementById("br1").innerHTML = Math.floor(Math.random() * 10) + 1;
	document.getElementById("br2").innerHTML = Math.floor(Math.random() * 10) + 1;
	document.getElementById("br3").innerHTML = Math.floor(Math.random() * 10) + 1;
	document.getElementById("br4").innerHTML = Math.floor(Math.random() * 10) + 1;
	document.getElementById("br5").innerHTML = (Math.floor(Math.random()* 4) + 1) * 5;
	document.getElementById("br6").innerHTML = (Math.floor(Math.random() * 4) + 1) * 25; 
	document.getElementById("rjmb").innerHTML = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
}
//Time Limit
function TajmerMB(){
	var time = document.getElementById("tajmer");
	if(time.value == 151){
		clearInterval(vrijeme1);
	}else if(time.value <= 1){ZavrsiMB();clearInterval(vrijeme)}
	time.value -= 1;
}
//Brojevi
function Brojevi(br, id){
	var valid = document.getElementById("validator");
	var elem = document.getElementById(id);
	if(valid.innerHTML != "0" || valid.innerHTML == "2"){
		document.getElementById("ekran").innerHTML += br;
		valid.innerHTML = 0;
		elem.disabled = true;
		elem.classList.remove("animacija1");
		elem.style.color = "C04D50"
		elem.classList.add("animacija2");
	}else{alert("Poslije broja ide racunska operacija ili zatvorena zagrada")}
}
//Otvorena zagrada
function OZagrada(){
	var valid = document.getElementById("validator");
	if(valid.innerHTML != "2" && valid.innerHTML != "0"){
		document.getElementById('ekran').innerHTML += '(';
		document.getElementById('validator').innerHTML = 2;
	}else{alert("Poslije broja ide racunska operacija ili zatvorena zagrada")}
}
//Operacije
function Operacije(op){
	var valid = document.getElementById("validator");
	if(valid.innerHTML != "1"){
		document.getElementById("ekran").innerHTML += op;
		valid.innerHTML = 1;
	}else{
		alert("Poslije racunske operacije ide broj, otvorena ili zatvorena zagrada.")
	}
}
//za resetovanje
function ResetMB(){
	var i = 1;
	var elem;
	for(i = 1; i <= 6; i++){
		elem = document.getElementById("br" + i);
		elem.style.color = "#FFC000";
		elem.disabled = false;
		elem.classList.remove("animacija2");
		elem.classList.add("animacija1");
	}
	elem = document.getElementById("ekran");
	elem.innerHTML = "";
	document.getElementById("validator").innerHTML = "";
}
//za zavrsavanje
function ZavrsiMB(){
	var elem = document.getElementById("ekran");
	try{
		elem.innerHTML = eval(elem.innerHTML);	
	}
	catch(error){
		elem.innerHTML = 0;
	}
	var ToF = isNaN(elem.innerHTML);
	var razlika = Math.abs(document.getElementById("rjmb").innerHTML - elem.innerHTML);
	var poeni = Math.round((30 - razlika) / 10) * 10;
	if(razlika > 30 || ToF == true){poeni = 0;}
	if(razlika == 0){
		poeni += 5;
	}
	var dopo = document.getElementById("poeni").innerHTML * 1;
	dopo += poeni;
	alert("Osvojeni poeni: " + poeni + "\nUkupno: " + dopo);
	document.getElementById("poeni").innerHTML = dopo;
	document.getElementById("mb").innerHTML += ": ";
	document.getElementById("mb").innerHTML += poeni;
	document.getElementById("moj-broj").style.display = "none";
	document.getElementById("kontrolna-tabla").style.display = "block";
}