app.component('DisplayCard', {
//A special kind of card display for cards found by the SearchCardForm, without the other functionality of the cards in the main collection.
    data: function(){
        return {
            cardInfo:false,
        }
    },

    //Requires all of the props of the cards themselves.
    props: {
        card: {
            type: Object,
            required: true
        },

        cardName: {
            type:String,
            required: true,
        },

        cardType: {
            type: String,
            required: true,
        },

        cardText: {
            type:String,
            required: true,
        },

        cardArt: {
            type: String,
            required: true
        },

        favorite: {
            type: Boolean,
            required: false
        },

        cardList: {
            type: CardCollection,
            required: true
        }

    },

    //Method that emits 'add-new-card' out of the component to be caught.
    methods: {
        addNewCard: function (card) {
            this.$emit('add-new-card', card);
            console.log("1: Emit from Display Card", card)

        },

        addToWishlist: function (card) {
            this.$emit('add-to-wishlist', card)
            console.log("1: Emit from Display Card", card)
        }

    },


//The actual card display, it functions as a modal that opens when the image is clicked.
    template: `
      <div class="inline-block">
      <img class="q-mt-md q-mx-md card-image" :src="cardArt" @click="cardInfo = true" :class="{ favorite: favorite}" :to="favorite">
      <q-dialog v-model="cardInfo">
      <q-card>
        <q-card-section align="center">
          <img :src="cardArt" class="focused-card-image">
        </q-card-section>
        
        <q-card-section>
          <div class="text-h6">{{cardName}}</div>
        </q-card-section>

        <q-separator/>
        
        <q-card-section>
          <div class="text-h6">[{{cardType}}]</div>
        </q-card-section>

        <q-separator/>
        
        <q-card-section class="q-pt-sm">
          {{cardText}}
        </q-card-section>

        <q-card-actions align="center">
         <q-btn circle color="positive" @click="addNewCard(card)">Add Card to Collection</q-btn>
          <q-btn circle color="warning" @click="addToWishlist(card)">Add Card to Wishlist</q-btn>
        </q-card-actions>
      </q-card>
      </q-dialog>
      </div>
    `,
});