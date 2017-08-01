$(document).ready( function(){
    $('#text').click( function() {
    	var len = $('#length').val()
        $(this).toggleClass("highlighted");
        $('#total').val(len);
    });
});