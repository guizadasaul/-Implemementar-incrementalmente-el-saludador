function saludar(nombre, genero, edad, idioma) {
  const hora = new Date().getHours();
  let saludo;
  
  if (idioma === "es") {
    if (hora >= 5 && hora < 12) {
        saludo = "Buenos días";
    } else if (hora >= 12 && hora < 18) {
        saludo = "Buenas tardes";
    } else {
        saludo = "Buenas noches";
    }
  } else {
    if (hora >= 5 && hora < 12) {
        saludo = "Good morning";
    } else if (hora >= 12 && hora < 18) {
        saludo = "Good afternoon";
    } else {
        saludo = "Good evening";
    }
  }

  if (idioma === "es") {
    if (edad >= 31 && genero === "Mujer") {
        genero = "señora";
    } else if (edad < 31 && genero === "Mujer") {
        genero = "señorita";
    } else if (edad >= 31 && genero === "Hombre") {
        genero = "señor";
    } else if (edad < 31 && genero === "Hombre") {
        genero = "joven";
    }
  } else {
    if (edad >= 31 && genero === "Mujer") {
        genero = "madam";
    } else if (edad < 31 && genero === "Mujer") {
        genero = "miss";
    } else if (edad >= 31 && genero === "Hombre") {
        genero = "sir";
    } else if (edad < 31 && genero === "Hombre") {
        genero = "young";
    }
  }

  alert(`${saludo} ${genero} ${nombre}!`);
}

export default saludar;
