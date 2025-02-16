function saludar(nombre, genero, edad) {
  const hora = new Date().getHours();
  let saludo;
  
  if (hora >= 5 && hora < 12) {
      saludo = "Buenos dias";
  } else if (hora >= 12 && hora < 18) {
      saludo = "Buenas tardes";
  } else {
      saludo = "Buenas noches";
  }
  if(edad >= 31 && genero === "Mujer"){
    genero = "señora";
  }else if(edad <31 && genero === "Mujer"){
    genero = "señorita";
  }else if(edad >=31 && genero === "Hombre"){
    genero = "señor";
  }else if(edad <31 && genero === "Hombre"){
    genero = "joven";
  }

  alert(`${saludo} ${genero} ${nombre}!`);
}

export default saludar;
