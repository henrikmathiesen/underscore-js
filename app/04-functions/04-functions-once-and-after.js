/// <reference path="../../typings/tsd.d.ts" />

(function(){


    //
    // Call once

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

    //
    // Call after

    var msgAfterCount = 0;

    var callAfterTwoTimes = _.after(2, function () {
        msgAfterCount++;
        $('[data-click-me-for-message-after-two-clicks-output]').html("Hello World! Function has run: " + msgAfterCount + " times");
    });

    $('[data-click-me-for-message-after-two-clicks]').on('click', callAfterTwoTimes);

})();