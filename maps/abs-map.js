var map;
var markers = []
var hotels = []
var selectedPin = -1;
var loc = {lat: 48.8328, lng: 2.3966}
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();

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

    directionsDisplay = new google.maps.DirectionsRenderer({suppressMarkers: true, preserveViewport: true});
    directionsDisplay.setMap(map);

    google.maps.event.addListenerOnce(map, 'idle', function(){
         addHotelPins(); 
         addPOIPin()   
    });
    
}

var addPOIPin = function(){

    var icon = "i/landmark.normal.svg";

    marker = new google.maps.Marker({
        position: loc,
        map: map, 
        icon: icon
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
        if (r >=9) {
            icon = "i/base_red_18_trans.png";
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

            hidePOICard();
            showHotelCard();
            displayRoute(latlngObj);

        });


    });
}

var hidePOICard = function(){
    $("#poi-card").hide();
}

var showHotelCard = function(){

}

function displayRoute(hotelLoc) {
    
    //console.log(obj[0].latlng)

    //var locStr = obj.latlng.split(", ");
    //var latlngObj = new google.maps.LatLng(locStr[0], locStr[1]);

    //console.log(latlngObj);

 var request = {
    origin: hotelLoc,
    destination: loc,
    travelMode: google.maps.TravelMode["WALKING"]
  };
  directionsService.route(request, function(response, status) {
    console.log(response)
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);

    }
  });
}
