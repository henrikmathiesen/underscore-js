/// <reference path="../typings/tsd.d.ts" />

describe("Here we make some fun and interesting tests that comes to mind from the introduction module of the course", function () {
    
    it("should understand to know if a value is odd or even", function () {
        expect(4 % 2 === 0).toBe(true, "it is even");
        expect(3 % 2 === 0).toBe(false, "it is odd");
    });

    it("should be an array, testing the underscore way (source code)", function () {
        var myArray = ['Adam', 'Bertil', 'Ceasar'];
        var isArray = myArray.length === +myArray.length;
        
        expect(isArray).toBe(true);
    });

    it("should not be an array, testing the underscore way (source code)", function () {
        var myObj = { name: "Henry" };
        var isArray = myObj.length === +myObj.length;
        
        expect(isArray).toBe(false);
    });

    it("should be an array, testing another way", function () {
        var myArray = ['Adam', 'Bertil', 'Ceasar'];
        var isArray = myArray.constructor === Array;

        expect(isArray).toBe(true);
    });

    it("should not be an array, testing another way", function () {
        var myObj = { name: "Henry" };
        var isArray = myObj.constructor === Array;

        expect(isArray).toBe(false);
    });

    it("should be an object", function () {
        var myObj = { name: "Henry" };
        var isObject = myObj === Object(myObj) && Object.prototype.toString.call(myObj) !== '[object Array]';

        expect(isObject).toBe(true);
    });

    it("should not be an object", function () {
        var myArray = ['Adam', 'Bertil', 'Ceasar']; 
        var isObject = myArray === Object(myArray) && Object.prototype.toString.call(myArray) !== '[object Array]';

        expect(isObject).toBe(false);
    });

    it("should be a string and it should not be a string", function () {
        
        var isString = "Henrik";
        var isNr = 99;

        var stringCheckOne = (typeof isString == 'string' || isString instanceof String);
        var stringCheckTwo = (typeof isNr == 'string' || isNr instanceof String);

        expect(stringCheckOne).toBe(true);
        expect(stringCheckTwo).toBe(false);

    });

});