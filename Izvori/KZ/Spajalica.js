var brspa = 0, rdbrs = 1, pointss = 0;
var alerttujs = "Rjesenja:\n\n";
function ZadajS(){
	DodajS();
	brspa = Math.floor(Math.random() * 10) + 1;
	for(var i = 1; i <= 8; i++){
		document.getElementById("lbs" + i).innerHTML = ColA(brspa, i);
		document.getElementById("dbs" + i).innerHTML = ColB(brspa, i);
	}
	document.getElementById("tm").innerHTML = TemaS(brspa);
	IzmjesajS();
	document.getElementById("tajmer").value = 60;
	vrijeme = setInterval(TajmerS, 1000);
}

function ProvjeriS(b){
	document.getElementById("lbs" + rdbrs).classList.remove("marker");
	if(rdbrs == b){
		pointss += 2;
		pointskz += 2
		var zvuk = new Audio("Izvori/tacno.mp3");
		zvuk.play();
		document.getElementById("lbs" + b).classList.add("tacno");
		document.getElementById("dbs" + b).classList.add("tacno");
	document.getElementById("dbs" + b).disabled = true;
	}else{
		var zvuk = new Audio("Izvori/netacno.mp3");
		zvuk.play();
		document.getElementById("lbs" + rdbrs).classList.add("netacno");
		alerttujs = alerttujs + ColA(brspa, b) + " - " + ColB(brspa, b) + "\n";
	}
	rdbrs++;
	document.getElementById("lbs" + rdbrs).classList.add("marker");
}
function TajmerS(){
	var tajmer = document.getElementById("tajmer");
	if(tajmer.value * 1 == 0){
		pointss = 0;rdbrs = 1;;setTimeout(function(){alert(alerttujs + "\n\nOsvojeni poeni: " + pointskz + "\nBonus: " + bonuspoints + "\nUkupno: " + (pointskz + bonuspoints));KrajDP(bonuspoints);brpldp = 0;alertujdp = "Rjesenja: \n";}, 500);clearInterval(vrijeme);
	}
	tajmer.value -= 1;
}
function DodajS(){
	var inHTML = '<div class="doppop osnovno"><b id="tm">Pojmovi</b><hr width="100%" color="black" size="3px"><center><table><tr><td id="lsp1"><button class="spa1 osnovno marker" id="lbs1" disabled></button></td><td id="dsp1"><button class="spa2 osnovno" id="dbs1" onclick="ProvjeriS(1)"></button></td></tr><tr><td id="lsp2"><button class="spa1 osnovno" id="lbs2" disabled></button></td><td id="dsp2"><button class="spa2 osnovno" id="dbs2" onclick="ProvjeriS(2)"></button></td></tr><tr><td id="lsp3"><button class="spa1 osnovno" id="lbs3" disabled></button></td><td id="dsp3"><button class="spa2 osnovno" id="dbs3" onclick="ProvjeriS(3)"></button></td></tr><tr><td id="lsp4"><button class="spa1 osnovno" id="lbs4" disabled></button></td><td id="dsp4"><button class="spa2 osnovno" id="dbs4" onclick="ProvjeriS(4)"></button></td></tr><tr><td id="lsp5"><button class="spa1 osnovno" id="lbs5" disabled></button></td><td id="dsp5"><button class="spa2 osnovno" id="dbs5" onclick="ProvjeriS(5)"></button></td></tr><tr><td id="lsp6"><button class="spa1 osnovno" id="lbs6" disabled></button></td><td id="dsp6"><button class="spa2 osnovno" id="dbs6" onclick="ProvjeriS(6)"></button></td></tr><tr><td id="lsp7"><button class="spa1 osnovno" id="lbs7" disabled></button></td><td id="dsp7"><button class="spa2 osnovno" id="dbs7" onclick="ProvjeriS(7)"></button></td></tr><tr><td id="lsp8"><button class="spa1 osnovno" id="lbs8" disabled></button></td><td id="dsp8"><button class="spa2 osnovno" id="dbs8" onclick="ProvjeriS(8)"></button></td></tr></table></center></div>';
	document.getElementById("spajalica-container").innerHTML = inHTML;
}