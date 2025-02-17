import saludar from "./saludador.js";

document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".saludar-btn");
    const nombreInput = document.querySelector("#nombre");
    const generoSelector = document.querySelector("#genero");
    const edadInput = document.querySelector("#edad");
    const idiomaSelector = document.querySelector("#idioma");

    button.addEventListener("click", () => {
        const nombre = nombreInput.value.trim();
        const genero = generoSelector.value;
        const edad = parseInt (edadInput.value);
        const idioma = idiomaSelector.value;

        if (nombre && edad) {
            saludar(nombre, genero, edad, idioma);
        }else if (!nombre && edad) {
            alert(idioma === "es" ? "por favor introduce tu nombre" : "please enter your name");
        }else if (!nombre && !edad) {
            alert(idioma === "es" ? "por favor introduce tus datos" : "please enter your data");
        }else if (nombre && !edad) {
            alert(idioma === "es" ? "por favor introduce tu edad" : "please enter your age");
        }
    });
});
