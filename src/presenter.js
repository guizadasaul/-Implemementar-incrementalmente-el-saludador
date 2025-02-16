import saludar from "./saludador.js";

document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".saludar-btn");
    const nombreInput = document.querySelector("#nombre");
    const generoSelector = document.querySelector(".select");
    const edadInput = document.querySelector("#edad");

    button.addEventListener("click", () => {
        const nombre = nombreInput.value.trim();
        const genero = generoSelector.value;
        const edad = edadInput.value;
        
        if (nombre && edad) {
            saludar(nombre, genero, edad);
        }else if (!nombre && edad) {
            alert("por favor, introduce tu nombre");
        }else if (!nombre && !edad) {
            alert("por favor, introduce tus datos");
        }else if (nombre && !edad) {
            alert("por favor, introduce tu edad");
        }
    });
});
