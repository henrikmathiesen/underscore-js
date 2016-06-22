/// <reference path="../../typings/tsd.d.ts" />

/*

http://underscorejs.org/#groupBy
groupBy_.groupBy(list, iteratee, [context])
Splits a collection into sets, grouped by the result of running each value through iteratee. If iteratee is a string instead of a function, groups by the property named by iteratee on each of the values. 

*/

describe("02-collection-group-by", function () {


    it("should group the collection based on criteria A", function () {

        var names = ["Adam", "Bertil", "Apple", "Banana"];

        var criteria = function (name) {
            return name.indexOf("A") == 0;
        };

        var groupedNames = _.groupBy(names, criteria);

        expect({ true: ["Adam", "Apple"], false: ["Bertil", "Banana"] }).toEqual(groupedNames);

    });

    it("should group the collection based on criteria B", function () {

        var numbers = [1, 2, 3];

        var criteria = function (number) {
            return number % 2 == 0;
        };

        var groupedNumbers = _.groupBy(numbers, criteria);

        expect({ true: [2], false: [1, 3] }).toEqual(groupedNumbers);

    });

    it("should return an object where the keys are the criteria we used for grouping", function () {

        var names = ["Adam", "Bertil"];

        var criteria = function (name) {
            return name.length;
        };

        var groupedNames = _.groupBy(names, criteria);

        expect({ 4: ["Adam"], 6: ["Bertil"] }).toEqual(groupedNames);

    });




});