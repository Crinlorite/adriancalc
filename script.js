function calcularEmbarazo() {
    var fechaConcepcionInput = document.getElementById("fechaConcepcion").value;
    var fechaConcepcion = new Date(fechaConcepcionInput);

    var fechaActual = new Date();
    var semanasEmbarazo = Math.floor((fechaActual - fechaConcepcion) / (7 * 24 * 60 * 60 * 1000));
    var diasEmbarazo = Math.floor((fechaActual - fechaConcepcion) / (24 * 60 * 60 * 1000) % 7);

    var resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = "Actualmente estás en la semana " + semanasEmbarazo + " y el día " + diasEmbarazo + " de embarazo";
}
