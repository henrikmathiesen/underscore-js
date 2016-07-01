/// <reference path="../../typings/tsd.d.ts" />

(function(){

    // u is now underscore and _ is returned to prev lib owner
    var u = _.noConflict();
    
    var someThings = ["A", "B", "C"];

    u.each(someThings, function(val){
        $('[data-target]').append(val);
    });

})();