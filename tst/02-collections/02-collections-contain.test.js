/// <reference path="../../typings/tsd.d.ts" />

/*

http://underscorejs.org/#contains
Returns true if the value is present in the list. Uses indexOf internally, if list is an Array. Use fromIndex to start your search at a given index. 

*/

describe("02-collections-contains", function () {

    it("should return true if a given value is present in a collection", function () {

        var values = [true, 1, null, "yes"];

        expect(_.contains(values, true)).toBe(true);
        expect(_.contains(values, 1)).toBe(true);
        expect(_.contains(values, null)).toBe(true);
        expect(_.contains(values, "yes")).toBe(true);
        expect(_.contains(values, "Yes")).toBe(false);
        expect(_.contains(values, false)).toBe(false);

        var author = {
            firstName: "Kalle",
            lastName: "Anka",
            book: {
                title: "The Blue Jacket"
            }
        };

        expect(_.contains(author, "Anka")).toBe(true);
        expect(_.contains(author.book, "The Blue Jacket")).toBe(true);

    });

});