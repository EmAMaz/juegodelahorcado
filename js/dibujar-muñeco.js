function dibujarMuñeco(){
    if(erroresFiltrados.length == 1){
        pincel.fillStyle = "white";
        pincel.fillRect(280,160,4,240);
    }
    else if(erroresFiltrados.length == 2){
        pincel.fillStyle = "white";
        pincel.fillRect(280,160,100,4);
    }
    else if(erroresFiltrados.length == 3){
        pincel.fillStyle = "white";
        pincel.fillRect(380,160,4,40);
    }
    // cabeza
    else if(erroresFiltrados.length == 4){
        pincel.fillStyle = "white";
        pincel.beginPath();
        pincel.arc(382,210,20,0,2*3.14);
        pincel.fill()
        pincel.fillStyle = "#ff763b";
        pincel.beginPath();
        pincel.arc(382,210,16,0,2*3.14);
        pincel.fill()
    }
    // cuerpo
    else if(erroresFiltrados.length == 5){
        pincel.fillStyle = "white";
        pincel.fillRect(380,230,4,74);
    }
    // mano izq
    else if(erroresFiltrados.length == 6){
        pincel.lineWidth = 4;
        pincel.strokeStyle = "white";
        pincel.beginPath();
        pincel.moveTo(350, 280);
        pincel.lineTo(382, 228);
        pincel.stroke();
        pincel.fill();
    }
    // mano der
    else if(erroresFiltrados.length == 7){
        pincel.lineWidth = 4;
        pincel.strokeStyle = "white";
        pincel.beginPath();
        pincel.moveTo(410, 280);
        pincel.lineTo(382, 228);
        pincel.stroke();
        pincel.fill();
    }
    // pie izq
    else if(erroresFiltrados.length == 8){
        pincel.lineWidth = 4;
        pincel.strokeStyle = "white";
        pincel.beginPath();
        pincel.moveTo(350, 370);
        pincel.lineTo(382, 300);
        pincel.stroke();
        pincel.fill();
    }
    // pie der
    else if(erroresFiltrados.length == 9){
        pincel.lineWidth = 4;
        pincel.strokeStyle = "white";
        pincel.beginPath();
        pincel.moveTo(410, 370);
        pincel.lineTo(382, 300);
        pincel.stroke();
        pincel.fill();
    }
}