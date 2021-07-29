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

function onConnectedHandler(addr, port) {
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
