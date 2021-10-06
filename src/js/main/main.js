/* -------------------- new JS template below -------------------- */
let aka08 = {
    version: '2.0',
    author: 'Al Augustin',
    project: 'ava augustin dot com',
    Date: '2021',

    // -------------------- INITIALIZATION --------------------
    init: function () {
        let context = this;

        // GLOBAL VARIABLES --------------------
        context.config = {
            // let
            playerArray: document.getElementsByTagName('body')
        };

        // CALL DOM INVOKING FUNCTIONS HERE --------------------
        aka08.eventHandlers();
        console.log(aka08.config);

    },

    // -------------------- HANDLE ALL PAGE LEVEL EVENTS --------------------
    eventHandlers: () => {
        console.log("eventHandlers() fired");
    },
};

// -------------------- LOAD init() --------------------
window.addEventListener("load", () => {
    aka08.init();
});
