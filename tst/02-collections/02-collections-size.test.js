/// <reference path="../../typings/tsd.d.ts" />

/*

http://underscorejs.org/#size
size_.size(list)
Return the number of values in the list. 

*/

describe("02-collections-size", function () {

    it("should give the size of an array or an object", function () {

        var numbers = [1, 2, 3];
        var myObj = { name: "Bubba", age: 45 };
        var peopleArray = [{ name: "Adam" }, { name: "Bertil" }, { name: "Ceasar" }];

        var numLength = _.size(numbers);
        var objLength = _.size(myObj);
        var peopleArrayLength = _.size(peopleArray);

        expect(numLength).toBe(3);
        expect(objLength).toBe(2);
        expect(peopleArrayLength).toBe(3);
    });

});