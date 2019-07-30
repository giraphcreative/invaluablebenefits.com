

// on load
$(document).ready(function(){

	setInterval( function(){
		var current_slide = $('.slide:visible');
		var next_slide = current_slide.next('.slide:hidden');
		if ( typeof( next_slide.html() ) == 'undefined' ) {
			var next_slide = $('.slide:first-child');
		}
		current_slide.hide();
		next_slide.show();
	}, 30000 );

});

