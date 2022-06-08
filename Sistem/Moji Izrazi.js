var mi_korak = 0;
var mi_rjesenje;
var mi_tabela = "Osvojeni poeni:\n";
function MI_Dalje(){
	if(mi_korak < 5){
		mi_korak++;
		var expresion = Daj_Izraz();
		document.getElementById("mi-izraz").value = expresion;
		mi_rjesenje = Number(eval(expresion)).toFixed(2) * 1;
		var buttons = document.getElementsByClassName("mi-dugme");
		for(var i = 0;i < 4;i++){
			if(buttons[i].innerHTML == "Dalje") continue;
			buttons[i].innerHTML = "";
		}
		buttons[random(1, 3)].innerHTML = mi_rjesenje;
		for(var i = 1;i < 4;i++){
			var sign = "+-";
			var which = (sign[random(0, 1)] + "1")*1
			if(buttons[i].innerHTML != "") continue;
			buttons[i].innerHTML = (mi_rjesenje + random(1, 7) * which).toFixed(2)*1;
		}
		document.getElementById("tajmer").value = "60";
	}
	else MI_Kraj();
}
function MI_Tajmer(){
	tajmer = document.getElementById("tajmer");
	if(tajmer.value == 0){
		MI_Check("Dalje");
	}
	tajmer.value -= 1;
}
function MI_Check(solution){
	var pts = 0, bonus = 0, msg = "";
	if(solution*1 == mi_rjesenje){
		pts = 5;
		bonus = ((document.getElementById("tajmer").value*1 / 60) * 15).toFixed(0) * 1;
		var song = new Audio("Izvori/tacno.mp3");
		song.play();
	}
	else if(solution != "Dalje"){
		msg += "Rjesenje je: " + mi_rjesenje;
		pts = -5;
		var song = new Audio("Izvori/netacno.mp3");
		song.play();
	}else{
		msg += "Rjesenje je: " + mi_rjesenje;
		var song = new Audio("Izvori/netacno.mp3");
		song.play();
	}
	msg += "\nOsvojeni poeni: " + pts;
	msg += "\nBonus poeni: " + bonus;
	msg += "\nUkupno: " + (pts+bonus);
	alert(msg);
	mi_tabela += mi_korak + ". " + pts + " + " + bonus + " = " + (pts+bonus) + "\n";
	var kasa = document.getElementById("mi-kasa");
	kasa.value = kasa.value * 1 + (pts+bonus);
	MI_Dalje();
}
function random(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function Daj_Izraz(){
	var parts = [];
	var operands = [];
	var operators = [];
	var l = random(3, 5);
	
	for(var i = 0;i < l;i++){
		var which = random(1, 10);
		if(which <= 5){
			parts[i] = operands[i] = random(1, 10);
		}
		else if(which <= 8){
			parts[i] = Daj_Prostu_Zagradu();
			operands[i] = eval(parts[i]);
		}
		else{
			parts[i] = Daj_Slozenu_Zagradu();
			operands[i] = eval(parts[i]);
		}
	}
	
	var br = 0;
	
	while(br < l-1){
		var which = random(1, 15), symbol;
		if(which <= 5) symbol = "+";
		else if(which <= 10) symbol = "-";
		else if(which <= 14) symbol = "*";
		else symbol = "/";
		if(symbol == "/" && operands[br] == 0){
			
		}else{
			operators[br++] = symbol;
		}
	}
	
	var expresion = "(";
	
	for(var i = 0;i < l-1;i++){
		expresion += parts[i] + operators[i];
	}
	
	expresion += parts[l-1] + ")";
	return expresion;
}
function Daj_Slozenu_Zagradu(){
	var parts = [];
	var operands = [];
	var operators = [];
	var l = random(2, 3);
	
	for(var i = 0;i < l;i++){
		var which = random(1, 10);
		if(which <= 7){
			parts[i] = operands[i] = random(1, 10);
		}
		else{
			parts[i] = Daj_Prostu_Zagradu();
			operands[i] = eval(parts[i]);
		}
	}
	
	var br = 0;
	
	while(br < l-1){
		var which = random(1, 15), symbol;
		if(which <= 5) symbol = "+";
		else if(which <= 10) symbol = "-";
		else if(which <= 14) symbol = "*";
		else symbol = "/";
		if(symbol == "/" && operands[i] == 0){
			
		}else{
			operators[br++] = symbol;
		}
	}
	
	var expresion = "(";
	
	for(var i = 0;i < l-1;i++){
		expresion += parts[i] + operators[i];
	}
	
	expresion += parts[l-1] + ")";
	return expresion;
}
function Daj_Prostu_Zagradu(){
	var operands = [];
	var operators = [];
	var l = random(2, 3);
	
	for(var i = 0;i < l;i++){
		operands[i] = random(1, 10);
	}
	
	for(var i = 0;i < l-1;i++){
		var which = random(1, 15);
		if(which <= 5) operators[i] = "+";
		else if(which <= 10) operators[i] = "-";
		else if(which <= 14) operators[i] = "*";
		else operators[i] = "/";
	}
	
	var expresion = "(";
	
	for(var i = 0;i < l-1;i++){
		expresion += operands[i] + operators[i];
	}
	
	expresion += operands[l-1] + ")";
	return expresion;
}
function MI_Kraj(){
	var dopo = document.getElementById("poeni").innerHTML * 1;
	var pts = document.getElementById("mi-kasa").value * 1;
	document.getElementById("mi").innerHTML += ": " + pts;
	document.getElementById("poeni").innerHTML = dopo + pts;
	document.getElementById("moji-izrazi").style.display = "none";
	document.getElementById("kontrolna-tabla").style.display = "block";
	clearInterval(vrijeme);
	mi_tabela += "Ukupno: " + pts;
	document.getElementById("tajmer").value = 0;
	alert(mi_tabela);
}