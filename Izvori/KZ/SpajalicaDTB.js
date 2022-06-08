function TemaS(svic){
	var tema;
	switch(svic){
		case 1: tema = "Spojite autore s djelima";break
		case 2: tema = "Spojite drzave i glavne gradove";break
		case 3: tema = "Spojte turcizme i njihova znacenja";break
		case 4: tema = "Spojte germanizme i njihova znacenja";break
		case 5: tema = "Spojte latinizme i njihova znacenja";break
		case 6: tema = "Spojte posudjenice sa jezicima iz kojih poticu";break
		case 7: tema = "Spojite imena i prezimena izvodjaca";break
		case 8: tema = "Spojite imena i prezimena glumaca";break
		case 9: tema = "Spojite imena i prezimena pisaca";break
		case 10: tema = "Spojite kiseline i njihove hemijske formule";break
	}
	return tema;
}
function ColA(a, b){
	var zadaj;
	switch(a){
		case 1: zadaj = CellA1(b);break;
		case 2: zadaj = CellA2(b);break;
		case 3: zadaj = CellA3(b);break;
		case 4: zadaj = CellA4(b);break;
		case 5: zadaj = CellA5(b);break;
		case 6: zadaj = CellA6(b);break;
		case 7: zadaj = CellA7(b);break;
		case 8: zadaj = CellA8(b);break;
		case 9: zadaj = CellA9(b);break;
		case 10: zadaj = CellA10(b);break;
		default: break;
	}
	return zadaj;
}
function ColB(a, b){
	var zadaj;
	switch(a){
		case 1: zadaj = CellB1(b);break;
		case 2: zadaj = CellB2(b);break;
		case 3: zadaj = CellB3(b);break;
		case 4: zadaj = CellB4(b);break;
		case 5: zadaj = CellB5(b);break;
		case 6: zadaj = CellB6(b);break;
		case 7: zadaj = CellB7(b);break;
		case 8: zadaj = CellB8(b);break;
		case 9: zadaj = CellB9(b);break;
		case 10: zadaj = CellB10(b);break;
		default: break;
	}
	return zadaj;
}
//Za ColA
function CellA1(b){
	var zadaj;
	switch(b){
		case 1: zadaj = "ALEKSA MIKIC";break;
		case 2: zadaj = "PETAR KOCIC";break;
		case 3: zadaj = "ZIL VERN";break;
		case 4: zadaj = "JANKO VESELINOVIC";break;
		case 5: zadaj = "IVO ANDRIC";break;
		case 6: zadaj = "SVETOZAR COROVIC";break;
		case 7: zadaj = "BRANKO COPIC";break;
		case 8: zadaj = "MARK TVEN";break;
		default: break;
	}
	return zadaj;
}
function CellA2(b){
	var zadaj;
	switch(b){
		case 1: zadaj = "SRBIJA";break;
		case 2: zadaj = "NORVESKA";break;
		case 3: zadaj = "HRVATSKA";break;
		case 4: zadaj = "KANADA";break;
		case 5: zadaj = "SVEDSKA";break;
		case 6: zadaj = "FINSKA";break;
		case 7: zadaj = "TUNIS";break;
		case 8: zadaj = "LIBIJA";break;
		default: break;
	}
	return zadaj;
}
function CellA3(b){
	var zadaj;
	switch(b){
		case 1: zadaj = "AVLIJA";break;
		case 2: zadaj = "ASTAL";break;
		case 3: zadaj = "ALA";break;
		case 4: zadaj = "AMANET";break;
		case 5: zadaj = "BAJAT";break;
		case 6: zadaj = "BAJATI";break;
		case 7: zadaj = "BALTA";break;
		case 8: zadaj = "BELAJ";break;
		default: break;
	}
	return zadaj;
}
function CellA4(b){
	var zadaj;
	switch(b){
		case 1: zadaj = "BINA";break;
		case 2: zadaj = "AUSPUH";break;
		case 3: zadaj = "VIKLER";break;
		case 4: zadaj = "KELNER";break;
		case 5: zadaj = "GLANC";break;
		case 6: zadaj = "KNAP";break;
		case 7: zadaj = "FEDER";break;
		case 8: zadaj = "KUGLA";break;
		default: break;
	}
	return zadaj;
}
function CellA5(b){
	var zadaj;
	switch(b){
		case 1: zadaj = "DIREKTOR";break;
		case 2: zadaj = "NACIJA";break;
		case 3: zadaj = "EKSPANZIJA";break;
		case 4: zadaj = "VAKCINA";break;
		case 5: zadaj = "ABORTUS";break;
		case 6: zadaj = "EMOCIJE";break;
		case 7: zadaj = "INSPIRACIJA";break;
		case 8: zadaj = "JUNIOR";break;
		default: break;
	}
	return zadaj;
}
function CellA6(b){
	var zadaj;
	switch(b){
		case 1: zadaj = "VIKLER";break;
		case 2: zadaj = "NACIJA";break;
		case 3: zadaj = "PARFEM";break;
		case 4: zadaj = "BAJATI";break;
		case 5: zadaj = "OPERA";break;
		case 6: zadaj = "VIKEND";break;
		case 7: zadaj = "CENTAR";break;
		case 8: zadaj = "ZAPETA";break;
		default: break;
	}
	return zadaj;
}
function CellA7(b){
	var zadaj;
	switch(b){
		case 1: zadaj = "ACA";break;
		case 2: zadaj = "ILDA";break;
		case 3: zadaj = "ZORICA";break;
		case 4: zadaj = "DRAGANA";break;
		case 5: zadaj = "JELENA";break;
		case 6: zadaj = "MARIJA";break;
		case 7: zadaj = "BORO";break;
		case 8: zadaj = "SNEZANA";break;
		default: break;
	}
	return zadaj;
}
function CellA8(b){
	var zadaj;
	switch(b){
		case 1: zadaj = "SVETISLAV";break;
		case 2: zadaj = "SOFIJA";break;
		case 3: zadaj = "ZORAN";break;
		case 4: zadaj = "BORKA";break;
		case 5: zadaj = "JANA";break;
		case 6: zadaj = "FEDJA";break;
		case 7: zadaj = "STEFAN";break;
		case 8: zadaj = "BOJANA";break;
		default: break;
	}
	return zadaj;
}
function CellA9(b){
	var zadaj;
	switch(b){
		case 1: zadaj = "ALEKSA";break;
		case 2: zadaj = "JANKO";break;
		case 3: zadaj = "ZIL";break;
		case 4: zadaj = "PETAR";break;
		case 5: zadaj = "BRANKO";break;
		case 6: zadaj = "SVETOZAR";break;
		case 7: zadaj = "IVO";break;
		case 8: zadaj = "MARK";break;
		default: break;
	}
	return zadaj;
}
function CellA10(b){
	var zadaj;
	switch(b){
		case 1: zadaj = "HLOROVODONICNA";break;
		case 2: zadaj = "AZOTNA";break;
		case 3: zadaj = "SUMPOROVODONICNA";break;
		case 4: zadaj = "SUMPORASTA";break;
		case 5: zadaj = "SUMPORNA";break;
		case 6: zadaj = "UGLJENA";break;
		case 7: zadaj = "FOSFORNA";break;
		case 8: zadaj = "SIRCETNA";break;
		default: break;
	}
	return zadaj;
}
//za ColB
function CellB1(b){
	var zadaj;
	switch(b){
		case 1: zadaj = "SUNCANA OBALA";break;
		case 2: zadaj = "VUKOV GAJ";break;
		case 3: zadaj = "20000 MILJA POD...";break;
		case 4: zadaj = "HAJDUK STANKO";break;
		case 5: zadaj = "TRAVNICKA HRONIKA";break;
		case 6: zadaj = "STOJAN MUTIKASA";break;
		case 7: zadaj = "ORLOVI RANO LETE";break;
		case 8: zadaj = "TOM SOJER";break;
		default: break;
	}
	return zadaj;
}
function CellB2(b){
	var zadaj;
	switch(b){
		case 1: zadaj = "BEOGRAD";break;
		case 2: zadaj = "OSLO";break;
		case 3: zadaj = "ZAGREB";break;
		case 4: zadaj = "OTAVA";break;
		case 5: zadaj = "STOKHOLM";break;
		case 6: zadaj = "HELSINKI";break;
		case 7: zadaj = "TUNIS";break;
		case 8: zadaj = "TRIPOLI";break;
		default: break;
	}
	return zadaj;
}
function CellB3(b){
	var zadaj;
	switch(b){
		case 1: zadaj = "DVORISTE";break;
		case 2: zadaj = "STO";break;
		case 3: zadaj = "CUDOVISTE";break;
		case 4: zadaj = "NASLJEDSTVO";break;
		case 5: zadaj = "USTAJAO";break;
		case 6: zadaj = "VRACATI";break;
		case 7: zadaj = "SJEKIRA";break;
		case 8: zadaj = "NESRECA";break;
		default: break;
	}
	return zadaj;
}
function CellB4(b){
	var zadaj;
	switch(b){
		case 1: zadaj = "POZORNICA";break;
		case 2: zadaj = "IZDUVNIK";break;
		case 3: zadaj = "PAPILOTNE";break;
		case 4: zadaj = "KONOBAR";break;
		case 5: zadaj = "NOV";break;
		case 6: zadaj = "TAMAN";break;
		case 7: zadaj = "OPRUGA";break;
		case 8: zadaj = "LOPTA";break;
		default: break;
	}
	return zadaj;
}
function CellB5(b){
	var zadaj;
	switch(b){
		case 1: zadaj = "RAVNATELJ";break;
		case 2: zadaj = "NAROD";break;
		case 3: zadaj = "SIRENJE";break;
		case 4: zadaj = "CJEPILO";break;
		case 5: zadaj = "POBACAJ";break;
		case 6: zadaj = "OSJECANJA";break;
		case 7: zadaj = "NADAHNUCE";break;
		case 8: zadaj = "MLADJI";break;
		default: break;
	}
	return zadaj;
}
function CellB6(b){
	var zadaj;
	switch(b){
		case 1: zadaj = "NJEMACKI";break;
		case 2: zadaj = "LATINSKI";break;
		case 3: zadaj = "FRANCUSKI";break;
		case 4: zadaj = "TURSKI";break;
		case 5: zadaj = "ITALIJANSKI";break;
		case 6: zadaj = "ENGLESKI";break;
		case 7: zadaj = "GRCKI";break;
		case 8: zadaj = "RUSKI";break;
		default: break;
	}
	return zadaj;
}
function CellB7(b){
	var zadaj;
	switch(b){
		case 1: zadaj = "LUKAS";break;
		case 2: zadaj = "SAULIC";break;
		case 3: zadaj = "BRUNCLIK";break;
		case 4: zadaj = "MIRKOVIC";break;
		case 5: zadaj = "KARLEUSA";break;
		case 6: zadaj = "SERIFOVIC";break;
		case 7: zadaj = "DRLJACA";break;
		case 8: zadaj = "DJURISIC";break;
		default: break;
	}
	return zadaj;
}
function CellB8(b){
	var zadaj;
	switch(b){
		case 1: zadaj = "GONCIC";break;
		case 2: zadaj = "JURICAN";break;
		case 3: zadaj = "PAJIC";break;
		case 4: zadaj = "TOMOVIC";break;
		case 5: zadaj = "MILIC";break;
		case 6: zadaj = "STOJANOVIC";break;
		case 7: zadaj = "BUZUROVIC";break;
		case 8: zadaj = "ORDINACEV";break;
		default: break;
	}
	return zadaj;
}
function CellB9(b){
	var zadaj;
	switch(b){
		case 1: zadaj = "MIKIC";break;
		case 2: zadaj = "VESELINOVIC";break;
		case 3: zadaj = "VERN";break;
		case 4: zadaj = "KOCIC";break;
		case 5: zadaj = "COPIC";break;
		case 6: zadaj = "COROVIC";break;
		case 7: zadaj = "ANDRIC";break;
		case 8: zadaj = "TVEN";break;
		default: break;
	}
	return zadaj;
}
function CellB10(b){
	var zadaj;
	switch(b){
		case 1: zadaj = "HCl";break;
		case 2: zadaj = "HNO3";break;
		case 3: zadaj = "H2S";break;
		case 4: zadaj = "H2SO3";break;
		case 5: zadaj = "H2SO4";break;
		case 6: zadaj = "H2CO3";break;
		case 7: zadaj = "H3PO4";break;
		case 8: zadaj = "HC2H3O2";break;
		default: break;
	}
	return zadaj;
}