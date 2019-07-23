var geocoder = new google.maps.Geocoder();

var map;
var neighbourhoodPolygon; 

var neighbourhoods = {
    akasaka : {
        name: "Akasaka",
        nid: "1645687",
        center: {lat: 35.6794862140995, lng: 139.734433905381}
    }, 

    asakusa : {
        name: "Asakusa",
        nid: "1645688",
        center: {lat: 35.7252128673964, lng: 139.799428428791}
    }, 

    ginza : {
        name: "Ginza",
        nid: "1645689",
        center: {lat: 35.6712935174737, lng: 139.764315704409}
    },

    nihonbashi : {
        name: "Nihonbashi",
        nid: "1645692",
        center: {lat: 35.6841591001463, lng: 139.776211321046}
    },

    shinjuku : {
        name: "Shinjuku",
        nid: "1645686",
        center: {lat: 35.692248403859, lng: 139.69102634108}
    }
}






function initializeMap(destination) {
    
   
    map = new google.maps.Map(document.getElementById('map_canvas'), {
        center: {lat: 35.675, lng: 139.76},
        zoom: 12,
        mapTypeId: 'roadmap',
        mapTypeId: google.maps.MapTypeId.ROADMAP, 
        panControl: false,
        mapTypeControl: false,
        streetViewControl:false,
        zoomControl: false,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.MEDIUM,
            position: google.maps.ControlPosition.RIGHT_TOP
        }
    });


    /*geocoder.geocode( { 'address': destination}, function(pos, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            //console.log (pos[0].geometry.location.k + " " + pos[0].geometry.location.B)
            map.setCenter(pos[0].geometry.location);
            
        } 
    });*/


    google.maps.event.addListenerOnce(map, 'idle', function(){
    // do something only the first time the map is loaded
        randomMarkers();
        //addNeighbourhoodPin();
        addNeighbourhoodPins();
    });

    neighbourhoodPolygon = new google.maps.Circle({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: map,
      radius: 2000
    });


    
}




var randomMarkers = function(){
    var bounds = map.getBounds();

    var southWest = bounds.getSouthWest();

    var northEast = bounds.getNorthEast();

    var lngSpan = northEast.lng() - southWest.lng();
    var latSpan = northEast.lat() - southWest.lat();

    var markers = [];

    // Create some markers
    for (var i = 1; i < 100; i++) {

        var location = new google.maps.LatLng(southWest.lat() + latSpan * Math.random(), southWest.lng() + lngSpan * Math.random());

        var marker = new google.maps.Marker({
            position: location,
            map: map, 
            icon: "map-pin-red.png"
        });

        markers.push(marker);
    }  
}

var addNeighbourhoodPin = function(){
    var bounds = map.getBounds();

    var southWest = bounds.getSouthWest();

    var northEast = bounds.getNorthEast();

    var lngSpan = northEast.lng() - southWest.lng();
    var latSpan = northEast.lat() - southWest.lat();

    var location = new google.maps.LatLng(southWest.lat() + latSpan * Math.random(), southWest.lng() + lngSpan * Math.random());

        var marker = new google.maps.Marker({
            position: location,
            map: map,
            icon: "neighbourhood_icon.png"
        });

        marker.addListener('click', function() {
            openNeighbourhood();

            addNeighbourhoodPolygon(location);

            //addNeighbourhoodShape(location);

        });


        


}

var addNeighbourhoodShape = function(location){
    neighbourhoodCircle = new google.maps.Circle({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: map,
      center: location,
      radius: 2000
    });
}

var addNeighbourhoodPins = function(){
    
    var nmarkers = [];
    //for (var nhoods in neighbourhoods) {
    $.each(neighbourhoods, function(i, nhoods) {
        var marker = new google.maps.Marker({
            position: nhoods.center,
            map: map, 
            icon: "neighbourhood_icon.png"
        });

        console.log(nhoods)
        nmarkers.push(marker);

        var name = nhoods.name;
        var loc = nhoods.center;

        google.maps.event.addListener(marker, 'click', function() {
            
            openNeighbourhood(name);
            addNeighbourhoodPolygon(loc);
            console.log(name);
        });

    })
        
}

var addNeighbourhoodPolygon = function(location){
    //neighbourhoodPolygon.setMap(null);
    neighbourhoodPolygon.setVisible(true);
    neighbourhoodPolygon.setCenter(location);
    
}






