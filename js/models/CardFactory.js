class CardFactory {
//THis is a factory that takes in the API search data from SearchCardForm and converts them into Cards based on their type of card.
    //It then pushes all of those objects into a collection, which is then passed back to the Search Card Form, where it then displays the collection.
    static createFromYGOPro(cards) {
        let newItem = false;
        const foundCards = new CardCollection();

        cards.forEach(card => {
            switch (card.type) {
                case "Effect Monster":
                case "Flip Effect Monster":
                case "Flip Tuner Effect Monster":
                case "Gemini Monster":
                case "Normal Monster":
                case "Normal Tuner Monster":
                case "Pendulum Effect Monster":
                case "Pendulum Flip Effect Monster":
                case "Pendulum Normal Monster":
                case "Pendulum Tuner Effect Monster":
                case "Ritual Effect Monster":
                case "Ritual Monster":
                case"Fusion Monster":
                case"Link Monster":
                case"Pendulum Effect Fusion Monster":
                case"Synchro Monster":
                case"Synchro Pendulum Effect Monster":
                case"Synchro Tuner Monster":
                case "XYZ Monster":
                case"XYZ Pendulum Effect Monster":
                    console.log("Monster Card")
                    newItem = new MonsterCard(card.name, card.type, card.archetype, card.desc, card.card_images[0].image_url, card.favorite = null, card.card_prices);
                    break;
                case "Spell Card":
                    console.log("Spell Card")
                    newItem = new SpellCard(card.name, card.type, card.archetype, card.desc, card.card_images[0].image_url, card.favorite = null, card.card_prices);
                    break;
                case "Trap Card":
                    newItem = new TrapCard(card.name, card.type, card.archetype, card.desc, card.card_images[0].image_url, card.favorite = null, card.card_prices);
                    console.log("Trap Card")
                    break;
                default:
                    console.log("Undefined Card Type", card.id)
                    newItem = new GameCard(card.name, card.type, card.archetype, card.desc, card.card_images[0].image_url, card.favorite = null, card.card_prices);
            }

            if (newItem) {
                foundCards.addNewCard(newItem);
            }

        })
        console.log(foundCards)
        return foundCards;
    }

    static createFromLocalStorage(cards) {
        let newItem = false;
        const cardList = new CardCollection();

        cards.forEach(card => {
            switch (card.cardType) {
                case"Effect Monster":
                case"Flip Effect Monster":
                case"Flip Tuner Effect Monster":
                case"Gemini Monster":
                case"Normal Monster":
                case"Normal Tuner Monster":
                case"Pendulum Effect Monster":
                case"Pendulum Flip Effect Monster":
                case"Pendulum Normal Monster":
                case"Pendulum Tuner Effect Monster":
                case"Ritual Effect Monster":
                case"Ritual Monster":
                case"Fusion Monster":
                case"Link Monster":
                case"Pendulum Effect Fusion Monster":
                case"Synchro Monster":
                case"Synchro Pendulum Effect Monster":
                case"Synchro Tuner Monster":
                case "XYZ Monster":
                case"XYZ Pendulum Effect Monster":
                    console.log("Monster Card")
                    newItem = new MonsterCard(card.cardName, card.cardType, card.cardArchetype, card.cardText, card.cardArt, card.favorite, card.cardPrices);
                    break;
                case "Spell Card":
                    console.log("Spell Card")
                    newItem = new SpellCard(card.cardName, card.cardType, card.cardArchetype, card.cardText, card.cardArt, card.favorite, card.cardPrices);
                    break;
                case "Trap Card":
                    newItem = new TrapCard(card.cardName, card.cardType, card.cardArchetype, card.cardText, card.cardArt, card.favorite, card.cardPrices);
                    console.log("Trap Card")
                    break;
                default:
                    console.log("Undefined Card Type", card.id)
                    newItem = new GameCard(card.cardName, card.cardType, card.cardArchetype, card.cardText, card.cardArt, card.favorite, card.cardPrices);
            }

            if (newItem) {
                cardList.addNewCard(newItem);
            }

        })
        console.log(cardList)
        return cardList;

    }

}

