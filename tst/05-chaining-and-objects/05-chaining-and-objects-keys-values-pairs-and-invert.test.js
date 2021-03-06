/// <reference path="../../typings/tsd.d.ts" />

/*
    
    http://underscorejs.org/#keys
    keys_.keys(object)
    Retrieve all the names of the object's own enumerable properties. 
    
    http://underscorejs.org/#values
    values_.values(object)
    Return all of the values of the object's own properties. 
    
    http://underscorejs.org/#pairs
    pairs_.pairs(object)
    Convert an object into a list of [key, value] pairs. 
    
    http://underscorejs.org/#invert
    invert_.invert(object)
    Returns a copy of the object where the keys have become the values and the values the keys. For this to work, all of your object's values should be unique and string serializable. 
    
*/

describe("05-chaining-and-objects-keys-values-pairs-and-invert", function () {

    it("should retrieve all the keys from an object", function () {

        var myObj = { name: "Adam" };

        expect(_.keys(myObj)).toEqual(['name']);

    });

    it("should retrieve all the values from an object", function () {
        var myObj = { name: "Adam" };

        expect(_.values(myObj)).toEqual(['Adam']);
    });

    it("should convert an object into a list of [key, value] pairs", function () {
        var myObj = { name: "Adam" };

        expect(_.pairs(myObj)).toEqual([['name', 'Adam']]);
    });

    it("should return a copy of the object where the keys have become the values and the values the keys", function () {
        var myObj = { name: "Adam" };

        expect(_.invert(myObj)).toEqual({ Adam: "name" });
    });

});