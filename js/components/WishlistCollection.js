app.component('WishlistCollection', {
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
        removeFromWishlist(card){
            this.$emit('remove-from-wishlist', card);
            console.log("Emit from Wishlist Collection")
        }
    },
    template: `
      <div>
      <wishlist-card v-for="card in cardList.items"
                     :card="card"
                     :card-name="card.cardName"
                     :card-art="card.cardArt"
                     :card-prices="card.cardPrices"
                     :key="card.cardName"
                     @remove-from-wishlist="removeFromWishlist(card)"
      ></wishlist-card>
      </div>
    `,

});