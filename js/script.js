$(document).ready( function () {
	console.log('Wleonproduction@gmail.com  Miami Florida');

	//SCRIPT ADD ITEM\ 
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
			
			//$('.item .name').html(listitem) + $('.item .quantity').html(listqty)
		} 
	});// END SCRIPT ADD-ITEM & ADD-QTY

	// ClICK ON ITEM
	$('.item').click(function() {
    	$( this ).toggleClass( 'clicked' );
	});
	// END CLICK ON ITEM

	// CLEAR BUTTON
	$('.clear').click(function() {
		$('.items li').detach();
		$('.clear').hide();
	});
	// END OF CLEAR BUTTON



}); // END OF DOCUMENT SCRIPT