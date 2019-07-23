




var fetchHotelList = function (destination, cb){
	var url = buildSearchUrl(destination);

	console.log("getting list");

	$.ajax({
  		dataType: "json",
  		url: url,
  		success: cb,
      //success: function (response) {
        //console.log(response)
        //displayFilters(response);
      //},
      error: function (xhr, ajaxOptions, thrownError) {
        alert(xhr.status);
        alert(thrownError);
      }
	});

}

var fetchHotelListNeighbourhood = function (destination, nid, cb){
  var url = buildSearchNeighbourhoodUrl(destination, nid);

  console.log(url)

  $.ajax({
      dataType: "json",
      url: url,
      success: cb,
      /*success: function (response) {
        console.log(response)
      }, */
      error: function (xhr, ajaxOptions, thrownError) {
        alert(xhr.status);
        alert(thrownError);
      }
  });

}

var fetchHotelListDestinationID = function (destinationID, cb){
  var url = buildSearchNeighbourhoodUrl(destinationID);

  console.log(url)

  $.ajax({
      dataType: "json",
      url: url,
      success: cb,
      /*success: function (response) {
        console.log(response)
      }, */
      error: function (xhr, ajaxOptions, thrownError) {
        alert(xhr.status);
        alert(thrownError);
      }
  });

}

var fetchHotelDetails = function (id, cb){
	var url = buildHotelDetailsUrl(id);
  //var url = "http://localhost:8899/device/hotelDetails.html?hotelId=" + id + "&na=os%3DFacebook%7Ccv%3D1171%7Csv%3D2%7Cid%3DCFUUID9BC82AC4A123485586F5F6AFEF2084E0"
	//console.log("fetch hotel details");
  console.log(url);

	$.ajax({
  		dataType: "json",
  		url: url,
  		success: cb,
      error: function (xhr, ajaxOptions, thrownError) {
        alert(xhr.status);
        alert(thrownError);
      }
	});
}


// set search parameters 
var currency = "GBP";
var pos = "uk";

// Check in check out dates
ciMonth = "5";
ciDay = "20";
coMonth = "5";
coDay = "21";

var destination = (!getParameterByName("destination")) ? 'London' : getParameterByName("destination");
var numAdults = (!getParameterByName("numAdults")) ? '2' : getParameterByName("numAdults");
var numChildren = (!getParameterByName("numChildren")) ? '0' : getParameterByName("numChildren");



var buildSearchUrl = function(destination) {
     console.log(ciDates())
      var qStr = ""
    // build query string
      qStr += 'destination='+ destination
      qStr += '&cur='+ currency 
      qStr += '&pn=1';
      //qStr += '&monthCheckIn='+ciMonth+'&dayInMonthCheckIn='+ciDay+'&monthCheckOut='+coMonth+'&dayInMonthCheckOut='+coDay;
      qStr += ciDates();
      qStr +='&r=1' 
      qStr += '&roomInfoList[0].numberOfAdults=' + numAdults;
      qStr += '&roomInfoList[0].numberOfChildren=' + numChildren;
      
      //qStr += '&roomInfoList[0].childrenAges[0]=9';
      qStr += '&na=os%3DFacebook%7Ccv%3D1171%7Csv%3D2%7Cid%3DCFUUID9BC82AC4A123485586F5F6AFEF2084E0';
      

      // create API URL
      var url = '/api/' + pos + '/search.html?'+qStr;
      //console.log(url);
      console.log(url);
      return url;
    }


buildSearchNeighbourhoodUrl = function(destination, nid) {
      var qStr = ""
      // build query string
      qStr += 'destination='+ destination
      qStr += '&cur='+ currency 
      qStr += '&pn=1';
      //qStr += '&monthCheckIn='+ciMonth+'&dayInMonthCheckIn='+ciDay+'&monthCheckOut='+coMonth+'&dayInMonthCheckOut='+coDay;
      qStr += ciDates();
      qStr +='&r=1' 
      qStr += '&roomInfoList[0].numberOfAdults=' + numAdults;
      qStr += '&roomInfoList[0].numberOfChildren=' + numChildren;
      qStr += '&nids=' + nid; 
      //qStr += '&roomInfoList[0].childrenAges[0]=9';
      qStr += '&na=os%3DFacebook%7Ccv%3D1171%7Csv%3D2%7Cid%3DCFUUID9BC82AC4A123485586F5F6AFEF2084E0';
      

      // create API URL
      var url = '/api/' + pos + '/search.html?'+qStr;
      //console.log(url);

      return url;
}

buildDestinationIDUrl = function(lat, lng) {
      var qStr = ""
      // build query string
      qStr += 'rl=CITY:'+ destination + "%3AUNKNOWN%3AUNKNOWN"
      //CITY:1634640:SRS:UNKNOWN
      qStr += '&cur='+ currency 
      qStr += '&pn=1';
      //qStr += '&monthCheckIn='+ciMonth+'&dayInMonthCheckIn='+ciDay+'&monthCheckOut='+coMonth+'&dayInMonthCheckOut='+coDay;
      qStr += ciDates();
      qStr +='&r=1' 
      qStr += '&roomInfoList[0].numberOfAdults=' + numAdults;
      qStr += '&roomInfoList[0].numberOfChildren=' + numChildren;
      //qStr += '&roomInfoList[0].childrenAges[0]=9';
      qStr += '&na=os%3DFacebook%7Ccv%3D1171%7Csv%3D2%7Cid%3DCFUUID9BC82AC4A123485586F5F6AFEF2084E0';
      

      // create API URL
      var url = '/api/' + pos + '/search.html?'+qStr;
      //console.log(url);

      return url;
}

function buildHotelDetailsUrl(id) {

  // build query string
  var qStr = 'hotelId='+ id + '&cur='+ currency + '&monthCheckIn=' + ciMonth + '&dayInMonthCheckIn=' + ciDay + '&monthCheckOut=' + coMonth + '&dayInMonthCheckOut=' + coDay + '&rooms[0].numberOfAdults=2&roomno=1&reviewOrder=date_newest_first&na=os%3DFacebook%7Ccv%3D1171%7Csv%3D2%7Cid%3DCFUUID9BC82AC4A123485586F5F6AFEF2084E0'
  
  var qStr1 = ""

  

  qStr1 += 'hotelId='+ id;
  qStr1 += '&cur='+ currency;
  qStr1 += ciDates();
  qStr1 += '&roomno=1';
  qStr1 += '&rooms[0].numberOfAdults=' + numAdults;
  qStr1 += '&children[0]=' + numChildren;
  qStr1 += '&reviewOrder=date_newest_first&na=os%3DFacebook%7Ccv%3D1171%7Csv%3D2%7Cid%3DCFUUID9BC82AC4A123485586F5F6AFEF2084E0'


  // create API URL  
  var url = '/api/'+ pos +'/hotelDetails.html?' + qStr1;
  //console.log(url);

  return url;
}


function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var ciDates = function(){
  var today = new Date();
  var cidd = today.getDate();
  var cimm = today.getMonth()+3;
  var codd = today.getDate()+1;
  var comm = today.getMonth()+3;
  
  return "&dayInMonthCheckIn="+ cidd + "&monthCheckIn=" + cimm + "&dayInMonthCheckOut=" + codd + "&monthCheckOut=" + comm;
}

