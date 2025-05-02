const express = require('express');
const WebSocket = require('ws');

const app = express();
app.use(express.static('public'));

// express middleware

// api routes

const port = process.env.PORT || 3000;

// https://cah-er9g.onrender.com

const server = app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});

const wss = new WebSocket.WebSocketServer({ server: server });

let playerCount = 0;
let currentPlayer = 1;

const allCards = [
    "A bucket of glitter",
    "Silly string",
    "A dancing robot",
    "Rainbow sprinkles",
    "A talking parrot",
    "Gummy bears",
    "A bouncy castle",
    "A superhero cape",
    "A jar of pickles",
    "A fuzzy blanket",
    "A disco ball",
    "A pirate hat",
    "A giant cookie",
    "A rubber chicken",
    "A magic wand",
    "A pair of flip-flops",
    "A singing fish",
    "A water balloon",
    "A shiny trophy",
    "A hula hoop",
    "A sparkly unicorn",
    "A jelly sandwich",
    "A kazoo",
    "A glowing star",
    "A stack of pancakes",
    "A toy dinosaur",
    "A bubble machine",
    "A polka-dot bowtie",
    "A stuffed teddy bear",
    "A skateboard",
    "A treasure chest",
    "A flying kite",
    "A squishy ball",
    "A cowboy hat",
    "A bag of marbles",
    "A glowing lantern",
    "A paper airplane",
    "A giant lollipop",
    "A ninja costume",
    "A bowl of spaghetti",
    "A ukulele",
    "A bouncy ball",
    "A glittery crown",
    "A toy rocket",
    "A pair of sunglasses",
    "A popcorn machine",
    "A tie-dye shirt",
    "A fuzzy slippers",
    "A juggling clown",
    "A chocolate fountain",
    "A pogo stick",
    "A puppy cuddle",
    "A rainbow umbrella",
    "A marshmallow pillow",
    "A pirate ship",
    "A wiggly worm",
    "A sparkler",
    "A drum set",
    "A lemonade stand",
    "A butterfly net",
    "A silly mustache",
    "A glowing yo-yo",
    "A cupcake tower",
    "A telescope",
    "A bouncy puppy",
    "A magic carpet",
    "A feather boa",
    "A toy tractor",
    "A jellybean jar",
    "A glow stick",
    "A pirate flag",
    "A spinning top",
    "A bubble wand",
    "A rubber duck",
    "A disco dance",
    "A pinata",
    "A squirt gun",
    "A robot dog",
    "A pizza slice",
    "A starfish",
    "A toy castle",
    "A fluffy cloud",
    "A banana peel",
    "A juggling act",
    "A mermaid tail",
    "A campfire",
    "A shiny bell",
    "A monster truck",
    "A pair of mittens",
    "A disco roller skate",
    "A toy dragon",
    "A picnic basket",
    "A snorkel",
    "A candy cane",
    "A silly song",
    "A skateboard ramp",
    "A balloon animal",
    "A magic potion",
    "A fuzzy scarf",
    "A toy spaceship",
    "A glitter bomb",
    "A snow globe",
    "A jumping frog",
    "A pirate sword",
    "A stack of waffles",
    "A glowing bracelet",
    "A toy piano",
    "A feather hat",
    "A bubble bath",
    "A rainbow wig",
    "A slinky",
    "A toy submarine",
    "A beach ball",
    "A magic mirror",
    "A gummy worm",
    "A toy crown",
    "A disco light",
    "A pair of wings",
    "A lemonade pitcher",
    "A monkey dance",
    "A toy telescope",
    "A glittery shoe",
    "A ninja star",
    "A puppy paw",
    "A flying saucer",
    "A clown nose",
    "A toy giraffe",
    "A sparkly cape",
    "A jelly donut",
    "A kite string",
    "A silly face",
    "A treasure map",
    "A bouncy kangaroo",
    "A toy microphone",
    "A rainbow scarf",
    "A bubble blower",
    "A toy owl",
    "A fuzzy sock",
    "A magic book",
    "A pizza party",
    "A toy lion",
    "A glittery mask",
    "A puffy cloud",
    "A toy boat",
    "A silly walk",
    "A glowing ring",
    "A toy zebra",
    "A cotton candy",
    "A ninja mask",
    "A toy snake",
    "A sparkly wand",
    "A toy train",
    "A bouncy pig",
    "A jellyfish",
    "A toy monkey",
    "A glittery hat",
    "A toy whale",
    "A fuzzy tail",
    "A magic lamp",
    "A toy panda",
    "A shiny coin",
    "A toy elephant",
    "A disco fever",
    "A toy octopus",
    "A silly rhyme",
    "A toy turtle",
    "A glittery star",
    "A toy camel",
    "A fuzzy hat",
    "A toy seal",
    "A bouncy sheep",
    "A toy fox",
    "A sparkly glove",
    "A toy bear",
    "A silly giggle",
    "A toy deer",
    "A glittery bow",
    "A toy wolf",
    "A fuzzy paw",
    "A toy horse",
    "A sparkly ring",
    "A toy goat",
    "A silly wink",
    "A toy duck",
    "A glittery sock",
    "A toy cow",
    "A fuzzy nose",
    "A toy pig",
    "A sparkly belt",
    "A toy cat",
    "A silly sneeze",
    "A toy dog",
    "A glittery nail",
    "A toy bird",
    "A fuzzy ear",
    "A toy fish",
    "A sparkly tie",
    "A toy rabbit",
    "A silly hop",
    "A toy mouse",
    "A glittery wing",
    "A toy squirrel",
    "A fuzzy wing",
    "A toy hamster",
    "A sparkly bead"
  ];

