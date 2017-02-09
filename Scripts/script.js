///functions/////

function checkFields (){
	$('form input[type="submit"]').prop('disabled', true);
	$('#input-fields').on('keyup', function(){
		if($('#web-title').val() === '' || ($('#web-url').val() === '')){
				$('form input[type="submit"]').prop('disabled',true);
		}else{
				$('form input[type="submit"]').prop('disabled',false);
		}
	})
}

checkFields()





///Create bookmark w/user input
$('#enter-button').on('click', function(e){
	e.preventDefault()
	$('#side-bar').append('<article><h2 class="bm-title">' + 			$('#web-title').val() + '</h2><p class="bm-url"><a href="#">' + $('#web-url').val() + '</a></p><button 	class="read-button">Read</button><button 	class="delete-button">Delete</button></article>');
	var n = $('article').length;
	$('#saved-links').text(n + ' Saved');
});




///Mark as "read"
$('#side-bar').on('click', '.read-button', function(){
	$(this).toggleClass('read');
	var n = $('.read').length;
	$('#read-links').text(n + ' Read');

});

$('#side-bar').each('click', function(){
	$(this).addClass('hover');
}, function (){
	$(this).removeClass('hover');
})



////Delete URl//////
$('#side-bar').on('click', '.delete-button',function() {
	  $(this).parent().remove();
		var n = $('article').length;
		$('#saved-links').text(n + ' Saved');
});
