/// <reference path="../../typings/tsd.d.ts" />

/*

http://underscorejs.org/#compact
compact_.compact(array)
Returns a copy of the array with all falsy values removed. In JavaScript, false, null, 0, "", undefined and NaN are all falsy. 

*/

describe("03-arrays-compact", function () {

    it("should remove all falsy values from the first level of the array", function () {

        var myArray = [0, 1, "", "Adam"];
        var myArrayCompact = _.compact(myArray);

        var myComplexArray = [
            0,
            5,
            [ true, false ]
        ];

        var myComplexArrayCompact = _.compact(myComplexArray);

        expect(myArrayCompact).toEqual([1, "Adam"]);
        expect(myComplexArrayCompact).toEqual([ 5, [ true, false ] ]);
        

    });

});