/// <reference path="../../typings/tsd.d.ts" />

/*

http://underscorejs.org/#isEqual
isEqual_.isEqual(object, other)
Performs an optimized deep comparison between the two objects, to determine if they should be considered equal. 

*/

describe("05-chaining-and-objects-isequal", function(){

    it("should return true if an object is equal", function(){

        var objOne = {
            name: "Adam"
        };

        var objTwo = {
            name: "Adam"
        };

        expect(objOne == objTwo).toBe(false);
        expect(objOne === objTwo).toBe(false);
        expect(objOne).not.toBe(objTwo);
        expect(objOne).toEqual(objTwo);

        // allthough they dont reference the same space in memory, they have the same properties and values and are therefor considered equal by _.isEqual()
        expect(_.isEqual(objOne, objTwo)).toBe(true);

    });

});