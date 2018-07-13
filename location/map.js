var geocoder = new google.maps.Geocoder();
var distanceService = new google.maps.DistanceMatrixService;

var directionsDisplay;
var directionsService = new google.maps.DirectionsService();

var markersLandmarks = [];
var markersTransport = [];
var markersRestaurants = [];
var markersServices = [];

var transportObj;
var landmarkObj;
var restaurantObj;
var servicesObj = [];

var openInfoWindow = false; 

var map;
//var service;
var infowindow;
var placesList;
var service;
var loc = {lat: 50.117089, lng: -5.534462}; 
var markerImage = new google.maps.MarkerImage('images/marker.png',

    // This marker is 129 pixels wide by 42 pixels tall.
    new google.maps.Size(129, 42),

    // The origin for this image is 0,0.
    new google.maps.Point(0,0),

    // The anchor for this image is the base of the flagpole at 18,42.
    new google.maps.Point(18, 42)
);
var types = ["hospital", "pharmacy", "store", "grocery_or_supermarket", "convenience_store"]
var placeTypes = [
        //{type: "cafe", rank:"distance", title:"Cafe", num_results:"1"},
        //{type: "restaurant", rank:"distance", radius: "2000", title:"Restaurants", num_results:"3"},
        {type: "pharmacy", rank:"distance", radius: "2000", title:"Pharmacy", num_results:"1", iconfont: "&#xE548;"},
        {type: "hospital", rank:"distance", radius: "10000", title:"Hospital", num_results:"1", iconfont: "&#xE548;"},
        //{type: "doctor", rank:"prominence", radius: "2000", title:"Doctor", num_results:"1"},
        //{type: "bar", rank:"distance", radius: "2000", title:"Bars", num_results:"3"},
        //{type: "night_club", rank:"distance", title:"Nightlife", num_results:"3"},
        {type: "grocery_or_supermarket", rank:"distance", title:"Supermarket / Store", num_results:"3", iconfont: "&#xE8CB;"},
        //{type: "convenience_store", rank:"prominence", radius: "2000", title:"Convenience Store", num_results:"3"},
        //{type: "department_store", rank:"distance", title:"Department Store", num_results:"3"},
        //{type: "bakery", rank:"distance", title:"Bakery", num_results:"2"},
        {type: "atm", rank:"distance", radius: "2000", title:"ATM", num_results:"3", iconfont: "&#xE53E;"},
        {type: "gas_station", rank:"distance", radius: "10000", title:"Petrol Station", num_results:"3", iconfont: "&#xE546;"},
        {type: "bus_station", rank:"distance", radius: "10000", title:"Bus Station", num_results:"3", iconfont: "&#xE530;"}
        //{type: "hardware_store", rank:"prominence", radius: "2000", title:"Hardware Store", num_results:"2"},
        //{type: "home_ware_store", rank:"prominence", radius: "2000", title:"Homeware Store", num_results:"2"}
]





function initializeMap() {
    
    console.log("in here")
   
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
    
}

function calcRoute(obj) {
    
    console.log(obj[0].latlng)

    //var locStr = obj.latlng.split(", ");
    //var latlngObj = new google.maps.LatLng(locStr[0], locStr[1]);

    //console.log(latlngObj);

 var request = {
    origin: loc,
    destination: obj[0].latlng,
    travelMode: google.maps.TravelMode[obj[0].transitMode]
  };
  directionsService.route(request, function(response, status) {
    //console.log(response)
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);

    }
  });
}

var displayHotelPin = function(){

    if (hotelData.roomRates.promoLowPrice == null){
        var price = hotelData.roomRates.lowPrice;
    } else {
        var price = hotelData.roomRates.promoLowPrice;
    }
    var markerLabel = new MarkerWithLabel({
        position: loc,
        draggable: false,
        map: map,
        icon: markerImage,
        labelContent: "<i class='material-icons hotel'>&#xE53A;</i> <span class='price'>" + price + "</span>",
        //labelAnchor: new google.maps.Point(40, 32),
        labelClass: "map-label-selected-hotel", // the CSS class for the label
        labelStyle: {opacity: 0.9}
    });
}

