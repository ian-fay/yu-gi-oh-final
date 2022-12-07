// Component names should be TitleCase/PascalCase
// and should be multi-word, but singular in plurality.
// When used in HTML/templates, they become kabob-case.
app.component('CollectionDisplay', {
    data: function(){
        return {
            collectionInfo: false,
        }
    },

    // props:   Data passed into the component via attributes.
    //          Props can be optional or required. Objects and arrays
    //          are pass-by-reference. Primitives (number, string, boolean)
    //          are pass-by-value.
    props: {
        cardCollection: {
            type: CardCollection,
            required: true
        }
    },

    // methods: Usually "events" triggered by v-on:
    methods: {

    },

    // computed:    Values that are updated and cached if dependencies change.
    //              Computed value functions need to return a value.
    //              Treat these like regular values that you would use
    //              in data or props.
    computed: {

    },

    // template:    A string "template" of HTML. It should consist of only
    //              ONE root HTML element. You can reference any
    //              data, props, methods, computed, etc using: {{ name }}
    //TODO: Modify template to include component that displays all of the Collections inside of the customCollections
    template: `
      <img class="q-mt-md q-mx-md card-image" src="https://m.media-amazon.com/images/I/61YXNhfzlzL._AC_SY879_.jpg" @click="collectionInfo = true">
      
      <div>
      <q-dialog v-model="collectionInfo">
        <q-card>
          <q-card-section class="q-pt-none">
            <game-card v-for="card in cardCollection.items"
                       :card="card"
                       :card-name="card.cardName"
                       :card-type="card.cardType"
                       :card-text="card.cardText"
                       :card-art="card.cardArt"
                       :favorite="card.favorite"
                       :key="card.cardName"
            ></game-card>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn circle filled label="Close" color="primary" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
      </div>
    `,
});
