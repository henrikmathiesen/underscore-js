/// <reference path="../../typings/tsd.d.ts" />

/*

http://underscorejs.org/#toArray
toArray_.toArray(list)
Creates a real Array from the list (anything that can be iterated over). Useful for transmuting the arguments object. 

*/

describe("02-collections-to-array", function () {
    
    it("should convert the arguments of a function to a real array (argument is not a real array it only has the length property)", function () {

        var isArrayA;
        var isArrayB;

        var myFunction = function () {
            isArrayA = arguments;
            isArrayB = _.toArray(arguments);
        };

        myFunction("Foo");

        expect(isArrayA.length).toBe(1);
        expect(isArrayB.length).toBe(1);

        expect(isArrayA.constructor === Array).toEqual(false);
        expect(isArrayB.constructor === Array).toEqual(true);

        // Can run this through more crazy expects (see 01-introduction.js) but I trust underscore

    });

});