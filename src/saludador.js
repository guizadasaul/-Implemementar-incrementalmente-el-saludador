function saludar(nombre) {
  const hora = new Date().getHours();
  let saludo;

  if (hora >= 5 && hora < 12) {
      saludo = "Buenos días";
  } else if (hora >= 12 && hora < 18) {
      saludo = "Buenas tardes";
  } else {
      saludo = "Buenas noches";
  }

  alert(`${saludo}, ${nombre}!`);
}

export default saludar;
