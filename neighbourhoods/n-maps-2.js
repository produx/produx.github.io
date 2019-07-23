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
            position: google.maps.ControlPosition.RIGHT_TOP
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
                labelStyle: {opacity: 0.9}
            });

            nmarkers.push(markerLabel);

            var name = nhoods.name;
            var loc = nhoods.center;
            var num = i;

            google.maps.event.addListener(markerLabel, 'click', function() {
                console.log(name);
                highlightSelectedPolygon(num);
            });

        }
    })
        
}


var addNeighbourhoodPolygon = function(){
    $.each(neighbourhoodContent, function(i, nhoods) {

        if (nhoods.hasContent) {
            //console.log(nhoods.polygon)
            var neighbourhoodPolygon = new google.maps.Polygon({
                paths: nhoods.polygon,
                strokeColor: '#555555',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#999999',
                fillOpacity: 0.35
            });

            var name = nhoods.name;
            var id = nhoods.nid
            var num = i;

            npolygons.push(neighbourhoodPolygon);
            neighbourhoodPolygon.setMap(map);

            google.maps.event.addListener(neighbourhoodPolygon, 'click', function() {
                console.log(name + " " + id);
                highlightSelectedPolygon(num);
            });

        } else {

        }
    })
}

var highlightSelectedPolygon = function(num){
    $.each(npolygons, function(i, np) {
        np.setOptions({fillColor: '#999999', strokeColor: '#555555'});
    });
    npolygons[num].setOptions({fillColor: '#FF0000', strokeColor: '#FF0000'})
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