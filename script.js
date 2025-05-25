// Fijar la fecha de concepción al 02/08/2023
const fechaConcepcion = new Date('2023-08-02');

// Obtener la fecha actual
const fechaActual = new Date();

// Diferencias en milisegundos
const MILISEGUNDOS_DIA = 24 * 60 * 60 * 1000;
const MILISEGUNDOS_SEMANA = MILISEGUNDOS_DIA * 7;
const diferencia = fechaActual - fechaConcepcion;

// Calcular el número de semanas y días de embarazo
const semanasEmbarazo = Math.floor(diferencia / MILISEGUNDOS_SEMANA);
const diasEmbarazo = Math.floor((diferencia % MILISEGUNDOS_SEMANA) / MILISEGUNDOS_DIA);

// Mostrar el resultado al usuario
const resultadoElemento = document.getElementById('resultado');
resultadoElemento.textContent =
  `Actualmente, Virginia Alcalá está en su semana ${semanasEmbarazo} y su día ${diasEmbarazo} de embarazo`;
