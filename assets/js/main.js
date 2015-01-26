function projectInterface() {
    // declare a public run function with all private stuff initialized inside of it
    this.run = run;
    function run() {
        initMagnificPopup();
    }

    // this does something if true
    function initMagnificPopup() {
        $('a[rel="lightbox"]').magnificPopup({
            preloader: true,
            closeOnContentClick: true,
            closeOnBgClick: true,
            showCloseBtn: false,
            type:'image',
            image: {
                cursor: 'mfp-zoom-out-cur',
                verticalFit: true
            },
            zoom: {
                enabled: true,
                duration: 300,
                easing: 'ease-in-out'
            },
        });
    }
}

// create a public object and start its run function
var knowYourDinosaurs = new projectInterface();
// run functions
knowYourDinosaurs.run();
