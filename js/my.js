$(document).ready( function(){
    $('#calc').click( function() {
    	var len = $('#length').attr('value')
    	alert("This should alert");
        $('#total').val(len);
    });
});