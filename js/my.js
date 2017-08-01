$(document).ready( function(){
    $('#calc').click( function() {
    	var len = $('#length').attr('value')
    	alert(len);
        $('#total').val(len);
    });
});