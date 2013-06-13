jQuery(document).ready(function($) {

	// alert(getParameterByName('first_name'));
	// alert(getParameterByName('last_name'));
	if(getParameterByName('noun') !=undefined);
	{

		console.log("we have info to show");
		var name = getParameterByName('noun');
		var last = getParameterByName('verb1');
		var url = getParameterByName('image');

		$('#information').html('<p1>' + name + ' went to town and ' + last + '</p1>');
		$('#information').append('<img src="' + url + '"/>')
	}

});


function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }