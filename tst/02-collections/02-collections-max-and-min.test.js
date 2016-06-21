/// <reference path="../../typings/tsd.d.ts" />

/*

max_.max(list, [iteratee], [context])
Returns the maximum value in list. If an iteratee function is provided, it will be used on each value to generate the criterion by which the value is ranked. -Infinity is returned if list is empty, so an isEmpty guard may be required. 

min_.min(list, [iteratee], [context])
Returns the minimum value in list. If an iteratee function is provided, it will be used on each value to generate the criterion by which the value is ranked. Infinity is returned if list is empty, so an isEmpty guard may be required. 

*/

describe("02-collections-max-and-min", function () {

    it("should calculate the max number", function () {

        var numbers = [1, 2, 3];
        var max = _.max(numbers);

        expect(max).toBe(3);

    });

    it("should calculate the min number", function () {
        var numbers = [1, 2, 3];
        var min = _.min(numbers);

        expect(min).toBe(1);
    });

    it("should be able to handle objects", function () {

        var persons = [
            {
                name: "Adam",
                age: 40
            },
            {
                name: "Bertil",
                age: 45
            }
        ];

        var maxCriteria = function (person) {
            return person.age;
        };

        var oldest = _.max(persons, maxCriteria);

        expect(oldest.name).toBe("Bertil");

    });

});