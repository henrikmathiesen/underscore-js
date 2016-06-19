/// <reference path="../../typings/tsd.d.ts" />

/*

http://underscorejs.org/#map
map_.map(list, iteratee, [context]) Alias: collect
Produces a new array of values by mapping each value in list through a transformation function (iteratee). The iteratee is passed three arguments: the value, then the index (or key) of the iteration, and finally a reference to the entire list.

*/

describe("02-collections-map", function () {

    it("should be able to map out items from an array", function () {

        var myArray = [1, 2, 3];

        var newArray = _.map(myArray, function (num) {
            return num * 3;
        })

        expect(newArray[0]).toEqual(3);
        expect(newArray[1]).toEqual(6);
        expect(newArray[2]).toEqual(9);

    });

    it("should be able to map out items from an object", function () {

       var myObj = { name: "Henrik", mood: "Happy" };

       var producedArray = _.map(myObj, function (value, key) {
           return value + "!";
       });

       expect(producedArray.constructor === Array).toEqual(true);
       expect(producedArray[0]).toEqual("Henrik!");
       expect(producedArray[1]).toEqual("Happy!");

    });

});