var map;
var markers = []
var hotels = []
var selectedPin = -1;
var loc = {lat: 48.864716, lng: 2.349014}

var initializeMap = function() {
    map = new google.maps.Map(document.getElementById('map_canvas'), {
        center: loc,
        zoom: 15,
        mapTypeId: 'roadmap',
        mapTypeId: google.maps.MapTypeId.ROADMAP, 
        panControl: false,
        mapTypeControl: true,
        streetViewControl:true,
        fullscreenControl: false,
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_TOP
        },
        streetViewControlOptions: {
            position: google.maps.ControlPosition.LEFT_TOP
        }
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

        });


    });
}

