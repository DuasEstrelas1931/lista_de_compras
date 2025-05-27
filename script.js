import { criarItemDaLista } from "./scripts/criarItemDaLista.js";
import verificarListaVazia from "./scripts/verificarListaVazia.js";

const listaDeCompras = document.getElementById("lista-de-compras");
const botaoAdcionar = document.getElementById('adicionar-item');

botaoAdcionar.addEventListener("click", (event) => {
    event.preventDefault();

    const itensDaLista = criarItemDaLista();   
    listaDeCompras.appendChild(itensDaLista);  
    
    verificarListaVazia(listaDeCompras);
    
});

verificarListaVazia(listaDeCompras);
