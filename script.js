// Fijar la fecha de nacimiento de Adrián al 08/05/2024
const fechaNacimiento = new Date('2024-05-08');

// Obtener la fecha actual
const fechaActual = new Date();

// Calcular años y meses de edad
let anios = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
let meses = fechaActual.getMonth() - fechaNacimiento.getMonth();

// Ajustar si todavía no ha cumplido el mes en curso
if (fechaActual.getDate() < fechaNacimiento.getDate()) {
  meses--;
}
if (meses < 0) {
  anios--;
  meses += 12;
}

// Mostrar el resultado al usuario
const resultadoElemento = document.getElementById('resultado');
resultadoElemento.textContent =
  `Virginia ya tuvo a Adrián y ahora Adrián tiene ${anios} años y ${meses} meses.`;