var displayTransportPOI = function(){
    //console.log(content['lacoruna']);
    transportObj = content['lacoruna'].transport

    $.each(transportObj, function(i, obj) {
        //console.log(transport.name);
        var locStr = obj.latlng.split(", ");
        var latlngObj = new google.maps.LatLng(locStr[0], locStr[1]);
        //console.log(latlngObj);
        var poiTypeObj = getObjects(typeDescription, 'type', obj.type);
        //console.log(poiTypeObj);

        var markerLabel = new MarkerWithLabel({
            position: latlngObj,
            draggable: false,
            map: map,
            icon: markerImage,
            labelContent: "<i class='material-icons'>" + poiTypeObj[0].iconfont + "</i>",
            labelAnchor: new google.maps.Point(10, 8),
            labelClass: "poi-transport", // the CSS class for the label
            labelStyle: {opacity: 0.9}
        });
        
        markersTransport.push(markerLabel);

        var num = markersTransport.indexOf(markerLabel);


        var placeObj = [
            {
                name:name, 
                latlng:latlngObj, 
                type:"transport", 
                transitMode:"WALKING"
            },
        ]

        var infowindow = new google.maps.InfoWindow({
            content: obj.name
        });

        google.maps.event.addListener(markerLabel, 'click', function() {
           

            if( openInfoWindow ) {
                openInfoWindow.close();
            }

            openInfoWindow = infowindow;

            infowindow.open(map, markersTransport[num]);
            calcRoute(placeObj);
        });

        google.maps.event.addListener(markerLabel, 'mouseout', function() {
            //infowindow.close();
        });

        $("#transport-list ul").append("<li rel='" + num + "'><i class='material-icons'>" + poiTypeObj[0].iconfont + "</i><div class='item'><div class='name'> " + obj.name + "</div><span class='driving'>0</span> <span class='transit'></span></div></li>")

        getDistance(latlngObj, "transport-list", num, "DRIVING", "&#xE531;");
        getDistance(latlngObj, "transport-list", num, "TRANSIT", "&#xE533;");

        // displat list on panel
        //$("#transport-list ul").append("<li rel='" + num + "'><span class='icon'>" + poiTypeObj[0].iconfont + "</span> " + obj.name + "</li>")
        //getDistance(latlngObj, "transport-list", obj, num, poiTypeObj[0].iconfont, obj.transitMode);



    });
}

var displayLandmarksPOI = function(){
    //console.log(content['lacoruna']);
    landmarkObj = content['lacoruna'].landmarks

    $.each(landmarkObj, function(i, obj) {
        //console.log(transport.name);
        var locStr = obj.latlng.split(", ");
        var latlngObj = new google.maps.LatLng(locStr[0], locStr[1]);
        //console.log(latlngObj);
        var poiTypeObj = getObjects(typeDescription, 'type', obj.type);
        //console.log(poiTypeObj);

        var markerLabel = new MarkerWithLabel({
            position: latlngObj,
            draggable: false,
            map: map,
            icon: markerImage,
            labelContent: "<i class='material-icons'>" + poiTypeObj[0].iconfont + "</i>",
            labelAnchor: new google.maps.Point(10, 8),
            labelClass: "poi-transport", // the CSS class for the label
            labelStyle: {opacity: 0.9}
        });
        
        markersLandmarks.push(markerLabel);

        var locStr = obj.latlng.split(", ");
        var latlngObj = new google.maps.LatLng(locStr[0], locStr[1]);

        var placeObj = [
            {
                name:name, 
                latlng:latlngObj, 
                type:"transport", 
                transitMode:"WALKING"
            },
        ]

        var infowindow = new google.maps.InfoWindow({
            content: obj.name
        });



        google.maps.event.addListener(markerLabel, 'click', function() {
           

            if( openInfoWindow ) {
                openInfoWindow.close();
            }

            openInfoWindow = infowindow;

            infowindow.open(map, markersLandmarks[num]);
            calcRoute(placeObj);
        });

        var num = markersLandmarks.indexOf(markerLabel);

        $("#landmarks-list ul").append("<li rel='" + num + "'><i class='material-icons'>" + poiTypeObj[0].iconfont + "</i><div class='item'><div class='name'> " + obj.name + "</div><span class='walking'></span> <span class='driving'></span></div></li>")

        getDistance(latlngObj, "landmarks-list", num, "WALKING", "&#xE536;");
        getDistance(latlngObj, "landmarks-list", num, "DRIVING", "&#xE531;");
       
    });
}

