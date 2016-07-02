/// <reference path="../../typings/tsd.d.ts" />

/*

http://underscorejs.org/#isFunction
isFunction_.isFunction(object)
Returns true if object is a Function. 

Different is functions here

*/

describe("05-chaining-and-objects-isfunctions", function () {

    it("should determine if something is empty", function () {

        // only use this on objects and arrays, says Pluralsight teacher, else can have false positives

        var someObj = { name: "Kalle" };
        var someObjToo = {};

        expect(_.isEmpty(someObj)).toBe(false);
        expect(_.isEmpty(someObjToo)).toBe(true);

    });

    it("should determine if something is a DOM element", function () {

        var markup = '<h2>test</h2>';
        var element = $(markup);

        expect(_.isElement(markup)).toBe(false);
        expect(_.isElement(element)).toBe(false);
        expect(_.isElement(element.eq(0))).toBe(false);
        expect(_.isElement(element[0])).toBe(true, "The raw DOM element isElement");
    });

    it("should return true if something is an array", function () {

        var myArray = [1, 2, 3];

        expect(_.isArray(myArray)).toEqual(true);

    });

    it("should return true if something is an object", function () {

        var myArray = [1, 2, 3];
        var myObj = { name: "foo" };

        expect(_.isObject(myArray)).toEqual(true, "strange"); // see 01-introduction.test.js for better ways ...
        expect(_.isObject(myObj)).toEqual(true);

    });

    it("should return true for function arguments (the magic variable in all functions)", function () {

        var myFunk = function (foo) {
            expect(_.isArguments(arguments)).toBe(true);
            expect(_.isArguments(foo)).toBe(false);
        }

        myFunk("bar");

    });

    it("should return true if something is a function", function () {

        var a = "";
        var b = "test";
        var c = function(){};
        function d() { };
        var e = { name: "Adam" };
        var f = [1, 2];

        expect(_.isFunction(a)).toBe(false);
        expect(_.isFunction(b)).toBe(false);
        expect(_.isFunction(c)).toBe(true);
        expect(_.isFunction(d)).toBe(true);
        expect(_.isFunction(e)).toBe(false);
        expect(_.isFunction(f)).toBe(false);

    });

    /*

        isString: returns true for string and empty string
        isNumber: returns true if something is an integer, floating point, also NaN
        isFinite: returns true if something is an integer, floating point
        isBoolean: true/false
        isDate: is it a date, then it returns true
        isRegExp
        isNaN
        isNull
        isUndefined

    */

});