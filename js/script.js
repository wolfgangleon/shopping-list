$(document).ready( function () {
	console.log('Wleonproduction@gmail.com  Miami Florida');

	//SCRIPT ADD ITEM\ 
	$('.add-item, .add-qty').keydown(function(e) {
		if (e.which == 13) {
			//console.log('pressed enter')
			var  listname = $('.add-item').val();
			var  listqty = $('.add-qty').val();
			$('.clear').show();
			$('.items').prepend('<li class="item"><span class="name">'+listname+'</span><span class="quantity">'+listqty+'</span><div class="controls"><img class="delete" src="images/x.png" alt=""></div></li>'); 
		} 
	});// END SCRIPT ADD-ITEM & ADD-QTY

	// ClICK ON ITEM
	$('.items .item').click( function() {
    	$( this ).toggleClass( 'clicked' );
	});
	// END CLICK ON ITEM

	// CLEAR BUTTON
	$('.clear').click(function() {
		$('.item').detach();
		$('.clear').hide();
	});
	// END OF CLEAR BUTTON



}); // END OF DOCUMENT SCRIPT