var displayTARestaurants = function(){
    var taURL = "http://api.tripadvisor.com/api/partner/2.0/map/" + loc.lat + "," + loc.lng + "/restaurants?key=a428337c-7f6e-4290-8f1f-7627f5d3716d"
    //43.37577,-8.40314
    $.ajax({
      //dataType: "json",
      crossDomain: true,
      dataType: 'jsonp',
      url: taURL,
      //success: cb,
      success: function (response) {
        //console.log(response.data)
        restaurantObj = response.data
        $.each(restaurantObj, function (index, place) {
            //console.log(place.name)
            
            var rating = parseFloat(place.rating);

            if (rating > 4){
                console.log(place);
                var name = place.name;
                var cuisineObj = place.cuisine; 
                var cusineStr = "";

                $.each(cuisineObj, function (index, cuisine) {
                    cusineStr += "&#8226; " + cuisine.localized_name + " &nbsp;";
                }); 

                console.log(cusineStr)
                
                var latlngObj = new google.maps.LatLng(place.latitude, place.longitude);
                var markerLabel = new MarkerWithLabel({
                    position: latlngObj,
                    draggable: false,
                    map: map,
                    icon: markerImage,
                    labelContent: "<span class='icon'>&#xe950;</span>",
                    labelAnchor: new google.maps.Point(10, 8),
                    labelClass: "poi-transport", // the CSS class for the label
                    labelStyle: {opacity: 0.9}
                });
        

                markersRestaurants.push(markerLabel);
                var num = markersRestaurants.indexOf(markerLabel);

                $("#restaurants-list ul").append("<li rel="+num+"><span class='icon'>&#xe950;</span><div class='item'><div>" + name + "</div><div class='cuisine'>" + cusineStr + "</div><div class='ta-icon'><img src=" + place.rating_image_url + "/></div></div></li>"); 
                
                var obj = [
                    {
                        name:name, 
                        latlng:place.latitude + ", " +  place.longitude, 
                        type:"food", 
                        transitMode:"WALKING"
                    },
                ]
                

                var infowindow = new google.maps.InfoWindow({
                  content: name
                });

                google.maps.event.addListener(markerLabel, 'click', function() {
                    if( openInfoWindow ) {
                        openInfoWindow.close();
                    }

                    openInfoWindow = infowindow;

                    infowindow.open(map, markersRestaurants[num]);
                    calcRoute(obj[0]);
                });

            }

         }); 
      }, 
      error: function (xhr, ajaxOptions, thrownError) {
        alert(xhr.status);
        alert(thrownError);
      }
  });

    //console.log()
}

function displayPlacesList(places, status, type, num_results){
    //console.log(places);
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        
        if (places.length == 0) {
            //console.log ()
            $("#list ul#" + type + "list").append("<li> non found </li>")

        } else if (places.length < 3) {
            for (var i = 0; i < places.length; i++) {
                displayNameDistance(loc, places[i], type);
            }
        } else {
            for (var i = 0; i < 3; i++) {
                displayNameDistance(loc, places[i], type);
            }
        }

        

        $.each(places, function (index, place) {
            //console.log(place);
            //displayNameDistance(loc, place, type);
            
        });
        
    }
}

function getRating(place){
        if (place.rating) {
            var rating = place.rating
            return " <span class='rating' style='color:#999; font-size:11px'>(" + rating + "/5)</span>";
        } else {
            return "";
        }
    }

