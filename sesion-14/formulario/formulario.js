const f = document.getElementById("formulario")

console.log(f)

f.addEventListener("submit", evento => {
    alert(`Tu formulario fue enviado exitosamente, ${document.getElementById("nombre").value}!!`)
    console.log(evento)
    evento.preventDefault()
})