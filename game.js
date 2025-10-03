import { Player } from './player.js';
import { Card, Ace, Two, Reverse, Jack, Joker } from "./card.js";

class Game {
    constructor(numberOfCardsToDeal = 5) {
        this.player = new Player();
        this.computer = new Player();

        this.cards = [];
        this.activeCards = [];
        this.numberOfCardsToDeal = numberOfCardsToDeal;
    }

    initiateGame() {
        this.addCards();
        this.shuffleCards();

        this.dealCards([this.player, this.computer]);

        console.log("Player");
        console.log(this.player.cards);

        console.log("Computer");
        console.log(this.computer.cards);

        console.log("Starting card");
        console.log(this.activeCards)
    }

    addCards() {
        const cardTypes = ["Red Heart", "Black Heart", "Diamond", "Flower"];
        for (let cardType of cardTypes) {
            for(let cardNumber = 1; cardNumber <= 14; cardNumber++) {
                switch(cardNumber) {
                    case 1:
                        this.cards.push(new Ace(cardType));
                        break;
                    case 2:
                        this.cards.push(new Two(cardType));
                        break;
                    case 8:
                        this.cards.push(new Reverse(cardType));
                        break;
                    case 13:
                        this.cards.push(new Jack(cardType));
                        break;
                    case 14:
                        this.cards.push(new Joker(cardType));
                        break;
                    default:
                        this.cards.push(new Card(cardNumber, cardType));
                }
            }
        }
    }

    shuffleCards() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            // Pick a random index from 0 to i
            const j = Math.floor(Math.random() * (i + 1));

            // Swap arr[i] and arr[j]
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
        return this.cards;
    }

    dealCards(players) {
        players.forEach((player, index) => {
            let tempCards = [];

            for(let i = this.numberOfCardsToDeal; i > 0; i--) {
                tempCards.push(this.cards.pop())
            }

            player.addCards(tempCards);
        });

        this.dealStartingCard();
    }

    dealStartingCard(){
        this.activeCards.push(this.cards.pop())
    }
}

var game = new Game();
game.initiateGame()
