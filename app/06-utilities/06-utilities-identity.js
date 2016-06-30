/// <reference path="../../typings/tsd.d.ts" />

(function(){

    var author = { name: "Adam" };

    console.log(author === _.identity(author));

})();