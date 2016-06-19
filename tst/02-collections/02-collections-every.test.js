/// <reference path="../../typings/tsd.d.ts" />

/*

http://underscorejs.org/#every
Returns true if all of the values in the list pass the predicate truth test. Short-circuits and stops traversing the list if a false element is found. 

*/

describe("02-collections-every", function () {

    it("should first understand truthy/faly and true/false", function () {

        expect(true).toBeTruthy();
        expect("foo").toBeTruthy();
        expect(9).toBeTruthy();

        expect(false).toBeFalsy();
        expect("").toBeFalsy();
        expect(0).toBeFalsy();

        expect(1 == "1").toBe(true);
        expect(1 == true).toBe(true);
        expect(0 == false).toBe(true);
        expect(2 == true).toBe(false);

        expect(true === true).toBe(true);
        expect("foo" === true).toBe(false);
        expect(1 === true).toBe(false);

        expect(1 === "1").toBe(false);
        expect(1 === true).toBe(false);
        expect(0 === false).toBe(false);

    });

    it("should return true if all the values in the collection passes the test", function () {

        var truthyList01 = [true, "foo", 0];
        var containsAllTruthy01 = _.every(truthyList01, function (value) {
            return value;
        });

        var truthyList02 = [true, "foo", 5];
        var containsAllTruthy02 = _.every(truthyList02, function (value) {
            return value;
        });

        var truthyList03 = [true, 1, true];
        var containsAllTruthy03 = _.every(truthyList03, function (value) {
            return value == true;
        });

        var truthyList04 = [true, 5, true];
        var containsAllTruthy04 = _.every(truthyList04, function (value) {
            return value == true;
        });

        var trueList01 = [true, true];
        var containsAllTrue01 = _.every(trueList01, function (value) {
            return value === true;
        })

        var trueList02 = [true, 1];
        var containsAllTrue02 = _.every(trueList02, function (value) {
            return value === true;
        });

        var ages = [22, 29, 36, 55];
        var containsAllOver21 = _.every(ages, function (value) {
            return value > 21;
        });

        expect(containsAllTruthy01).toBe(false);
        expect(containsAllTruthy02).toBe(true);
        expect(containsAllTruthy03).toBe(true);
        expect(containsAllTruthy04).toBe(false);
        expect(containsAllTrue01).toBe(true);
        expect(containsAllTrue02).toBe(false);
        expect(containsAllOver21).toBe(true);

    });

    it("should return true if all the values in an objects array passes the test", function () {

        var persons = [
            {
                name: "Adam",
                favFood: ""
            },
            {
                name: "Bertil",
                favFood: "Pizza"
            },
            {
                name: "Ceasar",
                favFood: "Pasta"
            },
        ];

        var allFavFoodAreSet = _.every(persons, function (value) {
            return value.favFood !== "";
        });

        expect(allFavFoodAreSet).toBe(false);

    });

});