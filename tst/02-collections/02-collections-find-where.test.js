/// <reference path="../../typings/tsd.d.ts" />

/*

http://underscorejs.org/#findWhere
findWhere_.findWhere(list, properties)
Looks through the list and returns the first value that matches all of the key-value pairs listed in properties. 

*/

describe("02-collections-find-where", function () {

    it("should be able to find the first object based on property search", function () {

        var games = [
            {
                name: "Resident Evil 4",
                category: "Horror",
                rating: 10
            },
            {
                name: "Resident Evil 1",
                category: "Horror",
                rating: 9
            },
            {
                name: "Fallout New Vegas",
                category: "RPG",
                rating: 9
            },
            {
                name: "Witcher 3",
                category: "RPG",
                rating: 10
            }
        ];

        var rpgs = _.findWhere(games, { category: "RPG" });
        var isArray = rpgs.constructor === Array;
        var isObject = rpgs === Object(rpgs) && Object.prototype.toString.call(rpgs) !== '[object Array]';

        expect(isArray).toBe(false);
        expect(isObject).toBe(true);
        expect(rpgs.name).toBe("Fallout New Vegas");

    });

});