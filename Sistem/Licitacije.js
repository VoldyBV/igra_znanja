var brsp = 3;
var rdbr = 1;
var click = 1;
//Provjeravam ipsravnost
function Provjeri(a, id){
	if(a == 1){
		click++;
		PustiZvuk("tacno");
		document.getElementById(id).style.backgroundColor = "#C6EFCE";
		document.getElementById(id).classList.add("tacno");
		var poeni = document.getElementById("kasalic");
		poeni.innerHTML = poeni.innerHTML * 1 + 3;
		var tajmer = document.getElementById("tajmer");
	}
	else{
		click++;
		PustiZvuk("netacno");
		document.getElementById(id).style.backgroundColor = "#FFC7CE";
		document.getElementById(id).classList.add("netacno");
		var tajmer = document.getElementById("tajmer");
		}
	
	
	document.getElementById("lic" + rdbr).disabled = true;
	rdbr++;
	document.getElementById("lic" + rdbr).disabled = true;
	rdbr++;
	if(brsp < 15){
		document.getElementById("tajmer").value = 7;
		document.getElementById("lic" + brsp).style.backgroundColor = "#C04D50";
		document.getElementById("lic" + brsp).classList.add("animacija");
		brsp++;
		document.getElementById("lic" + brsp).style.backgroundColor = "#C04D50";
		document.getElementById("lic" + brsp).classList.add("animacija");
		brsp++;
	}
}

