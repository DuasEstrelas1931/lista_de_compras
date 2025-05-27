const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");

function verificarListaVazia(listaDeCompras) {
    const itensDaLista = listaDeCompras.querySelectorAll("li");
    if (itensDaLista.length === 0) {
        mensagemListaVazia.style.display = "block";
        mensagemListaVazia.style.background = "red"; 
    }else {
        mensagemListaVazia.style.display = "none";
    }
}

export default verificarListaVazia;