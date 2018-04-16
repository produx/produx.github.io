function getParameterByName(name) {
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
	results = regex.exec(location.search);
	return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
			// run things on page load
			$(function(){
				var lnameold = getParameterByName('lnameold');
				var lnamenew = getParameterByName('lnamenew');
				var fnameold = getParameterByName('fnameold');
				var fnamenew = getParameterByName('fnamenew');
				var cid = getParameterByName('cid');
				var cim = getParameterByName('cim');
				var cod = getParameterByName('cod');
				var com = getParameterByName('com');
				$(".ci .value").text(cid + "/" + cim + "/2018"); 
				$(".co .value").text(cod + "/" + com + "/2018"); 
				
				if (fnameold != fnamenew) {
					$(".f-name .value").text(fnamenew);
					$(".f-name .value").css("background-color", "#fefdca")
				} else {
					$(".f-name .value").text(fnameold);
				}
				

				if (lnameold != lnamenew) {
					$(".l-name .value").text(lnamenew);
					$(".l-name .value").css("background-color", "#fefdca")
				} else {
					$(".l-name .value").text(lnameold);
				}

				$(".email").text(fnamenew +"."+ lnamenew);
			});