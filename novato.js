//respuestas pregunta 1//
let score = 0

let misty = document.getElementById("misty").addEventListener("click", function() {
  document.getElementById("resultado").innerHTML = "INCORRECTO";
  document.getElementById("misty").style.backgroundColor = "red";
  document.getElementById("misty").style.color = "white";
  document.getElementById("gary").disabled = true;
  document.getElementById("brock").disabled = true;
  document.getElementById("misty").disabled = true;
  score = score + 0;
  document.getElementById("scorePrueba").innerHTML = score;
  mostrarSiguiente();
});

let gary = document.getElementById("gary").addEventListener("click", function() {
  document.getElementById("resultado").innerHTML = "CORRECTO";
  document.getElementById("gary").style.backgroundColor = "green";
  document.getElementById("gary").style.color = "white";
  document.getElementById("misty").disabled = true;
  document.getElementById("brock").disabled = true;
  document.getElementById("gary").disabled = true;
  score = score + 1;
  document.getElementById("scorePrueba").innerHTML = score;
  mostrarSiguiente();
});

let brock = document.getElementById("brock").addEventListener("click", function() {
  document.getElementById("resultado").innerHTML = "INCORRECTO";
  document.getElementById("brock").style.backgroundColor = "red";
  document.getElementById("brock").style.color = "white";
  document.getElementById("gary").disabled = true;
  document.getElementById("misty").disabled = true;
  document.getElementById("brock").disabled = true;
  score = score + 0;
  document.getElementById("scorePrueba").innerHTML = score;
  mostrarSiguiente();
});

//respuestas pregunta 2//
let bici = document.getElementById("bici").addEventListener("click", function() {
  document.getElementById("resultado2").innerHTML = "CORRECTO";
  document.getElementById("bici").style.backgroundColor = "green";
  document.getElementById("bici").style.color = "white";
  document.getElementById("moto").disabled = true;
  document.getElementById("patineta").disabled = true;
  document.getElementById("bici").disabled = true;
  score = score + 1;
  document.getElementById("scorePrueba").innerHTML = score;
  mostrarTerminar1();
});

let moto = document.getElementById("moto").addEventListener("click", function() {
  document.getElementById("resultado2").innerHTML = "INCORRECTO";
  document.getElementById("moto").style.backgroundColor = "red";
  document.getElementById("moto").style.color = "white";
  document.getElementById("bici").disabled = true;
  document.getElementById("patineta").disabled = true;
  document.getElementById("moto").disabled = true;
  score = score + 0;
  document.getElementById("scorePrueba").innerHTML = score;
  mostrarTerminar1();
});

let patineta = document.getElementById("patineta").addEventListener("click", function() {
  document.getElementById("resultado2").innerHTML = "INCORRECTO";
  document.getElementById("patineta").style.backgroundColor = "red";
  document.getElementById("patineta").style.color = "white";
  document.getElementById("bici").disabled = true;
  document.getElementById("moto").disabled = true;
  document.getElementById("patineta").disabled = true;
  score = score + 0;
  document.getElementById("scorePrueba").innerHTML = score;
  mostrarTerminar1();
});

//funciones boton siguente//
function mostrarPregunta2() {
  document.getElementById("pregunta2").style.display = "block";
}

function mostrarSiguiente() {
  document.getElementById("botonSiguiente").style.display = "block";
}

function ocultarPregunta1() {
  document.getElementById("pregunta1").style.display = "none";
}

//funcion alerta//
function alerta1() {
  alert("Haz terminado la poké trivia!!")
}

//mostrar terminar//
function mostrarTerminar1() {
  document.getElementById("terminar1").style.display = "block";
}

function ocultarPregunta2() {
  document.getElementById("pregunta2").style.display = "none";
}

function mostrarReiniciar1() {
  document.getElementById("reiniciar1").style.display = "block";
}