/// <reference path="../../typings/tsd.d.ts" />

/*

http://underscorejs.org/#pluck
A convenient version of what is perhaps the most common use-case for map: extracting a list of property values. 

*/

describe("02-collections-pluck", function () {

    it("should extract values from an array, creating a new array", function () {

        var persons = [
            {
                name: "Adam",
                age: 40
            },
            {
                name: "Bertil",
                age: 45
            },
            {
                name: "Ceasar",
                age: 50
            },
            {
                name: "David",
                age: 58
            }
        ];

        var personsName = _.pluck(persons, 'name');

        expect(personsName.length).toBe(4);
        expect(personsName.shift()).toBe("Adam");
        expect(personsName.pop()).toBe("David");
    });

});