// @license magnet:?xt=urn:btih:d3d9a9a6595521f9666a5e94cc830dab83b65699&dn=expat.txt Expat
// Parallax pzplUI Plugin
"use strict";

let elementer;
let scaler;

function parallax(element, scale) {
    document.addEventListener("mousemove", parallaxFramework);
    elementer = document.querySelector(element);
    scaler = scale;
    function parallaxFramework(e) {
        let windowWidth = window.innerWidth / 2;
        let windowHeight = window.innerHeight / 2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _scale2 = scaler * 2;
        let _depth1 = `${(_mouseX - windowWidth) * scaler}% ${(_mouseY - windowHeight) * scaler}%`;
        let _depth2 = `${(_mouseX - windowWidth) * scaler}% ${(_mouseY - windowHeight) * scaler}%`;
        let _depth3 = `${(_mouseX - windowWidth) * _scale2}% ${(_mouseY - windowHeight) * _scale2}%`;
        let superWazneInfo = `${_depth3}, ${_depth2}, ${_depth1}`;
        elementer.style.backgroundPosition = superWazneInfo;
    };
};
// @license-end