var map;
var markers = []
var hotels = []
var selectedPin = -1;
var loc = {lat: 48.8328, lng: 2.3966}
var distanceService = new google.maps.DistanceMatrixService;
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var distanceCircle;
var transitLayer;
var markerImage = new google.maps.MarkerImage('i/pin.png',
    // This marker is 129 pixels wide by 42 pixels tall.
    new google.maps.Size(0, 0),

    // The origin for this image is 0,0.
    new google.maps.Point(0,0),

    // The anchor for this image is the base of the flagpole at 18,42.
    new google.maps.Point(20, 0)
);
var markersHotels = [];
var markersHotelsUnavailable = [];
var markersHotelsNotMatch = [];

var initializeMap = function() {
    map = new google.maps.Map(document.getElementById('map_canvas'), {
        center: loc,
        zoom: 15,
        mapTypeId: 'roadmap',
        mapTypeId: google.maps.MapTypeId.ROADMAP, 
        panControl: false,
        mapTypeControl: false,
        streetViewControl:true,
        fullscreenControl: false,
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_BOTTOM
        },
        streetViewControlOptions: {
            position: google.maps.ControlPosition.RIGHT_BOTTOM
        }
    });

    directionsDisplay = new google.maps.DirectionsRenderer({suppressMarkers: true, preserveViewport: true});
    directionsDisplay.setMap(map);

    transitLayer = new google.maps.TransitLayer();
    transitLayer.setMap(map);

    google.maps.event.addListenerOnce(map, 'idle', function(){
          
         addPOIPin();
         setTimeout(addHotelPins(), 10000);

    });

    google.maps.event.addListener(map, 'zoom_changed', function() {
        var zoom = map.getZoom();
        console.log(zoom);

        if (zoom >= 15){
           for (a = 0; a < markersHotels.length; a++) {
                markersHotels[a].labelClass = "map-pin-dot-available-large";
            } 
            for (b = 0; b < markersHotelsUnavailable.length; b++) {
                markersHotelsUnavailable[b].labelClass = "map-pin-dot-unavailable-large";
            }
        } else {
            for (a = 0; a < markersHotels.length; a++) {
                markersHotels[a].labelClass = "map-pin-dot-available";
            } 
            for (b = 0; b < markersHotelsUnavailable.length; b++) {
                markersHotelsUnavailable[b].labelClass = "map-pin-dot-unavailable";
            }
        }

    });
    
}

var addPOIPin = function(){

    var icon = "i/poi-pin.png";

    marker = new google.maps.Marker({
        position: loc,
        animation: google.maps.Animation.DROP,
        map: map, 
        icon: icon
    });

    google.maps.event.addListener(marker, 'click', function() {
        $("#hotel-card").hide(); 
        $("#poi-card").show();       
    });

    $("#poi-card").delay(750).slideDown();
    

    distanceCircle = new google.maps.Circle({
            strokeColor: '#666666',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#999999',
            fillOpacity: 0.1,
            map: map,
            center: loc,
            radius: 0
    });
}








var addHotelPins = function(){
    console.log("fetching hotel data")
   
    hotels = hotelData.properties;
    //console.log("length " + hotelData.length)
    $.each(hotels, function(i, hotel){
        //console.log(hotel.loc);
        var latlng = hotel.loc.split(" ");
        var latlngObj = {lat:parseFloat(latlng[1]), lng:parseFloat(latlng[0])}
        //console.log(latlngObj)
        var icon; 

        var r = Math.floor((Math.random() * 10) + 1);
        if (r >=8) {
            var markerLabel = new MarkerWithLabel({
                position: latlngObj,
                draggable: false,
                map: map,
                icon: markerImage,
                labelContent: "<div>X</div>",
                //labelAnchor: new google.maps.Point(40, 32),
                labelClass: "map-pin-dot-unavailable-large" // the CSS class for the label
            });
            markersHotelsUnavailable.push(markerLabel);
        } else {

            var price = Math.floor(Math.random()*(400-50+1)+50);
            var markerLabel = new MarkerWithLabel({
                position: latlngObj,
                draggable: false,
                map: map,
                icon: markerImage,
                labelContent: "<div><span class='price'>$" + price + "</span></div>",
                //labelAnchor: new google.maps.Point(40, 32),
                labelClass: "map-pin-dot-available-large" // the CSS class for the label
            });
            markersHotels.push(markerLabel);
        }
        var infowindow = new google.maps.InfoWindow({
            content: hotel.name
        });

        google.maps.event.addListener(markerLabel, 'mouseover', function() {
            infowindow.open(map, markerLabel);
        });

        google.maps.event.addListener(markerLabel, 'mouseout', function() {
            infowindow.close();
        });

        google.maps.event.addListener(markerLabel, 'click', function() {
            
            /*if (selectedPin != -1){
                markers[selectedPin].setIcon("i/base_blue_18.png");
            }
            selectedPin = num; 
            markers[num].setIcon('i/base_blue.png');*/

            hidePOICard();
            showHotelCard(hotel.name, latlngObj);
            displayRoute(latlngObj);

        });


    });
}

var hidePOICard = function(){
    $("#poi-card").hide();
}

var showHotelCard = function(name, loc){
    $("#hotel-card .name").text(name);
    $("#hotel-card").show();

    var distance = getDistance(loc)
    //console.log(distance);
}

function displayRoute(hotelLoc) {

 var request = {
    origin: hotelLoc,
    destination: loc,
    travelMode: google.maps.TravelMode["WALKING"]
  };
  directionsService.route(request, function(response, status) {
    //console.log(response)
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);

    }
  });
}

var getDistance = function(hotelLoc) {
    distanceService.getDistanceMatrix({
        origins: [hotelLoc],
        destinations: [loc],
        travelMode: google.maps.TravelMode["WALKING"],
        unitSystem: google.maps.UnitSystem.METRIC,
        avoidHighways: false,
        avoidTolls: false
    }, function(response, status) {
        if (status !== google.maps.DistanceMatrixStatus.OK) {
            alert('Error was: ' + status);
        } else {
            console.log(response.rows[0].elements[0])
            var distance = response.rows[0].elements[0].distance.text;
            var duration = response.rows[0].elements[0].duration.text;
            $("#hotel-card .distance").html("<i class='material-icons'>directions_walk</i>" + duration + " (" + distance + ")");
        }

    })
}
