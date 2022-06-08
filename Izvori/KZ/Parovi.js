function StvoriTijeloP(){
	var inHTML = '<div class="doppop" id="doppop">Kasa: <b id="kasapar">34</b><hr width="100%" size="3" color="black" /><center><table><tr><td id="pk1"></td><td id="pk2"></td><td id="pk3"></td><td id="pk4"></td></tr><tr><td id="pk5"></td><td id="pk6"></td><td id="pk7"></td><td id="pk8"></td></tr><tr><td id="pk9"></td><td id="pk10"></td><td id="pk11"></td><td id="pk12"></td></tr><tr><td id="pk13"></td><td id="pk14"></td><td id="pk15"></td><td id="pk16"></td></tr><tr><td id="pk17"></td><td id="pk18"></td><td id="pk19"></td><td id="pk20"></td></tr></table></center><b style="display: none;" id="kart1"></b><b style="display: none;" id="previd"></b><b style="display: none;" id="brparovi">10</b></div>';
	document.getElementById("mini-igra").innerHTML = inHTML;
}
function ParoviZad(){
	StvoriTijeloP();
	document.getElementById("tocak").style.display = "none";
	document.getElementById("tocak").style.transform = "rotate(0deg)";
	document.getElementById("cet2").classList.remove("izabrani");
	document.getElementById("cet2").disabled = true;
	document.getElementById("stopkz").style.display = "none";
	document.getElementById("mini-igra").style.display = "block";
	document.getElementById("tajmer").value = 90;
	vrijeme = setInterval(TajmerP, 1000);
	IzmjesajP();
}
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
		document.getElementById("pk" + i).classList.add("par" + b);
		var imgclc = "<img src='css/Parovi/poledjina.png' onclick='ProvjeraP(" + b + ", this)'" + "id='brkar" + id + "'></img>";
		document.getElementById("pk" + i).innerHTML = imgclc;
	}
}
function ProvjeraP(br, elem){
	var kar = document.getElementById("kart1").innerHTML;
	var play;
	elem.style.display = "none";
	if(kar == ''){
		document.getElementById("kart1").innerHTML = br;
		document.getElementById("previd").innerHTML = elem.id;
	}else{
		if(kar * 1 != br){
			var n = document.getElementById("previd").innerHTML;
			document.getElementById("kasapar").innerHTML -= 2;
			play = new Audio("Izvori/netacno.mp3");
			play.play()
			setTimeout(function(){document.getElementById(n).style.display = "block";elem.style.display = "block";}, 750)
		}else{document.getElementById("brparovi").innerHTML -= 1;play = new Audio("Izvori/tacno.mp3");play.play()}
		document.getElementById("kart1").innerHTML = "";
		document.getElementById("previd").innerHTML = "";
		if(document.getElementById("brparovi").innerHTML * 1 == 0){
			setTimeout(KrajP, 500);
		}
		if(document.getElementById("kasapar").innerHTML * 1 == 0){document.getElementById("tajmer").value = 2}
	}
}
function TajmerP(){
	var tajmer = document.getElementById("tajmer");
	if(tajmer.value * 1 == 0){
		var oduzmi = document.getElementById("brparovi").innerHTML;
		clearInterval(vrijeme);
		pointskz += ((10 - oduzmi) * 2);
		alertuj = "Osvojeni: " + pointskz + "\nBonus: " + bonuspoints +"\nUkupno: " + (pointskz+bonuspoints);
		alert(alertuj);
		document.getElementById("mini-igra").style.display = "none";
		if(brkz < 2){Play();
			document.getElementById("tocak").style.display = "block";
			document.getElementById("stopkz").style.display = "block";
		}
		else{document.getElementById("kz").innerHTML += ": ";document.getElementById("kz").innerHTML += (pointskz+bonuspoints);document.getElementById("kontrolna-tabla").style.display = "block";document.getElementById("mini-igra").style.display = "none";document.getElementById("poeni").innerHTML = document.getElementById("poeni").innerHTML * 1 + (pointskz+bonuspoints);}
	}
	tajmer.value-=1;
}
function KrajP(){
	clearInterval(vrijeme);
	pointskz += (document.getElementById("kasapar").innerHTML * 1);
	var n = document.getElementById("tajmer").value * 1;
	bonuspoints += (Math.ceil(n / 4));
	alertuj = "Osvojeni: " + pointskz + "\nBonus: " + bonuspoints +"\nUkupno: " + (pointskz+bonuspoints);
	alert(alertuj);
	document.getElementById("mini-igra").style.display = "none";
	if(brkz < 2){Play();
		document.getElementById("tocak").style.display = "block";
		document.getElementById("stopkz").style.display = "block";
	}
	else{document.getElementById("kz").innerHTML += ": ";document.getElementById("kz").innerHTML += (pointskz+bonuspoints);document.getElementById("kontrolna-tabla").style.display = "block";document.getElementById("mini-igra").style.display = "none";document.getElementById("poeni").innerHTML = document.getElementById("poeni").innerHTML * 1 + (pointskz+bonuspoints);}
}