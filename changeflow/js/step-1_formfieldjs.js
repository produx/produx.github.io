function getParameterByName(name) {
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
	results = regex.exec(location.search);
	return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
			// run things on page load
			$(function(){

				var lname = getParameterByName('lname');
				var fname = getParameterByName('fname');

				$("#fname").attr("value", fname)
				$("#lname").attr("value", lname)

				// select
				$( "select" ).change(function() {
					$("#rates").hide();
					$("#submit").hide();
					$("#update").show();
				});

				$("#update button").click(function(){
					$("#update").hide();
					$("#submit").show();
					$("#rates-new").show();
				});

				$("#submit button").click(function(){
					window.location.href = "step2.html?fnameold=" + fname + "&fnamenew=" + $("#fname").val() + "&lnameold=" + lname + "&lnamenew=" + $("#lname").val()  + "&cid=" + $("#cid option:checked").val() + "&cim=" + $("#cim option:checked").val() + "&cod=" + $("#cod option:checked").val() + "&com=" + $("#com option:checked").val();
				})

				$('.radio-btn').click(function() {
					$('.room').removeClass("room-selected");
					$(this).filter(':checked').closest('.room').addClass("room-selected");

				});


			});