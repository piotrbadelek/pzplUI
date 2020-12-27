// @license magnet:?xt=urn:btih:d3d9a9a6595521f9666a5e94cc830dab83b65699&dn=expat.txt Expat
// modal pzplUI Plugin
"use strict";

let $pzplui_modal = {};

$pzplui_modal.init = function (selector) {
    let modal = document.querySelector(selector);
    return {
        "modal": modal,
        "shown": "false",
        "payload": undefined,
        "show": function () {
            this.modal.shown = true;
            this.modal.style.display = "block";
        },
        "hide": function (payload) {
            this.shown = false;
            this.payload = payload;
            this.modal.style.display = "none";
        }
    };
};
// @license-end