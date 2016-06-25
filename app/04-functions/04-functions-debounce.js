/// <reference path="../../typings/tsd.d.ts" />

(function(){

    // Without debounce, event is fired very frequently
    // $(window).on('resize', function(){
    //     console.log("resize");
    // });

    // With debounce it fires when event stops and is not started for n milliseconds, pass true for it to run when event starts
    $(window).on('resize', _.debounce(function(){
        console.log("resize");
    }, 250)); 

    // debounce first (send true as parameter) is a good way to stop accedently submit form clicks
    $('[data-submit-button]').on('click', _.debounce(function(){
        console.log("submit");
    }, 250, true));

})();