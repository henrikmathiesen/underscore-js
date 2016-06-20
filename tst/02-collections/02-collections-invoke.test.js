/// <reference path="../../typings/tsd.d.ts" />

/*

http://underscorejs.org/#invoke
invoke_.invoke(list, methodName, *arguments)
Calls the method named by methodName on each value in the list. Any extra arguments passed to invoke will be forwarded on to the method invocation. 

*/

describe("02-collections-invoke", function () {

    it("should invoke a function for each value in the array", function () {

        var numbers = [1, 2, 3];
        var someThings = [];

        var copyThem = function () {
            someThings.push("x");
        };

        _.invoke(numbers, copyThem);

        expect(someThings.length).toBe(3);

    });

});