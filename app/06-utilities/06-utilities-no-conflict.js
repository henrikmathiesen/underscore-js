/// <reference path="../../typings/tsd.d.ts" />

(function(){

    var u = _.noConflict();
    
    var someThings = ["A", "B", "C"];

    u.each(someThings, function(val){
        $('[data-target]').append(val);
    });

})();