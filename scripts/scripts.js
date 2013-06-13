$(document).ready(function(){
	$("#main").hide();

	$('#button').click(function(event) {

		var noun1 = $('#noun1').val();

		$('#nounplace1').append(noun1);

		$("#main").show();
		$("#container").hide();
		return false;


    });
});