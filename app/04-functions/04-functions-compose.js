/// <reference path="../../typings/tsd.d.ts" />

(function(){

    var functionOne = function(){
        console.log(arguments);
        return "fnOne";
    };

    var functionTwo = function(){
        console.log(arguments);
        return "fnTwo";
    };

    var functionThree = function(){
        console.log(arguments);
        return "fnThree";
    };

    // functionThree will be run first
    var composed = _.compose(functionOne, functionTwo, functionThree);
    composed("Foo");

})();