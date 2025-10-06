class Player {
    constructor(cards = []) {
        this.cards = cards;
    }

    addCards(newCards) {
        this.cards = [...newCards]
    }

    pickCard(numberOfCards = 1) {

    }

    throwCard(position) {
        if (position > this.cards.length - 1) {
            return null;
        }

        return this.cards.splice(position, 1)[0];
    }
}

module.exports = Player;