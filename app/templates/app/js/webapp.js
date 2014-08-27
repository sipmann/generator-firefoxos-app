'use strict';

(function () {

    //GetsVars
    var mnAbout = document.querySelector('#about');

    if (mnAbout) {
        mnAbout.onclick = function () {
            alert('Hi there');
        };
    }
})();
