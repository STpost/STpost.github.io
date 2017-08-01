$(document).ready( function(){
    $('#calc').click( function() {
    	var len = $('#length').attr('value')
    	var wid = $('#width').attr('value')
    	var cos = $('#cost').attr('value')
    	len = len*wid/cost
        $('#total').val(len);
    });
});