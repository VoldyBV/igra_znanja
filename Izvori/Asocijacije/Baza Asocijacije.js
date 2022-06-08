function Asocijacije_main(br, svic){
	var daj = "";
	switch(br){
		case 1:daj = TabelaA1(svic);break;
		case 2:daj = TabelaA2(svic);break;
		case 3:daj = TabelaA3(svic);break;
		case 4:daj = TabelaA4(svic);break;
		case 5:daj = TabelaA5(svic);break;
		case 6:daj = TabelaA6(svic);break;
		case 7:daj = TabelaA7(svic);break;
		case 8:daj = TabelaA8(svic);break;
		case 9:daj = TabelaA9(svic);break;
		case 10:daj = TabelaA10(svic);break;
		default: break;
	}
	return daj;
}
function RjesenjaA(br){
	var daj;
	switch(br){
		case 1:daj = "more";break;
		case 2:daj = "alat";break;
		case 3:daj = "voda";break;
		case 4:daj = "hvatanje";break;
		case 5:daj = "miting";break;
		case 6:daj = "vlaska";break;
		case 7:daj = "turpija";break;
		case 8:daj = "kesa";break;
		case 9:daj = "Partizan";break;
		case 10:daj = "glava";break;
		default: break;
	}
	return daj.toUpperCase();
}
function TabelaA1(svic){
	var vrati = "";
	switch(svic){
		//Kolona A
		case 0:vrati = "na";break;
		case 10:vrati = "cl";break;
		case 20:vrati = "kristal";break;
		case 30:vrati = "tuzla";break;
		case 40:vrati = "so";break;
		//Kolona B
		case 1:vrati = "kost";break;
		case 11:vrati = "prijatelj";break;
		case 21:vrati = "uzica";break;
		case 31:vrati = "ljubimac";break;
		case 41:vrati = "pas";break;
		//Kolona C
		case 2:vrati = "bore";break;
		case 12:vrati = "stap";break;
		case 22:vrati = "djed";break;
		case 32:vrati = "covjek";break;
		case 42:vrati = "starac";break;
		//Kolona D
		case 3:vrati = "som";break;
		case 13:vrati = "sabljarka";break;
		case 23:vrati = "stuka";break;
		case 33:vrati = "sardina";break;
		case 43:vrati = "riba";break;
		default: break;
	}
	return vrati.toUpperCase();
}
function TabelaA2(svic){
	var vrati = "";
	switch(svic){
		//Kolona A
		case 0:vrati = "patike";break;
		case 10:vrati = "muzika";break;
		case 20:vrati = "pandora";break;
		case 30:vrati = "crna";break;
		case 40:vrati = "kutija";break;
		//Kolona B
		case 1:vrati = "trka";break;
		case 11:vrati = "ludi";break;
		case 21:vrati = "rep";break;
		case 31:vrati = "troja";break;
		case 41:vrati = "konj";break;
		//Kolona C
		case 2:vrati = "skola";break;
		case 12:vrati = "pivo";break;
		case 22:vrati = "majstor";break;
		case 32:vrati = "radionica";break;
		case 42:vrati = "zanat";break;
		//Kolona D
		case 3:vrati = "placanje";break;
		case 13:vrati = "smirenje";break;
		case 23:vrati = "ciscenje";break;
		case 33:vrati = "cilj";break;
		case 43:vrati = "sredstvo";break;
		default: break;
	}
	return vrati.toUpperCase();
}
function TabelaA3(svic){
	var vrati = "";
	switch(svic){
		//Kolona A
		case 0:vrati = "koza";break;
		case 10:vrati = "kajsija";break;
		case 20:vrati = "kafa";break;
		case 30:vrati = "osnovna";break;
		case 40:vrati = "boja";break;
		//Kolona B
		case 1:vrati = "povreda";break;
		case 11:vrati = "srce";break;
		case 21:vrati = "centar";break;
		case 31:vrati = "ribolov";break;
		case 41:vrati = "sport";break;
		//Kolona C
		case 2:vrati = "bolnica";break;
		case 12:vrati = "brak";break;
		case 22:vrati = "francuska";break;
		case 32:vrati = "dorucak";break;
		case 42:vrati = "Krevet";break;
		//Kolona D
		case 3:vrati = "saobracaj";break;
		case 13:vrati = "jezik";break;
		case 23:vrati = "pitanje";break;
		case 33:vrati = "paznja";break;
		case 43:vrati = "znak";break;
		default: break;
	}
	return vrati.toUpperCase();
}
function TabelaA4(svic){
	var vrati = "";
	switch(svic){
		//Kolona A
		case 0:vrati = "jahaci";break;
		case 10:vrati = "Josipa lisac";break;
		case 20:vrati = "smog";break;
		case 30:vrati = "prodavanje";break;
		case 40:vrati = "magla";break;
		//Kolona B
		case 1:vrati = "okuka";break;
		case 11:vrati = "ostra";break;
		case 21:vrati = "tamburelo";break;
		case 31:vrati = "lakat";break;
		case 41:vrati = "krivina";break;
		//Kolona C
		case 2:vrati = "sfera";break;
		case 12:vrati = "radius";break;
		case 22:vrati = "mec";break;
		case 32:vrati = "set";break;
		case 42:vrati = "lopta";break;
		//Kolona D
		case 3:vrati = "noz";break;
		case 13:vrati = "monarh";break;
		case 23:vrati = "gusjenica";break;
		case 33:vrati = "admiral";break;
		case 43:vrati = "leptir";break;
		default: break;
	}
	return vrati.toUpperCase();
}
function TabelaA5(svic){
	var vrati = "";
	switch(svic){
		//Kolona A
		case 0:vrati = "stopalo";break;
		case 10:vrati = "disciplina";break;
		case 20:vrati = "staza";break;
		case 30:vrati = "desetoboj";break;
		case 40:vrati = "atletika";break;
		//Kolona B
		case 1:vrati = "protiv";break;
		case 11:vrati = "tenor";break;
		case 21:vrati = "napad";break;
		case 31:vrati = "indikacija";break;
		case 41:vrati = "kontra";break;
		//Kolona C
		case 2:vrati = "izlazak";break;
		case 12:vrati = "sastanak";break;
		case 22:vrati = "bliski";break;
		case 32:vrati = "utakmica";break;
		case 42:vrati = "susret";break;
		//Kolona D
		case 3:vrati = "potpora";break;
		case 13:vrati = "pomoc";break;
		case 23:vrati = "roditeljska";break;
		case 33:vrati = "tehnicka";break;
		case 43:vrati = "podrska";break;
		default: break;
	}
	return vrati.toUpperCase();
}
function TabelaA6(svic){
	var vrati = "";
	switch(svic){
		//Kolona A
		case 0:vrati = "monako";break;
		case 10:vrati = "andora";break;
		case 20:vrati = "srbija";break;
		case 30:vrati = "lihtenstajn";break;
		case 40:vrati = "knezevina";break;
		//Kolona B
		case 1:vrati = "crna";break;
		case 11:vrati = "vudu";break;
		case 21:vrati = "krpa";break;
		case 31:vrati = "realizam";break;
		case 41:vrati = "magija";break;
		//Kolona C
		case 2:vrati = "rej";break;
		case 12:vrati = "dacija";break;
		case 22:vrati = "crno more";break;
		case 32:vrati = "revolucija";break;
		case 42:vrati = "rumunija";break;
		//Kolona D
		case 3:vrati = "hvatanje";break;
		case 13:vrati = "vasa";break;
		case 23:vrati = "vandredno";break;
		case 33:vrati = "sreca";break;
		case 43:vrati = "kolo";break;
		default: break;
	}
	return vrati.toUpperCase();
}
function TabelaA7(svic){
	var vrati = "";
	switch(svic){
		//Kolona A
		case 0:vrati = "majstor";break;
		case 10:vrati = "cekic";break;
		case 20:vrati = "rucni";break;
		case 30:vrati = "kutija";break;
		case 40:vrati = "alat";break;
		//Kolona B
		case 1:vrati = "advokat";break;
		case 11:vrati = "zivot";break;
		case 21:vrati = "stablo";break;
		case 31:vrati = "javor";break;
		case 41:vrati = "drvo";break;
		//Kolona C
		case 2:vrati = "keratin";break;
		case 12:vrati = "manikir";break;
		case 22:vrati = "lak";break;
		case 32:vrati = "prsti";break;
		case 42:vrati = "nokti";break;
		//Kolona D
		case 3:vrati = "plemenit";break;
		case 13:vrati = "olovo";break;
		case 23:vrati = "detektor";break;
		case 33:vrati = "resetka";break;
		case 43:vrati = "metal";break;
		default: break;
	}
	return vrati.toUpperCase();
}
function TabelaA8(svic){
	var vrati = "";
	switch(svic){
		//Kolona A
		case 0:vrati = "list";break;
		case 10:vrati = "novac";break;
		case 20:vrati = "drvo";break;
		case 30:vrati = "avion";break;
		case 40:vrati = "papir";break;
		//Kolona B
		case 1:vrati = "torta";break;
		case 11:vrati = "sara";break;
		case 21:vrati = "biljka";break;
		case 31:vrati = "nova godina";break;
		case 41:vrati = "ukras";break;
		//Kolona C
		case 2:vrati = "kamen";break;
		case 12:vrati = "kanal";break;
		case 22:vrati = "jetra";break;
		case 32:vrati = "casa";break;
		case 42:vrati = "zuc";break;
		//Kolona D
		case 3:vrati = "polimer";break;
		case 13:vrati = "nit";break;
		case 23:vrati = "carape";break;
		case 33:vrati = "pijaca";break;
		case 43:vrati = "najlon";break;
		default: break;
	}
	return vrati.toUpperCase();
}
function TabelaA9(svic){
	var vrati = "";
	switch(svic){
		//Kolona A
		case 0:vrati = "rezija";break;
		case 10:vrati = "akcija";break;
		case 20:vrati = "foto-aparat";break;
		case 30:vrati = "kritika";break;
		case 40:vrati = "film";break;
		//Kolona B
		case 1:vrati = "isprava";break;
		case 11:vrati = "torba";break;
		case 21:vrati = "auto";break;
		case 31:vrati = "svila";break;
		case 41:vrati = "put";break;
		//Kolona C
		case 2:vrati = "pogled";break;
		case 12:vrati = "poljubac";break;
		case 22:vrati = "maj";break;
		case 32:vrati = "april";break;
		case 42:vrati = "prvi";break;
		//Kolona D
		case 3:vrati = "liverpul";break;
		case 13:vrati = "viljareal";break;
		case 23:vrati = "ajaks";break;
		case 33:vrati = "omladinski";break;
		case 43:vrati = "fudbalski klub";break;
		default: break;
	}
	return vrati.toUpperCase();
}
function TabelaA10(svic){
	var vrati = "";
	switch(svic){
		//Kolona A
		case 0:vrati = "avion";break;
		case 10:vrati = "jelen";break;
		case 20:vrati = "zmaj";break;
		case 30:vrati = "zito";break;
		case 40:vrati = "lovac";break;
		//Kolona B
		case 1:vrati = "gospodar";break;
		case 11:vrati = "boks";break;
		case 21:vrati = "ljepilo";break;
		case 31:vrati = "cece";break;
		case 41:vrati = "muha";break;
		//Kolona C
		case 2:vrati = "samson";break;
		case 12:vrati = "bjezanija";break;
		case 22:vrati = "lak";break;
		case 32:vrati = "ravna";break;
		case 42:vrati = "kosa";break;
		//Kolona D
		case 3:vrati = "nasta";break;
		case 13:vrati = "noc";break;
		case 23:vrati = "kuca";break;
		case 33:vrati = "krava";break;
		case 43:vrati = "luda";break;
		default: break;
	}
	return vrati.toUpperCase();
}