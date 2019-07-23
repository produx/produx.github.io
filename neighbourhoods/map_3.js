var geocoder = new google.maps.Geocoder();

var map;
var neighbourhoodPolygon; 

var markerImage = new google.maps.MarkerImage('images/marker.png',

            // This marker is 129 pixels wide by 42 pixels tall.

            new google.maps.Size(129, 42),

            // The origin for this image is 0,0.

            new google.maps.Point(0,0),

            // The anchor for this image is the base of the flagpole at 18,42.

            new google.maps.Point(18, 42)
        );

var shinjukuLatLng = [
    {lng: 139.663743, lat: 35.672229},
    {lng: 139.69169, lat: 35.668186},
    {lng: 139.690618, lat: 35.670129},
    {lng: 139.694411, lat: 35.679412},
    {lng: 139.697862, lat: 35.680852},
    {lng: 139.703616, lat: 35.680462},
    {lng: 139.708595, lat: 35.681304},
    {lng: 139.713994, lat: 35.680369},
    {lng: 139.718753, lat: 35.677562},
    {lng: 139.721914, lat: 35.67481},
    {lng: 139.721774, lat: 35.710064},
    {lng: 139.663778, lat: 35.710151},
    {lng: 139.663743, lat: 35.672229}
  ];

   // Construct the polygon.
  var shinjukuPolygon = new google.maps.Polygon({
    paths: shinjukuLatLng,
    strokeColor: '#555555',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#555555',
    fillOpacity: 0.35
  });

// 

var akasakaLatLng = [
    {lng: 139.722226, lat: 35.666941},
    {lng: 139.730487, lat: 35.668363},
    {lng: 139.73818, lat: 35.669198},
    {lng: 139.742897, lat: 35.670999},
    {lng: 139.752, lat: 35.689},
    {lng: 139.722, lat: 35.689},
    {lng: 139.722226, lat: 35.666941}
 ];

 var akasakaPolygon = new google.maps.Polygon({
    paths: akasakaLatLng,
    strokeColor: '#555555',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#555555',
    fillOpacity: 0.35
  });

 // 

var nihonbashiLatLng = [
    {lng: 139.757029, lat: 35.678017},
    {lng: 139.772685, lat: 35.674303},
    {lng: 139.772501, lat: 35.672566},
    {lng: 139.78124, lat: 35.66902},
    {lng: 139.784426, lat: 35.671865},
    {lng: 139.79369, lat: 35.68578},
    {lng: 139.788496, lat: 35.69477},
    {lng: 139.7874, lat: 35.695225},
    {lng: 139.782701, lat: 35.696672},
    {lng: 139.772851, lat: 35.69702},
    {lng: 139.766785, lat: 35.693027},
    {lng: 139.766162, lat: 35.69018},
    {lng: 139.760286, lat: 35.689531},
    {lng: 139.757029, lat: 35.678017}
 ];

  var nihonbashiPolygon = new google.maps.Polygon({
    paths: nihonbashiLatLng,
    strokeColor: '#555555',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#555555',
    fillOpacity: 0.35
  });

// 

var ginzaLatLng = [
    {lng: 139.758623, lat: 35.668233},
    {lng: 139.762164, lat: 35.666937},
    {lng: 139.763223, lat: 35.663804},
   {lng: 139.764423, lat: 35.663887},
   {lng: 139.767684, lat: 35.666851},
   {lng: 139.767752, lat: 35.668016},
   {lng: 139.771817, lat: 35.671175},
   {lng: 139.772651, lat: 35.67424},
   {lng: 139.771005, lat: 35.674602},
   {lng: 139.759778, lat: 35.676938},
   {lng: 139.755778, lat: 35.670794},
   {lng: 139.759923, lat: 35.670912},
   {lng: 139.758623, lat: 35.668233}
 ];

  var ginzaPolygon = new google.maps.Polygon({
    paths: ginzaLatLng,
    strokeColor: '#555555',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#555555',
    fillOpacity: 0.35
  });

// 

var asakusaLatLng = [
    {lng: 139.790367, lat: 35.718657},
    {lng: 139.786532, lat: 35.706503},
    {lng: 139.791005, lat: 35.706024},
    {lng: 139.795864, lat: 35.705265},
    {lng: 139.798457, lat: 35.709678},
    {lng: 139.802886, lat: 35.714142},
    {lng: 139.807572, lat: 35.718606},
    {lng: 139.809497, lat: 35.725476},
    {lng: 139.811085, lat: 35.733254},
    {lng: 139.815008, lat: 35.737012},
    {lng: 139.814489, lat: 35.740169},
    {lng: 139.810468, lat: 35.741214},
    {lng: 139.802811, lat: 35.738898},
    {lng: 139.796451, lat: 35.739518},
    {lng: 139.791284, lat: 35.741281},
    {lng: 139.790367, lat: 35.718657}
 ];

 var asakusaPolygon = new google.maps.Polygon({
    paths: asakusaLatLng,
    strokeColor: '#555555',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#555555',
    fillOpacity: 0.35
  });


  

