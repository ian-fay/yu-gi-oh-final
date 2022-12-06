app = Vue.createApp({
    data() {
        return {
            cardList: new CardCollection()
                .addNewCard(new MonsterCard( 'Blue Eyes White Dragon',  'Effect Monster', 'Blue-Eyes',  "This legendary dragon is a powerful engine of destruction. Virtually invincible, very few have faced this awsome creature and lived to tell the tale.",  "https://i.etsystatic.com/19472283/r/il/05b2d5/1810374187/il_570xN.1810374187_t89t.jpg", true))
                .addNewCard(new SpellCard('Fallen of Albaz', 'Spell Card',  "Dogmatika", "If this card is Normal or Special Summoned (except during the Damage Step): You can discard 1 card; Fusion Summon 1 Fusion Monster from your Extra Deck, using monsters on either field as Fusion Material, including this card, but you cannot use other monsters you control as Fusion Material. You can only use this effect of \"Fallen of Albaz\" once per turn.", "https://ms.yugipedia.com//thumb/a/a1/FallenofAlbaz-SDAZ-EN-C-1E.png/300px-FallenofAlbaz-SDAZ-EN-C-1E.png", false))
                .addNewCard(new SpellCard('Branded in Red', 'Spell Card', 'Branded', "Target 1 \"Despia\" monster or \"Fallen of Albaz\" in your GY; add it to your hand, then you can apply the following effect.\n" + "● Fusion Summon 1 Level 8 or higher Fusion Monster from your Extra Deck, by banishing Fusion Materials mentioned on it from your hand or field, but it cannot attack directly this turn.\n" + "You can only activate 1 \"Branded in Red\" per turn.", "https://ms.yugipedia.com//thumb/4/4e/BrandedinRed-MP22-EN-R-1E.png/300px-BrandedinRed-MP22-EN-R-1E.png",  false))
                .addNewCard(new MonsterCard( 'Adamancipator Analyzer',  'Effect Monster', 'Adamancipator', "If only your opponent controls a monster: You can Special Summon this card from your hand. During your Main Phase: You can excavate the top 5 cards of your Deck, and if you do, you can Special Summon 1 excavated Level 4 or lower non-Tuner Rock monster, also place the rest on the bottom of your Deck in any order. You can only use each effect of \"Adamancipator Analyzer\" once per turn.", "https://ms.yugipedia.com//thumb/e/ee/AdamancipatorAnalyzer-MP21-EN-SR-1E.png/300px-AdamancipatorAnalyzer-MP21-EN-SR-1E.png", false))
                .addNewCard(new SpellCard( 'Lightning Storm', 'Spell Card', null, "If you control no face-up cards: Activate 1 of these effects;\n" +
                               "● Destroy all Attack Position monsters your opponent controls.\n" +
                               "● Destroy all Spells and Traps your opponent controls.\n" +
                                "You can only activate 1 \"Lightning Storm\" per turn.",  "https://ms.yugipedia.com//thumb/d/de/LightningStorm-MP22-EN-PScR-1E.png/300px-LightningStorm-MP22-EN-PScR-1E.png", false)),

            wishlist: new CardCollection(),

            leftDrawerOpen: false,
            tab: 'all-cards',
            localCards: 'local-cards'
        }
    },

    methods: {

        //When this card is run, it pushes the New Card object into the cardList
        addNewCard: function (newCard) {
            console.log(newCard)
            this.cardList.addNewCard(newCard)
        },

        addToWishlist: function (card) {
            console.log(card)
            this.wishlist.addNewCard(card)
        },

        //Cuts the card that was passed in from the array
        removeCard: function (card) {
            this.cardList.removeCard(card);
        },

        //toggles the left drawer
        toggleLeftDrawer() {
            this.leftDrawerOpen = !this.leftDrawerOpen;
        },

    },

    computed: {
        //returns a filtered array if Favorite is true.
        favCardList: function (){
            return this.cardList.favoriteCards();
        },

    },

    mounted: function () {

        if(localStorage.getItem(this.localCards)){
            this.cardList = CardFactory.createFromLocalStorage(JSON.parse(localStorage.getItem(this.localCards)));
        }
    },

    watch: {

        cardList: {
            handler: function (newCollection) {
                localStorage.setItem(this.localCards, JSON.stringify(newCollection.items))
            },
            deep: true,
        },

    }
});



