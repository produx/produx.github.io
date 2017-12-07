var geocoder = new google.maps.Geocoder();
var map;
//var neighbourhoodPolygon;
var nmarkers = [];
var lmarkers = [];
var npolygons = [];
var hotelPins = [];
var polygonHighlighted;

var markerImage = new google.maps.MarkerImage('images/marker.png',

    // This marker is 129 pixels wide by 42 pixels tall.
	new google.maps.Size(0, 0),

    // The origin for this image is 0,0.
	new google.maps.Point(0,0),

    // The anchor for this image is the base of the flagpole at 18,42.
	new google.maps.Point(0, 0)
);

var destinationStr;
var destinationObj; 
var neighbourhoodContent;

function initializeMap(destination, destinationObj) {
    //console.log(destination)
   
    map = new google.maps.Map(document.getElementById('map-canvas'), {
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
        },
        styles: [
            {
                featureType: 'poi',
                elementType: 'labels',
                stylers: [
                    {visibility: 'off'}
                ]
            }
        ]
    });

var transitLayer = new google.maps.TransitLayer();
        transitLayer.setMap(map);
    geocoder.geocode( { 'address': destination}, function(pos, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            //console.log (pos[0].geometry.location.k + " " + pos[0].geometry.location.B)
            map.setCenter(pos[0].geometry.location);
            //map.panBy(destinationObj.panX, destinationObj.panY);
            
        } 
    });

    // ON LOAD
    google.maps.event.addListenerOnce(map, 'idle', function(){
        getNeighbourhoodHotels();
    });

    // ZOOM CHANGE
    google.maps.event.addListener(map, 'zoom_changed', function() {
        var zoom = map.getZoom();
        console.log(zoom);

        if (zoom >= getParameterByName("zoom")){
            for (a = 0; a < markersHotels.length; a++) {
                markersHotels[a].labelClass = "map-pin-label";
            }

            for (b = 0; b < markersHotelsUnavailable.length; b++) {
                markersHotelsUnavailable[b].labelClass = "map-pin-dot-unavailable-big";
            }

            for (c = 0; c < markersHotelsNotMatch.length; c++) {
                markersHotelsNotMatch[c].labelClass = "map-pin-label-no-match";
            }
        } else {
            for (d = 0; d < markersHotels.length; d++) {
                markersHotels[d].labelClass = "map-pin-dot";
            }

            for (e = 0; e < markersHotelsUnavailable.length; e++) {
                markersHotelsUnavailable[e].labelClass = "map-pin-dot-unavailable";
            }

            for (f = 0; f < markersHotelsNotMatch.length; f++) {
                markersHotelsNotMatch[f].labelClass = "map-pin-dot-no-match";
            }
        }

    });

    
}

var buildMap = function(){
    destinationStr = getParameterByName("destination");
    console.log(destinationList) 
    destinationObj = getObjects(destinationList.destinations, 'str', destinationStr); 
    console.log(destinationObj)

    neighbourhoodContent = content[destinationObj[0].val];

    
    initializeMap(destinationStr, destinationObj[0]);
};

var getNeighbourhoodHotels =function(){
    //var destStr = getParameterByName("destination");
    //var destObj = getObjects(destination, 'str', destinationStr);
    //var nhood = content[destinationObj[0].val];

    $.each(neighbourhoodContent, function(i, hoods) {
        console.log(hoods.nid)
        fetchHotelListNeighbourhood(destinationStr, hoods.nid, displayHotelPins)
    })
    

}


var markersHotels = [];
var markersHotelsUnavailable = [];
var markersHotelsNotMatch = [];


var displayHotelPins = function (data) {
                // hide loading message
                //$("#loading-hotels").hide();
            //console.log("i go in here")
                var hotels = data.result.hotels;
                console.log(data.result.hotels);
                $.each(hotels, function(i, hotel) { 
                    var point = new google.maps.LatLng(hotel.lat, hotel.lon);
                    var price = hotel.avgPrice
    
                    var x = Math.floor((Math.random() * 10) + 1); 

                    if (x == 1) {
                        var markerLabel = new MarkerWithLabel({
                            position: point,
                            draggable: false,
                            map: map,

                            icon: markerImage,
                            labelContent: "<span class='price'> <i class='material-icons'>&#xE14C;</i></span>",
                            //labelAnchor: new google.maps.Point(40, 32),
                            labelClass: "map-pin-dot-unavailable" // the CSS class for the label
                        });

                        markersHotelsUnavailable.push(markerLabel);
                    } else if (x > 1 && x <6) {
                        var markerLabel = new MarkerWithLabel({
                            position: point,
                            draggable: false,
                            map: map,
                            zIndex:66666666,
                            icon: markerImage,
                            labelContent: "<span class='price'>" + price + "</span>",
                            //labelAnchor: new google.maps.Point(40, 32),
                            labelClass: "map-pin-dot-no-match" // the CSS class for the label
                        });

                        markersHotelsNotMatch.push(markerLabel);
                    } else {
                        var markerLabel = new MarkerWithLabel({
                            position: point,
                            draggable: false,
                            map: map,
                            zIndex:99999999,
                            icon: markerImage,
                            labelContent: "<span class='price'>" + price + "</span>",
                            //labelAnchor: new google.maps.Point(40, 32),
                            labelClass: "map-pin-dot" // the CSS class for the label
                        });

                        markersHotels.push(markerLabel);
                    }

                    google.maps.event.addListener(markerLabel, 'click', function () {
                            /*hideGuides();

                            $("#hotel-card").show();
                            $("#hotel-card img").attr("src", hotel.imageUrl);
                            $("#hotel-card #hotelName").text(hotel.hotelName);
                            $("#hotel-card #stars #star").text(hotel.starRating + " stars");
                            $("#hotel-card #location").text(hotel.location);
                            //$("#hotel-card #stars #locality").text(hotel.location);
                            $("#hotel-card #qual #badge").text(hotel.qualitativeBadgeText);
                            $("#hotel-card #qual #number").text(hotel.guestReviewRating);
                            $("#hotel-card #qual #numReviews").text(hotel.numberOfGuestReviews + " reviews");
                            $("#hotel-card .price .total").text(hotel.avgPriceDetails.prefix + "" + hotel.avgPriceDetails.value);
                            $("#hotel-card .price .price-description").text(hotel.avgPriceDescription);
                            */
                            
                    });
                });

                
            //pointsrand.push(point);
                  
                
                
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
                labelContent: i + 1,
                //labelContent: "<i class='fa fa-university' aria-hidden='true'></i>",
                //labelAnchor: new google.maps.Point(40, 32),
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
                showNeighbourhoodContent(num);
            });

        }
    })
        
}

