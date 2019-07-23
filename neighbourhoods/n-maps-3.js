var geocoder = new google.maps.Geocoder();
var map;
//var neighbourhoodPolygon;
var nmarkers = [];
var npolygons = [];

var markerImage = new google.maps.MarkerImage('images/marker.png',

            // This marker is 129 pixels wide by 42 pixels tall.

            new google.maps.Size(129, 42),

            // The origin for this image is 0,0.

            new google.maps.Point(0,0),

            // The anchor for this image is the base of the flagpole at 18,42.

            new google.maps.Point(18, 42)
        );








function initializeMap(destination, destinationObj) {
    console.log(destination)
   
    map = new google.maps.Map(document.getElementById('map_canvas'), {
        //center: destination,
        zoom: destinationObj.zoom,
        mapTypeId: 'roadmap',
        mapTypeId: google.maps.MapTypeId.ROADMAP, 
        panControl: false,
        mapTypeControl: false,
        streetViewControl:false,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.MEDIUM,
            position: google.maps.ControlPosition.LEFT_TOP
        }
    });


    geocoder.geocode( { 'address': destination}, function(pos, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            //console.log (pos[0].geometry.location.k + " " + pos[0].geometry.location.B)
            map.setCenter(pos[0].geometry.location);
            map.panBy(destinationObj.panX, destinationObj.panY);
            
        } 
    });


    google.maps.event.addListenerOnce(map, 'idle', function(){
    // do something only the first time the map is loaded
        
        addNeighbourhoodPins();
        addNeighbourhoodPolygon();
    });


    
}


var addNeighbourhoodPins = function(){
    
    
    //for (var nhoods in neighbourhoods) {
    $.each(neighbourhoodContent, function(i, nhoods) {

        if (nhoods.hasContent) {

            var markerLabel = new MarkerWithLabel({
                position: nhoods.center,
                draggable: false,
                map: map,
                icon: markerImage,
                labelContent: nhoods.name,
                labelAnchor: new google.maps.Point(40, 32),
                labelClass: "labels", // the CSS class for the label
                labelStyle: {opacity: 1.0}
            });

            nmarkers.push(markerLabel);

            var name = nhoods.name;
            var loc = nhoods.center;

            google.maps.event.addListener(markerLabel, 'click', function() {
            
                //openNeighbourhood(name);
                //addNeighbourhoodPolygon(loc);
                console.log(name);
            });

        }
    })
        
}


var addNeighbourhoodPolygon = function(){
    $.each(neighbourhoodContent, function(i, nhoods) {

        if (nhoods.hasContent) {
            console.log(nhoods.polygon)
            var neighbourhoodPolygon = new google.maps.Polygon({
                paths: nhoods.polygon,
                strokeColor: '#555555',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#999999',
                fillOpacity: 0.3
            });

            npolygons.push(neighbourhoodPolygon);
            neighbourhoodPolygon.setMap(map);

        } else {

        }
    })
}

var mapCenterNeighburhood = function(location){
    map.panTo(location);
    map.panBy(-100, 0)
    
}


function setMapOnAll(map) {
  for (var i = 0; i < nmarkers.length; i++) {
    nmarkers[i].setMap(map);
  }
}



function showMarkers() {
  setMapOnAll(map);
}

function clearMarkers() {
  setMapOnAll(null);
}

function setPolygons(map) {
for (var i = 0; i < npolygons.length; i++) {
    npolygons[i].setMap(map);
  }
}

function showPolygons(){
    setPolygons(map)
}

function clearPolygons(){
    setPolygons(null)
}