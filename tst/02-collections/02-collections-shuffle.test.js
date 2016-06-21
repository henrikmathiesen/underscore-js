/// <reference path="../../typings/tsd.d.ts" />

/*

http://underscorejs.org/#shuffle
shuffle_.shuffle(list)
Returns a shuffled copy of the list, using a version of the Fisher-Yates shuffle. 
https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle

*/

describe("02-collections-shuffle", function () {

    it("should randomize values without repeating value", function () {

        var numbers = [1, 2, 3, 4, 5];
        var randomNumb = _.shuffle(numbers);

        //console.debug(randomNumb);

        // Every number is in the randomized array
        expect(numbers.indexOf(1)).not.toBe(-1);
        expect(numbers.indexOf(2)).not.toBe(-1);
        expect(numbers.indexOf(3)).not.toBe(-1);
        expect(numbers.indexOf(4)).not.toBe(-1);
        expect(numbers.indexOf(5)).not.toBe(-1);

    });

});