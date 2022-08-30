const inputTarefa = document.getElementById("tarefa-nova");
let idTarefa = 0;

function existeTarefa(valores, nomeTarefa) {
    for (let index = 0; index < valores.length; index++) {
        const element = valores[index];
        if (element.firstChild.innerHTML === nomeTarefa) {
            return true;
        }
    }
    return false;
}

function concluir(itemId) {
    const tarefaSelecionada = document.getElementById(itemId);
    // if (!tarefaSelecionada.classList.contains("concluida")) {
    //     tarefaSelecionada.classList.add("concluida")
    // }
    // else{
    //     tarefaSelecionada.classList.remove("concluida")
    // }    
    tarefaSelecionada.classList.toggle("concluida")
}

function excluir(itemId){
    const tarefaSelecionada = document.getElementById(itemId);    
    tarefaSelecionada.remove();
}

function adicionarTarefa() {
    const texto = inputTarefa.value.trim();
    if (texto !== "") {

        const elementos = document.getElementById('lista').getElementsByTagName('li');

        if (existeTarefa(elementos, texto)) {
            alert("Essa tarefa já foi adicionada.")
        }
        else {
            const item = document.createElement("li");
            idTarefa++;
            item.id = idTarefa;
            item.innerHTML = `<span onclick="concluir(${idTarefa})">${inputTarefa.value}</span>
            <button class="excluir" onclick="excluir(${idTarefa})">x</button>`;

            const lista = document.querySelector("#lista");
            lista.appendChild(item);
        }
    }
    else {
        alert("Não é permitido adicionar uma tarefa sem nome.")
    }

    inputTarefa.value = "";
    inputTarefa.focus();
}

document.querySelector("#btn-adicionar").addEventListener("click", adicionarTarefa);

function limparLista() {
    const lista = document.querySelector("#lista");
    lista.innerHTML = "";
    inputTarefa.focus();
}

document.querySelector(".bt-azul").addEventListener("click", limparLista)

//Para casa:
// 3. Marcar tarefa como concluída
// 4. Excluir tarefa ao clicar no botão