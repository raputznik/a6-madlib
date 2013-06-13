jQuery(document).ready(function($) {
	$("#response").hide();

	$('#button').click(function(event) {

	var noun1 = $(#noun1).val();

	$('#nounplace1').append(noun1);

	$("#response").show();

    });
});