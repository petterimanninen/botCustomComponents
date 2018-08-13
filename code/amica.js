"use strict";

var log4js = require('log4js');
var logger = log4js.getLogger();

module.exports = {

        metadata: () => (
        {
            "name": "amica",
            "properties": {},
            "supportedActions": []
        }
    ),

    invoke: (conversation, done) => 
	{
	// palauttaa piispankallion pvm-päivän ruokalistan

		var answer = '';
		var request = require('sync-request');
		// costNumber = 3618 on piispankallio, löytyy websivun sorsasta
		// firstDay = 2017-01-18 on alkupäivä
		// lastDay = 2017-01-18 on loppupäivä, ei toimi eikä ole pakollinen
		var pvm = amicapvm(new Date());
		var url = 'http://www.amica.fi/modules/json/json/Index?costNumber=3618&firstDay=' + pvm + '&lastDay=' + pvm + '&language=fi';
		
		console.log('amica ruokalista url=' + url);
		var response = request('GET', url);
		var result="ei ruokalistaa";

		if (response.statusCode === 200) 
		{
			var data = JSON.parse(response.getBody());
			var dish;
			var component;
			for(dish in data.MenusForDays[0].SetMenus)
			{
				for(component in data.MenusForDays[0].SetMenus[dish].Components)
				{
					answer += data.MenusForDays[0].SetMenus[dish].Components[component]+'\n';
				}
				answer +='\n';
			}
			result = answer;
		}

		conversation.reply({ text: result });
        conversation.transition();
        done();
	}
};

var amicapvm = function(date) 
{
	var nyt = new Date();
	nyt = date;

	var pp = nyt.getDate();
	var kk = nyt.getMonth()+1;
	var vvvv = nyt.getFullYear();

	pp = (pp > 9) ? pp : '0' + pp;
	kk = (kk > 9) ? kk : '0' + kk;

	var paivamaara = vvvv + "-" + kk + "-" + pp;
	
	return(paivamaara);
};
