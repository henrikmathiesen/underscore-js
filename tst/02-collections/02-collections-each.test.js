/// <reference path="../../typings/tsd.d.ts" />

/*

http://underscorejs.org/#each
each_.each(list, iteratee, [context]) Alias: forEach
Iterates over a list of elements, yielding each in turn to an iteratee function. The iteratee is bound to the context object, if one is passed. Each invocation of iteratee is called with three arguments: (element, index, list). If list is a JavaScript object, iteratee's arguments will be (value, key, list). Returns the list for chaining. 

*/

describe("02-collections-each", function () {
    
    it("should itterate over an array and give a reference to the element, the index and the whole collection", function () {

       var myArray = ['Adam', 'Bertil', 'Ceasar', 'David'];
       var nameArray = [];
       var indexArray = [];
       var listArray;

       _.each(myArray, function (element, index, list) {
           nameArray.push(element);
           indexArray.push(index);
           listArray = list;
       });

       expect(nameArray.length).toEqual(4);
       expect(myArray).toEqual(nameArray);
       expect(indexArray.length).toEqual(4);
       expect(indexArray.pop()).toEqual(3);
       expect(indexArray.shift()).toEqual(0);
       expect(listArray).toEqual(myArray);

    });

    it("should itterate over an object and give a reference to the value and the key", function () {

        var myObj = { name: "Henrik", mood: "Happy" };
        var values = [];
        var keys = [];

        _.each(myObj, function (value, key) {
            values.push(value);
            keys.push(key);
        });

        expect(values.length).toEqual(2);
        expect(keys.length).toEqual(2);
        expect(values[0]).toEqual("Henrik");
        expect(values[1]).toEqual("Happy");
        expect(keys[0]).toEqual("name");
        expect(keys[1]).toEqual("mood");

    });

    it("should be able to accept a this pointer as last argument 1", function () {

        var myObj = {
            names: ["Adam", "Bertil", "Ceasar"],
            getMessage: function () {
                return "Hello World";
            }
        };

        var msg = "";

        _.each(myObj.names, function (element, index, list) {
            msg += this.getMessage() + " ";
        }, myObj)

        msg = msg.trim();

        expect(msg).toEqual("Hello World Hello World Hello World");

    });

    it("should be able to accept a this pointer as last argument 2", function () {

       var myArray = ["Adam", "Bertil"];
       var myObj = {
           getMessage: function (name) {
               return "Hi " + name;
           }
       };

       var msg = "";

       _.each(myArray, function (element, index, list) {
           msg += this.getMessage(element) + " ";
       }, myObj)

       msg = msg.trim();

       expect(msg).toEqual("Hi Adam Hi Bertil");

    });


});