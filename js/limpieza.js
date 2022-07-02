function limpiarTextoDinamico(){
    document.querySelector("#textoDinamico").remove();
}
function limpiarArrays(){
    arrayErrores.splice(0);
    arrayAciertos.splice(0);
    aciertosFiltrados.splice(0);
    erroresFiltrados.splice(0);
}
function limpiarContainer(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    while(erradas.firstChild){
        erradas.removeChild(erradas.firstChild);
    }
}
function limpiarCanvas(){
    pincel.clearRect(0,0,700,450);
    pincel.fillStyle = "white";
    pincel.fillRect(250,400,200,4);
}
function limpiarTextArea(){
    textarea.value =  "";
}
