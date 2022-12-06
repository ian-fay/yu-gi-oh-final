//TODO: Modify all card objects to include an array of prices from the various distrubuters of Yu-Gi-Oh Cards.
//TODO: Add part which allows for the tracking of the number of that type of card that you own.
//The overall card object, which every card derives from.
function GameCard(cardName, cardType, cardArchetype, cardText, cardArt, favorite) {
    this.cardName = cardName ?? '';

    this.cardType = cardType ?? '';

    this.cardArchetype = cardArchetype ?? '';

    this.cardText = cardText ?? '';

    this.cardArt = cardArt ?? '';

    this.favorite = favorite ?? false;

}