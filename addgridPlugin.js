// @license magnet:?xt=urn:btih:d3d9a9a6595521f9666a5e94cc830dab83b65699&dn=expat.txt Expat
// addGrid pzplUI Plugin
"use strict";

function substractGrid(element, which) {
    if (which) {
        document.querySelectorAll(element)[which].remove();
    } else {
        let h = document.querySelectorAll(element);
        document.querySelectorAll(element)[h.length - 1].remove();
    };
};
function addGrid(element, content) {
    document.querySelector(element).innerHTML += content;
};
// @license-end