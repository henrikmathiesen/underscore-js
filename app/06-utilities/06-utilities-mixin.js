/// <reference path="../../typings/tsd.d.ts" />

(function () {

    _.mixin({
        getLastIndex: function (collection) {
            return collection.length - 1;
        }
    });

    var myArray = ["Adam", "Bertil"];

    console.log(_.getLastIndex(myArray));

})();