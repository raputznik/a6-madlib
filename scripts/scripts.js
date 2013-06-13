$(document).ready(function(){
	$("#main").hide();

	$('#button').click(function(event) {

		var noun1 = $('#noun1').val();
		var noun2 = $('#noun2').val();
		var verb1 = $('#verb1').val();

		$('#nounplace1').append(noun1);
		$('#verblace1').append(verb1);
		$('#nounplace2').append(noun2);

		$("#main").show();
		$("#form1").hide();
		return false;


    });
});