//This is a custom collection used to hold Cards.
class CardCollection {
    // internal/private array for the items
    _arr;

    constructor(arr) {
        // Load array if provided.
        // Load empty array if one was not provided.
        if (!Array.isArray(arr)) {
            arr = [];
        }

        this._arr = arr;
    }

    // Methods for using the collection.
    addNewCard(card){
        this._arr.push(card);
        return this;
    };

    removeCard(card){
        this._arr.splice(this._findCard(card), 1);
        return this;
    };

    //TODO: Add additional methods of sorting for cards. 

    favoriteCards() {
        return new CardCollection(this._arr.filter(function (card) {
            return card.favorite === true;
        }))
    };

    containsCard(card){
        return this._findCard(card) >= 0;
    };

    get count(){
        return this._arr.length;
    }

    get items(){
        return [...this._arr]
    }

    // Internal function for finding cards.
    // Assumes all cards have a name
    _findCard(card){
        return this._arr.findIndex(function(item){
            return item.cardName === card.cardName;
        });
    };
}
