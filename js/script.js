$(document).ready( function () {
	console.log('Wleonproduction@gmail.com  Miami Florida');

	//SCRIPT ADD ITEM 
	$('.add-item, .add-qty').keydown(function(e) {
		if (e.which == 13) {
			//console.log('pressed enter')
			var listitem = $('.add-item').val();
			var listqty = $('.add-qty').val();
			$('.clear').show();
			$('.item').show();
			$('.item .name').html(listitem) 
			$('.item .quantity').html(listqty); 
			$('.item').val(listitem + listqty)
			$('.items').prepend($('.item'));

			//$('.item .name').html(listitem) + $('.item .quantity').html(listqty)
		} 
	});// END SCRIPT ADD-ITEM & ADD-QTY

	// ClICK ON ITEM
	$('.item').click( function(){
		//console.log('clicked element');
		$(this).css('background-color','#61F075').css('margin', '-0.5% 31% 3% 29%')
		.css('box-shadow', '5px 5px 3px #000')
		.css('-o-box-shadow', '5px 5px 3px #000')
		.css('-webkit-box-shadow', '5px 5px 3px #000')
		.css('-moz-box-shadow', '5px 5px 3px #000');
	});
	// END CLICK ON ITEM

	//UNCLICKED ON CLICKED ITEM
	
	//END ON UNCLIKED ITEM

	// CLEAR BUTTON
	$('.clear').click(function() {
		$('.items li').detach();
		$('.clear').hide();
	});
	// END OF CLEAR BUTTON



}); // END OF DOCUMENT SCRIPT