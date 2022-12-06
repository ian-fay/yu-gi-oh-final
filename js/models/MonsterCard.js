//TODO: Modify all card objects to include an array of prices from the various distrubuters of Yu-Gi-Oh Cards.

function MonsterCard(cardName, cardType, cardArchetype, cardText, cardArt, favorite){
    // this says: Call the GameCard function, using the object from this card as "this" in the function
    GameCard.call(this, cardName, cardType, cardArchetype, cardText, cardArt, favorite);

}

// set the parent/prototype of the Card
MonsterCard.prototype = Object.create(GameCard.prototype);
// maintain the Card constructor
MonsterCard.prototype.constructor = MonsterCard;