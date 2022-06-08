function RjesenjaKPK(br){
	var daj;
	switch(br){
		case 1:daj = "slovacka";break;
		case 2:daj = "pacijent";break;
		case 3:daj = "burbon";break;
		case 4:daj = "bok";break;
		case 5:daj = "laki";break;
		case 6:daj = "to";break;
		case 7:daj = "kanton";break;
		case 8:daj = "slon";break;
		case 9:daj = "radnik";break;
		case 10:daj = "skok";break;
		default: break;
	}
	return daj.toUpperCase();
}
function Zadaj_KPK(br, svic){
	var daj;
	switch(br){
		case 1:daj = KPK1(svic);break;
		case 2:daj = KPK2(svic);break;
		case 3:daj = KPK3(svic);break;
		case 4:daj = KPK4(svic);break;
		case 5:daj = KPK5(svic);break;
		case 6:daj = KPK6(svic);break;
		case 7:daj = KPK7(svic);break;
		case 8:daj = KPK8(svic);break;
		case 9:daj = KPK9(svic);break;
		case 10:daj = KPK10(svic);break;
		default: break;
	}
	return daj.toUpperCase();
}
function KPK1(a){
	var daj;
	switch(a){
		case 1:daj = "ima osam krajeva";break;
		case 2:daj = "ima svoj jezik";break;
		case 3:daj = "njen duvacki instrument je fujara";break;
		case 4:daj = "ima veze s filmovima 'Hostel' i 'eurotip'";break;
		case 5:daj = "jedini mundijal joj je onaj u Juznoj Africi";break;
		case 6:daj = "ponekad je mijesaju sa slovenijom";break;
		case 7:daj = "glavni grad je Bratislava";break;
		default: break;
	}
	return daj.toUpperCase();
}
function KPK2(a){
	var daj;
	switch(a){
		case 1:daj = "moze imati pogrdno znacenje";break;
		case 2:daj = "moze imati veze sa nulom";break;
		case 3:daj = "ima veze s engleskom";break;
		case 4:daj = "etimoloski ima vise veze s patnjom->";break;
		case 5:daj = "<-nego sa strpljenjem";break;
		case 6:daj = "ima svoj prijem";break;
		case 7:daj = "to je bolesnik pod nadzorom doktora";break;
		default: break;
	}
	return daj.toUpperCase();
}
function KPK3(a){
	var daj;
	switch(a){
		case 1:daj = "ima veze s tomom vejtsom";break;
		case 2:daj = "ima svoju ulicu u Nju Orleansu";break;
		case 3:daj = "takodje je u bliskoj vezi s kantakijem";break;
		case 4:daj = "Toj dinastiji pripadaju kraljevi spanije->";break;
		case 5:daj = "<-a pripadao joj je luj 14";break;
		case 6:daj = "mora imati barem 51% kuruza";break;
		case 7:daj = "to je tip americkog viskija";break;
		default: break;
	}
	return daj.toUpperCase();
}
function KPK4(a){
	var daj;
	switch(a){
		case 1:daj = "ima svoj vjetar";break;
		case 2:daj = "to je centralna banka juzne koreje";break;
		case 3:daj = "na njega se moze dodati";break;
		case 4:daj = "uz lom je ostrvo u indoneziji";break;
		case 5:daj = "na njega se moze i leci";break;
		case 6:daj = "u hrvatskoj je pozdrav";break;
		case 7:daj = "to je lijeva ili desna strana tijela";break;
		default: break;
	}
	return daj.toUpperCase();
}
function KPK5(a){
	var daj;
	switch(a){
		case 1:daj = "u 18. vijeku imao je poznatu erupciju";break;
		case 2:daj = "to je posljednji harija dina stentona";break;
		case 3:daj = "moze ici uz pingvine";break;
		case 4:daj = "ima veze s srecom";break;
		case 5:daj = "moze ici uz luzera";break;
		case 6:daj = "nadimak je gangstera carlsa lucana";break;
		case 7:daj = "u 'maratoncima' je 'malo nervozan'";break;
		default: break;
	}
	return daj.toUpperCase();
}
function KPK6(a){
	var daj;
	switch(a){
		case 1:daj = "moze se cuti pri sportskom bodrenju";break;
		case 2:daj = "naslov je horor romana";break;
		case 3:daj = "to je i pjesma od doris dragovic";break;
		case 4:daj = "moze biti i rjecica";break;
		case 5:daj = "moze biti pokazna zamjenica";break;
		case 6:daj = "moze se procitati u koraku 3";break;
		case 7:daj = "takodje je registarska oznaka za topolu'";break;
		default: break;
	}
	return daj.toUpperCase();
}
function KPK7(a){
	var daj;
	switch(a){
		case 1:daj = "ima svoj toranj";break;
		case 2:daj = "na zastavi je obicno u lijevom uglu";break;
		case 3:daj = "moze se sresti u Bosni i Hercegovini";break;
		case 4:daj = "drugo je ima grada guangdzoua->";break;
		case 5:daj = "<-po kom je nazvana varijanta kineskog jezika";break;
		case 6:daj = "u luksenburgu ih je 12";break;
		case 7:daj = "svicarska je podjeljena na 26";break;
		default: break;
	}
	return daj.toUpperCase();
}
function KPK8(a){
	var daj;
	switch(a){
		case 1:daj = "ima svog covjeka";break;
		case 2:daj = "taj film gangsa van santa je dobio zlatnu palmu";break;
		case 3:daj = "moze biti iz afrike ili azije";break;
		case 4:daj = "nasao se i u alpama";break;
		case 5:daj = "u muzici je nekad plav nekad mali";break;
		case 6:daj = "nasao se i u pjesmi dina dvornika";break;
		case 7:daj = "u crtanom filmu je dambo";break;
		default: break;
	}
	return daj.toUpperCase();
}
function KPK9(a){
	var daj;
	switch(a){
		case 1:daj = "ima svoje univerzitete";break;
		case 2:daj = "moze biti u vezi s zemljom";break;
		case 3:daj = "u imenu pank-rok benda ima kontrolu";break;
		case 4:daj = "ima svoju klasu";break;
		case 5:daj = "u imenu sd pozarevca je mladi";break;
		case 6:daj = "moze se odnositi na mrava";break;
		case 7:daj = "fudbalski klub je iz bijeljine i surdulice";break;
		default: break;
	}
	return daj.toUpperCase();
}
function KPK10(a){
	var daj;
	switch(a){
		case 1:daj = "moze biti u vezi s brojem 3";break;
		case 2:daj = "u imenu je vodopada u srbiji";break;
		case 3:daj = "ima i veze s kaludjerima";break;
		case 4:daj = "mati nikenen ga je izvodio na skijama";break;
		case 5:daj = "ima svoj zglob";break;
		case 6:daj = "u srpskom filmu je jaguarov";break;
		case 7:daj = "u atletici se moze izvesti s motikom";break;
		default: break;
	}
	return daj.toUpperCase();
}
function Objasnjenja(){
	var daj;
	switch(br){
		case 1:daj = Objasnjenja1();break;
		case 2:daj = Objasnjenja2();break;
		case 3:daj = Objasnjenja3();break;
		case 4:daj = Objasnjenja4();break;
		case 5:daj = Objasnjenja5();break;
		case 6:daj = Objasnjenja6();break;
		case 7:daj = Objasnjenja7();break;
		case 8:daj = Objasnjenja8();break;
		case 9:daj = Objasnjenja9();break;
		case 10:daj = Objasnjenja10();break;
		default: break;
	}
	return daj;
}
function Objasnjenja1(){
	var daj = "";
	daj += "\n1.Slovacka je administrativno podjeljena na 8 dijelova.";
	daj += "\n2.-";
	daj += "\n3.Fujara je slovacki duvacki instrument koja pripada UNESKO-voj svjetskoj bastini.";
	daj += "\n4.Radnja datih filmova se jednim dijelom odvija u slovackoj";
	daj += "\n5.-";
	daj += "\n6.U neslovenskim zemljama se cesto iz neznanja mijesaju Slovacka i Slovenija";
	daj += "\n7.-";
	return daj;
}
function Objasnjenja2(){
	var daj = "";
	daj += "\n1.-";
	daj += "\n2.Nulti pacijent je izraz za prvi zabiljezen slucaj oboljevanja od neke bolesti";
	daj += "\n3.Knjiga i film 'Engleski pacijent'";
	daj += "\n4.Pacijent je latinska rijec 'pacijens' sto znaci onaj koji pati";
	daj += "\n5.Ali moze znaciti i strpljiv";
	daj += "\n6.-";
	daj += "\n7.-";
	return daj;
}
function Objasnjenja3(){
	var daj = "";
	daj += "\n1.Poznata pjesma 'Jockey full of burbon'";
	daj += "\n2.Burbon Strit je jedna od najpoznatijih ulica Nju Orleansa";
	daj += "\n3.Okrug Burbon u Kentakiju usko je povezan s proizvodnjom burbona.'";
	daj += "\n4.-";
	daj += "\n5.-";
	daj += "\n6.-";
	daj += "\n7.-";
	return daj;
}
function Objasnjenja4(){
	var daj = "";
	daj += "\n1.Bocni vjetar'";
	daj += "\n2.'Bank of Korea' ili skraceno BOK";
	daj += "\n3.Dodavanje na bok u fudbalu'";
	daj += "\n4.Ostrvo Lombok nalazi se pored Balija";
	daj += "\n5.-";
	daj += "\n6.-";
	daj += "\n7.-";
	return daj;
}
function Objasnjenja5(){
	var daj = "";
	daj += "\n1.-rupcija kratera Laki na islandu 1783'";
	daj += "\n2.'";
	daj += "\n3.Muzicka grupa 'Laki pingvini''";
	daj += "\n4.laki na engleskom znaci srecan'";
	daj += "\n5.a tu je i sportski izraz 'Lucky loser'";
	daj += "\n6.-";
	daj += "\n7.-";
	return daj;
}
function Objasnjenja6(){
	var daj = "";
	daj += "\n1.";
	daj += "\n2.Poznati roman Stivena Kinga pod nazivom 'It' tj. u prevodu 'To'";
	daj += "\n3.-'";
	daj += "\n4.-";
	daj += "\n5.-";
	daj += "\n6.-";
	daj += "\n7.-";
	return daj;
}
function Objasnjenja7(){
	var daj = "";
	daj += "\n1.Toranj u gradu guangdzou";
	daj += "\n2.Kanton je cetvrtina zastave njacesce gornju lijevu u kojoj se nalazi izdvojen motiv";
	daj += "\n3.Federacija Bosne i Hercegovine je podjeljena na 28 dijelova'";
	daj += "\n4.Kantonski jezik kao vrsta kineskog jezika";
	daj += "\n5.-";
	daj += "\n6.-";
	daj += "\n7.-";
	return daj;
}
function Objasnjenja8(){
	var daj = "";
	daj += "\n1.poznati film 'Covjek slon'";
	daj += "\n2.-";
	daj += "\n3.Azijski ili africki slon'";
	daj += "\n4.Hanibal je prelazio alpe koristeci slona";
	daj += "\n5.Pjesme 'Mali slon' i 'Plavi slon'";
	daj += "\n6.-";
	daj += "\n7.-";
	return daj;
}
function Objasnjenja9(){
	var daj = "";
	daj += "\n1.Radnicki univerziteti'";
	daj += "\n2.-";
	daj += "\n3.Pank-rok bend 'Radnicka kontrola''";
	daj += "\n4.-";
	daj += "\n5.-";
	daj += "\n6.-";
	daj += "\n7.-";
	return daj;
}
function Objasnjenja10(){
	var daj = "";
	daj += "\n1.Atletska disciplina troskok'";
	daj += "\n2.Kaludjerski Skok";
	daj += "\n3.-";
	daj += "\n4.-";
	daj += "\n5.-";
	daj += "\n6.Film 'Jaguarov skok'";
	daj += "\n7.-";
	return daj;
}