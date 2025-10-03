export class Card {
    constructor(number, type, canFinish = true, canStart = true) {
        this.number = number;
        this.type = type;
        this.canFinish = canFinish;
        this.canStart = canStart;
    }
}

export class Ace extends Card {
    constructor(type) {
        super(1, type, false, false);
    }

    selectCardType() {

    }
}

export class Two extends Card {
    constructor(type) {
        super(2, type, false, false);
    }

    nextPlayerToPickTwoCards() {

    }
}

export class Reverse extends Card {
    constructor(type) {
        super(8, type, false);
    }

    returnToPreviousPlayer() {

    }
}

export class Jack extends Card {
    constructor(type) {
        super(13, type, false, false);
    }

    // if number of players > 2
    skipNextPlayer() {
        
    }
}

export class Joker extends Card {
    constructor(type) {
        super(14, type, false, false);
    }

    nextPlayerToPickFourCards() {
        
    }
}
