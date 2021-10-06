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
            currentYear: new Date().getFullYear(),
            currentYearHolder: document.getElementById("footerYear")
        };

        // CALL DOM INVOKING FUNCTIONS HERE --------------------
        aka08.footerYear();
        aka08.eventHandlers();
        console.log(aka08.config);

    },

    footerYear: () => {
        aka08.config.currentYearHolder.innerHTML = aka08.config.currentYear;
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
