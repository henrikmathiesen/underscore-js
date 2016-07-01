/// <reference path="../../typings/tsd.d.ts" />

(function () {

    var myObj = {
        name: "Adam",
        func: function () {
            return this.name;
        }
    };

    console.log(_.result(myObj, 'name'));
    console.log(_.result(myObj, 'func'));

})();