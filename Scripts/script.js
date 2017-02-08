///functions/////

///Create bookmark w/user input






///Mark as "read"
$('.read-button').on('click',function(event){
	var targetBtn = $(event.target);
	targetBtn.toggleClass('read');
});





////Remove Link from page///





////Delete URl//////





///Disable links//////







///Keep count of links on page////

$('#saved-links').prepend($('article').length + ' ');





///Count of read and unread links on page///












//input event listener//
// $('#input-fields').on('click',function(e){
// 	$webTitle =
// 	$(this.#web-title).val();
// 	$(this.#web-url).val();
// });
