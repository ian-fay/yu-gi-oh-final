app.component('CardCollection', {
//This component is used to display collections of cards, such as the overall collection, favorite cards, and custom collections.
    props: {

        //Takes in the name of the collection and a custom object of CardCollection.
        collectionName: {
            type: String,
            required: true
        },

        cardList: {
            type: CardCollection,
            required: true,
        }
    },

    //When one of the cards remove card method is emitted, this catches it and emits it up to the App.
    methods: {
        removeCard(card){
            this.$emit('remove-card', card);
        }
    },


    template: `
      <div>
        <game-card v-for="card in cardList.items"
            :card="card"
            :card-name="card.cardName"
            :card-type="card.cardType" 
            :card-text="card.cardText"
            :card-art="card.cardArt"
            :favorite="card.favorite"
            :key="card.cardName"
            @remove-card="removeCard(card)"
        ></game-card>
      </div>
    `,
});