//respuestas pregunta 3//
let score = 0

let palkia = document.getElementById("palkia").addEventListener("click", function() {
  document.getElementById("resultado3").innerHTML = "INCORRECTO";
  document.getElementById("palkia").style.backgroundColor = "red";
  document.getElementById("palkia").style.color = "white";
  document.getElementById("mew").disabled = true;
  document.getElementById("arceus").disabled = true;
  document.getElementById("palkia").disabled = true;
  score = score + 0;
  document.getElementById("scorePrueba").innerHTML = score;
  mostrarSiguiente2();
});

let mew = document.getElementById("mew").addEventListener("click", function() {
  document.getElementById("resultado3").innerHTML = "INCORRECTO";
  document.getElementById("mew").style.backgroundColor = "red";
  document.getElementById("mew").style.color = "white";
  document.getElementById("palkia").disabled = true;
  document.getElementById("arceus").disabled = true;
  document.getElementById("mew").disabled = true;
  score = score + 0;
  document.getElementById("scorePrueba").innerHTML = score;
  mostrarSiguiente2();
});

let arceus = document.getElementById("arceus").addEventListener("click", function() {
  document.getElementById("resultado3").innerHTML = "CORRECTO";
  document.getElementById("arceus").style.backgroundColor = "green";
  document.getElementById("arceus").style.color = "white";
  document.getElementById("palkia").disabled = true;
  document.getElementById("mew").disabled = true;
  document.getElementById("arceus").disabled = true;
  score = score + 1;
  document.getElementById("scorePrueba").innerHTML = score;
  mostrarSiguiente2();
});

//respuestas pregunta 4//
let poliwhirt = document.getElementById("poliwhirt").addEventListener("click", function() {
  document.getElementById("resultado4").innerHTML = "CORRECTO";
  document.getElementById("poliwhirt").style.backgroundColor = "green";
  document.getElementById("poliwhirt").style.color = "white";
  document.getElementById("pikachu").disabled = true;
  document.getElementById("charizard").disabled = true;
  document.getElementById("poliwhirt").disabled = true;
  score = score + 1;
  document.getElementById("scorePrueba").innerHTML = score;
  mostrarTerminar2();
});

let pikachu = document.getElementById("pikachu").addEventListener("click", function() {
  document.getElementById("resultado4").innerHTML = "INCORRECTO";
  document.getElementById("pikachu").style.backgroundColor = "red";
  document.getElementById("pikachu").style.color = "white";
  document.getElementById("poliwhirt").disabled = true;
  document.getElementById("charizard").disabled = true;
  document.getElementById("pikachu").disabled = true;
  score = score + 0;
  document.getElementById("scorePrueba").innerHTML = score;
  mostrarTerminar2();
});

let charizard = document.getElementById("charizard").addEventListener("click", function() {
  document.getElementById("resultado4").innerHTML = "INCORRECTO";
  document.getElementById("charizard").style.backgroundColor = "red";
  document.getElementById("charizard").style.color = "white";
  document.getElementById("poliwhirt").disabled = true;
  document.getElementById("pikachu").disabled = true;
  document.getElementById("charizard").disabled = true;
  score = score + 0;
  document.getElementById("scorePrueba").innerHTML = score;
  mostrarTerminar2();
});

//funciones boton siguente//
function mostrarPregunta4() {
  document.getElementById("pregunta4").style.display = "block";
}

function mostrarSiguiente2() {
  document.getElementById("botonSiguiente2").style.display = "block";
}

function ocultarPregunta3() {
  document.getElementById("pregunta3").style.display = "none";
}
//funcion alerta//
function alerta() {
  alert("Haz terminado la poké trivia!!")
}

//mostrar terminar//
function mostrarTerminar2() {
  document.getElementById("terminar2").style.display = "block";
}

function ocultarPregunta4() {
  document.getElementById("pregunta4").style.display = "none";
}

function mostrarReiniciar2() {
  document.getElementById("reiniciar2").style.display = "block";
}
