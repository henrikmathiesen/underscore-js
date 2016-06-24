/// <reference path="../../typings/tsd.d.ts" />

(function(){

    var msgCount = 0;
    var msgOnceCount = 0;

    $('[data-click-me-for-message]').on('click', function () {
        msgCount++;
        $('[data-click-me-for-message-output]').html("The message, function has run: " + msgCount + " times")
    });

    var callOnce = _.once(function () {
        msgOnceCount++;
        $('[data-click-me-for-message-once-output]').html("The message, function has run: " + msgOnceCount + " times")
    });

    $('[data-click-me-for-message-once]').on('click', callOnce);

})();