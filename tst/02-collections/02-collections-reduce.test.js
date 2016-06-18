/// <reference path="../../typings/tsd.d.ts" />

describe("02-collections-reduce", function () {

    it("should be able to sum a list of numbers (reduce the list to a single value)", function () {
        var numbers = [100, 200, 300];

        var itterations = [];

        var sum = _.reduce(numbers, function (memo, number, index, list) {
            itterations.push({ memo: memo, number: number });
            return memo + number;
        });

        expect(sum).toEqual(600);

        expect(itterations.length).toEqual(2);

        expect(itterations[0].memo).toEqual(100, "First remembered number");
        expect(itterations[1].memo).toEqual(300, "Second remembered number (the sum of numbers at index 0 and index 1)");

        expect(itterations[0].number).toEqual(200, "The first added number");
        expect(itterations[1].number).toEqual(300), "The second added number";

    });

    it("should be able to sum numbers from an object", function () {

        var data = {
            products: [
                {
                    name: 'Prod A',
                    price: 100
                },
                {
                    name: 'Prod B',
                    price: 200
                },
                {
                    name: 'Prod C',
                    price: 300
                }
            ]
        };

        var total = _.reduce(data.products, function (memo, value) {
            return memo + value.price;
        }, 0);

        // we have to seed it with 0, because we are going into an object

        expect(total).toEqual(600);

    });

    it("can use reduceRight for beginning at the right", function () {

        var someThings = ['Adam', 'Bertil'];

        var reducedRight = _.reduceRight(someThings, function (memo, value) {
           return memo + value; 
        });

        var normalReduced = _.reduce(someThings, function (memo, value) {
           return memo + value; 
        });

        expect(reducedRight).toEqual("BertilAdam");
        expect(normalReduced).toEqual("AdamBertil");

    });

});