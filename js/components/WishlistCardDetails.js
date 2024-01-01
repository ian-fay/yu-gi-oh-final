app.component('WishlistCard', {
//The default/normal/basic card display component. It takes in a card, and displays all its information in the form of a clickable image.
    //Said image opens a modal which holds all the cards information.
    data: function(){
        return {
            cardInfo:false,
        }
    },

    props: {
        card: {
            type: Object,
            required: true
        },

        cardName: {
            type:String,
            required: true,
        },

        cardPrices: {
            type: Array,
            required: true
        },

        cardArt: {
            type: String,
            required: true
        },

        favorite: {
            type: Boolean,
            required: false
        }
    },

    //Remove card method, that catches when the Remove Card button is clicked from the card, and throws it up into the App
    methods: {
        removeFromWishlist(card){
            this.$emit('remove-from-wishlist', card);
            console.log("Emit from Wishlist Card Details")
        }

    },

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

        <q-card-section class="q-pt-sm">
          {{cardPrices}}
        </q-card-section>
        
        <q-separator/>
        <q-card-actions align="center">
          <q-btn circle color="negative" @click="removeFromWishlist(card)"><i class="fa fa-trash" aria-hidden="true"></i></q-btn>
        </q-card-actions>
      </q-card>
      </q-dialog>
      </div>
    `,
});