$(document).ready( function(){
    $('#calc').click( function() {
    	var len = $('#length').attr('value')
    	var wid = $('#width').attr('value')
    	var cos = $('#cost').attr('value')
    	len = parseFloat(len)*parseFloat(wid)/parseFloat(cos)
        $('#total').val(len);
    });
});