export class Player {
    constructor(cards = []) {
        this.cards = cards;
    }

    addCards(newCards) {
        this.cards = [...newCards]
    }

    pickCard(numberOfCards = 1) {

    }

    throwCard() {

    }
}