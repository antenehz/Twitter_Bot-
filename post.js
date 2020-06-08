var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);
function postIt() {

var tweet = {
    status: 'Firsto'
}
T.post('statuses/update', tweet, tweeted);
function tweeted(err, data, response){
    if(err){
        console.log("Something's Wrong");
    }
    else{
        console.log("It worked!");
    }
}
}