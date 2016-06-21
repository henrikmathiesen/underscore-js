/// <reference path="../../typings/tsd.d.ts" />

/*

sortBy_.sortBy(list, iteratee, [context])
Returns a (stably) sorted copy of list, ranked in ascending order by the results of running each value through iteratee. iteratee may also be the string name of the property to sort by (eg. length). 

*/

describe("02-collections-sort-by", function () {

    it("should sort an array by criteria A", function () {

        var numbers = [1, 3, 2, 4, 5];

        var sorted = _.sortBy(numbers);

        expect(sorted.length).toBe(5);
        expect([1, 2, 3, 4, 5]).toEqual(sorted);

    });

    it("should sort an array by criteria B", function () {

        var numbers = [1, 2, 3, 4, 5];

        var sortCriteria = function (num) {
            return num % 2 !== 0;
        };

        var sorted = _.sortBy(numbers, sortCriteria);

        expect(sorted.length).toBe(5);
        expect([2, 4, 1, 3, 5]).toEqual(sorted);

    });

    it("should sort an array by criteria C", function () {

        var names = ["Bertil", "Adam", "Ceasar"];

        var sorted = _.sortBy(names);

        expect(["Adam", "Bertil", "Ceasar"]).toEqual(sorted);

    });

    it("should sort an array by criteria D", function () {

        var names = ["Bertil", "Adam", "Ceasar"];

        var sortCriteria = function (name) {
            return name.length;
        };

        var sorted = _.sortBy(names, sortCriteria);

        expect(["Adam", "Bertil", "Ceasar"]).toEqual(sorted);
        expect(["Ceasar", "Bertil", "Adam"]).toEqual(sorted.reverse());

    });

});