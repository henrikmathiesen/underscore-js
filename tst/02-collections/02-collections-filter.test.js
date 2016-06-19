/// <reference path="../../typings/tsd.d.ts" />

describe("02-collection-filter", function () {

    it("should be able to filter out values from an array based on a critera", function () {

        var numbers = [1, 2, 3, 4, 5, 6, 7];

        var evenNumbers = _.filter(numbers, function (num) {
            return num % 2 == 0;
        })

        expect(evenNumbers.length).toEqual(3);
        expect(evenNumbers[0]).toEqual(2);
        expect(evenNumbers[1]).toEqual(4);
        expect(evenNumbers[2]).toEqual(6);

    });

    it("should be able to filter out values from an object based on a criteria", function () {
        var persons = [
            {
                name: "Adam",
                age: 20
            },
            {
                name: "Bertil",
                age: 30
            },
            {
                name: "Ceasar",
                age: 40
            }
        ];

        var personsOver21 = _.filter(persons, function (person) {
            return person.age > 21;
        });

        expect(personsOver21.length).toBe(2);
        expect(personsOver21[0].name).toBe("Bertil");
        expect(personsOver21[1].name).toBe("Ceasar");

    });

});