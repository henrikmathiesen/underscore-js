/// <reference path="../../typings/tsd.d.ts" />

(function () {


    var myFunc = function (argOne, argTwo) {
        console.log(argOne + " " + argTwo);
    };

    // Set up the function with the first argument, ahead of time
    var myPreArgumentedFunc = _.partial(myFunc, "Hello");

    // Actual run the function, passing in the second argument
    myPreArgumentedFunc("World!");

})();