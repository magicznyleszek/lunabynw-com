function projectInterface() {
    // declare a public run function with all private stuff initialized inside of it
    this.run = run;
    function run() {
        initFluidbox();
    }

    // this does something if true
    function initFluidbox() {
        $('a[rel="lightbox"]').fluidbox();
    }
}

// create a public object and start its run function
var knowYourDinosaurs = new projectInterface();
// run functions
knowYourDinosaurs.run();
