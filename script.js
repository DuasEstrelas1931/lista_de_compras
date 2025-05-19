const inputItem = document.getElementById('input-item');
const listaDeCompras = document.getElementById("lista-de-compras");
const botaoAdcionar = document.getElementById('adicionar-item');
let contador = 0;
botaoAdcionar.addEventListener("click", (e) => {
    e.preventDefault();
    if (inputItem.value === "") {
        e.view.alert("Por favor, insira um item!");
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

    conteinerItemDaLista.appendChild(inputCheckbox);
    conteinerItemDaLista.appendChild(nomeItem);
    
    itemDaLista.appendChild(conteinerItemDaLista);
    listaDeCompras.appendChild(itemDaLista);

   
})
