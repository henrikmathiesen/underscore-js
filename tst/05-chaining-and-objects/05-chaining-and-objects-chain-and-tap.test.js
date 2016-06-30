/// <reference path="../../typings/tsd.d.ts" />

/*

   http://underscorejs.org/#chain
   chain_.chain(obj)
   Returns a wrapped object. Calling methods on this object will continue to return wrapped objects until value is called. 

   http://underscorejs.org/#tap
   tap_.tap(object, interceptor)
   Invokes interceptor with the object, and then returns object. The primary purpose of this method is to "tap into" a method chain, in order to perform operations on intermediate results within the chain. 

*/

describe("05-chaining-and-objects-chain-and-tap", function () {

    it("should call a chain of methods, passing in the result, until value is called", function () {

        var products = [
            {
                id: 1,
                price: 10
            },
            {
                id: 1,
                price: 18
            },
            {
                id: 1,
                price: 15
            }
        ];

        var mostExpensive = _.chain(products)
            .sortBy('price')
            .last()
            .value()

        expect(mostExpensive.price).toBe(18);

    });

    it("should be able to tap into a chain and add functionality to it", function () {

        var authors = [
            {
                id: 1,
                name: "Adam",
                handle: ""
            },
            {
                id: 2,
                name: "Bertil",
                handle: ""
            },
            {
                id: 3,
                name: "Ceasar",
                handle: ""
            }
        ];

        var handlers = [
            {
                id: 1,
                handle: "Ad"
            },
            {
                id: 2,
                handle: "Be"
            },
            {
                id: 3,
                handle: "Ce"
            }
        ];

        var addNickNames = function () {
            _.each(authors, function (value, key, list) {
                
                _.filter(handlers, function(handle){

                    if(value.id === handle.id) {
                        value.handle = handle.handle;
                    }

                });

            });
        };

        addNickNames();

        expect(authors[0].handle).toBe("Ad");
        expect(authors[1].handle).toBe("Be");
        expect(authors[2].handle).toBe("Ce");

        
        var authorsNamedAdam = _.chain(authors)
            .where({ name: "Adam" })
            .tap(addNickNames)
            .value();

        expect(authorsNamedAdam.length).toBe(1);
        expect(authorsNamedAdam[0].name).toBe("Adam");
        expect(authorsNamedAdam[0].handle).toBe("Ad");

    });


});