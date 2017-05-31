var map;

function initialize() {
    var myLatLng = new google.maps.LatLng(-10.271198, -48.331624);

    map = new google.maps.Map(document.getElementById("mapa"), {
        zoom: 14,
        center: myLatLng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
    });

    // Create a marker and set its position.
    var marker = new google.maps.Marker({
        map: map,
        position: myLatLng,
        title: 'Localização 2017',
    });

    var infowindow = new google.maps.InfoWindow(), marker;

    google.maps.event.addListener(marker, 'click', (function (marker, i) {
        return function () {
            infowindow.setContent("<b>Católica</b>.");
            infowindow.open(map, marker);
        }
    })(marker));
}

initialize();



