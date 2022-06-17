// localStorage.setItem("nombre", "Agustin")
// localStorage.setItem("nombre", "Micaela")

// console.log(localStorage.getItem("nombre"))

// localStorage.setItem("persona", JSON.stringify({ nombre: "Agustin", edad: 24}))
// localStorage.getItem("persona")

// JSON.stringify -> convierte un objeto/array en string
// JSON.parse -> convierte un objeto/array convertido a traves de stringify en un objeto de JavaScript

localStorage.removeItem("nombre")

sessionStorage.setItem("nombre-sesion", "Agustin")

// Cookies

document.cookie = "nombreCookie=AgustinCookie"
document.cookie = "nombreCaducidad=Nombre;expires=" + new Date(2022, 5, 20).toUTCString()
console.log(document.cookie)