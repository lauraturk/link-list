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
checkFields();

$('form input[type="submit"]').on('click', function(e){
	e.preventDefault()
	validateUrl();
	$('#side-bar').append('<article><h2 class="bm-title">' + 			$('#web-title').val() + '</h2><p class="bm-url"><a href="#">' + $('#web-url').val() + '</a></p><button 	class="read-button">Read</button><button 	class="delete-button">Delete</button></article>');
	var n = $('article').length;
	$('#saved-links').text(n + ' Saved');
	$('#clear-all').text('Clear All Buttons');
});



///Mark as "read"
$('#side-bar').on('click', '.read-button', function(){
	$(this).toggleClass('read');
	var n = $('.read').length;
	$('#read-links').text(n + ' Read');

});

////Delete URl//////
$('#side-bar').on('click', '.delete-button',function() {
	  $(this).parent().remove();
		var n = $('article').length;
		$('#saved-links').text(n + ' Saved');
});

/////Clear all bookmarks////
$('#clear-all').on('click', function() {
	$('article').remove();
	var n = $('article').length;
	$('#saved-links').text(n + ' Saved');
})

// function validateUrl (){
// 	var $vldUrl = $('#web-url').val();
// 	var validUrl= ^"(www.)?([a-zA-Z0-9]+).[a-zA-Z0-9]*.[‌a-z]{3}\.([a-z]+)?$";
// 	if vldUrl !== validUrl{
// 	$('#web-url').text('Please Enter Valid URL');
// 	}
// }
