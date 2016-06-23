/// <reference path="../../typings/tsd.d.ts" />

/*

http://underscorejs.org/#first
first_.first(array, [n]) Aliases: head, take
Returns the first element of an array. Passing n will return the first n elements of the array. 

http://underscorejs.org/#initial
initial_.initial(array, [n])
Returns everything but the last entry of the array. Especially useful on the arguments object. Pass n to exclude the last n elements from the result. 

http://underscorejs.org/#last
last_.last(array, [n])
Returns the last element of an array. Passing n will return the last n elements of the array. 

http://underscorejs.org/#rest
rest_.rest(array, [index]) Aliases: tail, drop
Returns the rest of the elements in an array. Pass an index to return the values of the array from that index onward. 

*/

describe("03-arrays-first-initial-last-rest", function () {

    it("should find the first item in an array or the first n items", function () {
        var names = ["Adam", "Bertil", "Ceasar"];
        var firstName = _.first(names);
        var firstTwoNames = _.first(names, 2);

        expect(firstName).toBe("Adam");
        expect(firstTwoNames).toEqual(["Adam", "Bertil"]);
    });

    it("should return everything except the last n items in an array", function () {
        var names = ["Adam", "Bertil", "Ceasar"];
        var firstNames = _.initial(names);
        var firstName = _.initial(names, 2);

        expect(firstNames).toEqual(["Adam", "Bertil"]);
        expect(firstName).toEqual(["Adam"]);
    });

    it("should return the last item in an array", function () {
        var names = ["Adam", "Bertil", "Ceasar"];
        var lastName = _.last(names);
        var lastNames = _.last(names, 2);

        expect(lastName).toEqual("Ceasar");
        expect(lastNames).toEqual(["Bertil", "Ceasar"]);
    });

    it("should return everything except the first n items in an array", function () {
        var names = ["Adam", "Bertil", "Ceasar"];
        var theRest = _.rest(names);
        var theOneRest = _.rest(names, 2);

        expect(theRest).toEqual(["Bertil", "Ceasar"]);
        expect(theOneRest).toEqual(["Ceasar"]);
    });

});