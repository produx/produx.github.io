
// Global vars
var numrooms = 0;
var selectedRate = "";
var totalPrice = 0;



$(function(){
	// attach events on load
	$("#photo a").on("click", function(e){
		e.preventDefault();
		$("#overlay").show();
		$("body").addClass("disable");
	}); 

	$("#overlay").on("click", function(){
		$(this).hide(); 
		$("body").removeClass("disable");
	}); 

	$("#rooms .room .description a").on("click", function(e){
		e.preventDefault();
		console.log("description")
		$("#overlay-room").show();
		$("body").addClass("disable");
	});

	$("#overlay-room .title a").on("click", function(e){
		e.preventDefault();
		$("#overlay-room").hide();
		$("body").removeClass("disable");
	}); 

	$(document).click(function(){
    	$(".rate-occupancy-list").hide();
	});

	$(".rate-occupancy-list").click(function(e){
    	e.stopPropagation();
	});

	$(".rate-options").on("click", function(e){
		e.preventDefault();
		e.stopPropagation();
		selectedRate = $(this).attr("rel");
		$("#"+selectedRate).show();
	}); 

	$(".rate-occupancy-list > div").on("click", function(e){
		$(".rate-options-wrapper ." + selectedRate + " .price").text($(this).find(".r-price").text());
		$(".rate-options-wrapper ." + selectedRate + " .occupancy").text($(this).find(".r-occupancy").text());
		$("#" + selectedRate).hide();
	});

	// Add to basket 
	$("button.add").on("click", function(e){
		$("#basket").slideDown();
		numrooms = numrooms + 1;
		//$("#basket .num-rooms").text(numrooms.toString());
		var rateId = $(this).attr("rel");
					
		// get room + rate details
		var price = $(".rate-options-wrapper ." + rateId + " .price").text().substring(1); 
		var roomName = $(this).closest(".room").find(".description .room-name").text(); 
		var occupancy = $(".rate-options-wrapper ." + rateId + " .occupancy").text();

		//var p = price.substring(1); 
		totalPrice = totalPrice + parseInt(price); 

		var selectedRateDetails = '<div class="rate-selected">1 x <span class="room">'+ roomName +'</span> - <span class="occupancy">' + occupancy + '</span> <span class="price">' + price +'</span> <a href="#" class="remove">x</a></div>';

		$(".rooms-selected").append(selectedRateDetails);
					
		$("#basket .total-price").text("$"+totalPrice.toString());
		var roomAdded = $(this).closest(".room").attr("rel")
		var getNumRoomsAdded = $(".rooms-selected #" + roomAdded + " .number").text();
					
		var totalRoomsAdded = parseInt(getNumRoomsAdded) + 1; 
		$(".rooms-selected #" + roomAdded + " .number").text(totalRoomsAdded.toString());
		$(".rooms-selected #" + roomAdded).show();

	}); 

	// Remove from basket 
	$(".rooms-selected").on("click", "a.remove", function(e){
		e.preventDefault();
		var price = $(this).closest(".rate-selected").find(".price").text();
			 		
		totalPrice = totalPrice - parseInt(price);

		if (totalPrice == 0){
			$("#basket").slideUp();
			$(this).closest(".rate-selected").remove();
		} else {
			$(this).closest(".rate-selected").fadeOut();
		}
			 		
		$("#basket .total-price").text("$"+totalPrice.toString());
	}); 

	// not sure if thsi is needed
	$("#basket a.edit").on("click", function(e){
		e.preventDefault(); 
		$("#basket-modal").show();
	}); 

	// note sure if this is needed
	$("#basket-modal a.close").on("click", function(e){
		e.preventDefault();
		$("#basket-modal").hide();
	}); 

})


// shared functions 

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
       	results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}