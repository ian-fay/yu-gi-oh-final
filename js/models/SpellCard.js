function SpellCard(cardName, cardType, cardText, cardArt, favorite){
    // this says: Call the GameCard function, using the object from this card as "this" in the function
    GameCard.call(this, cardName, cardType, cardText, cardArt, favorite);

}

// set the parent/prototype of the Card
SpellCard.prototype = Object.create(GameCard.prototype);
// maintain the Card constructor
SpellCard.prototype.constructor = SpellCard;