$(document).ready( function(){
    $('#text').click( function() {
    	var len = $('#length')
        $(this).toggleClass("highlighted");
        $('#sum').html('len');
    });
});