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

var initializeMap = function() {
    map = new google.maps.Map(document.getElementById('map_canvas'), {
        center: loc,
        zoom: 14,
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

    //directionsDisplay = new google.maps.DirectionsRenderer({suppressMarkers: true, preserveViewport: true});
    //directionsDisplay.setMap(map);

    //transitLayer = new google.maps.TransitLayer();
    //transitLayer.setMap(map);

    google.maps.event.addListenerOnce(map, 'idle', function(){
         addPOIPin();
          
         

    });

    
    
}

var addPOIPin = function(){

    var icon = "i/poi-pin.png";

    marker = new google.maps.Marker({
        map: map, 
        animation: google.maps.Animation.DROP,
        position: loc,
        icon: icon
    });

    google.maps.event.addListener(marker, 'click', function() {
        $("#hotel-card").hide(); 
        $("#poi-card").show();       
    });

    
        $("#poi-card").delay(750).slideDown();       
    

    

    
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
            icon = "i/base_red_18.png";
        } else {
            icon = "i/base_green_18.png";
        }


        marker = new google.maps.Marker({
            position: latlngObj,
            map: map, 
            icon: icon
        });

        markers.push(marker);
        var num = markers.indexOf(marker);
        var infowindow = new google.maps.InfoWindow({
            content: hotel.name
        });

        google.maps.event.addListener(marker, 'mouseover', function() {
            //infowindow.open(map, markers[num]);
        });

        google.maps.event.addListener(marker, 'mouseout', function() {
            //infowindow.close();
        });

        google.maps.event.addListener(marker, 'click', function() {
            
            if (selectedPin != -1){
                markers[selectedPin].setIcon("i/base_blue_18.png");
            }
            selectedPin = num; 
            markers[num].setIcon('i/base_blue.png');

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
