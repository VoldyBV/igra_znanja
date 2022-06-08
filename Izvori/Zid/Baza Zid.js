function TemeZida(a){
	var rjesenje;
	switch(a){
		case 1: rjesenje = "Likovi i autori djela";break;
		case 2: rjesenje = "Matematicke funkcije i izrazi";break;
		case 3: rjesenje = "Prestonice Evrope i Afrike";break;
		case 4: rjesenje = "II svjetski rat";break;
		case 5: rjesenje = "Fizicke oznake,jedinice i formule";break;
		case 6: rjesenje = "Hemija";break;
		case 7: rjesenje = "Racunari-hardver i softver";break;
		case 8: rjesenje = "Umjetnicka djela i autori";break;
		default: break;
	}
	return rjesenje;
}
function RjesenjaZida(brzida){
	var rjesenje;
	switch(brzida){
		case 1: rjesenje = "NALIPERO";break;
		case 2: rjesenje = "JEDINICNI KRUG";break;
		case 3: rjesenje = "SARAJEVO";break;
		case 4: rjesenje = "ADOLF HITLER";break;
		case 5: rjesenje = "PJESCANI SAT";break;
		case 6: rjesenje = "ERLENMAJER";break;
		case 7: rjesenje = "maticna ploca";break;
		case 8: rjesenje = "mona liza";break;
		default: break;
	}
	return rjesenje.toUpperCase();
}
//slijede pitanja
function PitanjaZida(a){ //ja usmjeravam na funkcije za pitanja
	switch(a){
		case 1: POZ1();break;
		case 2: POZ2();break;
		case 3: POZ3();break;
		case 4: POZ4();break;
		case 5: POZ5();break;
		case 6: POZ6();break;
		case 7: POZ7();break;
		case 8: POZ8();break;
		default: break;
	}
}
function POZ1(){
	pitanjaz[0] = "Autor djela 'Put u srediste zemlje' je:<ol><li>Zil Vern</li><li>Ivo Andric</li><li>Svetozar Corovic</li></ol>";
	pitanjaz[1] = "Ko je napisao djelo 'Vukov gaj'?";
	pitanjaz[2] = "Koje je pravo ime Marka Tvena?";
	pitanjaz[3] = "Autor djela 'Stojan Mutikasa' je:<ol><li>Mark Tven</li><li>Nepoznat autor</li><li>Svetozar Corovic</li></ol>";
	pitanjaz[4] = "Ime tetke Toma Sojera je:<ol><li>Mila</li><li>Poli</li><li>Marija</li></ol>";
	pitanjaz[5] = "Kako se zove narator knjige 'Put u srediste zemlje'?";
	pitanjaz[6] = "Kako se zvao ujak naratora knjige 'Put u srediste zemlje'?";
	pitanjaz[7] = "Djevojka Toma Sojera je:<ol><li>Amanda</li><li>Beki</li><li>On nema djevojku</li></ol>";
	pitanjaz[8] = "Djevojka Lazara Macka je:<ol><li>Milica</li><li>Tijana</li><li>On nema djevojku</li></ol>";
	pitanjaz[9] = "Koje je pravo ime Branislava Nusica?";
	pitanjaz[10] = "Koji su nadimak dali djaci svome ucitelju u romanu 'Orlovi rano lete'?";
	pitanjaz[11] = "Koje od djela je napisao Ivo Andric:<ol><li>Tom Sojer</li><li>Travnicka hronika</li><li>Nista od ponudjenog</li></ol>";
	odgovoriz[0] = "ZIL VERN";
	odgovoriz[1] = "PETAR KOCIC";
	odgovoriz[2] = "SAMUJEL LANGHORN KLEMENS";
	odgovoriz[3] = "SVETOZAR COROVIC";
	odgovoriz[4] = "POLI";
	odgovoriz[5] = "AKSEL";
	odgovoriz[6] = "LIDENBROK";
	odgovoriz[7] = "BEKI";
	odgovoriz[8] = "ON NEMA DJEVOJKU";
	odgovoriz[9] = "ALKIBIJAD NUSA";
	odgovoriz[10] = "PAPRIKA";
	odgovoriz[11] = "TRAVNICKA HRONIKA";
}
function POZ2(){
	//jednostavna pitanja
	pitanjaz[0] = "Sta je od ponudjenog tacno?:<ol><li>sin(90)=0</li><li>2*cos(60)=2</li><li>Nista od ponudjenog</li></ol>";
	pitanjaz[3] = "Sta je od ponudjenog tacno?:<ol><li>5*cos(90)-1 + 4/2=1</li><li>2*cos(60)=2</li><li>Nista od ponudjenog</li></ol>";
	pitanjaz[4] = "Trigonomertijska funkcija sekans je reciprocna:<ol><li>sinusu</li><li>kosinusu</li><li>kordu</li></ol>";
	pitanjaz[7] = "Koja je skracenica za sinus versus?<ol><li>vss</li><li>svs</li><li>ver</li></ol>";
	pitanjaz[8] = "Koji od ponudjenih brojeva iracionalan?<ol><li>3</li><li>3/2</li><li>2/3</li></ol>";
	pitanjaz[11] = "Koji od ponudjenih izraza je nedefinisan?<ol><li>1^0</li><li>0^1</li><li>0^0</li></ol>";
	//njihovi odgovori
	odgovoriz[0] = "NISTA OD PONUDJENOG";
	odgovoriz[3] = "5*COS(90)-1 + 4/2=1";
	odgovoriz[4] = "KOSINUSU";
	odgovoriz[7] = "VER";
	odgovoriz[8] = "2/3";
	odgovoriz[11] = "0^0";
	//teza pitanja
	pitanjaz[1] = "Navedi formulu za pitagorinu teoremu?";
	pitanjaz[2] = "Preko koje je funkcije definisana funkcija sinus koversus(navedi samo formulu)";
	pitanjaz[5] = "Daj vrijednost izraza!<br></br>sin(x)*sin(x)+cos(x)*cos(x)";
	pitanjaz[6] = "Daj vrijednost izraza!<br></br>ver(x)+cver(x)";
	pitanjaz[9] = "Koja je inverzna funkcija ekskosekansu";
	pitanjaz[10] = "Daj vrijednost izraza!<br></br>((((ver(91)+cver(51))*sin(90-123*453) + 45)*0)+(10-3/1/3)/9)^0";
	//njihovi odgovori
	odgovoriz[1] = "C*C=A*A+B*B";
	odgovoriz[2] = "CVER(X)=1+COS(X)";
	odgovoriz[5] = "1";
	odgovoriz[6] = "2";
	odgovoriz[9] = "ARKUSEKSKOSEKANS";
	odgovoriz[10] = "1";
}
function POZ3(){
	//jednostavna pitanja
	pitanjaz[0] = "Glavni grad Alzira je:<ol><li>Rabat</li><li>Maroko</li><li>Alzir</li></ol>";
	pitanjaz[3] = "Glavni grad Maroka je:<ol><li>Tunis</li><li>Rabat</li><li>Nista od ponudjenog</li></ol>";
	pitanjaz[4] = "Tunis je glavni grad::<ol><li>Azerbejdzana</li><li>Egipta</li><li>Tunisa</li></ol>";
	pitanjaz[7] = "Pariz je glavni grad:<ol><li>BiH</li><li>Sbije</li><li>Francuske</li></ol>";
	pitanjaz[8] = "Atina je glavni grad<ol><li>Nista od ponudjenog</li><li>Malezije</li><li>Egipta</li></ol>";
	pitanjaz[11] = "Harare je glavni grad<ol><li>Nista od ponudjenog</li><li>Zimbabve</li><li>Mozambika</li></ol>";
	//njihovi odgovori
	odgovoriz[0] = "ALZIR";
	odgovoriz[3] = "NISTA OD PONUDJENOG";
	odgovoriz[4] = "TUNISA";
	odgovoriz[7] = "FRANCUSKE";
	odgovoriz[8] = "NISTA OD PONUDJENOG";
	odgovoriz[11] = "ZIMBABVE";
	//teza pitanja
	pitanjaz[1] = "Koji je glavni grad Hrvatske";
	pitanjaz[2] = "Koji je glavni grad Svedske";
	pitanjaz[5] = "Koji je glavni grad Madagaskara";
	pitanjaz[6] = "Koji je glavni grad Etiopije";
	pitanjaz[9] = "Helsinki je glavni grad...";
	pitanjaz[10] = "Lisabon je prestonica...";
	//njihovi odgovori
	odgovoriz[1] = "ZAGREB";
	odgovoriz[2] = "STOKHOLM";
	odgovoriz[5] = "ANTANANARIVO";
	odgovoriz[6] = "ADIS ABEBA";
	odgovoriz[9] = "FINSKE";
	odgovoriz[10] = "PORTUGALIJE";
}
function POZ4(){
	//jednostavna pitanja
	pitanjaz[0] = "II svj. rat poceo je napadom na:<ol><li>Poljsku</li><li>Austriju</li><li>Svajcarsku</li></ol>";
	pitanjaz[3] = "II svj. rat je poceo:<ol><li>1938</li><li>1941</li><li>1939</li></ol>";
	pitanjaz[4] = "...naziv je za njemačku invaziju Sovjetskog Saveza:<ol><li>Operacija Barberosa</li><li>Operacija Barbosa</li><li>Operacija Barabarosa</li></ol>";
	pitanjaz[7] = "Ko od ponudjenih je bio vodja NOVJ-a?<ol><li>Nista od ponudjenog</li><li>Josip Broz Tito</li><li>Mao Ce Tung</li></ol>";
	pitanjaz[8] = "Ko je bio vodja cetnika?:<ol><li>Josif Staljin</li><li>Niko od ponudjenih</li><li>Tito</li></ol>";
	pitanjaz[11] = "Ko je bio vodja SSSR-a?:<ol><li>Niko od ponudjenih</li><li>Sergej Paunovic</li><li>Josip Staljin</li></ol>";
	//njihovi odgovori
	odgovoriz[0] = "POLJSKU";
	odgovoriz[3] = "1939";
	odgovoriz[4] = "OPERACIJA BARBAROSA";
	odgovoriz[7] = "JOSIP BROZ TITO";
	odgovoriz[8] = "NIKO OD PONUDJENIH";
	odgovoriz[11] = "NIKO OD PONUDJENIH";
	//teza pitanja
	pitanjaz[1] = "Kog je datuma poceo II svj. rat?<br></br>P.S. datum pisati u formatu 17.9.2004";
	pitanjaz[2] = "Kog je datuma zarvsio II svj. rat?<br></br>P.S. datum pisati u formatu 17.9.2004";
	pitanjaz[5] = "Kada je pocela Operacija Barabarosa?<br></br>P.S. datum pisati u formatu 17.9.2004";
	pitanjaz[6] = "Kada je Japan kapitulirao?<br></br>P.S. datum pisati u formatu 17.9.2004";
	pitanjaz[9] = "Koje godine je sovjetski savez stupio u rat?";
	pitanjaz[10] = "Kada je bombardovana Jugoslavija?<br></br>P.S. datum pisati u formatu 17.9.2004";
	//njihovi odgovori
	odgovoriz[1] = "1.9.1939";
	odgovoriz[2] = "2.9.1945";
	odgovoriz[5] = "22.6.1941";
	odgovoriz[6] = "8.9.1943";
	odgovoriz[9] = "1939";
	odgovoriz[10] = "6.4.1941";
}
function POZ5(){
	//jednostavna pitanja
	pitanjaz[0] = "Formula za ravnomjernu pravolinijsku brzinu je:<ol><li>s/t</li><li>a*t</li><li>s*t</li></ol>"
	pitanjaz[3] = "Formula za ravnomjerno ubrzanu pravolinijsku brzinu je:<ol><li>s/(t*t)</li><li>a*s</li><li>a*t</li></ol>"
	pitanjaz[4] = "Jedinica za snagu je:<ol><li>volt</li><li>vat</li><li>pov</li></ol>"
	pitanjaz[7] = "Amper je jedinica za:<ol><li>struju u provodniku</li><li>otpor provodnika</li><li>silu</li></ol>"
	pitanjaz[8] = "U je oznaka za:<ol><li>elektricnu snagu</li><li>elektricno polje oko provodnika</li><li>pad napona na provodniku</li></ol>"
	pitanjaz[11] = "LCM je oznaka za:<ol><li>masu</li><li>ubrzanje</li><li>nista</li></ol>"
	//njihovi odgovori
	odgovoriz[0] = "S/T";
	odgovoriz[3] = "A*T";
	odgovoriz[4] = "VAT";
	odgovoriz[7] = "STRUJU U PROVODNIKU";
	odgovoriz[8] = "PAD NAPONA NA PROVODNIKU";
	odgovoriz[11] = "NISTA";
	//teza pitanja
	pitanjaz[1] = "Napisu formulu za silu po drugom njutnovom zakonu.";
	pitanjaz[2] = "Napisu formulu za elektricno polje oko provodnika.";
	pitanjaz[5] = "Kako glasi formula za elek. snagu definisanu preko struje i otpora?";
	pitanjaz[6] = "Kako glasi formula za elek. snagu definisanu preko struje i NAPONA?";
	pitanjaz[9] = "Napisi mi jedinicu za jacinu svjetlosti";
	pitanjaz[10] = "Napisi mi jedinicu za kolicinu toplote";
	//njihovi odgovori
	odgovoriz[1] = "F=M*A";
	odgovoriz[2] = "E=U/D";
	odgovoriz[5] = "P=R*I*I";
	odgovoriz[6] = "P=U*I";
	odgovoriz[9] = "KANDELA";
	odgovoriz[10] = "KELVIN";
}
function POZ6(){
	//jednostavna pitanja
	pitanjaz[0] = "Sta dobojemo kada pomjesamo istu kolicini baze i kiseline?:<ol><li>vodu</li><li>heterogrnu smjesu baze i kiseline</li><li>destilovanu vodu i so</li></ol>";
	pitanjaz[3] = "Koja je formula za destilovanu vodu<ol><li>HO</li><li>H2O</li><li>HO12</li></ol>";
	pitanjaz[4] = "Formula NaOH predstavlja:<ol><li>natrijum-hidroksid</li><li>natrijum-oksid</li><li>natrijum-hidroksil</li></ol>";
	pitanjaz[7] = "Formula HCl predstavlja:<ol><li>hlorovodonicnu kiselinu</li><li>azotnu kiselinu</li><li>magnezijum-oksid</li></ol>";
	pitanjaz[8] = "Formula za kalcijum-hidroksid je:<ol><li>Ca(OH)2</li><li>CaOH</li><li>CaO</li></ol>";
	pitanjaz[11] = "Formula za sumpornu kiselinu je <ol><li>H2SO3</li><li></li>H2SO2<li></li>H2SO4</ol>";
	//nihovi odgovori
	odgovoriz[0] = "destilovanu vodu i so";
	odgovoriz[3] = "h2o";
	odgovoriz[4] = "natrijum-hidroksid";
	odgovoriz[7] = "hlorovodonicnu kiselinu";
	odgovoriz[8] = "ca(oh)2";
	odgovoriz[11] = "h2so4";
	//teza pitanja
	pitanjaz[1] = "Formula za magnezijum-hidroksid je...";
	pitanjaz[2] = "Formula Al(OH)3 predstavlja...";
	pitanjaz[5] = "Koja je hemijska formula za kuhinjsku so?";
	pitanjaz[6] = "Koko se nazivaju soli sumporne kiseline?";
	pitanjaz[9] = "Formula za fosfornu kiselinu je...";
	pitanjaz[10] = "Formula za ugljenu kiselinu je...";
	//njihovi odgovori
	odgovoriz[1] = "mg(oh)2";
	odgovoriz[2] = "aluminijum-hidroksid";
	odgovoriz[5] = "nacl";
	odgovoriz[6] = "sulfiti";
	odgovoriz[9] = "h3po4";
	odgovoriz[10] = "h2co3";
	for(var i = 0;i < 12; i++){
		odgovoriz[i] = odgovoriz[i].toUpperCase();
	}
}
function POZ7(){
	//jednostavna pitanja
	pitanjaz[0] = "Prvi savremeni racunar nastao je:<ol><li>1934</li><li>1935</li><li>1936</li></ol>"
	pitanjaz[3] = "Elektronički sklop koji može izvršavati računarske programe<ol><li>ROM</li><li>RAM</li><li>procesor</li></ol>"
	pitanjaz[4] = "Sta od navedenog je ulazni uredjaj(uredja pomocu kojih racunar prima podatke od korisnika)?:<ol><li>tastatura</li><li>desktop</li><li>USB</li></ol>"
	pitanjaz[7] = "Sta od navedenog je izlazni uredjaj(uredja pomocu kojih racunar daje podatke korisniku)?:<ol><li>stampac</li><li>mikrofon</li><li>mis</li></ol>"
	pitanjaz[8] = "Koji od navedenih prgramskih jezika je objektno orjentisan?:<ol><li>BASIC</li><li>C</li><li>C++</li></ol>"
	pitanjaz[11] = "Koji od navedenih programskih jezika je skriptni jezik?:<ol><li>PHP</li><li>JAVA</li><li>C</li></ol>"
	//njihovi odgovori
	odgovoriz[0] = "1936";
	odgovoriz[3] = "procesor";
	odgovoriz[4] = "tastatura";
	odgovoriz[7] = "stampac";
	odgovoriz[8] = "c++";
	odgovoriz[11] = "php";
	//teza pitanja
	pitanjaz[1] = "Sta znaci skracenica ROM?";
	pitanjaz[2] = "Sta znaci skracenica RAM?";
	pitanjaz[5] = "OOP znaci...";
	pitanjaz[6] = "Ko je napravio C programski jezik?";
	pitanjaz[9] = "Koliko brojnih sistema imamo u racunarstvu?";
	pitanjaz[10] = "Da li je USB ulazno-izlazniuredjaj?";
	//njihovi odgovori
	odgovoriz[1] = "random access memory";
	odgovoriz[2] = "read only memory";
	odgovoriz[5] = "objektno orjentisan programski jezik";
	odgovoriz[6] = "denis rici";
	odgovoriz[9] = "4";
	odgovoriz[10] = "da";
	for(var i = 0;i < 12; i++){
		odgovoriz[i] = odgovoriz[i].toUpperCase();
	}
}
function POZ8(){
	//jednostavna pitanja
	pitanjaz[0] = "Koje je godine komponovano djelo 'Kalinka'?<ol><li>1859</li><li>1860</li><li>1861</li></ol>";
	pitanjaz[3] = "Is kog vijeka potice uspavanka 'Blistaj,blistaj zvijezdo mala'?<ol><li>17</li><li>18</li><li>19</li></ol>";
	pitanjaz[4] = "Sliku 'Tajna vecera' naslikao je:<ol><li>Donatello</li><li>Leonardo da Vinci</li><li>Mikelandjelo Bunaroti</li></ol>";
	pitanjaz[7] = "Sliku 'Stvaranje Adama' naslikao je:<ol><li>Francesko Petrarka</li><li>Rafaelo Santi</li><li>Mikelandjelo Bunaroti</li></ol>";
	pitanjaz[8] = "Najpoznatije djelo Boticelija je:<ol><li>Radjanje Venere</li><li>Vrisak</li><li>Smrt</li></ol>";
	pitanjaz[11] = "Najpoznatije djelo Leonarda da Vincija je:<ol><li>David</li><li>Vrisak</li><li>Mona Liza</li></ol>";
	//njihovi odgovori
	odgovoriz[0] = "1860";
	odgovoriz[3] = "19";
	odgovoriz[4] = "leonardo da vinci";
	odgovoriz[7] = "Mikelandjelo Bunaroti";
	odgovoriz[8] = "Radjanje Venere";
	odgovoriz[11] = "Mona Liza";
	//teza pitanja
	pitanjaz[1] = "Ko je napravio cuvenu skulpturu covjeka pod imenom 'David'?";
	pitanjaz[2] = "Ko je komponovao djelo 'Za Elizu'";
	pitanjaz[5] = "Koji je cuveni slikar umro na svoj rodjendan?";
	pitanjaz[6] = "Koje godine je komponovano djelo 'Za Elizu'?";
	pitanjaz[9] = "Ko je komponovao cuveno rusko djelo 'Korobeiniki'?";
	pitanjaz[10] = "Ko je komponovao djelo 'Kalinka'";
	//njihovi odgovori
	odgovoriz[1] = "mikelandjelo bunaroti";
	odgovoriz[2] = "ludvig van betoven";
	odgovoriz[5] = "rafaelo santi";
	odgovoriz[6] = "1810";
	odgovoriz[9] = "Nikolaj nekrasov";
	odgovoriz[10] = "Ivan Petrovic Larionov";
	for(var i = 0;i < 12;i++){
		odgovoriz[i] = odgovoriz[i].toUpperCase();
	}
}