var addLandmarkPins = function() {
	$.each(neighbourhoodContent, function(i, nhoods) {

		if(nhoods.hasContent) {
			var landmarks = nhoods.landmarks; 
			
            var circle ={
    path: google.maps.SymbolPath.CIRCLE,
    fillColor: 'red',
    fillOpacity: 1.0,
    scale: 3.5,
    strokeColor: 'white',
    strokeWeight: 1
};

			$.each(landmarks, function(i, lmark){
				//if (lmark.primary != ""){
					
					var latlng = {lat:lmark.lat, lng:lmark.lng}
					//console.log(latlng);

					/*var lmarker = new google.maps.Marker({
          				position: latlng,
          				map: map,
          				icon: "landmark-pin.png",
          				zIndex: 1000,
          				title: lmark.name
        			});*/

					
					var lmarker = new MarkerWithLabel({
                		position: latlng,
                		draggable: false,
                		map: map,
                		icon: markerImage,
                		labelContent: "<i class='fa fa-university' aria-hidden='true'></i>",
                //labelContent: "<i class='fa fa-university' aria-hidden='true'></i>",
                //labelAnchor: new google.maps.Point(40, 32),
                		labelClass: "labels-landmarks", // the CSS class for the label
                		labelStyle: {opacity: 0.9}
            		});
        			

        			lmarkers.push(lmarker);

        			
        			var num = lmarkers.indexOf(lmarker);

        			var infowindow = new google.maps.InfoWindow({
          				content: lmark.name
        			});

        			google.maps.event.addListener(lmarker, 'mouseover', function() {
                		infowindow.open(map, lmarkers[num]);
            		});

            		google.maps.event.addListener(lmarker, 'mouseout', function() {
                		infowindow.close();
            		});
				//}
			})

		}

	});
}




var addNeighbourhoodPolygon = function(){
    $.each(neighbourhoodContent, function(i, nhoods) {

        if (nhoods.hasContent) {
            //console.log(nhoods.polygon)
            var neighbourhoodPolygon = new google.maps.Polygon({
                paths: nhoods.polygon,
                strokeColor: '#555555',
                strokeOpacity: 0.8,
                strokeWeight: 1,
                fillColor: '#555555',
                fillOpacity: 0.2
            });

            var name = nhoods.name;
            var id = nhoods.nid
            var num = i;

            var infowindow = new google.maps.InfoWindow({
          		content: nhoods.name
        	});

            npolygons.push(neighbourhoodPolygon);
            neighbourhoodPolygon.setMap(map);

            google.maps.event.addListener(neighbourhoodPolygon, 'click', function() {
                console.log(name + " " + id);
                highlightSelectedPolygon(num);
                showNeighbourhoodContent(num);
            });

            google.maps.event.addListener(neighbourhoodPolygon, 'mouseover', function() {
                //infowindow.open(map, nmarkers[num]);
            });

            google.maps.event.addListener(neighbourhoodPolygon, 'mouseout', function() {
                //infowindow.close();
                
                if (polygonHighlighted != num) {
                	//npolygons[num].setOptions({fillColor: '#999999', strokeColor: '#555555'})
                }
                
               
            });

        } else {

        }
    })
}

var highlightSelectedPolygon = function(num){
    polygonHighlighted = num;
    removePolygonHighlight();
    npolygons[num].setOptions({fillColor: '#026dc5', strokeColor: '#026dc5'})

    
}

var removePolygonHighlight = function(){
    $.each(npolygons, function(i, np) {
        np.setOptions({fillColor: '#999999', strokeColor: '#555555'});
    });
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


function setMapOnAllLandmarks(map) {
  for (var i = 0; i < lmarkers.length; i++) {
    lmarkers[i].setMap(map);
  }
}

function clearLandmarks(){
	setMapOnAllLandmarks(null);
}

function showLandmarks(){
	setMapOnAllLandmarks(map);
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

