/// <reference path="../../typings/tsd.d.ts" />

/*

http://underscorejs.org/#range
range_.range([start], stop, [step])
A function to create flexibly-numbered lists of integers, handy for each and map loops. start, if omitted, defaults to 0; step defaults to 1. Returns a list of integers from start (inclusive) to stop (exclusive), incremented (or decremented) by step, exclusive. Note that ranges that stop before they start are considered to be zero-length instead of negative — if you'd like a negative range, use a negative step. 

*/

describe("03-arrays-range", function () {

    it("should return a list of numbers based on range, start, stop (not including stop value itself) and steps", function () {

        var valuesA = _.range(6);
        var valuesB = _.range(10, 21, 2);

        expect(valuesA).toEqual([0, 1, 2, 3, 4, 5]);
        expect(valuesB).toEqual([10, 12, 14, 16, 18, 20]);

    });

});