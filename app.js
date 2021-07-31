const tmi = require('tmi.js');



// Define configuration options
const opts = {
    identity: {
        username: 'itzjovens',
        password: 'oauth:u79zcmhtqum7o9we321k3xhpeh9x71'
    },
    channels: [
        'itzjovens', 'uknwmyname', 'tsm_daequan', 'xdaboinextdoorx', 
    ]
};




// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);
client.on("USERNOTICE", onMessageHandler);

// Connect to Twitch:
client.connect();

client.on("resub", function (channel, username, months, message, userstate, methods) {
    // Do your stuff.
  let cumulativeMonths = userstate['msg-param-cumulative-months'];
// SRCHFPS
  if (channel.includes('srchfps')){
    client.say('itzjovens', `PowerUpL Thanks for resubscribing @${username} for ${cumulativeMonths} MONTHS! PowerUpR`);
    console.log(`* Executed Resub || SRCHFPS`)}
});

client.on("subscription", function (channel, username, method, message, userstate) {
    // Do your stuff.
// SRCHFPS
  if (channel.includes('srchfps')){
    client.say('srchfps', `PowerUpR Thanks for subscribing @${username} PowerUpR ||`);
    console.log(`* Executed Sub || SRCHFPS`)}
});

client.on("subgift", (channel, username, streakMonths, recipient, methods, userstate) => {
    // Do your stuff.
  let senderCount = ~~userstate["msg-param-sender-count"];
// SRCHFPS
  if (channel.includes('srchfps')) {
    client.say('srchfps', `PowerUpL GIFTED SUBS PowerUpR ||`);
    let senderCount = ~~userstate["msg-param-sender-count"];
    console.Log(`* Executed Gifted Subs || SRCHFPS`)}
})

// TSM_DAEQUAN FOLLOWAGE 
// FIRST PART
client.on('message', (channel, tags, message, self) => {
  if(self) return;
  var channel1 = channel
  var message1 = message
  if (channel.includes('xdaboinextdoorx')){
  if(message.toLowerCase().includes('!followage')) {
    client.say('uknwmyname', `!followage ${tags.username} ${channel.slice(1)}`);
    console.log(`EXECUTED FOLLOWAGE COMMAND FOR ${tags.username} on ${channel}`)}
  }
});
// SECOND PART
client.on('message', (channel, tags, message, self) => {
	if(self) return;
  if (channel.includes('uknwmyname')){
    if (message.toLowerCase().includes('@itzjovens,')){
      if (message.toLowerCase().includes('tsm_daequan')){
      syncDelay(5000)
      client.say('xdaboinextdoorx', `${message.slice(12)}`)
      console.log(`EXECUTED FOLLOWAGE COMMAND IN TSM_DAEQUAN CHANNEL`)
      }
    }
  }  
});

client.on('message', (channel, tags, message, self) => {
	if(self) return;
  if (channel.includes('itzjovens'))
	if(message.toLowerCase().includes('!ping bot')) {
    client.say('itzjovens', `@${tags.username}, Pong!`);
	console.log(`Executed ping in #itzjovens channel. BOT IS ALIVE!`)
	}
});

client.on('message', (channel, tags, message, self) => {
	if(self) return;
  if (channel.includes('itzjovens'))
	if(message.toLowerCase().includes('\uptime')) {
    		var time = process.uptime();
    		var uptime = (time + "").toHHMMSS();
	client.say('itzjovens', `@${tags.username}, ${uptime}!`);
	console.log(`Executed uptime command in #itzjovens channel. || ${uptime} !`)
	}
});

function onConnectedHandler(addr, port) {
	client.say('itzjovens', `Followage Bot has Started!`)
    	console.log(`* Connected to ${addr}:${port}`);
}

function syncDelay(milliseconds){
 var start = new Date().getTime();
 var end=0;
 while( (end-start) < milliseconds){
     end = new Date().getTime();
 }
}

function onMessageHandler(target, context, msg, self) {
    if (self) { return; } // Ignore messages from the bot
}

String.prototype.toHHMMSS = function () {
    var sec_num = parseInt(this, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    var time    = hours+':'+minutes+':'+seconds;
    return time;
}
