/// <reference path="../../typings/tsd.d.ts" />

/*

http://underscorejs.org/#has
has_.has(object, key)
Does the object contain the given key? Identical to object.hasOwnProperty(key), but uses a safe reference to the hasOwnProperty function, in case it's been overridden accidentally. 

*/

describe("05-chaining-and-objects-has", function () {


    it("should return true if object has a property (like javascripts native hasOwnProperty())", function () {

        var myObj = {
            name: "Henrik"
        };

        expect(_.has(myObj, 'name')).toBe(true);
        expect(myObj.hasOwnProperty('name')).toBe(true);

    });



});