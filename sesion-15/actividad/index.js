const nombre = "Agustin"
const apellido = "Waizman"

const persona = {
    nombre: "Agustin",
    apellido: "Waizman"
}

sessionStorage.setItem("persona", JSON.stringify(persona))
localStorage.setItem("persona", JSON.stringify(persona))

document.cookie = "persona=" + persona