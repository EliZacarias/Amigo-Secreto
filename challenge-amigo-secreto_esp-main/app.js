// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Lista para almacenar los nombres de los amigos
let listaAmigos = [];
// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    // Validar que el campo de texto no esté vacío
    if (nombre === '') {
        alert('Por favor, ingrese un nombre válido.');
        return;
    }

    // Agregar el nombre a la lista y limpiar el campo de texto
    listaAmigos.push(nombre);
    input.value = '';

    // Actualizar la visualización de la lista
    actualizarListaAmigos();
}

// Función para actualizar la visualización de la lista de amigos
function actualizarListaAmigos() {
    const listaElement = document.getElementById('listaAmigos');
    listaElement.innerHTML = '';

    listaAmigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaElement.appendChild(li);
    });
}

// Función para sortear un amigo de la lista
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('La lista de amigos está vacía. Agregue al menos un nombre.');
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceAleatorio];

    // Mostrar el nombre sorteado en la página
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `<li>${amigoSorteado}</li>`;
}