let marker, map;

function initMap() {
    // The location of Uluru
    const mendoza = { lat: -33.304, lng: -68.021 };
    const buenos_aires = { lat: -34.366, lng: -58.266 }
    const rio = { lat:-22.903 , lng:-43.209 }
    // The map, centered at Uluru
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: mendoza,
    });
    // The marker, positioned at Uluru
    marker = new google.maps.Marker({
        position: mendoza,
        map: map,
    });
    marker2 = new google.maps.Marker({
        position: buenos_aires,
        map: map,
    });
    marker3 = new google.maps.Marker({
        position: rio,
        map: map,
    });
}