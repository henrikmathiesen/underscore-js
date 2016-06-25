/// <reference path="../../typings/tsd.d.ts" />

/*

http://underscorejs.org/#clone
clone_.clone(object)
Create a shallow-copied clone of the provided plain object. Any nested objects or arrays will be copied by reference, not duplicated.

*/

describe("05-chaining-and-objects-clone", function(){

    it("should create a clone of an object, not a variable holding the same reference", function(){

        var myObjOne = {
            name: "Henrik"
        };

        var myObjTwo = myObjOne;

        // These two tests passes because the variables point to the same object in memory
        expect(myObjOne).toEqual(myObjTwo);
        expect(myObjOne).toBe(myObjTwo);

        var myClonedObj = _.clone(myObjOne);
        // These two tests passes because toEqual compares object structure - where as toBe checks if the are the same object in memory (and they are not)
        expect(myObjOne).toEqual(myClonedObj);
        expect(myObjOne).not.toBe(myClonedObj);

    });

    it("does however copy nested members by refrence", function(){

        var myObj = {
            name: "Henrik",
            foo: {
                bar: "baz"
            }
        };

        var myClone = _.clone(myObj);

        myObj.name = "Adam";
        myObj.foo.bar = "Zorro";

        expect(myClone.name).toBe("Henrik", "shallow property is not changed to Adam");
        expect(myClone.foo.bar).toBe("Zorro", "nested property is changed from baz to Zorro");


    });


});