//Kraj igre
function KrajLIC(){
	var dopo = document.getElementById("poeni").innerHTML * 1;
	var poeni = document.getElementById("kasalic").innerHTML * 1;
	var bonus = Math.floor(poeni/7) * 3;
	dopo += (poeni + bonus);
	alert("Osvojeni poeni: " + poeni + "\nBonus: "+ bonus +"\nUkupno poena: " + (poeni+bonus));
	document.getElementById("lic").innerHTML += ": ";
	document.getElementById("lic").innerHTML += (poeni+bonus);
	document.getElementById("poeni").innerHTML = dopo;
	document.getElementById("kontrolna-tabla").style.display = "block";
	document.getElementById("licitacije").style.display = "none";
}
//tajmeri
function TajmerLIC1(){
	var id = "lic";
	var tajmer = document.getElementById("tajmer");
	if(tajmer.value * 1 == 0){
		switch(click){
			case 1: id += 1;Provjeri(0, id);break;
			case 2: id += 3;Provjeri(0, id);break;
			case 3: id += 6;Provjeri(0, id);break;
			case 4: id += 8;Provjeri(0, id);break;
			case 5: id += 9;Provjeri(0, id);break;
			case 6: id += 11;Provjeri(0, id);break;
			case 7: id += 14;Provjeri(0, id);break;
			default: KrajLIC();clearInterval(vrijeme);break;
		}
	}else{
		tajmer.value -= 1;
		}
}
function TajmerLIC2(){
	var id = "lic";
	var tajmer = document.getElementById("tajmer");
	if(tajmer.value * 1 == 0){
		switch(click){
			case 1: id += 2;Provjeri(0, id);break;
			case 2: id += 4;Provjeri(0, id);break;
			case 3: id += 6;Provjeri(0, id);break;
			case 4: id += 8;Provjeri(0, id);break;
			case 5: id += 9;Provjeri(0, id);break;
			case 6: id += 11;Provjeri(0, id);break;
			case 7: id += 13;Provjeri(0, id);break;
			default: KrajLIC();clearInterval(vrijeme);break;
		}
	}else{
		tajmer.value -= 1;
		}
}
function TajmerLIC3(){
	var id = "lic";
	var tajmer = document.getElementById("tajmer");
	if(tajmer.value * 1 == 0){
		switch(click){
			case 1: id += 1;Provjeri(0, id);break;
			case 2: id += 4;Provjeri(0, id);break;
			case 3: id += 6;Provjeri(0, id);break;
			case 4: id += 7;Provjeri(0, id);break;
			case 5: id += 10;Provjeri(0, id);break;
			case 6: id += 12;Provjeri(0, id);break;
			case 7: id += 13;Provjeri(0, id);break;
			default: KrajLIC();clearInterval(vrijeme);break;
		}
	}else{
		tajmer.value -= 1;
		}
}
function TajmerLIC4(){
	var id = "lic";
	var tajmer = document.getElementById("tajmer");
	if(tajmer.value * 1 == 0){
		switch(click){
			case 1: id += 1;Provjeri(0, id);break;
			case 2: id += 4;Provjeri(0, id);break;
			case 3: id += 5;Provjeri(0, id);break;
			case 4: id += 8;Provjeri(0, id);break;
			case 5: id += 9;Provjeri(0, id);break;
			case 6: id += 11;Provjeri(0, id);break;
			case 7: id += 13;Provjeri(0, id);break;
			default: KrajLIC();clearInterval(vrijeme);break;
		}
	}else{
		tajmer.value -= 1;
		}
}
function TajmerLIC5(){
	var id = "lic";
	var tajmer = document.getElementById("tajmer");
	if(tajmer.value * 1 == 0){
		switch(click){
			case 1: id += 2;Provjeri(0, id);break;
			case 2: id += 3;Provjeri(0, id);break;
			case 3: id += 5;Provjeri(0, id);break;
			case 4: id += 7;Provjeri(0, id);break;
			case 5: id += 10;Provjeri(0, id);break;
			case 6: id += 12;Provjeri(0, id);break;
			case 7: id += 13;Provjeri(0, id);break;
			default: KrajLIC();clearInterval(vrijeme);break;
		}
	}else{
		tajmer.value -= 1;
		}
}
//Baza podataka
function MainLIC(){
	var svic = Math.floor(Math.random() * 10) + 1;
	switch(svic){
		case 1: IspisLIC_1();vrijeme = setInterval(TajmerLIC1, 1000);break;
		case 2: IspisLIC_2();vrijeme = setInterval(TajmerLIC1, 1000);break;
		case 3: IspisLIC_3();vrijeme = setInterval(TajmerLIC2, 1000);break;
		case 4: IspisLIC_4();vrijeme = setInterval(TajmerLIC2, 1000);break;
		case 5: IspisLIC_5();vrijeme = setInterval(TajmerLIC3, 1000);break;
		case 6: IspisLIC_6();vrijeme = setInterval(TajmerLIC3, 1000);break;
		case 7: IspisLIC_7();vrijeme = setInterval(TajmerLIC4, 1000);break;
		case 8: IspisLIC_8();vrijeme = setInterval(TajmerLIC4, 1000);break;
		case 9: IspisLIC_9();vrijeme = setInterval(TajmerLIC5, 1000);break;
		case 10: IspisLIC_10();vrijeme = setInterval(TajmerLIC5, 1000);break;
		default: break;
	}
}
function IspisLIC_1(){
	var inHTML = 
			"<table class='tabele'><tr><td><button id='lic1' class='osnovno licpo1' onclick='Provjeri(0, this.id)'>Pingvin</button></td><td><button id='lic2' class='osnovno licpo2' onclick='Provjeri(1, this.id)'>Zirafa</button></td></tr><tr><td><button id='lic3' class='osnovno licpo1' onclick='Provjeri(0, this.id)' style='background-color: #FFC000;'>Majmun</button></td><td><button id='lic4' class='osnovno licpo2' onclick='Provjeri(1, this.id)' style='background-color: #FFC000;'>Lav</button></td></tr><tr><td><button id='lic5' class='osnovno licpo1' onclick='Provjeri(1, this.id)' style='background-color: #FFC000;'>Antilopa</button></td><td><button id='lic6' class='osnovno licpo2' onclick='Provjeri(0, this.id)' style='background-color: #FFC000;'>Macka</button></td></tr><tr><td><button id='lic7' class='osnovno licpo1' onclick='Provjeri(1, this.id)' style='background-color: #FFC000;'>Slon</button></td><td><button id='lic8' class='osnovno licpo2' onclick='Provjeri(0, this.id)' style='background-color: #FFC000;'>Vjeverica</button></td></tr><tr><td><button id='lic9' class='osnovno licpo1' onclick='Provjeri(0, this.id)' style='background-color: #FFC000;'>Vjeverica</button></td><td><button id='lic10' class='osnovno licpo2' onclick='Provjeri(1, this.id)' style='background-color: #FFC000;'>Zebra</button></td></tr><tr><td><button id='lic11' class='osnovno licpo1' onclick='Provjeri(0, this.id)' style='background-color: #FFC000;'>Sivi soko</button></td><td><button id='lic12' class='osnovno licpo2' onclick='Provjeri(1, this.id)' style='background-color: #FFC000;'>Termiti</button></td></tr><tr><td><button id='lic13' class='osnovno licpo1' onclick='Provjeri(1, this.id)' style='background-color: #FFC000;'>Gepard</button></td><td><button id='lic14' class='osnovno licpo2' onclick='Provjeri(0, this.id)' style='background-color: #FFC000;'>Krokodil</button></td></tr></table>"
	document.getElementById("licitacije").innerHTML += inHTML;
	document.getElementById("tema").innerHTML = "Zivotinje savane";
}
function IspisLIC_2(){
	var inHTML = 
			'<table class="tabele"><tr><td><button id="lic1" class="osnovno licpo1" onclick="Provjeri(0, this.id)">Sah</button></td><td><button id="lic2" class="osnovno licpo2" onclick="Provjeri(1, this.id)">Remi</button></td></tr><tr><td><button id="lic3" class="osnovno licpo1" onclick="Provjeri(0, this.id)" style="background-color: #FFC000;">Monopol</button></td><td><button id="lic4" class="osnovno licpo2" onclick="Provjeri(1, this.id)" style="background-color: #FFC000;">Tablic</button></td></tr><tr><td><button id="lic5" class="osnovno licpo1" onclick="Provjeri(1, this.id)" style="background-color: #FFC000;">Dama</button></td><td><button id="lic6" class="osnovno licpo2" onclick="Provjeri(0, this.id)" style="background-color: #FFC000;">Mica</button></td></tr><tr><td><button id="lic7" class="osnovno licpo1" onclick="Provjeri(1, this.id)" style="background-color: #FFC000;">Uno</button></td><td><button id="lic8" class="osnovno licpo2" onclick="Provjeri(0, this.id)" style="background-color: #FFC000;">Sah</button></td></tr><tr><td><button id="lic9" class="osnovno licpo1" onclick="Provjeri(0, this.id)" style="background-color: #FFC000;">Tenis</button></td><td><button id="lic10" class="osnovno licpo2" onclick="Provjeri(1, this.id)" style="background-color: #FFC000;">Poker</button></td></tr><tr><td><button id="lic11" class="osnovno licpo1" onclick="Provjeri(0, this.id)" style="background-color: #FFC000;">Kriket</button></td><td><button id="lic12" class="osnovno licpo2" onclick="Provjeri(1, this.id)" style="background-color: #FFC000;">Rauba</button></td></tr><tr><td><button id="lic13" class="osnovno licpo1" onclick="Provjeri(1, this.id)" style="background-color: #FFC000;">Pasijans</button></td><td><button id="lic14" class="osnovno licpo2" onclick="Provjeri(0, this.id)" style="background-color: #FFC000;">Bilijar</button></td></tr></table>'
	document.getElementById("licitacije").innerHTML += inHTML;
	document.getElementById("tema").innerHTML = "Kartaske igre";
}
function IspisLIC_3(){
	var inHTML = 
			'<table class="tabele"><tr><td><button id="lic1" class="osnovno licpo1" onclick="Provjeri(1, this.id)">Bjelasnica</button></td><td><button id="lic2" class="osnovno licpo2" onclick="Provjeri(0, this.id)">Jahorina</button></td></tr><tr><td><button id="lic3" class="osnovno licpo1" onclick="Provjeri(1, this.id)" style="background-color: #FFC000;">Zlatibor</button></td><td><button id="lic4" class="osnovno licpo2" onclick="Provjeri(0, this.id)" style="background-color: #FFC000;">Kozara</button></td></tr><tr><td><button id="lic5" class="osnovno licpo1" onclick="Provjeri(1, this.id)" style="background-color: #FFC000;">Tara</button></td><td><button id="lic6" class="osnovno licpo2" onclick="Provjeri(0, this.id)" style="background-color: #FFC000;">Fruska Gora</button></td></tr><tr><td><button id="lic7" class="osnovno licpo1" onclick="Provjeri(1, this.id)" style="background-color: #FFC000;">Vlasic</button></td><td><button id="lic8" class="osnovno licpo2" onclick="Provjeri(0, this.id)" style="background-color: #FFC000;">Grmec</button></td></tr><tr><td><button id="lic9" class="osnovno licpo1" onclick="Provjeri(0, this.id)" style="background-color: #FFC000;">Manjaca</button></td><td><button id="lic10" class="osnovno licpo2" onclick="Provjeri(1, this.id)" style="background-color: #FFC000;">Treskavica</button></td></tr><tr><td><button id="lic11" class="osnovno licpo1" onclick="Provjeri(0, this.id)" style="background-color: #FFC000;">Romanija</button></td><td><button id="lic12" class="osnovno licpo2" onclick="Provjeri(1, this.id)" style="background-color: #FFC000;">Vranica</button></td></tr><tr><td><button id="lic13" class="osnovno licpo1" onclick="Provjeri(0, this.id)" style="background-color: #FFC000;">Grmec</button></td><td><button id="lic14" class="osnovno licpo2" onclick="Provjeri(1, this.id)" style="background-color: #FFC000;">Jahorina</button></td></tr></table>'
	document.getElementById("licitacije").innerHTML += inHTML;
	document.getElementById("tema").innerHTML = "Koja je planina visa";
}
function IspisLIC_4(){
	var inHTML = 
			'<table class="tabele"><tr><td><button id="lic1" class="osnovno licpo1" onclick="Provjeri(1, this.id)">Srbija</button></td><td><button id="lic2" class="osnovno licpo2" onclick="Provjeri(0, this.id)">BiH</button></td></tr><tr><td><button id="lic3" class="osnovno licpo1" onclick="Provjeri(1, this.id)" style="background-color: #FFC000;">Srbija</button></td><td><button id="lic4" class="osnovno licpo2" onclick="Provjeri(0, this.id)" style="background-color: #FFC000;">Hrvatska</button></td></tr><tr><td><button id="lic5" class="osnovno licpo1" onclick="Provjeri(1, this.id)" style="background-color: #FFC000;">Makedonija</button></td><td><button id="lic6" class="osnovno licpo2" onclick="Provjeri(0, this.id)" style="background-color: #FFC000;">Crna Gora</button></td></tr><tr><td><button id="lic7" class="osnovno licpo1" onclick="Provjeri(1, this.id)" style="background-color: #FFC000;">Grcka</button></td><td><button id="lic8" class="osnovno licpo2" onclick="Provjeri(0, this.id)" style="background-color: #FFC000;">Slovenija</button></td></tr><tr><td><button id="lic9" class="osnovno licpo1" onclick="Provjeri(0, this.id)" style="background-color: #FFC000;">BiH</button></td><td><button id="lic10" class="osnovno licpo2" onclick="Provjeri(1, this.id)" style="background-color: #FFC000;">Bugarska</button></td></tr><tr><td><button id="lic11" class="osnovno licpo1" onclick="Provjeri(0, this.id)" style="background-color: #FFC000;">Madjarska</button></td><td><button id="lic12" class="osnovno licpo2" onclick="Provjeri(1, this.id)" style="background-color: #FFC000;">Rumunija</button></td></tr><tr><td><button id="lic13" class="osnovno licpo1" onclick="Provjeri(0, this.id)" style="background-color: #FFC000;">Crna Gora</button></td><td><button id="lic14" class="osnovno licpo2" onclick="Provjeri(1, this.id)" style="background-color: #FFC000;">Hrvatska</button></td></tr></table>'
	document.getElementById("licitacije").innerHTML += inHTML;
	document.getElementById("tema").innerHTML = "Koja je drzava veca";
}	
function IspisLIC_5(){
	var inHTML = 
			'<table class="tabele"><tr><td><button id="lic1" class="osnovno licpo1" onclick="Provjeri(0, this.id)">Balticko</button></td><td><button id="lic2" class="osnovno licpo2" onclick="Provjeri(1, this.id)">Sjeverno</button></td></tr><tr><td><button id="lic3" class="osnovno licpo1" onclick="Provjeri(1, this.id)" style="background-color: #FFC000;">Sredozemno</button></td><td><button id="lic4" class="osnovno licpo2" onclick="Provjeri(0, this.id)" style="background-color: #FFC000;">Norvesko</button></td></tr><tr><td><button id="lic5" class="osnovno licpo1" onclick="Provjeri(1, this.id)" style="background-color: #FFC000;">Tirensko</button></td><td><button id="lic6" class="osnovno licpo2" onclick="Provjeri(0, this.id)" style="background-color: #FFC000;">Jonsko</button></td></tr><tr><td><button id="lic7" class="osnovno licpo1" onclick="Provjeri(0, this.id)" style="background-color: #FFC000;">Tirensko</button></td><td><button id="lic8" class="osnovno licpo2" onclick="Provjeri(1, this.id)" style="background-color: #FFC000;">Crno</button></td></tr><tr><td><button id="lic9" class="osnovno licpo1" onclick="Provjeri(1, this.id)" style="background-color: #FFC000;">Kaspijsko</button></td><td><button id="lic10" class="osnovno licpo2" onclick="Provjeri(0, this.id)" style="background-color: #FFC000;">Jadransko</button></td></tr><tr><td><button id="lic11" class="osnovno licpo1" onclick="Provjeri(1, this.id)" style="background-color: #FFC000;">Barencovo</button></td><td><button id="lic12" class="osnovno licpo2" onclick="Provjeri(0, this.id)" style="background-color: #FFC000;">Jadransko</button></td></tr><tr><td><button id="lic13" class="osnovno licpo1" onclick="Provjeri(0, this.id)" style="background-color: #FFC000;">Sjeverno</button></td><td><button id="lic14" class="osnovno licpo2" onclick="Provjeri(1, this.id)" style="background-color: #FFC000;">Barencovo</button></td></tr></table>'
	document.getElementById("licitacije").innerHTML += inHTML;
	document.getElementById("tema").innerHTML = "Koje je more vece";
}
function IspisLIC_6(){
	var inHTML = 
			'<table class="tabele"><tr><td><button id="lic1" class="osnovno licpo1" onclick="Provjeri(0, this.id)">N</button></td><td><button id="lic2" class="osnovno licpo2" onclick="Provjeri(1, this.id)">s</button></td></tr><tr><td><button id="lic3" class="osnovno licpo1" onclick="Provjeri(1, this.id)" style="background-color: #FFC000;">kg</button></td><td><button id="lic4" class="osnovno licpo2" onclick="Provjeri(0, this.id)" style="background-color: #FFC000;">g</button></td></tr><tr><td><button id="lic5" class="osnovno licpo1" onclick="Provjeri(1, this.id)" style="background-color: #FFC000;">mol</button></td><td><button id="lic6" class="osnovno licpo2" onclick="Provjeri(0, this.id)" style="background-color: #FFC000;">km/h</button></td></tr><tr><td><button id="lic7" class="osnovno licpo1" onclick="Provjeri(0, this.id)" style="background-color: #FFC000;">m/s</button></td><td><button id="lic8" class="osnovno licpo2" onclick="Provjeri(1, this.id)" style="background-color: #FFC000;">cd</button></td></tr><tr><td><button id="lic9" class="osnovno licpo1" onclick="Provjeri(1, this.id)" style="background-color: #FFC000;">K</button></td><td><button id="lic10" class="osnovno licpo2" onclick="Provjeri(0, this.id)" style="background-color: #FFC000;">Wb</button></td></tr><tr><td><button id="lic11" class="osnovno licpo1" onclick="Provjeri(1, this.id)" style="background-color: #FFC000;">A</button></td><td><button id="lic12" class="osnovno licpo2" onclick="Provjeri(0, this.id)" style="background-color: #FFC000;">km</button></td></tr><tr><td><button id="lic13" class="osnovno licpo1" onclick="Provjeri(0, this.id)" style="background-color: #FFC000;">N/kg</button></td><td><button id="lic14" class="osnovno licpo2" onclick="Provjeri(1, this.id)" style="background-color: #FFC000;">m</button></td></tr></table>'
	document.getElementById("licitacije").innerHTML += inHTML;
	document.getElementById("tema").innerHTML = "Osnovne jedinice SI sistema";
}
function IspisLIC_7(){
	var inHTML = 
			'<table class="tabele"><tr><td><button id="lic1" class="osnovno licpo1" onclick="Provjeri(1, this.id)">Zevs</button></td><td><button id="lic2" class="osnovno licpo2" onclick="Provjeri(0, this.id)">Mars</button></td></tr><tr><td><button id="lic3" class="osnovno licpo1" onclick="Provjeri(1, this.id)" style="background-color: #FFC000;">Demetra</button></td><td><button id="lic4" class="osnovno licpo2" onclick="Provjeri(0, this.id)" style="background-color: #FFC000;">Venera</button></td></tr><tr><td><button id="lic5" class="osnovno licpo1" onclick="Provjeri(0, this.id)" style="background-color: #FFC000;">Nepun</button></td><td><button id="lic6" class="osnovno licpo2" onclick="Provjeri(1, this.id)" style="background-color: #FFC000;">Posjedon</button></td></tr><tr><td><button id="lic7" class="osnovno licpo1" onclick="Provjeri(1, this.id)" style="background-color: #FFC000;">Dionis</button></td><td><button id="lic8" class="osnovno licpo2" onclick="Provjeri(0, this.id)" style="background-color: #FFC000;">Mars</button></td></tr><tr><td><button id="lic9" class="osnovno licpo1" onclick="Provjeri(0, this.id)" style="background-color: #FFC000;">Jupiter</button></td><td><button id="lic10" class="osnovno licpo2" onclick="Provjeri(1, this.id)" style="background-color: #FFC000;">Had</button></td></tr><tr><td><button id="lic11" class="osnovno licpo1" onclick="Provjeri(0, this.id)" style="background-color: #FFC000;">Uran</button></td><td><button id="lic12" class="osnovno licpo2" onclick="Provjeri(1, this.id)" style="background-color: #FFC000;">Hera</button></td></tr><tr><td><button id="lic13" class="osnovno licpo1" onclick="Provjeri(0, this.id)" style="background-color: #FFC000;">Saturn</button></td><td><button id="lic14" class="osnovno licpo2" onclick="Provjeri(1, this.id)" style="background-color: #FFC000;">Afrodita</button></td></tr></table>'
	document.getElementById("licitacije").innerHTML += inHTML;
	document.getElementById("tema").innerHTML = "Bogovi grcke mitoligije"
}
function IspisLIC_8(){
	var inHTML = 
			'<table class="tabele"><tr><td><button id="lic1" class="osnovno licpo1" onclick="Provjeri(1, this.id)">Tastatura</button></td><td><button id="lic2" class="osnovno licpo2" onclick="Provjeri(0, this.id)">Hard Disk</button></td></tr><tr><td><button id="lic3" class="osnovno licpo1" onclick="Provjeri(1, this.id)" style="background-color: #FFC000;">Mis</button></td><td><button id="lic4" class="osnovno licpo2" onclick="Provjeri(0, this.id)" style="background-color: #FFC000;">Modem</button></td></tr><tr><td><button id="lic5" class="osnovno licpo1" onclick="Provjeri(0, this.id)" style="background-color: #FFC000;">Monitor</button></td><td><button id="lic6" class="osnovno licpo2" onclick="Provjeri(1, this.id)" style="background-color: #FFC000;">Kamera</button></td></tr><tr><td><button id="lic7" class="osnovno licpo1" onclick="Provjeri(1, this.id)" style="background-color: #FFC000;">Skener</button></td><td><button id="lic8" class="osnovno licpo2" onclick="Provjeri(0, this.id)" style="background-color: #FFC000;">Stampac</button></td></tr><tr><td><button id="lic9" class="osnovno licpo1" onclick="Provjeri(0, this.id)" style="background-color: #FFC000;">Slusalice</button></td><td><button id="lic10" class="osnovno licpo2" onclick="Provjeri(1, this.id)" style="background-color: #FFC000;">Mikrofon</button></td></tr><tr><td><button id="lic11" class="osnovno licpo1" onclick="Provjeri(0, this.id)" style="background-color: #FFC000;">Zvucnik</button></td><td><button id="lic12" class="osnovno licpo2" onclick="Provjeri(1, this.id)" style="background-color: #FFC000;">Dzojstik</button></td></tr><tr><td><button id="lic13" class="osnovno licpo1" onclick="Provjeri(0, this.id)" style="background-color: #FFC000;">Projektor</button></td><td><button id="lic14" class="osnovno licpo2" onclick="Provjeri(1, this.id)" style="background-color: #FFC000;">Web Kamera</button></td></tr></table>'
	document.getElementById("licitacije").innerHTML += inHTML;
	document.getElementById("tema").innerHTML = "Ulazni uredjaji racunara"
}
function IspisLIC_9(){
	var inHTML = 
			'<table class="tabele"><tr><td><button id="lic1" class="osnovno licpo1" onclick="Provjeri(1, this.id)">Projektor</button></td><td><button id="lic2" class="osnovno licpo2" onclick="Provjeri(0, this.id)">Hard Disk</button></td></tr><tr><td><button id="lic3" class="osnovno licpo1" onclick="Provjeri(0, this.id)" style="background-color: #FFC000;">Mikrofon</button></td><td><button id="lic4" class="osnovno licpo2" onclick="Provjeri(1, this.id)" style="background-color: #FFC000;">Monitor</button></td></tr><tr><td><button id="lic5" class="osnovno licpo1" onclick="Provjeri(0, this.id)" style="background-color: #FFC000;">DVD</button></td><td><button id="lic6" class="osnovno licpo2" onclick="Provjeri(1, this.id)" style="background-color: #FFC000;">Zvucnik</button></td></tr><tr><td><button id="lic7" class="osnovno licpo1" onclick="Provjeri(0, this.id)" style="background-color: #FFC000;">Tastatura</button></td><td><button id="lic8" class="osnovno licpo2" onclick="Provjeri(1, this.id)" style="background-color: #FFC000;">Slusalice</button></td></tr><tr><td><button id="lic9" class="osnovno licpo1" onclick="Provjeri(1, this.id)" style="background-color: #FFC000;">Stampac</button></td><td><button id="lic10" class="osnovno licpo2" onclick="Provjeri(0, this.id)" style="background-color: #FFC000;">Mis</button></td></tr><tr><td><button id="lic11" class="osnovno licpo1" onclick="Provjeri(1, this.id)" style="background-color: #FFC000;">Ploter</button></td><td><button id="lic12" class="osnovno licpo2" onclick="Provjeri(0, this.id)" style="background-color: #FFC000;">Dzojstik</button></td></tr><tr><td><button id="lic13" class="osnovno licpo1" onclick="Provjeri(0, this.id)" style="background-color: #FFC000;">Web Kamera</button></td><td><button id="lic14" class="osnovno licpo2" onclick="Provjeri(1, this.id)" style="background-color: #FFC000;">Projektor</button></td></tr></table>'
	document.getElementById("licitacije").innerHTML += inHTML;
	document.getElementById("tema").innerHTML = "Izlazni uredjaji racunara"
}
function IspisLIC_10(){
	var inHTML = 
			'<table class="tabele"><tr><td><button id="lic1" class="osnovno licpo1" onclick="Provjeri(1, this.id)">Modem</button></td><td><button id="lic2" class="osnovno licpo2" onclick="Provjeri(0, this.id)">Slusalice</button></td></tr><tr><td><button id="lic3" class="osnovno licpo1" onclick="Provjeri(0, this.id)" style="background-color: #FFC000;">Zvucnik</button></td><td><button id="lic4" class="osnovno licpo2" onclick="Provjeri(1, this.id)" style="background-color: #FFC000;">USB</button></td></tr><tr><td><button id="lic5" class="osnovno licpo1" onclick="Provjeri(0, this.id)" style="background-color: #FFC000;">Tastatura</button></td><td><button id="lic6" class="osnovno licpo2" onclick="Provjeri(1, this.id)" style="background-color: #FFC000;">Video kartica</button></td></tr><tr><td><button id="lic7" class="osnovno licpo1" onclick="Provjeri(0, this.id)" style="background-color: #FFC000;">Mikrofon</button></td><td><button id="lic8" class="osnovno licpo2" onclick="Provjeri(1, this.id)" style="background-color: #FFC000;">TV kartica</button></td></tr><tr><td><button id="lic9" class="osnovno licpo1" onclick="Provjeri(1, this.id)" style="background-color: #FFC000;">Hard disk</button></td><td><button id="lic10" class="osnovno licpo2" onclick="Provjeri(0, this.id)" style="background-color: #FFC000;">Ploter</button></td></tr><tr><td><button id="lic11" class="osnovno licpo1" onclick="Provjeri(1, this.id)" style="background-color: #FFC000;">CD-ROM</button></td><td><button id="lic12" class="osnovno licpo2" onclick="Provjeri(0, this.id)" style="background-color: #FFC000;">Dzojstik</button></td></tr><tr><td><button id="lic13" class="osnovno licpo1" onclick="Provjeri(0, this.id)" style="background-color: #FFC000;">Web Kamera</button></td><td><button id="lic14" class="osnovno licpo2" onclick="Provjeri(1, this.id)" style="background-color: #FFC000;">DVD</button></td></tr></table>'
	document.getElementById("licitacije").innerHTML += inHTML;
	document.getElementById("tema").innerHTML = "U/I uredjaji racunara"
}