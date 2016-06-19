/// <reference path="../../typings/tsd.d.ts" />

/*

http://underscorejs.org/#reject
reject_.reject(list, predicate, [context])
Returns the values in list without the elements that the truth test (predicate) passes. The opposite of filter. 

*/

describe("02-collections-reject", function () {

    it("should return the values that does not match the criteria", function () {

        var numbers = [1, 2, 3, 4, 5, 6, 7];

        var oddNumbers = _.reject(numbers, function (num) {
            return num % 2 == 0;
        });

        expect(oddNumbers.length).toBe(4);
        expect(oddNumbers.shift()).toBe(1);
        expect(oddNumbers.pop()).toBe(7);

    });


    // See filter test for handling objects

});