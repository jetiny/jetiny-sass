(function ($) {

	var clickoutSelector = '[data-fn-clickout]';
	
	$(function(){
		$(document)
			.on('click', function (e) {
				$(clickoutSelector).each(function () {
					if (!this.contains(e.target)) {
						$(this).clickout();
					}
				});
			});
	});

	function handleEventBinding (arrStr) {
		if (!Array.isArray(arrStr)) {
			arrStr = arrStr.split(' ');
		}
		arrStr.forEach(function (name) {
			// Handle event binding
			$.fn[ name ] = function( data, fn ) {
				return arguments.length > 0 ?
					this.on( name, null, data, fn ) :
					this.trigger( name );
			};
		});
	}

	handleEventBinding('clickout');

})($);