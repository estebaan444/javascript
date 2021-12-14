document.onkeydown = function (Tecla) {
    acumulador = acumulador + Tecla.key;
    document.getElementById("lletra").innerHTML = acumulador;
}
let acumulador = '';