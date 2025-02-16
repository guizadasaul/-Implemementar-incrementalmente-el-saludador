import saludar from "./saludador.js";

document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".saludar-btn");
    const nombreInput = document.querySelector("#nombre");
    const generoSelector = document.querySelector(".select");

    button.addEventListener("click", () => {
        const nombre = nombreInput.value.trim();
        const genero = generoSelector.value;
        if (nombre) {
            saludar(nombre, genero);
        } else {
            alert("por favor, introduce tu nombre");
        }
    });
});
