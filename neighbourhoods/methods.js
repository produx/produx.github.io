var destinationStr
var destinationObj 
var neighbourhoodContent 
var landmarkStr;
var landmarkList;


//page load stuff 
$(function(){

    $('select').on('change', function() {
        openNeighbourhood($(this).find('option:selected').text())
        var nhoodobj = neighbourhoods[$(this).find('option:selected').text().toLowerCase()]
        addNeighbourhoodPolygon(nhoodobj.center)
    });

    $('#showNHoods').change(function() {
        if($(this).is(":checked")) {
            showMarkers();
            showPolygons();
            $("#neighbourhood-wrapper").show();
            $("#hotel-card").hide();
        } else {
            clearMarkers();
            //clearPolygons();
            $("#neighbourhood-wrapper").hide();
        }       
    });
})


var fetchHotels = function(){

    destinationStr = getParameterByName("destination");
    destinationObj = getObjects(destination, 'str', destinationStr); 
    neighbourhoodContent = content[destinationObj[0].val];

    displayNeighbourhoods(neighbourhoodContent);
    
    if (getParameterByName("destination")) {
        
        $.each(neighbourhoodContent, function(i, nhoods) { 
            fetchHotelListNeighbourhood(destinationStr, nhoods.nid, displayHotels);
        });

        initializeMap(destinationStr, destinationObj[0]);
                    //display loading message
        $("#loading-hotels").show();
    } else {
        initializeMap("Tokyo, Japan");
    }
}

var fetchContent = function(){
    destinationStr = getParameterByName("destination");
    destinationObj = getObjects(destination, 'str', destinationStr); 
    neighbourhoodContent = content[destinationObj[0].val];
    

    //console.log(neighbourhoodContent);
    displayNeighbourhoods(neighbourhoodContent);
};

var buildMapAndContent = function(){
    destinationStr = getParameterByName("destination");
    destinationObj = getObjects(destination, 'str', destinationStr); 
    neighbourhoodContent = content[destinationObj[0].val];

    landmarkList = landmarks[destinationObj[0].val];
    console.log(landmarkList)
    displayNeighbourhoods(neighbourhoodContent);
    displayLandmarkContent(landmarkList);
    initializeMap(destinationStr, destinationObj[0]);
    
};

var getNeighbourhoodHotels =function(){
    var destStr = getParameterByName("destination");
    var destObj = getObjects(destination, 'str', destinationStr);
    var hoodContent = content[destinationObj[0].val];

    $.each(hoodContent, function(i, hoods) {
        console.log(hoods.nid)
        fetchHotelListNeighbourhood(destinationStr, hoods.nid, displayHotelPins)
    })
    

}

var displayHotels = function (data) {
                // hide loading message
                //$("#loading-hotels").hide();
            console.log("i go in here")
                var hotels = data.result.hotels;
                //console.log(data.result.hotels[0]);
                $.each(hotels, function(i, hotel) { 
                    var point = new google.maps.LatLng(hotel.lat, hotel.lon);
                    //console.log(hotel)
                    var marker = new google.maps.Marker({
                        position: point,
                        map: map, 
                        title: hotel.hotelName,
                        icon: "map-pin-red.png"
                    });

                    google.maps.event.addListener(marker, 'click', function () {
                            // do something with this marker ...
                            //this.setTitle('I am clicked');
                            console.log(hotel);
                            //openNeighbourhood(name);
                            //clearMarkers();
                            //clearPolygons();
                            $("#neighbourhood-wrapper").hide();
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
                            $('#showNHoods').prop('checked', false);
                    });
                });

                
            //pointsrand.push(point);
                  
                
                
            }

var openNeighbourhood = function(nhood){
    console.log("opn neighbourhood"); 
    $("#neighbourhoods .card").hide();
    $("#neighbourhoods #" + nhood).show();
    //$("#neighbourhoods").slideDown();
    
    $("select option").filter(function() {
        //may want to use $.trim in here
        return $(this).text() == nhood; 
    }).prop('selected', true);

}


