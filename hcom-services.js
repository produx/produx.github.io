
var fetchHotelList = function (destination, cb){
	var url = buildSearchUrl(destination);

	console.log("fetch list")

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
	console.log("fetch hotel details");
  console.log(id);

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
ciMonth = "9";
ciDay = "4";
coMonth = "9";
coDay = "8";

var destination = (!getParameterByName("destination")) ? 'London' : getParameterByName("destination");
var numAdults = (!getParameterByName("numAdults")) ? '2' : getParameterByName("numAdults");
var numChildren = (!getParameterByName("numChildren")) ? '0' : getParameterByName("numChildren");



var buildSearchUrl = function(destination) {

      var qStr = ""
    // build query string
      qStr += 'destination='+destination
      qStr += '&cur='+ currency 
      qStr += '&monthCheckIn='+ciMonth+'&dayInMonthCheckIn='+ciDay+'&monthCheckOut='+coMonth+'&dayInMonthCheckOut='+coDay;
      qStr +='&r=1' 
      qStr += '&roomInfoList[0].numberOfAdults=' + numAdults;
      qStr += '&roomInfoList[0].numberOfChildren=' + numChildren;
      //qStr += '&roomInfoList[0].childrenAges[0]=9';
      qStr += '&na=os%3DFacebook%7Ccv%3D1171%7Csv%3D2%7Cid%3DCFUUID9BC82AC4A123485586F5F6AFEF2084E0'

      // create API URL
      var url = '/api/' + pos + '/search.html?'+qStr;

      return url;
    }

function buildHotelDetailsUrl(id) {

  // build query string
  var qStr = 'hotelId='+ id + '&cur='+ currency + '&monthCheckIn=' + ciMonth + '&dayInMonthCheckIn=' + ciDay + '&monthCheckOut=' + coMonth + '&dayInMonthCheckOut=' + coDay + '&rooms[0].numberOfAdults=2&roomno=1&reviewOrder=date_newest_first&na=os%3DFacebook%7Ccv%3D1171%7Csv%3D2%7Cid%3DCFUUID9BC82AC4A123485586F5F6AFEF2084E0'
  
  var qStr1 = ""

  qStr1 += 'hotelId='+ id;
  qStr1 += '&cur='+ currency;
  qStr1 += '&monthCheckIn=' + ciMonth;
  qStr1 += '&dayInMonthCheckIn=' + ciDay;
  qStr1 += '&monthCheckOut=' + coMonth;
  qStr1 += '&dayInMonthCheckOut=' + coDay;
  qStr1 += '&roomno=1';
  qStr1 += '&rooms[0].numberOfAdults=' + numAdults;
  qStr1 += '&children[0]=' + numChildren;
  qStr1 += '&reviewOrder=date_newest_first&na=os%3DFacebook%7Ccv%3D1171%7Csv%3D2%7Cid%3DCFUUID9BC82AC4A123485586F5F6AFEF2084E0'


  // create API URL  
  var url = '/api/'+ pos +'/hotelDetails.html?' + qStr1;
  console.log(url);

  return url;
}


function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

