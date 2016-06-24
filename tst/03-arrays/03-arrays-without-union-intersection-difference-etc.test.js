/// <reference path="../../typings/tsd.d.ts" />

/*

http://underscorejs.org/#without
without_.without(array, *values)
Returns a copy of the array with all instances of the values removed. 

http://underscorejs.org/#union
union_.union(*arrays)
Computes the union of the passed-in arrays: the list of unique items, in order, that are present in one or more of the arrays. 

http://underscorejs.org/#intersection
intersection_.intersection(*arrays)
Computes the list of values that are the intersection of all the arrays. Each value in the result is present in each of the arrays. 

http://underscorejs.org/#difference
difference_.difference(array, *others)
Similar to without, but returns the values from array that are not present in the other arrays.

http://underscorejs.org/#uniq
uniq_.uniq(array, [isSorted], [iteratee]) Alias: unique
Produces a duplicate-free version of the array, using === to test object equality. In particular only the first occurence of each value is kept. If you know in advance that the array is sorted, passing true for isSorted will run a much faster algorithm. If you want to compute unique items based on a transformation, pass an iteratee function. 

*/

describe("03-arrays-without-union-intersection-difference", function () {

    it("should remove all occurances of a value from an array and return the array", function () {

        var myArray = ["Adam", "Bertil", "Ceasar", "Adam"];
        var withoutAdam = _.without(myArray, "Adam");
        var withOutTwo = _.without(myArray, "Adam", "Bertil");

        expect(withoutAdam).toEqual(["Bertil", "Ceasar"]);
        expect(withOutTwo).toEqual(["Ceasar"]);

    });

    it("should take arrays and return an array with the unique values", function () {
        var myArrayA = ["Adam", "Bertil", "Ceasar"];
        var myArrayB = ["Adam", "Zorro", "Xerses"];

        var uniqueArray = _.union(myArrayA, myArrayB);

        expect(uniqueArray).toEqual(["Adam", "Bertil", "Ceasar", "Zorro", "Xerses"]);
    });

    it("should return the duplicates from arrays", function () {
        var myArrayA = ["Adam", "Bertil", "Ceasar"];
        var myArrayB = ["Adam", "Zorro", "Xerses"];

        var duplicate = _.intersection(myArrayA, myArrayB);

        expect(duplicate).toEqual(["Adam"]);
    });

    it("should return the values from the first array that are not present in other arrays (compares the first array with the second arrays)", function () {
        var myArrayA = ["Adam", "Bertil", "Ceasar"];
        var myArrayB = ["Adam", "Zorro", "Xerses"];

        var onlyInOne = _.difference(myArrayA, myArrayB);
        expect(onlyInOne).toEqual(["Bertil", "Ceasar"]);
    });

    it("should produce a duplicate free version of an array", function () {
        var myArray = [1, 2, 3, 1];
        var myArrayB = [1, 1, 2, 3];
        
        expect(_.uniq(myArray)).toEqual([1,2,3]);
        expect(_.uniq(myArrayB, true)).toEqual([1,2,3]);
    });



});