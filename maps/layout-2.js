var map;
var markers = []
var hotels = []
var selectedPin = -1;
var loc = {lat: 48.8566, lng: 2.3522}
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
        zoom: 13,
        mapTypeId: 'roadmap',
        mapTypeId: google.maps.MapTypeId.ROADMAP, 
        panControl: false,
        mapTypeControl: true,
        mapTypeControlOptions: {
              style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
              position: google.maps.ControlPosition.TOP_LEFT
        },
        streetViewControl:true,
        fullscreenControl: false,
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_TOP
        },
        streetViewControlOptions: {
            position: google.maps.ControlPosition.LEFT_TOP
        },
        
    });

    google.maps.event.addListenerOnce(map, 'idle', function(){
         addHotelPins(); 
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
        if (r >=6) {
            var markerLabel = new MarkerWithLabel({
                position: latlngObj,
                draggable: false,
                map: map,
                icon: markerImage,
                labelContent: "<div></div>",
                //labelAnchor: new google.maps.Point(40, 32),
                labelClass: "map-pin-dot-unavailable" // the CSS class for the label
            });
            markersHotelsUnavailable.push(markerLabel);
        } else {

            var price = Math.floor(Math.random()*(700-50+1)+50);
            var markerLabel = new MarkerWithLabel({
                position: latlngObj,
                draggable: false,
                map: map,
                icon: markerImage,
                labelContent: "<div><span class='price'>$" + price + "</span></div>",
                //labelAnchor: new google.maps.Point(40, 32),
                labelClass: "map-pin-dot-available" // the CSS class for the label
            });
            markersHotels.push(markerLabel);
        }


        /*marker = new google.maps.Marker({
            position: latlngObj,
            map: map, 
            icon: icon
        });*/

        //markers.push(marker);
        //var num = markers.indexOf(marker);
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
            
            //if (selectedPin != -1){
                //markers[selectedPin].setIcon("i/base_blue_18.png");
            //}
            //selectedPin = num; 
            //markers[num].setIcon('i/base_blue.png');

            //hidePOICard();
            //showHotelCard(hotel.name, latlngObj);
            //displayRoute(latlngObj);

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
