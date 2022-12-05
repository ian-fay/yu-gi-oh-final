// Component names should be TitleCase/PascalCase
// and should be multi-word, but singular in plurality.
// When used in HTML/templates, they become kabob-case.
app.component('RandomCard', {
    // data:    Data created and maintained by this component.
    //          This function is like a constructor. It gets called
    //          separately for each instance of this component
    data: function(){
        return {
            randomCard: [],
        }
    },

    props: {

    },


    methods: {

        getRandomCard: function () {
                let url = 'https://db.ygoprodeck.com/api/v7/randomcard.php';

            let config = {}
                axios.get(url, config)
                    .then(response => {
                        console.log(response);
                        this.randomCard = CardFactory.createFromYGOProOnce(response.data);
                    })
                    .catch(error => {
                        console.error('Error fulfilling your search: ', error)
                    })
                    .finally( ()=> {
                        console.log("Card found!")
                    })
        },

        addNewCard: function (card) {
            this.$emit('add-new-card', card);
            console.log("2: Emit from Random Card", card)

        },

        addToWishlist: function (card) {
            this.$emit('add-to-wishlist', card)
            console.log("2: Emit From Random Card")
        },
    },

    mounted() {
      this.getRandomCard()
    },

    // template:    A string "template" of HTML. It should consist of only
    //              ONE root HTML element. You can reference any
    //              data, props, methods, computed, etc using: {{ name }}
    template: `
      <div>
        <div class="fixed-center">
        <display-card :card-list="randomCard" @add-new-card="addNewCard" v-for="card in randomCard.items"
                      :card="card"
                      :card-name="card.cardName"
                      :card-type="card.cardType"
                      :card-text="card.cardText"
                      :card-art="card.cardArt"
                      :key="card.cardName"
        ></display-card>
        </div>
        <q-btn circle label="Click for Random Card" color="primary" @click="getRandomCard()"></q-btn>
      </div>
    `,
});
