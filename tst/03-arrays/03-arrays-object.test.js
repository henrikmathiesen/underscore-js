/// <reference path="../../typings/tsd.d.ts" />

/*

http://underscorejs.org/#object
object_.object(list, [values])
Converts arrays into objects. Pass either a single list of [key, value] pairs, or a list of keys, and a list of values. If duplicate keys exist, the last value wins. 

*/

describe("03-arrays-object", function () {

    it("should create an object from an array A", function () {

        var myArrayKeys = [1, 2, 3];
        var myArray = ["Adam", "Bertil", "Ceasar"];
        var myObj = _.object(myArrayKeys, myArray);

        expect(myObj).toEqual({ 1: "Adam", 2: "Bertil", 3: "Ceasar" });

    });

    it("should create an object from an array B", function () {
        var myArrayKeyVal = [
            ["firstName", "Adam"],
            ["lastName", "Bertilsson"]
        ];

        var myObj = _.object(myArrayKeyVal);

        expect(myObj).toEqual({ firstName: "Adam", lastName: "Bertilsson" });
    });

});