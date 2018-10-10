console.log('The bot is starting');

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);

function randomlink(){
ocation=randomlinks[Math.floor(Math.random()*randomlinks.length)]
}

setInterval(tweetIt, 1000*60*5)
tweetIt();


function tweetIt() {

	var r =  " #VeganRecipeBot "

	var tweet = {
	status: r + randomlinks[Math.floor(Math.random()*randomlinks.length)]
	}

	T.post('statuses/update', tweet, tweeted);

	function tweeted(err, data, response) {
	  if (err) {
		console.log("Something went wrong!")
	  } else {
		console.log("It worked!");
		}
	}
}