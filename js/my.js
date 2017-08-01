$(document).ready( function(){
    $('#calc').click( function() {
    	var len = $('#length').attr('value')
    	var wid = $('#width').attr('value')
    	var cos = $('#cost').attr('value')
    	var mult = (parseFloat(len)*parseFloat(wid))
    	len = cos/mult
        $('#total').val(len);
    });
});