document.addEventListener('DOMContentLoaded', function () {
    // Fijar la fecha de concepción al 08/08/2023
    var fechaConcepcion = new Date('08/08/2023');

    // Obtener la fecha actual
    var fechaActual = new Date();

    // Calcular el número de semanas de embarazo
    var semanasEmbarazo = Math.floor((fechaActual - fechaConcepcion) / (7 * 24 * 60 * 60 * 1000));

    // Calcular el número de días de embarazo
    var diasEmbarazo = Math.floor((fechaActual - fechaConcepcion) / (24 * 60 * 60 * 1000) % 7);

    // Mostrar el resultado al usuario
    var resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = "Actualmente Virginia está en la semana " + semanasEmbarazo + " y el día " + diasEmbarazo + " de embarazo";
});
