/// <reference path="../../typings/tsd.d.ts" />

(function () {

    var funcOne = function (arg) {
        console.log("funcOne");
        console.log(arg);
        console.log("/funcOne");
    };

    var funcTwo = function (fOne, foo, bar) {
        console.log("funcTwo");
        console.log(fOne);
        console.log(foo);
        console.log(bar);
        console.log("/funcTwo");
    };

    var wrapped = _.wrap(funcOne, funcTwo);

    // Only funcTwo will be run
    // funcOne is passed as parameter to it
    // "foo" and "bar" is also passed as parameters to it
    wrapped("foo", "bar");

})();