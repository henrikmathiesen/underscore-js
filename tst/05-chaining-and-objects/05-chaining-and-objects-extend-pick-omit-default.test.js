/// <reference path="../../typings/tsd.d.ts" />

/*

http://underscorejs.org/#extend
extend_.extend(destination, *sources)
Copy all of the properties in the source objects over to the destination object, and return the destination object. It's in-order, so the last source will override properties of the same name in previous arguments. 

http://underscorejs.org/#pick
pick_.pick(object, *keys)
Return a copy of the object, filtered to only have values for the whitelisted keys (or array of valid keys). Alternatively accepts a predicate indicating which keys to pick. 

http://underscorejs.org/#omit
omit_.omit(object, *keys)
Return a copy of the object, filtered to omit the blacklisted keys (or array of keys). Alternatively accepts a predicate indicating which keys to omit. 

http://underscorejs.org/#defaults
defaults_.defaults(object, *defaults)
Fill in undefined properties in object with the first value present in the following list of defaults objects. 

*/


describe("05-chaining-and-objects-extend-pick-omit-default", function () {

    it("should copy all properties from an object over to another object and return it", function () {

        var author = {
            name: "Adam",
            foo: "will be overridden"
        };

        var contactInfo = {
            email: "adam@am.com",
            foo: "will override"
        };

        var extended = _.extend(author, contactInfo);

        expect(extended).toEqual({ name: "Adam", email: "adam@am.com", foo: "will override" });

    });

    it("should return a copy of the object with the properties matching a whitelist", function () {

        var game = {
            title: "Mass Effect",
            rating: 8
        };

        var picked = _.pick(game, ['title']);

        expect(picked).toEqual({ title: "Mass Effect" });

    });

    it("should return a copy of the object with the properties not omitted by a blacklist", function () {

        var game = {
            title: "Mass Effect",
            rating: 8
        };

        var omitted = _.omit(game, ['rating']);

        expect(omitted).toEqual({ title: "Mass Effect" });

    });

    it("should fill in the undefined properties with default value", function () { 

        var gameOne = {
            name: "Mass Effect",
            rating: 8
        };

        var gameTwo = {
            name: "Dragon Age",
            rating: 9
        };

        var defaults = {
            cat: "RPG"
        };

        expect(_.defaults(gameOne, defaults)).toEqual({ name: "Mass Effect", rating: 8, cat: "RPG" });
        expect(_.defaults(gameTwo, defaults)).toEqual({ name: "Dragon Age", rating: 9, cat: "RPG" });

    });

});