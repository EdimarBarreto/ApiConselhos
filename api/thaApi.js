function meAconselha() {

    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json()) // Transformar a resposta em um objeto JSON

    .then(data => {
        // Atualizar o texto do elemento com o conselho recebido da API
        document.getElementById("conselho").innerText = data.slip.advice;
    })
}

// function praFuncionar() {
//     reload()
// }

// Adicionar um listener de clique ao botão "Novo Conselho"
document.getElementById("novoConselho").addEventListener("click",meAconselha)
