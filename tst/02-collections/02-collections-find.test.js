/// <reference path="../../typings/tsd.d.ts" />

describe("02-collections-find", function () {

    it("should find the first of something in an array based on a criteria", function () {

        var numbers = [1, 2, 3, 4, 5, 6, 7];

        var firstEvenNumber = _.find(numbers, function (num) {
            return num % 2 == 0;
        });

        var firstOddNumber = _.find(numbers, function (num) {
            return num % 2 != 0;
        });

        var greaterThanFiveCheck = function (val) {
            return val > 5;
        };

        var greaterThanFive = _.find(numbers, greaterThanFiveCheck);

        expect(firstEvenNumber).toEqual(2);
        expect(firstOddNumber).toEqual(1);
        expect(greaterThanFive).toBe(6);

    });

    it("should find the first of something in an object based on a criteria", function () {

        var people = [
            {
                name: "Adam",
                age: 20
            },
            {
                name: "Bertil",
                age: 30
            },
            {
                name: "Ceasat",
                age: 40
            }
        ];

        var personOver21 = _.find(people, function (val) {
            return val.age > 21;
        });

        expect(personOver21.name).toBe("Bertil");

    });

});