//A component specifically designed to search the collections of cards, such as the wishlist.

// Component names should be TitleCase/PascalCase
// and should be multi-word, but singular in plurality.
// When used in HTML/templates, they become kabob-case.
app.component('SearchCardCollection', {
    // data:    Data created and maintained by this component.
    //          This function is like a constructor. It gets called
    //          separately for each instance of this component
    data: function(){
        return {
            
            //This shows what all of the different options for the reaching of the overall card database is. 
            cardTypeOptions: [
                'Monster', 
                'Trap', 
                'Spell'
            ],

            monsterTypeOptions: [
                "Effect Monster", 
                "Flip Effect Monster" , 
                "Flip Tuner Effect Monster",
                "Gemini Monster", 
                "Normal Monster", 
                "Normal Tuner Monster",
                "Pendulum Effect Monster", 
                "Pendulum Flip Effect Monster", 
                "Pendulum Normal Monster",
                "Pendulum Tuner Effect Monster", 
                "Ritual Effect Monster", 
                "Ritual Monster",
                "Fusion Monster", 
                "Link Monster", 
                "Pendulum Effect Fusion Monster",
                "Synchro Monster", 
                "Synchro Pendulum Effect Monster", 
                "Synchro Tuner Monster",
                "XYZ Monster", 
                "XYZ Pendulum Effect Monster"
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
        searchCollection: function () {

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


    template: `
      <div class="q-pa-md" style="max-width: 400px">
        <q-form
            @submit.prevent="searchCollection()"
            class="form-inline q-gutter-md"
            ref="searchCollection"
            id="searchCollection"
            autocomplete="off"
        >

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
          
          <q-btn label="Find Card In Collection"
                 type="submit" color="primary"
          ></q-btn>
        </q-form>
      </div>
    `,
});