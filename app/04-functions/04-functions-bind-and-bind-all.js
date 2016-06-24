/// <reference path="../../typings/tsd.d.ts" />

(function(){

    // this points to window
    console.log(this);

    $('[data-click-me]').on('click', function(ev){
        // this points to the element clicked (the same as ev.target)
        console.log(this);
        console.log(ev.target);
    });

    var vm = {
        foo: "bar",
        sayFoo: function(msg){
            console.log(this.foo + " " + msg);
        }
    };

    // this points correctly to the object when called from this function
    vm.sayFoo();

    //_.bindAll(vm, ['sayFoo']);

    // The problem in the sayFoo function, when called from the click handler, is that this points to the element and not to the object, so foo is undefined
    // That can be remedid by _.bindAll
    //$('[data-click-me-b]').on('click', vm.sayFoo);
    
    // or by _.bind, like here (can also pass argument)
    $('[data-click-me-b]').on('click', _.bind(vm.sayFoo, vm, "yeah"));

})();