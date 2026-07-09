"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    // Remove preloader/container flag once DOM is parsed
    body.classList.remove("container");

    // Trigger modern hardware-accelerated entrance animations on the next frame
    requestAnimationFrame(() => {
        body.classList.add("loaded");
    });
});