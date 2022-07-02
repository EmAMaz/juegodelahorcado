var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

// CONSTANTES
var texto = ["HTML","CSS","JAVASCRIPT","JAVA","PROGRAMADOR","ALURA","ORACLE","CANVAS","JUEGO","FRASE","AHORCADO","DESAFIO","SANTIAGO","MAZA"];
const container = document.querySelector("#containerLetras");
const erradas = document.querySelector("#containerErradas");
const botonNuevoJuego = document.querySelector("#nuevoJuego");
const inciarJuego = document.querySelector("#inciarJuego");
const desistir = document.querySelector("#desistir");
const agregarEmpezar = document.querySelector("#agregarEmpezar");
const cancelarAgregar = document.querySelector("#cancelarAgregar");
const agregarPalabra = document.querySelector("#agregarPalabra");
const textarea = document.querySelector("#input-textarea");

// VARIABLES
var intentos = 9;
var arrayErrores = [];
var erroresFiltrados = [];
var arrayAciertos = [];
var aciertosFiltrados = [];
var arraytexto = [];
var habilitado = true;
var empezarJuego = false;
var estaCreado = false;
var habilitarNuevoTexto = false;

function agregarNuevoAlJuego(){
    habilitarNuevoTexto = true;    
    var sepuede = validarArrayTexto();
    if(sepuede){
        empezarJuego = true;
        ocultarMostrar();
        mostrarNuevoJuego();  
    }
}
function mostrarNuevoJuego(){
    resetear();
    crearGuionBajo();
    mostrarLetra();
}
function validarArrayTexto(){
    var nuevoTexto = textarea.value;
    if(isNaN(nuevoTexto)){
        if(habilitarNuevoTexto){
            texto.splice(0);
            texto.push(nuevoTexto.toUpperCase());
            return texto;
        }
    }
    else{
        Swal.fire("Ingrese solamente letras");
        return false;
    }
}
function sorteartexto(){
    var textoSorteado = texto[Math.floor(Math.random() * texto.length)]
    arraytexto.push(textoSorteado);
    return textoSorteado;
}
function resetear(){
    limpiarCanvas()
    if(estaCreado){
        limpiarTextoDinamico();
    }
    limpiarContainer();
    limpiarArrays();
    limpiarTextArea();
    // console.clear();
    habilitado = true;
    estaCreado = false;
    habilitarNuevoTexto = false;  
}
function crearGuionBajo(){
    textoSorteado = sorteartexto();
    for(let i = 0; i < textoSorteado.length; i++){
        var input = document.createElement("p")
        container.appendChild(input);
        input.className = "letra";       
    }
}
function onKeyDownHandler(event) {  
    
    if(habilitado && empezarJuego){
        var codigo = event.keyCode;
        var letraPresionada = String.fromCharCode(codigo);
        if(codigo >= 65 && codigo <= 90){
            console.log("Tecla Presionada: " + letraPresionada);
            console.log("El texto sorteado es: " + textoSorteado);
            // ACERTAR PALABRA
            var busqueda = textoSorteado.match(letraPresionada);
            // VERIFICACION
                if(busqueda){
                    arrayAciertos.push(letraPresionada);
                    filtrarAciertos();
                    mostrarLetra(letraPresionada);
                }
                else{
                    arrayErrores.push(letraPresionada);           
                    filtrarErrores();
                    dibujarMuñeco();
                    mostrarMensajePerdedor();
                }
            }
            else{
                Swal.fire("Se admiten solo palabras")
            }
        }
    else if(!empezarJuego){
        console.log("No es positivo");
    }    
    else{
        Swal.fire("El juego ha terminado");
        console.log(erroresFiltrados)
    }
}
// PALABRAS FILTRADAS
function filtrarAciertos(){
    for(let i = 0; i < arrayAciertos.length; i++){
        if(aciertosFiltrados.includes(arrayAciertos[i])){
        }else{
            aciertosFiltrados.push(arrayAciertos[i])
        }
    };
}
function filtrarErrores(){  
    for(let i = 0; i < arrayErrores.length; i++){
        if(erroresFiltrados.includes(arrayErrores[i])){ 
            
        }else{
            erroresFiltrados.push(arrayErrores[i])
            mostrarErrores()
        }
    }
}
// MOSTRAR PALABRAS
function mostrarLetra(letraPresionada){
    var contadorLetra = 0;
    for(let i = 0; i < textoSorteado.length; i++){
        var letraIndividual = textoSorteado[i];
        if(letraPresionada === letraIndividual){
            container.childNodes[contadorLetra].
            textContent=letraPresionada; 
        }
        contadorLetra++;
    }
    mostrarMensajeGanador()
}
function mostrarErrores(){
    var letra = document.createElement("p");
    erradas.appendChild(letra);
    letra.className = "letraE";
    letra.textContent = erroresFiltrados[erroresFiltrados.length-1];
}
// MENSAJES
function mostrarMensajePerdedor(){
    if(erroresFiltrados.length == intentos){
        Swal.fire({
            text: `Perdiste,\n intentalo de nuevo`,
            confirmButtonText: 'Ok',
          }).then((result) => {
            if (result.isConfirmed) {
                mostrarPalabraSorteada();
            }
          })
        return habilitado = false;
    }
}
function mostrarMensajeGanador(){
    var noVacio = 0;
    for(let i = 0; i < container.childNodes.length; i++){
        if(!container.childNodes[i].textContent == ""){
            noVacio++;
        }
        if(container.childNodes.length == noVacio){
            Swal.fire("GANASTE!!!");
            return habilitado = false;
        }
    }
}
function mostrarPalabraSorteada(){
    var palabraOculta = document.querySelector("#palabraOculta");
    var titulo = document.createElement("h1");
    titulo.innerHTML = `El texto sorteado era: <br> "${textoSorteado}"`;
    titulo.className = "textoMostrado";
    titulo.setAttribute("id", "textoDinamico");
    estaCreado = true;
    palabraOculta.appendChild(titulo);
    return titulo;
}

// PAGINAS
inciarJuego.addEventListener("click", clickearIniciarJuego);
agregarPalabra.addEventListener("click", mostrarAgregar);
desistir.addEventListener("click", clickearDesistir);
// AGREGAR NUEVA PALABRA
var btnAgregar = document.querySelector("#agregarEmpezar");
var btnCancelar = document.querySelector("#cancelarAgregar");
btnAgregar.addEventListener("click", agregarNuevoAlJuego);
btnCancelar.addEventListener("click", cancelarTexto);
// EMPEZAR-JUEGO
window.onload = mostrarInicio();
botonNuevoJuego.addEventListener("click", mostrarNuevoJuego);
