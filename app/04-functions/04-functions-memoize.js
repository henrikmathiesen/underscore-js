/// <reference path="../../typings/tsd.d.ts" />

(function () {


    var getNumber = function(){
        return 9999999999999 * 9999999999999999;
    };

    var logNumber = function () {
        console.time("getNumber");
        console.log(getNumber());
        console.timeEnd("getNumber");
    };

    $('[data-get-number]').on('click', logNumber);

    var logNumberMemoized = _.memoize(logNumber);
    $('[data-get-number-memoized]').on('click', logNumberMemoized); // its only run once? I dont understand it, sorry.

})();