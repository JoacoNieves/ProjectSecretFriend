// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let amigos = [];

function agregarAmigo() {
    let nombre = document.getElementById("nombreamigo").value;
    if (nombre) {
        amigos.push(nombre);
        console.log("Amigos:", amigos);
    }
    
    else {
        alert("Por favor ingresa un nombre valido")

    }
}

// Se muestran los nombres en html
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // limpiamos la lista..

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function agregarAmigo() {
    const input = document.getElementById("nombreamigo");
    const nombre = input.value.trim();

    if (nombre) {
        amigos.push(nombre);
        input.value = ""; // se limpia el input
        actualizarLista(); // se muestra en la pantalla
    } else {
        alert("Por favor ingresa un nombre válido");
    }
}

function sortearAmigo() {
    if (amigos.length < 1) { //Si la cantidad de amigos es menor a 1, es imposible realizar el sorteo
        alert("No hay amigos para sortear.");
        return;
    }

    const indice = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indice];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    const li = document.createElement("li");
    li.textContent = `Tu amigo secreto es: ${amigoSorteado}`;
    resultado.appendChild(li);
}


