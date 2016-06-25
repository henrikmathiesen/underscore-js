/// <reference path="../../typings/tsd.d.ts" />

(function () {

    _.delay(function (args) {
        console.log("Iam delayed 250 ms " + args);
    }, 250, "foo");

    console.log("que 1");
    _.defer(function (args) {
        console.log("I run when callstack is complete (except timeout apperantly) " + args);
    }, "bar");
    console.log("que 2");

    $(window).on('resize', _.throttle(function () {
        console.log("Iam throttled to run every 1000 ms");
    }, 1000));

})();