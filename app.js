// Arreglo donde se guardarán los nombres de los amigos
let amigos = [];

// ***********************************************
// Función para AGREGAR amigos
// ***********************************************
function agregarAmigo() {
  // Obtenemos el input donde el usuario escribe el nombre
  let input = document.getElementById("amigo");

  // Guardamos el valor del input y eliminamos espacios al inicio y fin
  let nombre = input.value.trim();

  // Validamos que el campo no esté vacío
  if (nombre === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }

  // Agregamos el nombre al arreglo
  amigos.push(nombre);

  // Mostramos la lista actualizada en pantalla
  mostrarLista();

  // Limpiamos el campo de texto para un nuevo ingreso
  input.value = "";
}

// ***********************************************
// Función para MOSTRAR la lista en pantalla
// ***********************************************
function mostrarLista() {
  // Obtenemos la lista <ul> donde se mostrarán los nombres
  let lista = document.getElementById("listaAmigos");

  // Limpiamos la lista antes de dibujarla nuevamente
  lista.innerHTML = "";

  // Recorremos el arreglo "amigos" y creamos un <li> por cada nombre
  amigos.forEach((amigo) => {
    let li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

// ***********************************************
// Función para SORTEAR un amigo al azar
// ***********************************************
function sortearAmigo() {
  // Revisamos que haya al menos un nombre en la lista
  if (amigos.length === 0) {
    alert("La lista está vacía, agrega al menos un nombre.");
    return;
  }

  // Calculamos un índice aleatorio
  let indice = Math.floor(Math.random() * amigos.length);

  // Elegimos el amigo correspondiente
  let elegido = amigos[indice];

  // Mostramos el resultado dentro del <ul id="resultado">
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = ""; // limpiamos antes
  let li = document.createElement("li");
  li.textContent = "🎉 El amigo secreto es: " + elegido + " 🎉";
  resultado.appendChild(li);
}