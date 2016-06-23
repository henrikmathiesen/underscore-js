/// <reference path="../../typings/tsd.d.ts" />

/*

http://underscorejs.org/#flatten
flatten_.flatten(array, [shallow])
Flattens a nested array (the nesting can be to any depth). If you pass shallow, the array will only be flattened a single level. 

*/

describe("03-arrays-flatten", function () {
    
    it("should flatten an array", function () {
        
        var myArray = [
            "Adam",
            [1,2,3],
            [
                1,
                [1,2]
            ]
        ];

        var myArrayFlattened = _.flatten(myArray);
        var myArrayFlattenedShallow = _.flatten(myArray, true);

        expect(myArrayFlattened.length).toBe(7);
        expect(myArrayFlattenedShallow.length).toBe(6);

    });


});