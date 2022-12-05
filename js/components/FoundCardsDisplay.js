app.component('FoundCardsSelection', {
    props: {
        foundCards: {
            type: CardCollection,
            required: true,
        }
    },

    methods: {
        addNewCard: function (card) {
            this.$emit('add-new-card', card);
            console.log("2: Emit from Found Card Display", card)

        },

    },

    template: `
      <q-card style="width:1500px;max-width: 2000px">
      <q-card-section>
        <div class="text-h4">Found Cards</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <display-card :card-list="foundCards" @add-new-card="addNewCard" v-for="card in foundCards.items"
                   :card="card"
                   :card-name="card.cardName"
                   :card-type="card.cardType"
                   :card-text="card.cardText"
                   :card-art="card.cardArt"
                   :key="card.cardName"
        ></display-card>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn circle label="Close Found Cards" color="primary" v-close-popup />
      </q-card-actions>
      </q-card>
    `,
});