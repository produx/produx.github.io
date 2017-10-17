var map;
var loc = {lat: 40.75667953491211, lng: -73.9864730834961}

function initializeMap() {
    map = new google.maps.Map(document.getElementById('map_canvas'), {
        center: loc,
        zoom: 14,
        mapTypeId: 'roadmap',
        mapTypeId: google.maps.MapTypeId.ROADMAP, 
        panControl: false,
        mapTypeControl: false,
        streetViewControl:false,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.MEDIUM,
            position: google.maps.ControlPosition.RIGHT_TOP
        },
    });
    
}