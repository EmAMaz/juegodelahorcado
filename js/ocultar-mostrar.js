const mainInicio = document.querySelector("#inicio");
const mainJuego = document.querySelector("#juego");
const mainAgregar = document.querySelector("#agregar");

function ocultarMostrar(){
    mainInicio.style.display = "none";
    mainAgregar.style.display = "none";
    mainJuego.style.display = "flex";
}
function mostrarInicio(){
    mainInicio.style.display = "block";
    mainJuego.style.display = "none";
    mainAgregar.style.display = "none";
}
function mostrarAgregar(){
    mainInicio.style.display = "none";
    mainJuego.style.display = "none";
    mainAgregar.style.display = "flex";
}
function inciarLimpiar(){
    ocultarMostrar();
    mostrarNuevoJuego();
}
function cancelarTexto(){
    mostrarInicio()
}
function clickearIniciarJuego(){
    empezarJuego = true;
    inciarLimpiar();
}
function clickearDesistir(){
    location.reload()
}