//elem, obj, num, icon,
var getDistance = function(endLoc, elem, num, mode, iconFont) {
    distanceService.getDistanceMatrix({
        origins: [loc],
        destinations: [endLoc],
        travelMode: google.maps.TravelMode[mode],
        unitSystem: google.maps.UnitSystem.METRIC,
        avoidHighways: false,
        avoidTolls: false
    }, function(response, status) {
        if (status !== google.maps.DistanceMatrixStatus.OK) {
            alert('Error was: ' + status);
        } else {
            //console.log(response.rows[0].elements[0])
            var distance = response.rows[0].elements[0].distance.text;
            var duration = response.rows[0].elements[0].duration.text;
            //$("#" + elem + " ul").append("<li rel='" + num + "'><i class='material-icons'>" + icon + "</i><div class='item'><div> " + obj.name + "</div><div class='distance'>" + distance + " - " + duration + " - " + mode + "</div></div></li>")
            $("#" + elem + " ul").find("li[rel='" + num + "'] ." + mode.toLowerCase()).html("<i class='material-icons'>" + iconFont + "</i> <span class='duration'>" + duration + "</span>");
        }

    })
}



function displayNameDistance(hotelLoc, place, type) {
    distanceService.getDistanceMatrix({
        origins: [hotelLoc],
        destinations: [place.geometry.location],
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.METRIC,
        avoidHighways: false,
        avoidTolls: false
    }, function(response, status) {
        if (status !== google.maps.DistanceMatrixStatus.OK) {
        alert('Error was: ' + status);
        } else {
            var placeData = place.name + getRating(place);
            $("#list ul#" + type + "list").append("<li>" + placeData + " - " + response.rows[0].elements[0].distance.text + "</li>")
        }
    })
}

var fetchPOIByType = function(location, type){
    console.log(type);
    service.nearbySearch({
        location: location,
        //radius: 1000,
        rankBy: google.maps.places.RankBy.DISTANCE,
        types: [type]
    }, function(response, status){
            console.log(response);
            $.each(response, function (index, obj) {
                if (obj.rating >= 2 && index <= 5){

                    //console.log(place.name + " " + place.rating);
                    
                    var markerLabel = new MarkerWithLabel({
                        position: obj.geometry.location,
                        draggable: false,
                        map: map,
                        icon: markerImage,
                        labelContent: "<i class='material-icons'>&#xE56C;</i>",
                        labelAnchor: new google.maps.Point(10, 8),
                        labelClass: "poi-transport", // the CSS class for the label
                        labelStyle: {opacity: 0.9}
                    });

                    var placeObj = [
                        {
                            name:obj.name, 
                            latlng:obj.geometry.location, 
                            type:"food", 
                            transitMode:"WALKING"
                        },
                    ]

                    var infowindow = new google.maps.InfoWindow({
                        content: obj.name
                    });

                    google.maps.event.addListener(markerLabel, 'click', function() {
                        if( openInfoWindow ) {
                            openInfoWindow.close();
                        }
                        openInfoWindow = infowindow;

                        infowindow.open(map, markersRestaurants[num]);
                        calcRoute(placeObj);
                    });

                    markersRestaurants.push(markerLabel);
                    var num = markersRestaurants.indexOf(markerLabel);

                    $("#restaurants-list ul").append("<li rel='" + num + "'><i class='material-icons'>&#xE56C;</i><div class='item'><div class='name'> " + obj.name + " <span style='color:#555; font-size:11px'>(" + obj.rating + "/5)</span></div><span class='walking'></span> <span class='driving'></span></div></li>")
                    getDistance(obj.geometry.location, "restaurants-list", num, "WALKING", "&#xE536;");
                    clearServiceMarkers()
                }
                
            })
            //displayPlacesList(results, status, placeType.type, placeType.num_results )
    });
}



