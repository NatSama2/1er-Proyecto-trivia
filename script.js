let name = "";
document.getElementById("userInput").addEventListener("input", function(e) {
  //el input toma el valor de lo que el usuario escribe//
  name = e.target.value;
});
//name toma el valor de lo que escribe el usuario en el input//

document.getElementById("buttonNombre").addEventListener("click", function() {
  document.getElementById("saludo").innerHTML =
    "¡Hola " + name + ", para comenzar selecciona el nivel.";
});
//innerHTML es para que del js se escriba en el html//

//mostras el nivel de juego//
function mostrar() {
  document.getElementById("level").style.display = "block";
}

function ocultarBienvenida() {
  document.getElementById("bienvenida").style.display = "none";
}

//funcion para bloquear ingreso si no se llena el userInput//
function ingresarNombre() {
  if (name == "") {
    alert("Ingresa tu nombre, por favor")
    document.getElementById("saludo").style.display = "none";
  } else {
    mostrar();
    ocultarBienvenida();
    document.getElementById("saludo").style.display = "block";
  }
}
