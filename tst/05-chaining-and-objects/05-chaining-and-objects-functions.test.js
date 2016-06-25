/// <reference path="../../typings/tsd.d.ts" />

/*

http://underscorejs.org/#object-functions
functions_.functions(object) Alias: methods
Returns a sorted list of the names of every method in an object — that is to say, the name of every function property of the object. 

*/

describe("05-chaining-and-objects-functions", function () {

    it("should return how many functions an object has", function(){

        var vm = {
            funcOne: function(){},
            funcTwo: function(){}
        };

        expect(_.functions(vm).length).toBe(2);
        expect(_.functions(vm).shift()).toBe("funcOne");
        expect(_.functions(vm).pop()).toBe("funcTwo");
    });

});