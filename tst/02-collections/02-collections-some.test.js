/// <reference path="../../typings/tsd.d.ts" />

/*

http://underscorejs.org/#some
some_.some(list, [predicate], [context]) Alias: any
Returns true if any of the values in the list pass the predicate truth test. Short-circuits and stops traversing the list if a true element is found. 

*/

describe("02-collections-some", function () {

    it("should return true if any value passes the test", function () {

        var values = [false, false, false, true];
        var isAnyTruthy = _.some(values, function (value) {
            return value;
        });

        var ages = [18, 19, 20, 21, 22];
        var isAnyOver21 = _.some(ages, function (age) {
            return age > 21;
        });

        var numbers = [1, 2, 3, 4, 5];
        var isAnyOver10 = _.some(numbers, function (num) {
            return num > 10;
        });

        var games = [
            {
                name: "Fallout New Vegas"
            },
            {
                name: "Fallout 3"
            },
            {
                name: "Dragon Age Origins"
            }
        ];

        var containsFallout = _.some(games, function (obj) {
            return obj.name.indexOf("Fallout") != -1;
        });

        expect(isAnyTruthy).toBe(true);
        expect(isAnyOver21).toBe(true);
        expect(isAnyOver10).toBe(false);
        expect(containsFallout).toBe(true);
    });

});