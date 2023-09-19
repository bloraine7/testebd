function cadastrarpessoa(){
    let nome = document.querySelector("#nome").value 
    localStorage.setItem("nome",nome)
    window.location.href = "bemvindo.html"
}
function cancelarpessoa(){
    localStorage.removeItem("nome")
    document.querySelector("p").innerHTML = `Inscrição Cancelada 🤯🔫`
}