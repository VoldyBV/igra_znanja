var br, broj_koraka = 1, rjesenjekpk;
function PoeniKPK(){
	var poeni = document.getElementById("kpkkasa" + broj_koraka);
	if(poeni.innerHTML <= 1){
		if(broj_koraka < 7){
			poeni.innerHTML = "";
			broj_koraka++;
			document.getElementById("kpkkasa" + broj_koraka).innerHTML = 15;
			document.getElementById("kpkk" + broj_koraka).innerHTML = Zadaj_KPK(br, broj_koraka);
			var rijec = document.getElementById("kpkk" + broj_koraka).innerHTML;
			if(rijec.length > 30){
				document.getElementById("PopUpK" + broj_koraka).innerHTML = rijec;
				rijec = rijec.slice(0, 31) + "...";
				document.getElementById("kpkk" + broj_koraka).innerHTML = rijec
			}
		}else{
			clearInterval(vrijeme);
			document.getElementById("kpkk8").value = RjesenjaKPK(br);
			for(var i = 8;i > 0;i--){
				document.getElementById("kpkk" + i).classList.add("netacno");
			}
			var zvuk = new Audio("Izvori/netacno.mp3");
			zvuk.play();
			setTimeout(function(){UgasiKPK(0, 0)}, 15000);
		}
	}else{poeni.innerHTML -= 1}
}
function TajmerKPK(){
	var tajmer = document.getElementById("tajmer");
	if(tajmer.value < 1){
		document.getElementById("kpkkasa" + broj_koraka).innerHTML = 2;
		clearInterval(vrijeme);
		vrijeme = setInterval(PoeniKPK, 1000);
	}else{tajmer.value -= 1}
}
function TajmerGasi(){
	var tajmer = document.getElementById("tajmer");
	if(tajmer.value < 1){
		var poeni = document.getElementById("kpkkasa" + broj_koraka).innerHTML * 1;
		var bonus = (3 * (8 - broj_koraka) * 10) / 4;
		bonus = Math.floor(bonus);
		UgasiKPK(poeni, bonus);
		poeni+=bonus;
		document.getElementById("kpk").innerHTML = document.getElementById("kpk").innerHTML + ": " + poeni;
		document.getElementById("kpk").style.fontSize = 25;
		document.getElementById("poeni").innerHTML = document.getElementById("poeni").innerHTML * 1 + poeni;
		clearInterval(vrijeme);
	}else{tajmer.value -= 1}
}
function UnosimKPK(){
	document.getElementById("tajmer").value = 15;
	clearInterval(vrijeme);
	vrijeme = setInterval(TajmerKPK, 1000);
}
function ProvjeriKPK(eve, rjesenje){if(eve.keyCode == 13){
	if(rjesenje == rjesenjekpk){
		for(var i = 1;i < 8;i++){
			document.getElementById("kpkk" + i).innerHTML = Zadaj_KPK(br, i);
			var rijec = document.getElementById("kpkk" + i).innerHTML;
			if(rijec.length > 30){
				document.getElementById("PopUpK" + i).innerHTML = rijec;
				rijec = rijec.slice(0, 31) + "...";
				document.getElementById("kpkk" + i).innerHTML = rijec
			}
		}
		for(var i = 8;i > 0;i--){
			document.getElementById("kpkk" + i).classList.add("tacno");
		}
		var zvuk = new Audio("Izvori/tacno.mp3");
		zvuk.play();
		clearInterval(vrijeme);
		document.getElementById("tajmer").value = 15;
		vrijeme = setInterval(TajmerGasi, 1000);
		document.getElementById("kpkk8").disabled = true;
	}else{
		var zvuk = new Audio("Izvori/netacno.mp3");
		zvuk.play();
		document.getElementById("tajmer").value = 1;
		document.getElementById("kpkk8").value = "";
		document.getElementById("tajmer").focus();
	}
}}
function UgasiKPK(poeni, bonus){
	alert("Osvojeni poeni: " + poeni + "\nBonus: " + bonus + "\nUkupno: " + (bonus+poeni) + "\n\nObjasnjenje" + Objasnjenja(br));
	document.getElementById("kontrolna-tabla").style.display = "block";
	document.getElementById("korak-po-korak").style.display = "none";
}