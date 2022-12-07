app.component('GameCard', {
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
            required: true
        }
    },

    //Remove card method, that catches when the Remove Card button is clicked from the card, and throws it up into the App
    methods: {
        removeCard(card){
            this.$emit('remove-card', card);
        },

    },

    template: `
      <div class="inline-block">
      <img class="q-mt-md q-mx-md card-image" :src="cardArt" @click="cardInfo = true" :class="{ favorite: favorite}" :to="favorite">
      <q-dialog v-model="cardInfo">
      <q-card>
        <q-card-section align="center">
          <!--Troubleshoot adding an image to the card.--> 
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
          <q-btn circle label="close" color="primary" v-close-popup />
          <q-toggle
              v-model="card.favorite"
              checked-icon="favorite"
              color="red"
              unchecked-icon="favorite_border"
          />
          <q-btn circle color="negative" @click="removeCard(card)"><i class="fa fa-trash" aria-hidden="true"></i></q-btn>
        </q-card-actions>
      </q-card>
      </q-dialog>
      </div>
    `,
});