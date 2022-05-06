var pantalla = document.querySelector("#ahorcado");
var pincel = pantalla.getContext("2d");


function patibulo(){
    pincel.fillStyle = "black"
    pincel.beginPath();
    pincel.moveTo(100,220);
    pincel.lineTo(20,250);
    pincel.lineTo(180,250);
    pincel.fill();
    pincel.fillRect(95,-150,10,400);
    pincel.fillRect(95,0,200,10);
    pincel.fillRect(295,0,10,50);
}
function cabeza(){
    pincel.fillStyle = "black"
    pincel.beginPath();
    pincel.arc(300,50,28,0,2*3.14);
    pincel.fill();
}

function cuerpo(){
    pincel.fillStyle = "black"
    pincel.fillRect(295,38,10,130);
}

function brazoIzquierdo(){
    pincel.fillStyle = "black"
    pincel.beginPath();
    pincel.moveTo(305,100);
    pincel.lineTo(255,80);
    pincel.lineTo(255,90);
    pincel.lineTo(305,110);
    pincel.fill();
}

function brazoDerecho(){
    pincel.fillStyle = "black"
    pincel.beginPath();
    pincel.moveTo(305,97);
    pincel.lineTo(345,80);
    pincel.lineTo(345,90);
    pincel.lineTo(305,108);
    pincel.fill();
}

function piernaIzquierda(){
    pincel.fillStyle = "black"
    pincel.beginPath();
    pincel.moveTo(300,160);
    pincel.lineTo(240,190);
    pincel.lineTo(240,200);
    pincel.lineTo(300,170);
    pincel.fill();
}

function piernaDerecha(){
    pincel.fillStyle = "black"
    pincel.beginPath();
    pincel.moveTo(300,160);
    pincel.lineTo(360,190);
    pincel.lineTo(360,200);
    pincel.lineTo(300,170);
    pincel.fill();
}
