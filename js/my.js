$(document).ready( function(){
    $('#text').click( function() {
    	var len = $('#length').var()
        $(this).toggleClass("highlighted");
        $('#sum').text(len);
    });
});