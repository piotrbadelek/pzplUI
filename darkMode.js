// @license magnet:?xt=urn:btih:d3d9a9a6595521f9666a5e94cc830dab83b65699&dn=expat.txt Expat
// Dark Mode pzplUI Plugin
"use strict";

document.onkeyup = function (e) {
    if (e.shiftKey && e.key == "D") {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("pzplUI_mode", "dark");
        } else {
            localStorage.setItem("pzplUI_mode", "light");
        }
    };
};

if (localStorage.getItem("pzplUI_mode") == "dark") {
    document.body.classList.add("dark-mode");
};

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("pzplUI_mode", "dark");
    } else {
        localStorage.setItem("pzplUI_mode", "light");
    }
};

// @license-end