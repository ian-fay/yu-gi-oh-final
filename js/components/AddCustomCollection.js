// Component names should be TitleCase/PascalCase
// and should be multi-word, but singular in plurality.
// When used in HTML/templates, they become kabob-case.
app.component('AddCustomCollection', {
    // data:    Data created and maintained by this component.
    //          This function is like a constructor. It gets called
    //          separately for each instance of this component

    //TODO: Make the component.
    //Steps to Add New Collection:
    //1: When the button is clicked, pull up a display/popup with an area to enter in the collections name. Has a button to confirm the collection.
    //2: Push the collection to an array of Card Collections, which is looked through to display all of the collections.
    //3: Each collection has a modal that displays all of the cards in the collection by using CardCollectionDisplay.

    data: function(){
        return {}
    },

    // props:   Data passed into the component via attributes.
    //          Props can be optional or required. Objects and arrays
    //          are pass-by-reference. Primitives (number, string, boolean)
    //          are pass-by-value.
    props: {

    },

    // methods: Usually "events" triggered by v-on:
    methods: {
        createCollection: function () {
            //Open modal with form that contains Collection Name.
            //Pass new collection
        }

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
    template: `
        <div>
        <q-btn circle color="positive" @click="createCollection">Create New Collection</q-btn>
        </div>
    `,
});