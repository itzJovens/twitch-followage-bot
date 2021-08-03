const tmi = require('tmi.js');



// Define configuration options
const opts = {
    identity: {
        username: 'itzjovens',
        password: 'oauth:u79zcmhtqum7o9we321k3xhpeh9x71'
    },
    channels: [
        'itzjovens', 'uknwmyname', 'tsm_daequan', 'xdaboinextdoorx', 'karagii', 'sydeon'
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

// KARAGII
client.on("subgift", (channel, username, streakMonths, recipient, methods, userstate) => {
    // Do your stuff.
  let senderCount = ~~userstate["msg-param-sender-count"];
// SRCHFPS
  if (channel.includes('karagii')) {
	  syncDelay(3000)
    client.say('karagii', `karagiMula GIFTED SUBS karagiMula`);
    let senderCount = ~~userstate["msg-param-sender-count"];
    console.Log(`* Executed Gifted Subs || KARAGII`)}
})

// SYDEON
client.on("resub", function (channel, username, months, message, userstate, methods) {
    // Do your stuff.
  let cumulativeMonths = userstate['msg-param-cumulative-months'];
	const { prime, plan, planName } = methods;
// SRCHFPS
  if (channel.includes('sydeon')){
	  if (prime) {
		  syncDelay(3000)
    client.say('itzjovens', `primer peepoPogStrip`);
    console.log(`* Executed Resub || SRCHFPS`)}
  }
});

client.on("subscription", function (channel, username, method, message, userstate) {
    // Do your stuff.
	const { prime, plan, planName } = methods;
// SRCHFPS
  if (channel.includes('sydeon')){
	  if (prime) {
		  syncDelay(3000)
    client.say('itzzjovens', `primer peepoPogStrip`);
    console.log(`* Executed Sub || SYDEON`)}
  }
});

client.on("subgift", (channel, username, streakMonths, recipient, methods, userstate) => {
    // Do your stuff.
  let senderCount = ~~userstate["msg-param-sender-count"];
  if (channel.includes('sydeon')) {
	  syncDelay(3000)
    client.say('sydeon', `PogU GIFTED SUBS sydeonHype`);
    let senderCount = ~~userstate["msg-param-sender-count"];
    console.Log(`* Executed Gifted Subs || SYDEON`)}
})

// TSM_DAEQUAN FOLLOWAGE 
// FIRST PART
client.on('message', (channel, tags, message, self) => {
  if(self) return;
  var channel1 = channel
  var message1 = message
  if (channel.includes('tsm_daequan')){
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
      client.say('tsm_daequan', `/me ${message.slice(12)} daeKiwi`)
      console.log(`EXECUTED FOLLOWAGE COMMAND IN TSM_DAEQUAN CHANNEL`)
      }
    }
  }  
});
// UKNWMYNAME
// FISRT PART
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
      if (message.toLowerCase().includes('uknwmyname')){
      client.say('xdaboinextdoorx', `/me ${message.slice(12)}`)
      console.log(`EXECUTED FOLLOWAGE COMMAND IN TSM_DAEQUAN CHANNEL`)
      }
    }
  }  
});

const allowed = [];

client.on('message', (channel, tags, message, self) => {
	if(self) return;
  let isBroadcaster = channel.slice(1) === tags.username;
  if (isBroadcaster){
  if (channel.includes('itzjovens')){
	if(message.includes("|allow")) {
      if (allowed.includes(message.slice(7))){
        client.say('itzjovens', `${message.slice(7)} has already been allowed`)
      } else { client.say('itzjovens', `@${message.slice(7)} is now allowed. kkatamHi`);
      allowed.push(message.slice(7))
}}}}});

client.on('message', (channel, tags, message, self) => {
	if(self) return;
  let isBroadcaster = channel.slice(1) === tags.username;
  if (isBroadcaster){
  if (channel.includes('itzjovens')){
	if(message.includes("|remove")) {
    client.say('itzjovens', `@${message.slice(8)} has now been removed.`);
      allowed.pop(message.slice(8))
}}}});

client.on('message', (channel, tags, message, self) => {
	if(self) return;
  let isAllowed = allowed.includes(tags.username);
  let isBroadcaster = channel.slice(1) === tags.username;
  let allowedUp = isAllowed || isBroadcaster
  if (allowedUp){
  if (channel.includes('itzjovens')){
	if(message.toLowerCase().includes("|ping")) {
		client.say('itzjovens', `Pong!, ${tags.username} sydeonHey`);
}}}});

client.on('message', (channel, tags, message, self) => {
	if(self) return;
  let isBroadcaster = channel.slice(1) === tags.username;
  if (isBroadcaster){
  if (channel.includes('itzjovens'))
	if(message === "|ALLOWED") {
		client.say('itzjovens', `${allowed}`);
}}});

client.on('message', (channel, tags, message, self) => {
	if(self) return;
let isBroadcaster = channel.slice(1) === tags.username;
  if (isBroadcaster){
  if (channel.includes('itzjovens'))
	if(message.toLowerCase().includes('|uptime')) {
    		var time = process.uptime();
    		var uptime = (time + "").toHHMMSS();
	client.say('itzjovens', `${uptime}`);
	console.log(`Executed uptime command in #itzjovens channel. || ${uptime} !`)
	}
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
