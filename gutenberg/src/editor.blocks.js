(function( $ ) {
	'use strict';

	$( window ).load(function() {

		$('script[type="text/javascript/defer"]').each(function(){
			let head = document.getElementsByTagName('head')[0];
			let script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = this.src;
			head.appendChild(script);
		});

	});

})( jQuery );
