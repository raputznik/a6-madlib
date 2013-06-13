$(document).ready(function(){
	$("#main").hide();

	$('#button').click(function(event) {

		var noun1 = $('#noun1').val();
		var verb1 = $('#verb1').val();
		var noun2 = $('#noun2').val();
		var mood1 = $('#mood1').val();
		var verb2 = $('#verb2').val();
		var noun3 = $('#noun3').val();

		$('#nounplace1').append(noun1);
		$('#verbplace1').append(verb1);
		$('#nounplace2').append(noun2);
		$('#moodplace1').append(mood1);
		$('#verbplace2').append(verb2);
		$('#nounplace3').append(noun3);

		$("#main").show();
		$("#form1").hide();
		return false;


    });
});