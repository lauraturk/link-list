///functions/////

///Create bookmark w/user input
$('#enter-button').on('click', function(e){
	e.preventDefault();
	$('#side-bar').append('<article><h2 class="bm-title">' + $('#web-title').val() + '</h2><hr><p class="bm-url"><a href="#">' + $('#web-url').val() + '</a></p><hr><button class="read-button">Read</button><buttonclass="delete-button">Delete</button></article>');
	var n = $('article').length;
	$('#saved-links').text(n + ' Links Saved');
		});





///Mark as "read"
$('#side-bar').on('click', '.read-button', function(){
	$(this).toggleClass('read');
	// var targetBtn = $(event.target);
	// targetBtn.toggleClass('.read');
});





////Remove Link from page///





////Delete URl//////





///Disable links//////







///In the click event function: Keep count of links on page////







///Count of read and unread links on page///












//input event listener//
// $('#input-fields').on('click',function(e){
// 	$webTitle =
// 	$(this.#web-title).val();
// 	$(this.#web-url).val();
// });
