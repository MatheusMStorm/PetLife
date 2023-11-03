// Definimos a tag script depois da definição do body no HTML

var elementosDuvida = document.querySelectorAll(".duvida")

elementosDuvida.forEach(function(duvida) {
    duvida.addEventListener("click", function () {
        duvida.classList.toggle("ativa")
    })
})