import saludar from "./saludador.js";

document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".saludar-btn");

    button.addEventListener("click", saludar);
});
