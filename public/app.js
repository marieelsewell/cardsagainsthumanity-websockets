Vue.createApp({
    data: function () {
      return {
        // data
        socket: null,
        playerNumber: null,
        currentPlayer: null,
        randomStrings: [
            "The best part about going to school is ______.",
            "Grandma's secret talent is ______.",
            "The superhero's weakness was ______.",
            "My dream vacation includes ______.",
            "The dog ate ______ again.",
            "The worst pizza topping is ______.",
            "At the talent show, I saw ______.",
            "The robot's favorite hobby is ______.",
            "The picnic was ruined by ______.",
            "The birthday party needed more ______.",
            "My teacher is really good at ______.",
            "The cat keeps stealing ______.",
            "The ultimate ice cream flavor is ______.",
            "The science fair project was all about ______.",
            "The alien's spaceship ran on ______.",
            "The family reunion got wild when someone brought ______.",
            "The best toy ever is ______.",
            "The zoo's newest animal is ______.",
            "The magician pulled ______ out of the hat.",
            "The pirate's treasure was full of ______.",
            "The sleepover was unforgettable because of ______.",
            "The new school rule is all about ______.",
            "The movie was boring until ______ showed up.",
            "The time machine took me to ______.",
            "The superhero team needed more ______.",
            "The camping trip was all about ______.",
            "The best part of summer is ______.",
            "The haunted house wasn't scary, just full of ______.",
            "The chef's secret ingredient was ______.",
            "The dance party needed more ______.",
            "The board game was won with ______.",
            "The pet store ran out of ______.",
            "The field trip was all about ______.",
            "The costume party's best outfit was ______.",
            "The lemonade stand sold ______ flavored drinks.",
            "The baby's favorite toy is ______.",
            "The parade was led by ______.",
            "The library's most popular book is about ______.",
            "The beach was covered in ______.",
            "The astronaut brought ______ to space.",
            "The farm's newest animal is ______.",
            "The art project was made of ______.",
            "The family car is full of ______.",
            "The talent agency discovered ______.",
            "The new app is all about ______.",
            "The treehouse is perfect for ______.",
            "The detective solved the case with ______.",
            "The carnival's best ride is ______.",
            "The puppy's favorite game is ______.",
            "The baking contest was won with ______.",
            "The museum's new exhibit is about ______.",
            "The playground's best feature is ______.",
            "The rocket ship was powered by ______.",
            "The class pet is ______.",
            "The summer camp activity everyone loves is ______.",
            "The clown's best trick was ______.",
            "The road trip needed more ______.",
            "The garden is growing ______.",
            "The video game's final boss is ______.",
            "The family band plays ______ music.",
            "The snow day was spent building ______.",
            "The comic book hero fights with ______.",
            "The birthday cake was decorated with ______.",
            "The fishing trip caught ______.",
            "The new neighbor brought ______ to the block party.",
            "The science experiment created ______.",
            "The karaoke night was all about ______.",
            "The puzzle was missing ______.",
            "The book club is reading about ______.",
            "The magic spell required ______.",
            "The water park's best slide is ______.",
            "The family photo was ruined by ______.",
            "The toy store's hottest item is ______.",
            "The history project was about ______.",
            "The dance move everyone's doing is ______.",
            "The breakfast cereal is flavored like ______.",
            "The spaceship landed in ______.",
            "The school play was about ______.",
            "The hiking trail was full of ______.",
            "The cooking show featured ______.",
            "The kite festival showcased ______.",
            "The mystery was solved with ______.",
            "The holiday party needed more ______.",
            "The new invention is for ______.",
            "The amusement park's mascot is ______.",
            "The pet's secret talent is ______.",
            "The smoothie shop's new flavor is ______.",
            "The puppet show starred ______.",
            "The recycling project turned into ______.",
            "The talent scout was looking for ______.",
            "The campfire story was about ______.",
            "The arcade's best game is ______.",
            "The art contest's theme was ______.",
            "The weather forecast predicted ______.",
            "The treasure map led to ______.",
            "The school mascot is now ______.",
            "The magic show's grand finale was ______.",
            "The family tradition involves ______.",
            "The backyard barbecue was all about ______."
          ],
        currentString: '', 
        allCards: [
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
          ],
        myCards: [], 
        hasSelectedCard: false, 
        submissions: [], 
      }
    },
    methods: {
      connectSocket: function () {
        const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
        const host = window.location.host;
        const wsUrl = `${protocol}//${host}/`;

        this.socket = new WebSocket(wsUrl);
        this.socket.addEventListener('message', message => { 
            this.socketReceive(JSON.parse(message.data));
        });
      },
      socketReceive: function (message) {
        console.log('Received message:', message);
        if (message.action === 'welcome') {
            this.playerNumber = message.playerNumber;
            this.currentPlayer = message.currentPlayer;
            this.myCards = message.cards; 
        } else if (message.action === 'turnChange') {
            this.currentPlayer = message.currentPlayer;
            this.hasSelectedCard = false; 
            this.submissions = []; 
        } else if (message.action === 'cardReplaced') {
            const { oldCard, newCard } = message;
            const cardIndex = this.myCards.indexOf(oldCard);
            if (cardIndex > -1) {
              this.myCards.splice(cardIndex, 1, newCard);
            }
        } else if (message.action === 'cardSubmitted' && this.isMyTurn) {
            this.submissions.push(message.card); 
        }
      },
      completeTurn: function () {
        const message = {
            action: 'turnComplete',
        };
        this.socket.send(JSON.stringify(message));
      },
      sendToSocket: function (data) {
        this.socket.send(JSON.stringify(data));
      },
      updateRandomString: function () {
        if (this.isMyTurn && this.randomStrings.length > 0) {
          const randomIndex = Math.floor(Math.random() * this.randomStrings.length);
          this.currentString = this.randomStrings[randomIndex];
        } else {
          this.currentString = '';
        }
      },
      assignCards: function () {
        if (this.allCards.length >= 10) {
          const shuffledCards = this.allCards.sort(() => 0.5 - Math.random());
          this.myCards = shuffledCards.slice(0, 10);
          this.allCards = this.allCards.filter(card => !this.myCards.includes(card));
        }
      },
      handleCardClick: function (card) {
        if (this.hasSelectedCard) {
          console.error('You can only select one card per turn.');
          return;
        }
        console.log(`Card clicked: ${card}`);
        if (this.myCards.includes(card)) {
          this.sendToSocket({
            action: 'replaceCard',
            oldCard: card,
          });
          this.sendToSocket({
            action: 'submitCard',
            card: card,
          });
          this.hasSelectedCard = true; 
        } else {
          console.error('Card not found in myCards.');
        }
      }
    },
    computed: {
      isMyTurn: function () {
          return this.currentPlayer === this.playerNumber;
      },
    //   uiText: function () {
    //       return this.isMyTurn ? 'Prompt and Submissions' : 'Cards';
    //   }
    },
    watch: {
      currentPlayer: function () {
        this.updateRandomString(); 
      }
    },
    created: function () {
      console.log('Vue app created');
      this.connectSocket();
      this.assignCards(); 
    }
  }).mount('#app');