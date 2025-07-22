// what do we need for the card game?

/*
* deck
* 52 cards in each deck
* - rank *name value
* - suit (heart, spade, club, dimaond)
* - values
* - shuffle deck
* - pass cards to players
* 
* Players (player class or game logic?)
* - payers need name?
* - score
* - hand
* - 
* - logic to play game / use deck in game
*  specific game is "war"
 - ways to compaire, number values of each cards 
*/

//Deck Class
/** array to store cards
* array to store card ranks
* array to store suits
*/

class Deck {
    constructor() {
        this.deck = [];
        this.rank = [
            "Ace",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "Jack",
            "King",
            "Queen",
        ]
        this.suit = [
            "Heart", "Spade", "Dimond", "Club",]

    }
    // method to make deck, iterate over ranks and suites
    // push a neew xcard

    createDeck() {
        for (let i = 0; i < this.suit.length; i++) {
            for (let j = 0; j < this.rank.length; j++) {
                let card = {
                    name: `${this.rank[j]} of ${this.suit[i]}`,
                    value: j + 1
                }
                this.deck.push(card)

            }
        }
    }

    shuffleDeck() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));

            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
    }

}

// Class for Game (War Gane)
/* Need
* - deck for game
* - create deck, shuffle deck, pass deck
*
* - logic for player
* - tuen bassed, how many turns?
* - do players hace hand yet?
* - control flow statement logic for winner
*
* - 2 players
* - hand
* - Score
* - Name
*/

class Game {
    constructor() {
      this.player1 = {
        name: `Player 1`,
        score: 0,
        hand: []
      }
      this.player2 = {
        name: `Player 2`,
        score: 0,
        hand: []
      }
    }



    //methdo to play game
    /*
    * - pass out cards
    * - x number of turns
    *  - award points
    *  - log winner
    */

    playGame() {
        const deck = new Deck
        deck.createDeck()
        deck.shuffleDeck()

        while (deck.deck.length !==0 ) {

            this.player1.hand.push(deck.deck.shift())
            this.player2.hand.push(deck.deck.shift())
        }

      // Playing the game


      for (let i = 0; i < this.player1.hand.length; i++ ) {
        if (this.player1.hand[i].value > this.player2.hand[i].value) {
           this.player1.score ++
           console.log(`
            P1 Card: ${this.player1.hand[i].name}
            P2 Card: ${this.player2.hand[i].name}
            Player1 wins a point!
            Current Score: p1: ${this.player1.score}, p2: ${this.player2.score}
            `)
        } else if (this.player2.hand[i].value > this.player1.hand[i].value) {
            this.player2.score ++
            console.log(`
            P1 Card: ${this.player1.hand[i].name}
            P2 Card: ${this.player2.hand[i].name}
            Player2 wins a point!
            Current Score: p1: ${this.player1.score}, p2: ${this.player2.score}
            `)
        } else {
                       console.log(`
            P1 Card: ${this.player1.hand[i].name}
            P2 Card: ${this.player2.hand[i].name}
            Tie: No Points
            Current Score: p1: ${this.player1.score}, p2: ${this.player2.score}
            `)
        }

      }

    
    }

 
}

const game = new Game
game.playGame()