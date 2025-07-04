const inputItem = document.getElementById('input-item');
import gerarDiaDaSemana from "./gerarDiaDaSemana.js";

let contador = 0;

export function criarItemDaLista() {
     
    if (inputItem.value === "") {
        alert("Por favor, insira um item!");
        return
    }

    const itemDaLista = document.createElement("li");
    const conteinerItemDaLista = document.createElement("div");
    conteinerItemDaLista.classList.add("lista-item-container");    
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "checkbox-" + contador++;    
    const nomeItem = document.createElement("p");
    nomeItem.innerText = inputItem.value;

    inputCheckbox.addEventListener("click", () => {
        if (inputCheckbox.checked) {
            nomeItem.style.textDecoration = "line-through";
        }else {
            nomeItem.style.textDecoration = "none";
        }
    })

    conteinerItemDaLista.appendChild(inputCheckbox);
    conteinerItemDaLista.appendChild(nomeItem);
    
    itemDaLista.appendChild(conteinerItemDaLista);
    const dataCompleta = gerarDiaDaSemana();
    
    const itemData = document.createElement("p");
    itemData.classList.add("texto-data");
    itemData.innerText = dataCompleta;    
    itemDaLista.appendChild(itemData);

    return itemDaLista;

    
}