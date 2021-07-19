const tmi = require('tmi.js');


// Define configuration options
const opts = {
    identity: {
        username: 'itzjovens',
        password: 'oauth:u79zcmhtqum7o9we321k3xhpeh9x71'
    },
    channels: [
        'itzjovens', 'srchfps', '', 
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

// Called every time a message comes in

// Called every time a message comes in
client.on("resub", function (channel, username, months, message, userstate, methods) {
    // Do your stuff.
  let cumulativeMonths = userstate['msg-param-cumulative-months'];
  client.say(channel, `/me PowerUpL Thanks for resubsribing @${username} for ${cumulativeMonths} MONTHS! PowerUpR`);
  console.log(`* Executed Resub`)
});

client.on("subscription", function (channel, username, method, message, userstate) {
    // Do your stuff.
  client.say(channel, `/me PowerUpL Thanks for subscribing @${username} PowerUpR`);
  console.log(`* Executed Resub`)
});

client.on("subgift", (channel, username, streakMonths, recipient, methods, userstate) => {
    // Do your stuff.
    let senderCount = ~~userstate["msg-param-sender-count"];
  client.say(channel, `/me PowerUpL ${senderCount} GIFTED SUBS PowerUpR`);
  console.Log(`* Executed Gifted Subs`)
});


client.on('message', (channel, userstate, message, self) => {
    if(self || message[0] !== '!') return;
    let parameters = message.split(' ').filter(n => n);
    let command = parameters.shift().slice(1).toLowerCase();
    if(command === 'jovens') {
        let msg = `DONT PING ME 😠 `;
        client.say(channel, msg);
    }
});

client.on('message', (channel, tags, message, self) => {
	if(self) return;
	if(message.toLowerCase().includes('hello')) {
		client.say(channel, `@${tags.username}, heya!`);
	}
});

function onMessageHandler(target, context, msg, self) {
    if (self) { return; } // Ignore messages from the bot

    // Remove whitespace from chat message



    // If the command is known, let's execute it
    if (msg.toLowerCase().includes('itzjovens') || msg.toLowerCase().includes('jovens')) {
        client.say(target, `sydeonNinja`);
        console.log(`* Executed ${msg} command`);
    }
    if ((msg.includes)('BLANKIES')) {
        client.say(target, `BLANKIES`);
        console.log(`*Executed ${msg} command`);
    }
}

// Function called when the "dice" command is issued
function rollDice() {
    const sides = 20;
    return Math.floor(Math.random() * sides) + 1;
}

// Called every time the bot connects to Twitch chat
function onConnectedHandler(addr, port) {
    console.log(`* Connected to ${addr}:${port}`);
}
