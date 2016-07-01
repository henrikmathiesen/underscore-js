/// <reference path="../../typings/tsd.d.ts" />

(function () {

    $('[data-html-input-raw]').on('keyup', function () {
        $('[data-html-output-raw]').html($(this).val());
    });

    $('[data-html-input-escaped]').on('keyup', function(){
        $('[data-html-output-escaped]').html(_.escape($(this).val()));
    });

    $('[data-html-output-unescaped]').html(_.unescape("&lt;h2&gt;hi&lt;/h2&gt;"));

})();