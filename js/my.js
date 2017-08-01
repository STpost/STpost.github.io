$(document).ready( function(){
    $('#text').click( function() {
    	var len = $('#length').prop('value')
    	alert(len);
        $('#total').val(len);
    });
});