
function abrirModal() {
    document.getElementById("meuModal").style.display = "block";
}

function fecharModal() {
    document.getElementById("meuModal").style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("meuModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function adicionarComentario() {
    var novoComentario = document.getElementById("comentarioInput").value;
   
    document.getElementById("comentarioInput").value = "";
    
    var novoElemento = document.createElement("p");
    
    novoElemento.textContent = novoComentario;
    
    document.getElementById("listaComentarios").appendChild(novoElemento)
}