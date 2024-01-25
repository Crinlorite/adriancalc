// Fijar la fecha de concepción al 08/08/2023
var fechaConcepcion = new Date('02/08/2023');

// Obtener la fecha actual
var fechaActual = new Date();

// Calcular el número de semanas de embarazo
var semanasEmbarazo = Math.floor((fechaActual - fechaConcepcion) / (7 * 24 * 60 * 60 * 1000));

// Calcular el número de días de embarazo
var diasEmbarazo = Math.floor((fechaActual - fechaConcepcion) / (24 * 60 * 60 * 1000) % 7);

// Mostrar el resultado al usuario
var resultadoElemento = document.getElementById("resultado");
resultadoElemento.innerHTML = "Actualmente, Virginia Alcalá está en su semana " + semanasEmbarazo + " y su día " + diasEmbarazo + " de embarazo";
