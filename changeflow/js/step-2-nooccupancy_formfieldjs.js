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

				var day2 = parseInt(cid) + 1 ; 
				if (day2 < 10) {
					day2 = "0" + day2.toString();
				} 


				$(".ci").text(cid + " " + cim + ", 2018"); 
				$(".co").text(cod + " " + com + ", 2018");


				$(".ci-date").text(cid + " " + cim + ", 2018");

				$(".co-date").text(day2 + " " + com + ", 2018");
				
				if (fnameold != fnamenew) {
					$(".f-name .old").text(fnameold);
					$(".f-name .new").text(fnamenew);
					$(".f-name .value").css("background-color", "#fefdca")
				} else {
					$(".f-name .new").text(fnameold);
				}
				

				if (lnameold != lnamenew) {
					$(".l-name .old").text(lnameold);
					$(".l-name .new").text(lnamenew);
					$(".l-name .value").css("background-color", "#fefdca")
				} else {
					$(".l-name .new").text(lnameold);
				}

				// select
				$( "select" ).change(function() {
  					$("#rates").hide();
  					$("#update").show();
				});

				$("#update button").click(function(){
					$("#update").hide();
					$("#rates").show();
				});

				$("#submit button").click(function(){
					window.location.href = "step3noavailoccupancy.html?fnameold=" + fnameold + "&fnamenew=" + fnamenew + "&lnameold=" + lnameold + "&lnamenew=" + lnameold  + "&cid=" + cid + "&cim=" + cim + "&cod=" + cod + "&com=" + com;
				})

			});