/// <reference path="../../typings/tsd.d.ts" />

/*

http://underscorejs.org/#countBy
countBy_.countBy(list, iteratee, [context])
Sorts a list into groups and returns a count for the number of objects in each group. Similar to groupBy, but instead of returning a list of values, returns a count for the number of values in that group. 

*/

describe("02-collections-count-by", function () {
    
    it("should return a count for ammount of val that matches on criteria A", function () {

        var names = ["Adam", "Bertil", "Apple", "Banana"];

        var criteria = function (name) {
            return name.indexOf("A") == 0;
        };

        var groupedNames = _.countBy(names, criteria);

        expect({ true: 2, false: 2 }).toEqual(groupedNames);

    });

    it("should return a count for ammount of val that matches on criteria B", function () {

        var numbers = [1, 2, 3];

        var criteria = function (number) {
            return number % 2 == 0;
        };

        var groupedNumbers = _.countBy(numbers, criteria);

        expect({ true: 1, false: 2 }).toEqual(groupedNumbers);

    });

    it("should return a count for ammount of val that matches on criteria C", function () {

        var names = ["Adam", "Bertil"];

        var criteria = function (name) {
            return name.length;
        };

        var groupedNames = _.countBy(names, criteria);

        expect({ 4: 1, 6: 1}).toEqual(groupedNames);

    });

});