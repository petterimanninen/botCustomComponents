"use strict";

var log4js = require('log4js');
var logger = log4js.getLogger();

module.exports = {

		metadata: () => (
        {
            "name": "nimipv",
            "properties": {
                "date": { "type": "string", "required": false }
            },
            "supportedActions": []
        }
    ),

    invoke: (conversation, done) => 
	{
		var d = new Date();
		
		if(conversation.properties().date!="")
		{
			d = new Date(conversation.properties().date);
		}
		
		
		var pp = d.getDate() - 1;
		var kk = d.getMonth();
		var npv="";
				
		var tammi =
		[
			"Uudelle Vuodelle",
			"Aapeli",
			"Elmo ja Elmer",
			"Ruut",
			"Lea ja Leea",
			"Harri",
			"Aukusti ja Aku",
			"Hilppa ja Titta",
			"Veikko, Veli ja Veijo",
			"Nyyrikki",
			"Kari ja Karri",
			"Toini",
			"Nuutti",
			"Sakari ja Saku",
			"Solja",
			"Ilmari ja Ilmo",
			"Toni ja Anttoni",
			"Laura",
			"Heikki ja Henrik",
			"Henna ja Henni",
			"Aune ja Oona",
			"Visa",
			"Eine, Eini ja Enni",
			"Senja",
			"Paavo ja Pauli",
			"Joonatan",
			"Viljo",
			"Kaarlo ja Kalle",
			"Valtteri",
			"Irja",
			"Alli"
		];

		var helmi =
		[
			"Riitta",
			"Aamu",
			"Valo",
			"Armi",
			"Asser",
			"Terhi, Teija ja Tiia",
			"Riku ja Rikhard",
			"Laina",
			"Raija ja Raisa",
			"Elina ja Elna",
			"Talvikki",
			"Elma ja Elmi",
			"Sulo ja Sulho",
			"Voitto",
			"Sipi ja Sippo",
			"Kai",
			"Väinö ja Väinämö",
			"Kaino",
			"Eija",
			"Heli ja Helinä",
			"Keijo",
			"Tuulikki ja Tuuli",
			"Aslak",
			"Matti ja Mattias",
			"Tuija ja Tuire",
			"Nestori",
			"Torsti",
			"Onni"
		];

		var maalis = 
		[
			"Alpo",
			"Virve ja Virva",
			"Kauko",
			"Ari, Arsi ja Atro",
			"Laila ja Leila",
			"Tarmo",
			"Tarja ja Taru",
			"Vilppu",
			"Auvo",
			"Aurora, Aura ja Auri",
			"Kalervo",
			"Reijo ja Reko",
			"Erno ja Tarvo",
			"Matilda ja Tilda",
			"Risto",
			"Ilkka",
			"Kerttu ja Kerttuli",
			"Eetu ja Edvard",
			"Jooseppi ja Juuso",
			"Aki, Joakim ja Kim",
			"Pentti",
			"Vihtori",
			"Akseli",
			"Kaapo ja Gabriel",
			"Aija",
			"Manu ja Immanuel",
			"Sauli ja Saul",
			"Armas",
			"Joonas, Jouni ja Joni",
			"Usko ja Tage",
			"Irma ja Irmeli"
		];

		var huhti =
		[
			"Raita ja Pulmu",
			"Pellervo",
			"Sampo",
			"Ukko",
			"Irene ja Irina",
			"Vilho ja Ville",
			"Allan ja Ahvo",
			"Suoma ja Suometar",
			"Elias ja Eelis",
			"Tero",
			"Verna",
			"Julius ja Julia",
			"Tellervo",
			"Taito",
			"Linda ja Tuomi",
			"Jalo ja Patrik",
			"Otto",
			"Valto ja Valdemar",
			"Päivi ja Pilvi",
			"Lauha",
			"Anssi ja Anselmi",
			"Alina",
			"Yrjö, Jyrki ja Jyri",
			"Pertti ja Albert",
			"Markku, Markus ja Marko",
			"Terttu ja Teresa",
			"Merja",
			"Ilpo ja Ilppo",
			"Teijo",
			"Mirja, Mirva, Mira ja Miia"
		];

		var touko = 
		[
			"Vappu ja Valpuri",
			"Vuokko ja Viivi",
			"Outi",
			"Ruusu ja Roosa",
			"Maini",
			"Ylermi",
			"Helmi ja Kastehelmi",
			"Heino",
			"Timo",
			"Aino, Aina ja Aini",
			"Osmo",
			"Lotta",
			"Kukka ja Floora",
			"Tuula",
			"Sofia ja Sonja",
			"Esteri ja Essi",
			"Maila ja Rebekka",
			"Erkki ja Eero",
			"Emilia, Milja ja Emma",
			"Lilja ja Karoliina",
			"Kosti ja Kosta",
			"Hemminki ja Hemmo",
			"Lyydia ja Lyyli",
			"Tuukka ja Touko",
			"Urpo",
			"Minna ja Vilma",
			"Ritva",
			"Alma",
			"Oiva ja Oivi",
			"Pasi",
			"Helka ja Helga"
		];

		var kesa = 
		[
			"Teemu ja Nikodemus",
			"Venla",
			"Orvokki",
			"Toivo",
			"Sulevi",
			"Kustaa ja Kyösti",
			"Suvi",
			"Salomo ja Salomon",
			"Ensio",
			"Seppo",
			"Impi ja Immi",
			"Esko",
			"Raili ja Raila",
			"Kielo",
			"Vieno ja Viena",
			"Päivi, Päivikki ja Päivä",
			"Urho",
			"Tapio",
			"Siiri",
			"Into",
			"Ahti ja Ahto",
			"Paula, Liina ja Pauliina",
			"Aatto, Aatu ja Aadolf",
			"Johannes, Juhani ja Juha",
			"Uuno",
			"Jorma, Jarmo ja Jarkko",
			"Elviira ja Elvi",
			"Leo",
			"Pietari, Pekka, Petri ja Petra",
			"Päiviö ja Päivö"
		];

		var heina = 
		[
			"Aaro ja Aaron",
			"Maria, Mari, Maija, Meeri ja Maaria",
			"Arvo",
			"Ulla ja Upu",
			"Unto ja Untamo",
			"Esa ja Esaias",
			"Klaus ja Launo",
			"Turo ja Turkka",
			"Ilta ja Jasmin",
			"Saima ja Saimi",
			"Elli, Noora ja Nelli",
			"Hermanni, Herkko",
			"Ilari, Lari ja Joel",
			"Aliisa",
			"Rauni ja Rauna",
			"Reino",
			"Ossi ja Ossian",
			"Riikka",
			"Saara, Sari, Salli ja Salla",
			"Marketta, Maarit ja Reeta",
			"Johanna, Hanna ja Jenni",
			"Leena, Leeni ja Lenita",
			"Oili ja Olga",
			"Kirsti, Tiina, Kirsi ja Kristiina",
			"Jaakko ja Jaakoppi",
			"Martta",
			"Heidi",
			"Atso",
			"Olavi, Olli, Uolevi ja Uoti",
			"Asta",
			"Helena ja Elena"
		];

		var elo = 
		[
			"Maire",
			"Kimmo",
			"Linnea, Nea ja Vanamo",
			"Veera",
			"Salme ja Sanelma",
			"Toimi ja Keimo",
			"Lahja",
			"Sylvi, Sylvia ja Silva",
			"Erja ja Eira",
			"Lauri, Lasse ja Lassi",
			"Sanna, Susanna ja Sanni",
			"Klaara",
			"Jesse",
			"Onerva ja Kanerva",
			"Marjatta, Marja ja Jaana",
			"Aulis",
			"Verneri",
			"Leevi",
			"Mauno ja Maunu",
			"Samuli, Sami, Samuel ja Samu",
			"Soini ja Veini",
			"Iivari ja Iivo",
			"Varma ja Signe",
			"Perttu",
			"Loviisa",
			"Ilma, Ilmi ja Ilmatar",
			"Rauli",
			"Tauno",
			"Iines, Iina ja Inari",
			"Eemil ja Eemeli",
			"Arvi"
		];

		var syys = 
		[
			"Pirkka",
			"Sinikka ja Sini",
			"Soili, Soile ja Soila",
			"Ansa",
			"Mainio",
			"Asko",
			"Arho ja Arhippa",
			"Taimi",
			"Eevert ja Isto",
			"Kalevi ja Kaleva",
			"Santeri, Ali, Ale ja Aleksanteri",
			"Valma ja Vilja ",
			"Orvo",
			"Iida",
			"Sirpa",
			"Hellevi, Hillevi, Hille ja Hilla",
			"Aili ja Aila",
			"Tyyne, Tytti ja Tyyni",
			"Reija",
			"Varpu ja Vaula",
			"Mervi",
			"Mauri",
			"Mielikki",
			"Alvar ja Auno",
			"Kullervo",
			"Kuisma",
			"Vesa",
			"Arja",
			"Mikko, Mika, Mikael, Miika",
			"Sorja ja Sirja"
		];

		var loka = 
		[
			"Rauno, Rainer, Raine ja Raino",
			"Valio",
			"Raimo",
			"Saila ja Saija",
			"Inkeri ja Inka",
			"Minttu ja Pinja",
			"Pirkko, Pirjo, Piritta ja Pirita",
			"Hilja",
			"Ilona",
			"Aleksi ja Aleksis",
			"Otso ja Ohto",
			"Aarre ja Aarto",
			"Taina, Tanja ja Taija",
			"Elsa, Else ja Elsi",
			"Helvi ja Heta",
			"Sirkka ja Sirkku",
			"Saini ja Saana",
			"Satu ja Säde",
			"Uljas",
			"Kauno ja Kasperi",
			"Ursula",
			"Anja, Anita, Anniina ja Anitta",
			"Severi",
			"Asmo",
			"Sointu",
			"Amanda ja Niina, Manta",
			"Helli, Hellä, Hellin ja Helle",
			"Simo",
			"Alfred ja Urmas",
			"Eila",
			"Artturi, Arto ja Arttu"
		];

		var marras = 
		[
			"Pyry ja Lyly",
			"Topi ja Topias",
			"Terho",
			"Hertta",
			"Reima",
			"Kustaa Aadolf",
			"Taisto",
			"Aatos",
			"Teuvo",
			"Martti",
			"Panu",
			"Virpi",
			"Ano ja Kristian",
			"Iiris",
			"Janika, Janita ja Janina",
			"Aarne ja Aarno, Aarni",
			"Eino ja Einar",
			"Tenho ja Jousia",
			"Liisa, Eliisa, Elisa ja Elisabet",
			"Jalmari ja Jari",
			"Hilma",
			"Silja ja Selja",
			"Ismo",
			"Lempi, Lemmikki ja Sivi",
			"Katri, Kaisa, Kaija ja Katja",
			"Sisko",
			"Hilkka",
			"Heini",
			"Aimo",
			"Antti, Antero ja Atte"
		];

		var joulu = 
		[
			"Oskari",
			"Anelma ja Unelma",
			"Vellamo ja Meri",
			"Airi ja Aira",
			"Selma",
			"Niilo, Niko ja Niklas",
			"Sampsa",
			"Kyllikki ja Kylli",
			"Anna, Anne, Anni, Anu ja Annikki",
			"Jutta",
			"Taneli, Tatu ja Daniel",
			"Tuovi",
			"Seija",
			"Jouko",
			"Heimo",
			"Auli ja Aulikki",
			"Raakel",
			"Aapo, Aappo ja Rami",
			"Iikka, Iiro, Iisakki ja Isko",
			"Benjamin ja Kerkko",
			"Tuomas, Tuomo ja Tommi",
			"Raafael",
			"Senni",
			"Aatami, Eeva, Eevi ja Eveliina",
			"ja joulurauhaa",
			"Tapani ja Teppo",
			"Hannu ja Hannes",
			"Piia",
			"Rauha",
			"Daavid, Taavetti ja Taavi",
			"Sylvester ja Silvo"
		];
		
/*
		tammi = new Array(31);
		tammi[0]="Uudelle Vuodelle";
		tammi[1]="Aapeli";
		tammi[2]="Elmo ja Elmer";
		tammi[3]="Ruut";
		tammi[4]="Lea ja Leea";
		tammi[5]="Harri";
		tammi[6]="Aukusti ja Aku";
		tammi[7]="Hilppa ja Titta";
		tammi[8]="Veikko, Veli ja Veijo";
		tammi[9]="Nyyrikki";
		tammi[10]="Kari ja Karri";
		tammi[11]="Toini";
		tammi[12]="Nuutti";
		tammi[13]="Sakari ja Saku";
		tammi[14]="Solja";
		tammi[15]="Ilmari ja Ilmo";
		tammi[16]="Toni ja Anttoni";
		tammi[17]="Laura";
		tammi[18]="Heikki ja Henrik";
		tammi[19]="Henna ja Henni";
		tammi[20]="Aune ja Oona";
		tammi[21]="Visa";
		tammi[22]="Eine, Eini ja Enni";
		tammi[23]="Senja";
		tammi[24]="Paavo ja Pauli";
		tammi[25]="Joonatan";
		tammi[26]="Viljo";
		tammi[27]="Kaarlo ja Kalle";
		tammi[28]="Valtteri";
		tammi[29]="Irja";
		tammi[30]="Alli";

		helmi = new Array(28);
		helmi[0]="Riitta";
		helmi[1]="Aamu";
		helmi[2]="Valo";
		helmi[3]="Armi";
		helmi[4]="Asser";
		helmi[5]="Terhi, Teija ja Tiia";
		helmi[6]="Riku ja Rikhard";
		helmi[7]="Laina";
		helmi[8]="Raija ja Raisa";
		helmi[9]="Elina ja Elna";
		helmi[10]="Talvikki";
		helmi[11]="Elma ja Elmi";
		helmi[12]="Sulo ja Sulho";
		helmi[13]="Voitto";
		helmi[14]="Sipi ja Sippo";
		helmi[15]="Kai";
		helmi[16]="Väinö ja Väinämö";
		helmi[17]="Kaino";
		helmi[18]="Eija";
		helmi[19]="Heli ja Helinä";
		helmi[20]="Keijo";
		helmi[21]="Tuulikki ja Tuuli";
		helmi[22]="Aslak";
		helmi[23]="Matti ja Mattias";
		helmi[24]="Tuija ja Tuire";
		helmi[25]="Nestori";
		helmi[26]="Torsti";
		helmi[27]="Onni";

		maalis = new Array(31);
		maalis[0]="Alpo";
		maalis[1]="Virve ja Virva";
		maalis[2]="Kauko";
		maalis[3]="Ari, Arsi ja Atro";
		maalis[4]="Laila ja Leila";
		maalis[5]="Tarmo";
		maalis[6]="Tarja ja Taru";
		maalis[7]="Vilppu";
		maalis[8]="Auvo";
		maalis[9]="Aurora, Aura ja Auri";
		maalis[10]="Kalervo";
		maalis[11]="Reijo ja Reko";
		maalis[12]="Erno ja Tarvo";
		maalis[13]="Matilda ja Tilda";
		maalis[14]="Risto";
		maalis[15]="Ilkka";
		maalis[16]="Kerttu ja Kerttuli";
		maalis[17]="Eetu ja Edvard";
		maalis[18]="Jooseppi ja Juuso";
		maalis[19]="Aki, Joakim ja Kim";
		maalis[20]="Pentti";
		maalis[21]="Vihtori";
		maalis[22]="Akseli";
		maalis[23]="Kaapo ja Gabriel";
		maalis[24]="Aija";
		maalis[25]="Manu ja Immanuel";
		maalis[26]="Sauli ja Saul";
		maalis[27]="Armas";
		maalis[28]="Joonas, Jouni ja Joni";
		maalis[29]="Usko ja Tage";
		maalis[30]="Irma ja Irmeli";

		huhti = new Array(30);
		huhti[0]="Raita ja Pulmu";
		huhti[1]="Pellervo";
		huhti[2]="Sampo";
		huhti[3]="Ukko";
		huhti[4]="Irene ja Irina";
		huhti[5]="Vilho ja Ville";
		huhti[6]="Allan ja Ahvo";
		huhti[7]="Suoma ja Suometar";
		huhti[8]="Elias ja Eelis";
		huhti[9]="Tero";
		huhti[10]="Verna";
		huhti[11]="Julius ja Julia";
		huhti[12]="Tellervo";
		huhti[13]="Taito";
		huhti[14]="Linda ja Tuomi";
		huhti[15]="Jalo ja Patrik";
		huhti[16]="Otto";
		huhti[17]="Valto ja Valdemar";
		huhti[18]="Päivi ja Pilvi";
		huhti[19]="Lauha";
		huhti[20]="Anssi ja Anselmi";
		huhti[21]="Alina";
		huhti[22]="Yrjö, Jyrki ja Jyri";
		huhti[23]="Pertti ja Albert";
		huhti[24]="Markku, Markus ja Marko";
		huhti[25]="Terttu ja Teresa";
		huhti[26]="Merja";
		huhti[27]="Ilpo ja Ilppo";
		huhti[28]="Teijo";
		huhti[29]="Mirja, Mirva, Mira ja Miia";

		touko = new Array(31);
		touko[0]="Vappu ja Valpuri";
		touko[1]="Vuokko ja Viivi";
		touko[2]="Outi";
		touko[3]="Ruusu ja Roosa";
		touko[4]="Maini";
		touko[5]="Ylermi";
		touko[6]="Helmi ja Kastehelmi";
		touko[7]="Heino";
		touko[8]="Timo";
		touko[9]="Aino, Aina ja Aini";
		touko[10]="Osmo";
		touko[11]="Lotta";
		touko[12]="Kukka ja Floora";
		touko[13]="Tuula";
		touko[14]="Sofia ja Sonja";
		touko[15]="Esteri ja Essi";
		touko[16]="Maila ja Rebekka";
		touko[17]="Erkki ja Eero";
		touko[18]="Emilia, Milja ja Emma";
		touko[19]="Lilja ja Karoliina";
		touko[20]="Kosti ja Kosta";
		touko[21]="Hemminki ja Hemmo";
		touko[22]="Lyydia ja Lyyli";
		touko[23]="Tuukka ja Touko";
		touko[24]="Urpo";
		touko[25]="Minna ja Vilma";
		touko[26]="Ritva";
		touko[27]="Alma";
		touko[28]="Oiva ja Oivi";
		touko[29]="Pasi";
		touko[30]="Helka ja Helga";

		kesa = new Array(30);
		kesa[0]="Teemu ja Nikodemus";
		kesa[1]="Venla";
		kesa[2]="Orvokki";
		kesa[3]="Toivo";
		kesa[4]="Sulevi";
		kesa[5]="Kustaa ja Kyösti";
		kesa[6]="Suvi";
		kesa[7]="Salomo ja Salomon";
		kesa[8]="Ensio";
		kesa[9]="Seppo";
		kesa[10]="Impi ja Immi";
		kesa[11]="Esko";
		kesa[12]="Raili ja Raila";
		kesa[13]="Kielo";
		kesa[14]="Vieno ja Viena";
		kesa[15]="Päivi, Päivikki ja Päivä";
		kesa[16]="Urho";
		kesa[17]="Tapio";
		kesa[18]="Siiri";
		kesa[19]="Into";
		kesa[20]="Ahti ja Ahto";
		kesa[21]="Paula, Liina ja Pauliina";
		kesa[22]="Aatto, Aatu ja Aadolf";
		kesa[23]="Johannes, Juhani ja Juha";
		kesa[24]="Uuno";
		kesa[25]="Jorma, Jarmo ja Jarkko";
		kesa[26]="Elviira ja Elvi";
		kesa[27]="Leo";
		kesa[28]="Pietari, Pekka, Petri ja Petra";
		kesa[29]="Päiviö ja Päivö";

		heina = new Array(31);
		heina[0]="Aaro ja Aaron";
		heina[1]="Maria, Mari, Maija, Meeri ja Maaria";
		heina[2]="Arvo";
		heina[3]="Ulla ja Upu";
		heina[4]="Unto ja Untamo";
		heina[5]="Esa ja Esaias";
		heina[6]="Klaus ja Launo";
		heina[7]="Turo ja Turkka";
		heina[8]="Ilta ja Jasmin";
		heina[9]="Saima ja Saimi";
		heina[10]="Elli, Noora ja Nelli";
		heina[11]="Hermanni, Herkko";
		heina[12]="Ilari, Lari ja Joel";
		heina[13]="Aliisa";
		heina[14]="Rauni ja Rauna";
		heina[15]="Reino";
		heina[16]="Ossi ja Ossian";
		heina[17]="Riikka";
		heina[18]="Saara, Sari, Salli ja Salla";
		heina[19]="Marketta, Maarit ja Reeta";
		heina[20]="Johanna, Hanna ja Jenni";
		heina[21]="Leena, Leeni ja Lenita";
		heina[22]="Oili ja Olga";
		heina[23]="Kirsti, Tiina, Kirsi ja Kristiina";
		heina[24]="Jaakko ja Jaakoppi";
		heina[25]="Martta";
		heina[26]="Heidi";
		heina[27]="Atso";
		heina[28]="Olavi, Olli, Uolevi ja Uoti";
		heina[29]="Asta";
		heina[30]="Helena ja Elena";

		elo = new Array(31);
		elo[0]="Maire";
		elo[1]="Kimmo";
		elo[2]="Linnea, Nea ja Vanamo";
		elo[3]="Veera";
		elo[4]="Salme ja Sanelma";
		elo[5]="Toimi ja Keimo";
		elo[6]="Lahja";
		elo[7]="Sylvi, Sylvia ja Silva";
		elo[8]="Erja ja Eira";
		elo[9]="Lauri, Lasse ja Lassi";
		elo[10]="Sanna, Susanna ja Sanni";
		elo[11]="Klaara";
		elo[12]="Jesse";
		elo[13]="Onerva ja Kanerva";
		elo[14]="Marjatta, Marja ja Jaana";
		elo[15]="Aulis";
		elo[16]="Verneri";
		elo[17]="Leevi";
		elo[18]="Mauno ja Maunu";
		elo[19]="Samuli, Sami, Samuel ja Samu";
		elo[20]="Soini ja Veini";
		elo[21]="Iivari ja Iivo";
		elo[22]="Varma ja Signe";
		elo[23]="Perttu";
		elo[24]="Loviisa";
		elo[25]="Ilma, Ilmi ja Ilmatar";
		elo[26]="Rauli";
		elo[27]="Tauno";
		elo[28]="Iines, Iina ja Inari";
		elo[29]="Eemil ja Eemeli";
		elo[30]="Arvi";

		syys = new Array(30);
		syys[0]="Pirkka";
		syys[1]="Sinikka ja Sini";
		syys[2]="Soili, Soile ja Soila";
		syys[3]="Ansa";
		syys[4]="Mainio";
		syys[5]="Asko";
		syys[6]="Arho ja Arhippa";
		syys[7]="Taimi";
		syys[8]="Eevert ja Isto";
		syys[9]="Kalevi ja Kaleva";
		syys[10]="Santeri, Ali, Ale ja Aleksanteri";
		syys[11]="Valma ja Vilja ";
		syys[12]="Orvo";
		syys[13]="Iida";
		syys[14]="Sirpa";
		syys[15]="Hellevi, Hillevi, Hille ja Hilla";
		syys[16]="Aili ja Aila";
		syys[17]="Tyyne, Tytti ja Tyyni";
		syys[18]="Reija";
		syys[19]="Varpu ja Vaula";
		syys[20]="Mervi";
		syys[21]="Mauri";
		syys[22]="Mielikki";
		syys[23]="Alvar ja Auno";
		syys[24]="Kullervo";
		syys[25]="Kuisma";
		syys[26]="Vesa";
		syys[27]="Arja";
		syys[28]="Mikko, Mika, Mikael, Miika";
		syys[29]="Sorja ja Sirja";

		loka = new Array(31);
		loka[0]="Rauno, Rainer, Raine ja Raino";
		loka[1]="Valio";
		loka[2]="Raimo";
		loka[3]="Saila ja Saija";
		loka[4]="Inkeri ja Inka";
		loka[5]="Minttu ja Pinja";
		loka[6]="Pirkko, Pirjo, Piritta ja Pirita";
		loka[7]="Hilja";
		loka[8]="Ilona";
		loka[9]="Aleksi ja Aleksis";
		loka[10]="Otso ja Ohto";
		loka[11]="Aarre ja Aarto";
		loka[12]="Taina, Tanja ja Taija";
		loka[13]="Elsa, Else ja Elsi";
		loka[14]="Helvi ja Heta";
		loka[15]="Sirkka ja Sirkku";
		loka[16]="Saini ja Saana";
		loka[17]="Satu ja Säde";
		loka[18]="Uljas";
		loka[19]="Kauno ja Kasperi";
		loka[20]="Ursula";
		loka[21]="Anja, Anita, Anniina ja Anitta";
		loka[22]="Severi";
		loka[23]="Asmo";
		loka[24]="Sointu";
		loka[25]="Amanda ja Niina, Manta";
		loka[26]="Helli, Hellä, Hellin ja Helle";
		loka[27]="Simo";
		loka[28]="Alfred ja Urmas";
		loka[29]="Eila";
		loka[30]="Artturi, Arto ja Arttu";

		marras = new Array(30);
		marras[0]="Pyry ja Lyly";
		marras[1]="Topi ja Topias";
		marras[2]="Terho";
		marras[3]="Hertta";
		marras[4]="Reima";
		marras[5]="Kustaa Aadolf";
		marras[6]="Taisto";
		marras[7]="Aatos";
		marras[8]="Teuvo";
		marras[9]="Martti";
		marras[10]="Panu";
		marras[11]="Virpi";
		marras[12]="Ano ja Kristian";
		marras[13]="Iiris";
		marras[14]="Janika, Janita ja Janina";
		marras[15]="Aarne ja Aarno, Aarni";
		marras[16]="Eino ja Einar";
		marras[17]="Tenho ja Jousia";
		marras[18]="Liisa, Eliisa, Elisa ja Elisabet";
		marras[19]="Jalmari ja Jari";
		marras[20]="Hilma";
		marras[21]="Silja ja Selja";
		marras[22]="Ismo";
		marras[23]="Lempi, Lemmikki ja Sivi";
		marras[24]="Katri, Kaisa, Kaija ja Katja";
		marras[25]="Sisko";
		marras[26]="Hilkka";
		marras[27]="Heini";
		marras[28]="Aimo";
		marras[29]="Antti, Antero ja Atte";

		joulu = new Array(31);
		joulu[0]="Oskari";
		joulu[1]="Anelma ja Unelma";
		joulu[2]="Vellamo ja Meri";
		joulu[3]="Airi ja Aira";
		joulu[4]="Selma";
		joulu[5]="Niilo, Niko ja Niklas";
		joulu[6]="Sampsa";
		joulu[7]="Kyllikki ja Kylli";
		joulu[8]="Anna, Anne, Anni, Anu ja Annikki";
		joulu[9]="Jutta";
		joulu[10]="Taneli, Tatu ja Daniel";
		joulu[11]="Tuovi";
		joulu[12]="Seija";
		joulu[13]="Jouko";
		joulu[14]="Heimo";
		joulu[15]="Auli ja Aulikki";
		joulu[16]="Raakel";
		joulu[17]="Aapo, Aappo ja Rami";
		joulu[18]="Iikka, Iiro, Iisakki ja Isko";
		joulu[19]="Benjamin ja Kerkko";
		joulu[20]="Tuomas, Tuomo ja Tommi";
		joulu[21]="Raafael";
		joulu[22]="Senni";
		joulu[23]="Aatami, Eeva, Eevi ja Eveliina";
		joulu[24]="ja joulurauhaa";
		joulu[25]="Tapani ja Teppo";
		joulu[26]="Hannu ja Hannes";
		joulu[27]="Piia";
		joulu[28]="Rauha";
		joulu[29]="Daavid, Taavetti ja Taavi";
		joulu[30]="Sylvester ja Silvo";
*/
		if(kk == 0)  npv=tammi[pp];
		if(kk == 1)  npv=helmi[pp];
		if(kk == 2)  npv=maalis[pp];
		if(kk == 3)  npv=huhti[pp];
		if(kk == 4)  npv=touko[pp];
		if(kk == 5)  npv=kesa[pp];
		if(kk == 6)  npv=heina[pp];
		if(kk == 7)  npv=elo[pp];
		if(kk == 8)  npv=syys[pp];
		if(kk == 9)  npv=loka[pp];
		if(kk == 10) npv=marras[pp];
		if(kk == 11) npv=joulu[pp];
		
		conversation.reply({ text: 'Tänään on ' + pp + '.' + kk + '.' + '\nOnnea nimipäivälle ' + npv + '!'});
        conversation.transition();
        done();
    }
};

