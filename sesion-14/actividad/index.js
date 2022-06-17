const boton = document.querySelector("#btn")

boton.addEventListener("click", () => {
    alert("Click en el boton")
})

$(() => {
    $("#btn-jquery").click(() => {
        alert("Hola, estoy utilizando JQuery")
    })
})