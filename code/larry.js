"use strict";

var log4js = require('log4js');
var logger = log4js.getLogger();


module.exports = 
{

    metadata: () => 
	(
        {
            "name": "larry",
            "properties": 
			{
                "num": { "type": "string", "required": false },
            },
            "supportedActions": []
        }
    ),

    invoke: (conversation, done) => 
	{

		var larryQuotes = new Array(50);
		
		larryQuotes[0]="Because software is all about scale. The larger you are, the more profitable you are. If we sell twice as much as software, it doesn’t cost us twice as much to build that software. So the more customers you have, the more scale you have. The larger you are, the more profitable you are. – Larry Ellison";
		larryQuotes[1]="Life’s a journey. It’s a journey about discovering limits. – Larry Ellison";
		larryQuotes[2]="Building Oracle is like doing math puzzles as a kid. – Larry Ellison";
		larryQuotes[3]="I love sailing. I like it more when I am winning. – Larry Ellison";
		larryQuotes[4]="I was vehemently against acquisitions. Now let’s buy everything in sight. Well, that’s a slight exaggeration. We are a little more strategic than that. But everything was on sale. – Larry Ellison";
		larryQuotes[5]="Bill Gates is the pope of the personal computer industry. He decides who is going to build. – Larry Ellison";
		larryQuotes[6]="Being first is more important to me. I have so much money. Whatever money is, it’s just a method of keeping score now. I mean, I certainly don’t need more money. – Larry Ellison";
		larryQuotes[7]="It’s Microsoft versus mankind, with Microsoft having only a slight lead. – Larry Ellison";
		larryQuotes[8]="The most important aspect of my personality as far as determining my success goes; has been my questioning conventional wisdom, doubting experts and questioning authority. While that can be painful in your relationships with your parents and teachers, it’s enormously useful in life. – Larry Ellison";
		larryQuotes[9]="When you innovate, you’ve got to be prepared for people telling you that you are nuts. – Larry Ellison";
		larryQuotes[10]="I have had all the disadvantages required for success. – Larry Ellison";
		larryQuotes[11]="A corporation’s primary goal is to make money. Government’s primary role is to take a big chunk of that money and give to others. – Larry Ellison";
		larryQuotes[12]="If you do everything that everyone else does in business, you’re going to lose. The only way to really be ahead, is to ‘be different’. – Larry Ellison";
		larryQuotes[13]="Our goal is simply to become the desktop for e-businesses. – Larry Ellison";
		larryQuotes[14]="I have had all the disadvantages required for success. – Larry Ellison";
		larryQuotes[15]="Five years from now, I don’t know how I’ll think. – Larry Ellison";
		larryQuotes[16]="Bill Gates wants people to think he is Edison, when he’s really Rockefeller. Referring to Gates as the smartest man in America isn’t right. Wealth isn’t the same thing as intelligence. – Larry Ellison";
		larryQuotes[17]="You have to act and act now. – Larry Ellison";
		larryQuotes[18]="We have been doing things that are contrary; the things that people tell us won’t work from the beginning. In fact, the only way to get ahead is to find errors in conventional wisdom. – Larry Ellison";
		larryQuotes[19]="In order to grow at this pace, there will have to be a couple of acquisitions along the way. The tricky thing is to grow at this rate and maintain a 40 percent operating margin. – Larry Ellison";
		larryQuotes[20]="Everyone thought the acquisition strategy was extremely risky because no one had ever done it successfully. In other words, it was innovative. – Larry Ellison";
		larryQuotes[21]="You have to act and act now. – Larry Ellison";
		larryQuotes[22]="I think after a certain amount, I’m going to give almost everything I have to charity. What else can you do with it? You can’t spend it, even if you try. I’ve been trying. – Larry Ellison";
		larryQuotes[23]="When you are the first person whose beliefs are different from what everyone else believes, you are basically saying, ‘I’m right and everyone else is wrong.’ That’s a very unpleasant position to be in. It’s at once exhilaration and the same time an invitation to be attacked. – Larry Ellison";
		larryQuotes[24]="It’s my job for Oracle, the number two software company in the world; to become the number one software company in the world. My job is to build better than the competition, sell those products in the marketplace and eventually supplant Microsoft and move from being number two to number one. – Larry Ellison";
		larryQuotes[25]="To model yourself after Steve Jobs is like, ‘I’d like to paint like Picasso, what should I do? Should I use more red?’ – Larry Ellison";
		larryQuotes[26]="In some ways, getting away from the headquarters and having a little time to reflect allows you to find errors in your strategy. You get to rethink things. Often, that helps me correct a mistake that I made or someone else is about to make. – Larry Ellison";
		larryQuotes[27]="Microsoft is already the most powerful company on earth but you ain’t seen nothing yet. – Larry Ellison";
		larryQuotes[28]="I greatly admire GE, their utterly ruthlessly focused management, to get the cost out and get this integration done.’ Okay, we may make a few mistakes along the way but we are not going to waste any time.’ They make decisions; they are incredibly disciplined and focused. – Larry Ellison";
		larryQuotes[29]="When you live your life in different ways, it makes people around you become uncomfortable. So deal with it. They don’t know what you are going to do. – Larry Ellison";
		larryQuotes[30]="You have to take a broader view and realize this is an industry like any other – telecoms, Railroads; they went through consolidation. Why shouldn’t the computer industry be any different? This shouldn’t have been a surprise to anybody but it seemed to be, and a lot of people thought I was nuts when I said these things. And that’s why they are alone as a consolidator. – Larry Ellison";
		larryQuotes[31]="I think I am very goal oriented. I’d like to win the America’s cup. I’d like Oracle to be the No 1 software company in the world. I still think it is possible to beat Microsoft. – Larry Ellison";
		larryQuotes[32]="We will still be enormously profitable and by far the most profitable enterprise software company. – Larry Ellison";
		larryQuotes[33]="I think you might see us growing much deeper into banking. You might see us acquiring companies in the banking area. You might see us acquiring companies in the retail area. I think you might see us acquiring companies in the telecommunications. I think you will see us getting stronger in business intelligence. – Larry Ellison";
		larryQuotes[34]="So what makes me happy? I was really happy to build this house. That’s it; building things. The trouble with software is that it’s very hard to show your aunt in Florida what you’ve done. – Larry Ellison";
		larryQuotes[35]="If an innovative piece of software comes along, Microsoft copies it and makes it part of Windows. This is not innovation; this is the end of innovation. – Larry Ellison";
		larryQuotes[36]="Those that believe this is merely a downturn are mad. Our industry is going to mature and as something matures, the rate of innovation does slow. – Larry Ellison";
		larryQuotes[37]="You can’t worry about it, you can’t panic when you look at the stock market’s decline or you get frozen like a deer in the headlights. All you can do is all you can do. – Larry Ellison";
		larryQuotes[38]="I saw that we needed to grow but our top line wasn’t growing, so we had to find other ways to grow the business. We had to reshape our business and acquire share in a non conventional way. But most tech leaders don’t come out of a business background. They really have a parochial point of view. All they know are the go-go years of Silicon Valley. That’s the environment in which they were raised. – Larry Ellison";
		larryQuotes[39]="When I do something, it is all about self-discovery. I want to learn and discover my own limits. – Larry Ellison";
		larryQuotes[40]="There’s a wonderful saying that’s dead wrong. ‘Why did you climb the mountain? ‘I climbed the mountain because it was there.’ That’s utter nonsense. You climbed the mountain because you were here and you were curious if you could do it. You wondered what it would be like. – Larry Ellison";
		larryQuotes[41]="I have run engineering since day one at Oracle, and I still run engineering. I hold meetings every week with the database team, the middle ware team, the applications team. I run engineering and I will do that until the board throws me out of there. – Larry Ellison";
		larryQuotes[42]="If your cash is about to run out, you have to cut your cash flow. CEOs have to make those decisions and live with them however painful they may be. You have to act and act now; and act in the best interest of the company as a whole, even if it means that some people in the company who are your best friends have to work somewhere else. – Larry Ellison";
		larryQuotes[43]="I am also involved with all the acquisitions and overall strategy. Now it’s true, I don’t run operations. But I’ve never really run operations. I’ve never had the endurance to run sales. The whole idea of selling to the customer just isn’t my personality. I’m an engineer, tell me why something isn’t working or is and I am curious. – Larry Ellison";
		larryQuotes[44]="You realize that life is short and fragile; and when you are facing walls of water, you understand your own mortality can change and how quickly things could change. – Larry Ellison";
		larryQuotes[45]="I think about the business all the time. Well I shouldn’t say all the time. I don’t think about it when I am wakeboarding. But even when I am on vacation, or on my boat; I am on email everyday. I am always prowling around the internet looking at what our competitors are doing. – Larry Ellison";
		larryQuotes[46]="Great achievers are driven, not so much by the pursuit of success, but by the fear of failure. – Larry Ellison";
		larryQuotes[47]="I’d prefer people read about Churchill and how he wasn’t overwhelmed by Nazi Germany. Amazing; that the morale of a country rested on one person’s shoulders. Extraordinary people carried that country through its darkest hours; truly inspirational. I suppose that’s my theme. Whether it’s a biography or a movie; whether it’s fictional or true, I’m inspired by people doing great things. – Larry Ellison";
		larryQuotes[48]="You have to believe in what you do in order to get what you want. – Larry Ellison";

		var value = conversation.properties().num ? conversation.properties().num : (Math.floor(Math.random() * 49))
		
		conversation.reply({ text: 'Larry said: ' + larryQuotes[value] });
        conversation.transition();
        done();
    }
};
