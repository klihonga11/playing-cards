const Player = require('./player.js');
const { Card } = require('./card.js');

const card1 = new Card(1, "Black heart", false, false);
const card2 = new Card(5, "Red heart", true, true);
const card3 = new Card(7, "Diamond", true, true);
const card4 = new Card(10, "Flower", true, true);
const card5 = new Card(2, "Diamond", false, false);

const cards = [card1, card2, card3, card4, card5];
const player = new Player(cards);

test("throwing a card leaves the player with one less card", () => {
    player.throwCard(0)
    expect(player.cards.length).toBe(4); 
});

test("throwing a card removes the card at the specified position", () => {
    const cardThrown = player.throwCard(0);
    expect(cardThrown).toEqual({
        "number": 5,
        "type": "Red heart",
        "canFinish": true,
        "canStart": true
    })
});

test("attempting to throw a card outside a range should return null", () => {
    const cardThrown = player.throwCard(15)
    expect(cardThrown).toBe(null); 
})
