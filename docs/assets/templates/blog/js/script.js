"use strict";

document.querySelectorAll("[data-image]").forEach(el => {
	el.style.backgroundImage = `url("${el.dataset.image}")`;
});