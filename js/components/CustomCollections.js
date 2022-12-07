// Component names should be TitleCase/PascalCase
// and should be multi-word, but singular in plurality.
// When used in HTML/templates, they become kabob-case.
app.component('CustomCollections', {
    data: function(){
        return {
            newCollection: {},
            collectionName: null,
            testList: new CardCollection()
                .addNewCard(new MonsterCard( 'Blue Eyes White Dragon',  'Effect Monster',  "This legendary dragon is a powerful engine of destruction. Virtually invincible, very few have faced this awsome creature and lived to tell the tale.",  "https://i.etsystatic.com/19472283/r/il/05b2d5/1810374187/il_570xN.1810374187_t89t.jpg", true)),
            customCollections: [],
            alert: false,
        }
    },

    // // props:   Data passed into the component via attributes.
    // //          Props can be optional or required. Objects and arrays
    // //          are pass-by-reference. Primitives (number, string, boolean)
    // //          are pass-by-value.
    // props: {
    //
    // },

    // methods: Usually "events" triggered by v-on:
    methods: {
        addCollection: function () {
            this.customCollections.push(this.testList)
            this.customCollections[this.collectionName] = new CardCollection();
            console.log(this.collectionName);
            console.log(this.customCollections);
        },
    },

    mounted(){

    },

    // template:    A string "template" of HTML. It should consist of only
    //              ONE root HTML element. You can reference any
    //              data, props, methods, computed, etc using: {{ name }}
    //TODO: Add component that loops through all the collections in the CustomCollections array.
    template: `
      <q-btn circle color="positive" @click="alert = true">Create Collection</q-btn>
        <div>
        <q-dialog v-model="alert">
          <q-card>
            <q-card-section class="q-pt-none">

              <form
                  @submit.prevent="addCollection()"
                  class="form-inline q-gutter-md"
                  ref="newCollectionForm"
                  id="newCollectionForm"
                  autocomplete="off">
                <h6>Add New Collection</h6>

                <q-input type="text"
                         label="Collection Name"
                         v-model="collectionName"
                         id="collectionName"
                         hint="Enter the name of the collection."
                />
                
                <div>
                  <q-btn circle filled label="Add Collection" color="positive" type="submit" v-close-popup></q-btn>
                  <q-btn circle filled label="OK" color="primary" v-close-popup />
                </div>
              </form>
            </q-card-section>
          </q-card>
        </q-dialog>

        <collection-display v-for="cardCollection in customCollections.items"
        :card-collection = "cardCollection">
        </collection-display>
        </div>
    `,
});
