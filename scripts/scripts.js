$(document).ready(function(){
	$("#main").hide();

	$('#button').click(function(event) {

		var poop = $('#noun1').val();

		$('#nounplace1').append(poop);

		$("#main").show();
			$("#container").hide();


    });
});