let marker, map;

function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.031 };
    // The map, centered at Uluru
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru,
    });
    // The marker, positioned at Uluru
    marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}

function geoPosiciona(){
    if (navigator.geolocation){
        const geoLoc = navigator.geolocation
        const options = { timeout: 60000 }
        const watchPos = geoLoc.watchPosition(centraMapa, onError, options)
    } else{
        alert("tu navegador no admite geolocalizacion")
    }
}
function centraMapa(position){
    const nuevaPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }
    console.log(nuevaPos)
    marker.setPosition(nuevaPos)
    map.setCenter(nuevaPos)
}
function onError(error){
    console.log("algo salió mal...")
    console.error(error)
}



geoPosiciona()