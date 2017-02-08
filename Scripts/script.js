///functions/////

///Create bookmark w/user input
	var $title = $('#web-title');
	var $url = $('#web-url');

$('#input-fields').on('click',function(e){
	e.preventDefault();
  var newTitle = $title.val();
	var newUrl = $url.val();
  $('.bm-title').text(newTitle);
	$('.bm-url').text(newUrl);
});




///Mark as "read"






////Remove Link from page///





////Delete URl//////
var $deleteBtn = $('delete-button');

$($deleteBtn).on('click', function(e) {
	e.preventDefault();
	$('#side-bar p').remove('<a>');

});


///Disable links//////







///Keep count of links on page////







///Count of read and unread links on page///












//input event listener//