function fetchPOI(location) {
    //console.log ("running")


    $.each(placeTypes, function (index, placeType) {
            //console.log(placeType.title);
            //$("#list").append("<h3>" + placeType.title + "</h3>")
    //$("#list").append($( "<ul id='" + placeType.type + "list'/>" ));
    console.log(index)
    if (placeType.rank == "prominence") {
        service.nearbySearch({
            location: location,
            radius: placeType.radius,
        //rankBy: google.maps.places.RankBy.DISTANCE,
            type: [placeType.type]
        }, function(results, status){
            //displayPlacesList(results, status, placeType.type, placeType.num_results)
            console.log(results[0])
            //$("#restaurants-list ul").append("<li><i class='material-icons'>&#xE56C;</i><div class='item'><div class='name'> " + obj.name + " <span style='color:#555; font-size:11px'>(" + obj.rating + "/5)</span></div><span class='walking'></span> <span class='driving'></span></div></li>")
            servicesObj.push(results[0]);
            $("#services-list ul").append("<li rel=" + index + "><i class='material-icons'>" + placeType.iconfont + "</i><div class='item'><div class='name'>" + results[0].name + " <span style='color:#555; font-size:12px'>(" + placeType.title + ")</span></div><span class='walking'></span> <span class='driving'></span></div></li>")
            getDistance(results[0].geometry.location, "services-list", index, "WALKING", "&#xE536;");
            getDistance(results[0].geometry.location, "services-list", index, "DRIVING", "&#xE531;");
        });
    } else {
        service.nearbySearch({
        location: location,
        //radius: 2000,
        rankBy: google.maps.places.RankBy.DISTANCE,
        types: [placeType.type]
        
        
        }, function(results, status){
            console.log(results[0].name + " - " + placeType.title);
            //displayPlacesList(results, status, placeType.type, placeType.num_results)
            
            var markerLabel = new MarkerWithLabel({
                        position: results[0].geometry.location,
                        draggable: false,
                        map: map,
                        icon: markerImage,
                        labelContent: "<i class='material-icons'>" + placeType.iconfont + "</i>",
                        labelAnchor: new google.maps.Point(10, 8),
                        labelClass: "poi-transport", // the CSS class for the label
                        labelStyle: {opacity: 0.9}
                    });


                    markersServices.push(markerLabel);
                    var num = markersServices.indexOf(markerLabel);

                    var placeObj = [
                        {
                            name:results[0].name, 
                            latlng:results[0].geometry.location, 
                            //type:"food", 
                            transitMode:"WALKING"
                        },
                    ]

                    var infowindow = new google.maps.InfoWindow({
                        content: results[0].name
                    });

                    google.maps.event.addListener(markerLabel, 'click', function() {
                        if( openInfoWindow ) {
                            openInfoWindow.close();
                        }
                        openInfoWindow = infowindow;

                        infowindow.open(map, markersServices[num]);
                        calcRoute(placeObj);
                    });

                    $("#services-list ul").append("<li rel=" + num + "><i class='material-icons'>" + placeType.iconfont + "</i><div class='item'><div class='name'>" + results[0].name + " <span style='color:#555; font-size:12px'>(" + placeType.title + ")</span></div><span class='walking'></span> <span class='driving'></span></div></li>")
            servicesObj.push(results[0]);
            getDistance(results[0].geometry.location, "services-list", index, "WALKING", "&#xE536;");
            getDistance(results[0].geometry.location, "services-list", index, "DRIVING", "&#xE531;");
            clearServiceMarkers()
        });
    }
    });


    
    

    
}





function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    placesList = results;
    displayPlacesList()
    //console.log(placesList);
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      createMarker(results[i]);
      //console.log(place)
    }
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    icon: "i/pin.png",
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}


// GeoCoder function
/* geocoder.geocode( { 'address': destination}, function(pos, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            //console.log (pos[0].geometry.location.k + " " + pos[0].geometry.location.B)
            map.setCenter(pos[0].geometry.location);

            
        }
});*/
var typeDescription = [
    {type: "airport", description: "Airport", iconfont: "&#xE53D;"},
    {type: "anchor", description: "Harbors and Seaports", iconfont: "&#xE84F;"},
    {type: "beach", description: "Beach", iconfont: "&#xEB3E;"},
    {type: "casino", description: "Casino", iconfont: "&#xE84F;"},
    {type: "civic", description: "Civic buildings", iconfont: "&#xE84F;"},
    {type: "golf", description: "Golf course", iconfont: "&#xE84F;"},
    {type: "historic", description: "Historic Buildings", iconfont: "&#xE84F;"},
    {type: "icecream", description: "Amusement Parks, Zoos, etc...", iconfont: "&#xE84F;"},
    {type: "medical", description: "Hospitals / Medical buildings", iconfont: "&#xE84F;"},
    {type: "monument", description: "Towers, Arches, Fountains, Churches, etc...", iconfont: "&#xE84F;"},
    {type: "museums", description: "Museum", iconfont: "&#xE84F;"},
    {type: "school", description: "Universities", iconfont: "&#xE84F;"},
    {type: "shopping", description: "Shopping", iconfont: "&#xE84F;"}, 
    {type: "sign", description: "Squares or Centers", iconfont: "&#xE84F;"},
    {type: "skiing", description: "Ski resort", iconfont: "&#xE84F;"},
    {type: "stadium", description: "Sports stadiums/Arenas", iconfont: "&#xE84F;"},
    {type: "sunglass", description: "Beach", iconfont: "&#xE84F;"},
    {type: "theater", description: "Theater", iconfont: "&#xE84F;"},
    {type: "tree", description: "Parks / Nature", iconfont: "&#xE84F;"},
    {type: "train", description: "Train station", iconfont: "&#xE570;"},
    {type: "winery", description: "Winery", iconfont: "&#xE84F;"}
]


