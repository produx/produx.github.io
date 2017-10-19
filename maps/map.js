var map;
var markers = []
var hotels = []
var loc = {lat: 48.864716, lng: 2.349014}

var initializeMap = function() {
    map = new google.maps.Map(document.getElementById('map_canvas'), {
        center: loc,
        zoom: 15,
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
        console.log(latlngObj)

        marker = new google.maps.Marker({
            position: latlngObj,
            map: map, 
            icon: "i/base_green_sm.png"
        });

        markers.push(marker);
        var num = markers.indexOf(marker);
        var infowindow = new google.maps.InfoWindow({
            content: hotel.name
        });

        google.maps.event.addListener(marker, 'mouseover', function() {
            infowindow.open(map, markers[num]);
        });

        google.maps.event.addListener(marker, 'mouseout', function() {
            infowindow.close();
        });


    });
}