var neighbourhoods = {
    akasaka : {
        name: "Akasaka",
        center: {lat: 35.6794862140995, lng: 139.734433905381}, 
        polygon: akasakaPolygon
    }, 

    asakusa : {
        name: "Asakusa",
        center: {lat: 35.7252128673964, lng: 139.799428428791}, 
        polygon: asakusaPolygon
    }, 

    ginza : {
        name: "Ginza",
        center: {lat: 35.6712935174737, lng: 139.764315704409}, 
        polygon: ginzaPolygon
    },

    nihonbashi : {
        name: "Nihonbashi",
        center: {lat: 35.6841591001463, lng: 139.776211321046}, 
        polygon: nihonbashiPolygon
    },

    shinjuku : {
        name: "Shinjuku",
        center: {lat: 35.692248403859, lng: 139.69102634108}, 
        polygon: shinjukuPolygon
    }
}



function initializeMap(destination) {
    
   
    map = new google.maps.Map(document.getElementById('map_canvas'), {
        center: {lat: 35.675, lng: 139.76},
        zoom: 12,
        mapTypeId: 'roadmap',
        mapTypeId: google.maps.MapTypeId.ROADMAP, 
        panControl: false,
        mapTypeControl: true,
        streetViewControl:true,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.MEDIUM,
            position: google.maps.ControlPosition.RIGHT_TOP
        }

    });

   


    /*geocoder.geocode( { 'address': destination}, function(pos, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            //console.log (pos[0].geometry.location.k + " " + pos[0].geometry.location.B)
            map.setCenter(pos[0].geometry.location);
            
        } 
    });*/



 
  shinjukuPolygon.setMap(map);
  akasakaPolygon.setMap(map);
  asakusaPolygon.setMap(map);
  
  ginzaPolygon.setMap(map);
  nihonbashiPolygon.setMap(map);

  focusNeighbourhoodPolygon("akasaka");


    google.maps.event.addListenerOnce(map, 'idle', function(){
    // do something only the first time the map is loaded
        //randomMarkers();
        //addNeighbourhoodPin();
        addNeighbourhoodPins();
        //addNeighbourhoodPolygon(neighbourhoods["akasaka"].center);
        
    });

    neighbourhoodPolygon = new google.maps.Circle({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: map,
      radius: 2000
    });


    
}




var randomMarkers = function(){
    var bounds = map.getBounds();

    var southWest = bounds.getSouthWest();

    var northEast = bounds.getNorthEast();

    var lngSpan = northEast.lng() - southWest.lng();
    var latSpan = northEast.lat() - southWest.lat();

    var markers = [];

    // Create some markers
    for (var i = 1; i < 100; i++) {

        var location = new google.maps.LatLng(southWest.lat() + latSpan * Math.random(), southWest.lng() + lngSpan * Math.random());

        var marker = new google.maps.Marker({
            position: location,
            map: map, 
            icon: "map-pin-red.png"
        });

        markers.push(marker);
    }  
}

var addNeighbourhoodPin = function(){
    var bounds = map.getBounds();

    var southWest = bounds.getSouthWest();

    var northEast = bounds.getNorthEast();

    var lngSpan = northEast.lng() - southWest.lng();
    var latSpan = northEast.lat() - southWest.lat();

    var location = new google.maps.LatLng(southWest.lat() + latSpan * Math.random(), southWest.lng() + lngSpan * Math.random());

        var marker = new google.maps.Marker({
            position: location,
            map: map,
            icon: "neighbourhood_icon.png"
        });

        marker.addListener('click', function() {
            openNeighbourhood();

            //addNeighbourhoodPolygon(location);

            //addNeighbourhoodShape(location);

        });


        


}

var addNeighbourhoodShape = function(location){
    neighbourhoodCircle = new google.maps.Circle({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: map,
      center: location,
      radius: 2000
    });
}

var addNeighbourhoodPins = function(){
    
    var nmarkers = [];
    //for (var nhoods in neighbourhoods) {
    $.each(neighbourhoods, function(i, nhoods) {
        

        var markerLabel = new MarkerWithLabel({
            position: nhoods.center,
            draggable: false,
            map: map,
            icon: markerImage,
            labelContent: nhoods.name,
            labelAnchor: new google.maps.Point(30, 16),
            labelClass: "labels", // the CSS class for the label
            labelStyle: {opacity: 0.9}
        });

        //var marker = new google.maps.Marker({
            //position: nhoods.center,
           // map: map, 
            //icon: "neighbourhood_icon.png"
        //});

        //console.log(nhoods)
        nmarkers.push(markerLabel);

        var name = nhoods.name;
        var loc = nhoods.center;

        google.maps.event.addListener(markerLabel, 'click', function() {
            
            openNeighbourhood(name);
            focusNeighbourhoodPolygon(name);
            console.log(name);
        });

    })
        
}

var focusNeighbourhoodPolygon = function(name){

    shinjukuPolygon.setOptions({fillColor: '#555555', strokeColor: '#555555'});
    akasakaPolygon.setOptions({fillColor: '#555555', strokeColor: '#555555'});
    asakusaPolygon.setOptions({fillColor: '#555555', strokeColor: '#555555'});
    ginzaPolygon.setOptions({fillColor: '#555555', strokeColor: '#555555'});
    nihonbashiPolygon.setOptions({fillColor: '#555555', strokeColor: '#555555'});
    var nhoodobj = neighbourhoods[name.toLowerCase()]; 
    console.log(nhoodobj);
    nhoodobj.polygon.setOptions({fillColor: '#FF0000', strokeColor: '#FF0000'});
    map.panTo(nhoodobj.center);
     map.panBy(-200, 0);

    //strokeColor: '#FF0000',
    //strokeOpacity: 0.8,
    //strokeWeight: 1,
    //fillColor: '#FF0000',
    //fillOpacity: 0.35
    
}