var content = {
    lacoruna : {
        name: "La Coruna", 
        destinationId: "457467",
        center: {lat: 43.371498, lng: -8.39773}, 
        
        transport: [
            {name:"San Cristobal Train Station", latlng:"43.3526, -8.4099", type:"train", transitMode:"DRIVING"},
            {name:"La Coruña Airport", latlng:"43.3020, -8.3811", type:"airport", transitMode:"DRIVING"}
        ],

        landmarks: [
            {name:"Orzan Beach", latlng:"43.371639, -8.404545", type:"beach", transitMode: "WALKING"},
            {name:"Praia de Riazor", latlng:"43.368738, -8.411398", type:"beach", transitMode: "WALKING"},
            {name:"Tower of Hercules", latlng:"43.3860, -8.4065", type:"monument", transitMode: "WALKING"},
            {name:"Aquarium Finisterrae", latlng:"43.3840, -8.4097", type:"icecream", transitMode: "WALKING"},
            {name:"Museo Domus", latlng:"43.3776, -8.4065", type:"museums", transitMode: "WALKING"}, 
            {name:"Avenida de la Marina", latlng:"43.36950, -8.39975", type:"shopping", transitMode: "WALKING"},
            {name:"Plaza de Maria Pita", latlng:"43.37118, -8.39639", type:"shopping", transitMode: "WALKING"},
            {name:"Castle of San Anton", latlng:"43.382851, -8.402894", type:"monument", transitMode: "WALKING"},
            {name:"San Carlos Garden", latlng:"43.368603, -8.391219", type:"monument", transitMode: "WALKING"},
            {name:"Monte de San Pedro", latlng:"43.371823, -8.434461", type:"monument", transitMode: "DRIVING"}
        ]
    }
}

function getObjects(obj, key, val) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getObjects(obj[i], key, val));
        } else if (i == key && obj[key] == val) {
            objects.push(obj);
        }
    }
    return objects;
}

function setMapOnAll(map) {
  for (var i = 0; i < markersServices.length; i++) {
    markersServices[i].setMap(map);
  }

  for (var i = 0; i < markersRestaurants.length; i++) {
    markersRestaurants[i].setMap(map);
  }
}

function showServiceMarkers() {
  setMapOnAll(map);
}

function clearServiceMarkers() {
  setMapOnAll(null);
}

function changeMarkerStyle() {
    for (var i = 0; i < markersRestaurants.length; i++) {
        markersRestaurants[i].labelClass = "poi-transport-big";
    };

    for (var i = 0; i < markersServices.length; i++) {
        markersServices[i].labelClass = "poi-transport-big";
    };

    for (var i = 0; i < markersLandmarks.length; i++) {
        markersLandmarks[i].labelClass = "poi-transport-big";
    };

    for (var i = 0; i < markersTransport.length; i++) {
        markersTransport[i].labelClass = "poi-transport-big";
    };
    
}

function defaultMarkerStyle() {
    for (var i = 0; i < markersRestaurants.length; i++) {
        markersRestaurants[i].labelClass = "poi-transport";
    }

    for (var i = 0; i < markersServices.length; i++) {
        markersServices[i].labelClass = "poi-transport";
    }

    for (var i = 0; i < markersLandmarks.length; i++) {
        markersLandmarks[i].labelClass = "poi-transport";
    }

    for (var i = 0; i < markersTransport.length; i++) {
        markersTransport[i].labelClass = "poi-transport";
    }

    
}






