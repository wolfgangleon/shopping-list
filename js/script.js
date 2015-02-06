$(document).ready( function () {
	console.log('Wleonproduction@gmail.com  Miami Florida');

	//SCRIPT ADD ITEM\ 
	
	$('.add-item, .add-qty').keydown(function(e) {
		if (e.which == 13) {
			//console.log('pressed enter')

			if ( $('.add-item').val()=='' ) {	
				alert('Please add an item first');
				$('.add-item, .add-qty').val('');
				return false;};

			var  listname = $('.add-item').val();
			var  listqty = $('.add-qty').val();
			$('.clear').show();
			$('.items').prepend('<li class="item"><span class="name">'+listname+'</span><span class="quantity">'+listqty+'</span><div class="controls"><img class="delete" src="images/x.png" alt=""></div></li>'); 
			$('.add-item, .add-qty').val('');
		} 
	});// END SCRIPT ADD-ITEM & ADD-QTY

	//DELETE SPECIFIC ITEM
	$('.items').on('click', '.delete',function(){
		$(this).parent().parent().remove();
	}); //END DELETE SCPCIFIC ITEM

	// ClICK ON ITEM
	$('.items').on( "click", ".item", function() {
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