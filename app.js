//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    let nomeAmigo = document.querySelector('input').value;
    //let nomeAmigo = document.getElementById('amigo').value;
    if (nomeAmigo == "") {
        alert("Por favor, insira um nome!");
    } else {
        amigos.push(nomeAmigo);
        document.querySelector('input').value = '';
        console.log(amigos);
        atualizarListaDeAmigos();
    }


}

function atualizarListaDeAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li> ${amigos[i]} </li>`;

    }


}

function sortearAmigo() {
    let amigoSorteado;
    if (amigos.length == 0) {
        alert("A lista de amigos está vazia!");
    } else {
       let indiceSorteado = Math.floor(Math.random() * amigos.length);
        //alert(indiceSorteado);
        amigoSorteado = amigos[indiceSorteado];
        document.getElementById('resultado').innerHTML = "";
        document.getElementById('resultado').innerHTML+=`O amigo secreto sorteado foi: ${amigoSorteado} `;

    }
}
