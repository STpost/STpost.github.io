$(document).ready( function(){
    $('#calc').click( function() {
    	var len = $('#length').attr('value')
    	var wid = $('#width').attr('value')
    	var cos = $('#cost').attr('value')
    	len = parseFloat(cos)/(parseFloat(len)*parseFloat(wid))
        $('#total').val(len);
    });
});