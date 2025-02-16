import saludar from "./saludador.js";

document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".saludar-btn");
    const nombreInput = document.querySelector("#nombre");

    button.addEventListener("click", () => {
        const nombre = nombreInput.value.trim();
        if (nombre) {
            saludar(nombre);
        } else {
            alert("Por favor, introduce tu nombre.");
        }
    });
});