const assignedCards = {}; 

wss.on('connection', function connection(ws) {
    playerCount++;
    const playerNumber = playerCount;

    // Assign unique cards to the player
    const shuffledCards = allCards.sort(() => 0.5 - Math.random());
    const playerCards = shuffledCards.slice(0, 10);
    assignedCards[playerNumber] = [...playerCards]; 

    // Remove assigned cards from the pool
    playerCards.forEach(card => {
        const index = allCards.indexOf(card);
        if (index > -1) allCards.splice(index, 1);
    });

    console.log('Client connected. Player number:', playerNumber);

    ws.on('error', function (err) {
        console.error('Error: %s', err);
    });

    // Send a welcome message with the player's cards
    ws.send(JSON.stringify({
        action: 'welcome',
        message: 'Welcome to the server! You are player number ' + playerNumber,
        playerNumber: playerNumber,
        currentPlayer: currentPlayer,
        cards: assignedCards[playerNumber], 
    }));

    ws.on('message', function message(data) {
        let message = JSON.parse(data);
        console.log(`Received message from Player ${playerNumber}:`, message);

        if (message.action === 'replaceCard') {
            const { oldCard } = message;
            const playerCards = assignedCards[playerNumber];

            if (playerCards && allCards.length > 0) {
                const cardIndex = playerCards.indexOf(oldCard);
                if (cardIndex > -1) {
                    allCards.push(oldCard);

                    const randomIndex = Math.floor(Math.random() * allCards.length);
                    const newCard = allCards.splice(randomIndex, 1)[0];
                    playerCards[cardIndex] = newCard;

                    // Notify the player of the new card
                    ws.send(JSON.stringify({
                        action: 'cardReplaced',
                        oldCard: oldCard,
                        newCard: newCard,
                    }));

                    console.log(`Player ${playerNumber} replaced card "${oldCard}" with "${newCard}"`);
                } else {
                    console.error(`Card "${oldCard}" not found in player ${playerNumber}'s cards.`);
                }
            } else {
                console.error('No cards available to replace or invalid player.');
            }
        }

        if (message.action === 'submitCard') {
            const { card } = message;
            console.log(`Player ${playerNumber} submitted card: "${card}"`);

            // Send the submission to the player whose turn it is
            wss.clients.forEach(function each(client) {
                if (client.readyState === WebSocket.OPEN && client !== ws && playerNumber !== currentPlayer) {
                    client.send(JSON.stringify({
                        action: 'cardSubmitted',
                        card: card,
                    }));
                }
            });
        }

        if (message.action === 'turnComplete') {
            // move to next player
            currentPlayer = (currentPlayer % playerCount) + 1;
            console.log(`It's now Player ${currentPlayer}'s turn`);

            // notify all clients about the turn change
            wss.clients.forEach(function each(client) {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify({
                        action: 'turnChange',
                        currentPlayer: currentPlayer,
                    }));
                }
            });
        }

        // broadcast the message to all connected clients
        wss.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(data, { binary: false });
            }
        });
    });

    ws.on('close', function () {
        console.log(`Player ${playerNumber} disconnected`);
        if (assignedCards[playerNumber]) {
            allCards.push(...assignedCards[playerNumber]);
            delete assignedCards[playerNumber];
        }
    });
});
