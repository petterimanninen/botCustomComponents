"use strict";

var log4js = require('log4js');
var logger = log4js.getLogger();

module.exports = {

        metadata: () => (
        {
            "name": "joke",
            "properties": {},
            "supportedActions": []
        }
    ),

    invoke: (conversation, done) => 
	{
		var result = '';
		var request = require('sync-request');
		var response = request('GET', 'http://api.icndb.com/jokes/random');
		
		if (response.statusCode === 200) 
		{
			var data = JSON.parse(response.getBody());
			var result = data.value.joke;
			result = result.replace(/&quot;/g,'"');
		}
		else
		{
			result = "Nothing funny today ...";
		}

		conversation.reply({ text: result });
        conversation.transition();
        done();
    }
};
	