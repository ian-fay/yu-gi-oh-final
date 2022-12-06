app.component('SearchCardDatabaseForm', {
    //The component responsible for searching the Yu-Gi-Oh API, and returning every card that meets the search.
    //A form accepts the search inputs, and then goes to the Card Factory model to make the objects, which are then returned here, output into the DisplayCardDetails.

    data: function(){

        return {
            //TODO: Add documentation in the form of comments on everything
            cardTypeOptions: [
                'Monster', 'Trap', 'Spell'
            ],

            monsterTypeOptions: [

                "Effect Monster", "Flip Effect Monster" , "Flip Tuner Effect Monster",
                "Gemini Monster", "Normal Monster", "Normal Tuner Monster",
                "Pendulum Effect Monster", "Pendulum Flip Effect Monster", "Pendulum Normal Monster",
                "Pendulum Tuner Effect Monster", "Ritual Effect Monster", "Ritual Monster",
                "Fusion Monster", "Link Monster", "Pendulum Effect Fusion Monster",
                "Synchro Monster", "Synchro Pendulum Effect Monster", "Synchro Tuner Monster",
                "XYZ Monster", "XYZ Pendulum Effect Monster"
            ],


            cardArchetypeOptions: [],
            filteredArchetypes: [],
            filteredMonsterTypes: [],

            foundCards: new CardCollection(),
            cardName: '',
            config: '',
            cardType: '',
            monsterType: '',
            cardArchetype: '',

            foundCardsDisplay: false,
            visible: false

        }
    },

    // methods: Usually "events" triggered by v-on:
    methods: {
        searchCards: function(config) {
            let url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';
            // config.params.WHATEVER WORKS!!!!

            config = {
                params: {

                }
            }

            switch (this.cardType) {
                case "Monster":
                    config.params.type = this.monsterType
                    break;
                case "Spell":
                    config.params.type = "Spell Card"
                    break;
                case "Trap":
                    config.params.type = "Trap Card"
                    break;
                default:
                    alert("A card type must be selected!")
                    this.visible = true
                    return;
            }

            if(this.cardType === "Monster" && typeof this.monsterType === 'string' && this.monsterType.length === 0) {
                alert("A specific monster type must be selected!")
                return;
            }

            if(typeof this.cardArchetype === 'string' && this.cardArchetype.length !== 0) {
                config.params.archetype = this.cardArchetype
            }

            if(typeof this.cardName === 'string' && this.cardName.length !== 0) {
                config.params.fname = this.cardName
            }

            axios.get(url, config)
                .then(response => {
                    console.log(response.data);
                    this.foundCards = CardFactory.createFromYGOPro(response.data.data);
                    this.foundCardsDisplay = true;

                })
                .catch(error => {
                    console.error('Error fulfilling your search: ', error)
                    alert("Your search couldn't be fulfilled. Possible Reasons: That card doesn't exist.")
                })
                .finally( ()=> {
                    console.log("Search Sent!")
                })
        },

        addNewCard: function (card) {
            this.$emit('add-new-card', card);
            console.log("3: Emit from Search Card Form", card)

        },

        addToWishlist: function (card) {
            this.$emit('add-to-wishlist', card);
            console.log("3: Emit from Search Card Form", card)

        },

        searchArchetypes: function (config) {
            let url = 'https://db.ygoprodeck.com/api/v7/archetypes.php';

            config = {}
            axios.get(url, config)
                .then(response => {
                    //console.log(response);

                    for (const obj of response.data) {
                        this.cardArchetypeOptions.push(obj.archetype_name);
                    }
                    //console.log(this.cardArchetypeOptions);
                })
                .catch(error => {
                    console.error('Error fulfilling your search: ', error)
                })
                .finally( ()=> {
                    document.getElementById("newCardForm").reset();
                })
        },


        filterArchetype (val, update) {
            console.log(val)
            if (val === '') {
                update(() => {
                    this.filteredArchetypes = this.cardArchetypeOptions
                })
                return
            }

            update(() => {
                const needle = val.toLowerCase()
                this.filteredArchetypes = this.cardArchetypeOptions.filter(v => v.toLowerCase().indexOf(needle) > -1)
            })
        },

        filterMonsters (val, update) {
          console.log(val)
          if (val === '') {
              update(() => {
                  this.filteredMonsterTypes = this.monsterTypeOptions
              })
              return
          }

          update(() => {
              const needle = val.toLowerCase()
              this.filteredMonsterTypes = this.monsterTypeOptions.filter((v => v.toLowerCase().indexOf(needle) > -1))
          })

        },

    },

    mounted() {
        this.searchArchetypes(this.config);
    },

    template: `
      <div class="q-pa-md" style="max-width: 400px">
      
      <form 
          @submit.prevent="searchCards()"
          class="form-inline q-gutter-md"
          ref="newCardForm"
          id="newCardForm"
          autocomplete="off">
        <h6>Search for Card to Add</h6>

        <q-select
            type="text"
            label="Card Type* "
            v-model="cardType"
            id="cardType"
            :options=cardTypeOptions
            hint="The type of card to search for."/>
        
        <q-select
            type="text"
            label="Monster Type"
            use-input
            input-debounce="0"
            v-model="monsterType"
            v-if="cardType === 'Monster'"
            :options="filteredMonsterTypes"
            @filter="filterMonsters"
            id="monsterType"
            hint="The specific type of Monster to search for."
        />
        
        <q-select
            type="text"
            v-model="cardArchetype"
            id="cardType"
            use-input
            input-debounce="0"
            label="Card Archetype Search"
            @filter="filterArchetype"
            :options="filteredArchetypes"
            hint="The archetype that the card belongs too."/>
        
        <q-input type="text" 
                 label="Card Name" 
                 v-model="cardName" 
                 id="cardName"
                 hint="Name or part of name."
        />
        
          <q-btn label="Search for Cards" 
                 type="submit" color="primary"
          ></q-btn>
        
      </form>
      
      <q-dialog v-model="foundCardsDisplay"
                transition-show="slide-up"
                transition-hide="slide-down">
        <found-cards-selection v-bind:found-cards="foundCards" @add-new-card="addNewCard" @add-to-wishlist="addToWishlist"></found-cards-selection>
      </q-dialog>
      
      </div>
    `,
});