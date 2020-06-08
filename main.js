// Step 1. Set up

console.log("Hello, the twitter bot is starting ...")
// kind of like 'import' in java. It's used to import the library to authenticate 'O-off"
// creating an object that runs with twitter
var Twit = require('twit');
// importing from config.js
var config = require('./config');
//making a now twitter object with the keys
var T = new Twit(config);

// Step 2: Experiment with methods; get(), post(), or stream()

 




// using get:
function getIt(){
 // 'intern' is what Twitter will be searching for.
var p = {q: 'intern', 
    count: 2 // expected amount of tweets to recieve.
 }
 // Asking Twitter to search for tweets
T.get('search/tweets', p, gotData);
 // Function that will be triggered when the callback arrives 
function gotData(err, data, response) {
    var tweets = data.statuses;
    for(var i=0; i<tweets.length;i++){
    console.log(tweets[i].text)
    }  
};
}
// call get
getIt(); 




        //post
function postIt() {
        //What I'm going to post
        var rando = Math.floor(Math.random()*100);
    var twing = {
        status: 'Hey mama, your lottory # is ' + rando + ', how exciting!'
    }
        // Actually posting my tweet
    T.post('statuses/update', twing, tweeted);
        
        // Function that will be triggered when the callback arrives
    function tweeted(err, data, response) {
        if(err)console.log('Somthing is wrong');
        else{
            console.log("The bot worked!");
        }
        }
    }
    
 // call post
 postIt();   