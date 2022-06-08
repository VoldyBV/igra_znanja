var pile = [0, 0, 0, 0, 0, 0];
var sef_kor = 0;
function SefTajmer(){
	var time = document.getElementById("tajmer");
	if(time.value == 0){
		sef_kor = 6;
		SefKraj(0);
	}
	time.value -= 1;
}
function SefCode(){
	var a = document.getElementById("sef_sifra");
	for(var i = 0;i < 4;i++){
		var num =  Math.floor(Math.random() * 6);
		a.innerHTML += num;
		pile[num]++;
	}
}
function Validation(a){
	var b = "012345";
	if(b.search(a.value[a.value.length - 1]) == -1){
		a.value = a.value.slice(0, a.value.length - 1);
	}
}
function SefPotvrda(eve){
	if(eve.keyCode == 13){
		var elem = document.getElementById("code" + sef_kor);
		if(elem.value.length == 4){
			var code = document.getElementById("sef_sifra").innerHTML;
			if(code == elem.value) SefKraj(10);
			else Check(code, elem.value);
		}
	}
}
function Check(code, sifra){
	var zeleno = 0, zuto = 0;
	for(var i = 0;i < 4;i++){
		if(sifra[i] == code[i] && pile[sifra[i]*1] > 0){
			zeleno++;
			pile[sifra[i]*1]--;
		}
	}
	for(var i = 0;i < 4;i++){
		if(sifra[i] != code[i] && pile[sifra[i]*1] > 0){
			zuto++;
			pile[sifra[i]*1]--;
		}
	}
	if(zuto == 0 && zeleno == 0){
		var song = new Audio("Izvori/netacno.mp3");
		song.play();
	}else{
		var song = new Audio("Izvori/tacno.mp3");
		song.play();
	}
	for(var i = 0;i < 4;i++){
		if(zeleno > 0){
			document.getElementById("znak" + sef_kor + "-" + i).classList.add("tacno");
			zeleno--;
		}
		else if(zuto > 0){
			document.getElementById("znak" + sef_kor + "-" + i).classList.add("marker");
			zuto--;
		}
		else document.getElementById("znak" + sef_kor + "-" + i).classList.add("netacno");
	}
	SefNext();
}
function SefNext(){
	if(sef_kor + 1 < 7){
		document.getElementById("code" + sef_kor++).disabled = true;
		document.getElementById("code" + sef_kor).disabled = false;
		document.getElementById("code" + sef_kor).focus();
		var a = document.getElementById("sef_sifra");
		pile = [0, 0, 0, 0, 0, 0]
		for(var i = 0;i < 4;i++){
			pile[a.innerHTML[i] * 1]++;
		}
	}
	else {
		document.getElementById("tajmer").value = 1;
		var a = document.getElementById("sef_sifra").innerHTML;
		alert("Sifra je: " + a);
	}
}
function SefKraj(pts){
	var bonus = (6 - sef_kor) * 5;
	var dopo = document.getElementById("poeni").innerHTML * 1;
	alert("Osvojeni poeni: " + pts + "\nBonus: " + bonus + "\nUkupno: " + (pts + bonus));
	document.getElementById("poeni").innerHTML = dopo + pts + bonus;
	document.getElementById("safe").innerHTML += ": " + (pts + bonus);
	document.getElementById("sef").style.display = "none";
	document.getElementById("kontrolna-tabla").style.display = "block";
	clearInterval(vrijeme);
	document.getElementById("tajmer").value = 0;
}