/// <reference path="../../typings/tsd.d.ts" />

(function () {

    // Just like a for loop
    _.times(10, function (index) {
        console.log(index);
    });

    // max number is two (random number is 0-2 (yes including 2))
    console.log(_.random(2));

    // min number is 10 and max number is 12 (random number is 10-12)
    console.log(_.random(10, 12));

})();