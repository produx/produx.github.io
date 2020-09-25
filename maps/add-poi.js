var map;
var markers = []
var hotels = []
var selectedPin = -1;
var loc = {lat: 48.8566, lng: 2.3522}
var poiMarkers = []


var initializeMap = function() {
    map = new google.maps.Map(document.getElementById('map_canvas'), {
        center: loc,
        zoom: 13,
        mapTypeId: 'roadmap',
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        panControl: false,
        mapTypeControl: true,
        streetViewControl:true,
        fullscreenControl: false,
        zoomControl: true,
        mapTypeControlOptions:{
            position: google.maps.ControlPosition.RIGHT_TOP
        },
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_BOTTOM
        },
        streetViewControlOptions: {
            position: google.maps.ControlPosition.RIGHT_BOTTOM
        }

    });

    var input = document.getElementById('poi-input');
    var searchBox = new google.maps.places.Autocomplete(input);
    //searchBox.setComponentRestrictions({'country': ['fr']});
    searchBox.bindTo('bounds', map);

    searchBox.addListener('place_changed', function() {
        var place = searchBox.getPlace();

        marker = new google.maps.Marker({
            position: place.geometry.location,
            animation: google.maps.Animation.DROP,
            map: map,
            icon: "i/pins/landmark.png"
        });
        console.log(place);
        poiMarkers.push(marker);
        map.setCenter(place.geometry.location);
        map.setZoom(14);




        console.log(place);
    });


    google.maps.event.addListenerOnce(map, 'idle', function(){
    // do something only the first time the map is loaded

        addHotelPins()

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
            icon = "i/pins/red_small.svg";
        } else {
            icon = "i/pins/green_small.svg";
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

        });


    });
}
