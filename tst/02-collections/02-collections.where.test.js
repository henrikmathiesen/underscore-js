/// <reference path="../../typings/tsd.d.ts" />

/*

http://underscorejs.org/#where
where_.where(list, properties)
Looks through each value in the list, returning an array of all the values that contain all of the key-value pairs listed in properties. 

*/

describe("02-collections-where", function () {
    
    it("should be able to find objects based on property search", function () {

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

       var rpgs = _.where(games, { category: "RPG" });
       var greatHorrors = _.where(games, { category: "Horror", rating: 10 });

       expect(rpgs.length).toEqual(2);
       expect(greatHorrors.length).toEqual(1);
       expect(greatHorrors[0].name).toBe("Resident Evil 4");

    });

});