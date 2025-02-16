function saludar(nombre, genero) {
  const hora = new Date().getHours();
  let saludo;

  if (hora >= 5 && hora < 12) {
      saludo = "Buenos dias";
  } else if (hora >= 12 && hora < 18) {
      saludo = "Buenas tardes";
  } else {
      saludo = "Buenas noches";
  }

  alert(`${saludo} ${genero} ${nombre}!`);
}

export default saludar;
