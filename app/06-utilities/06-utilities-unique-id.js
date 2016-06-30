/// <reference path="../../typings/tsd.d.ts" />

(function(){

    $('[data-trigger-unique]').on('click', function(){

        $('[data-uniques] > div:first-child').html(_.uniqueId());
        $('[data-uniques] > div:last-child').html(_.uniqueId("product_"));

    });


})();