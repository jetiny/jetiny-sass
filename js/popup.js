(function ($) {

	var popupToggleSelector = '[data-popup-toggle]';

	$(function () {
		$(document)
			.on('click', popupToggleSelector , function(){
				$(this).closest('.popup').toggleClass('open');
			})
			.on('clickout', function(e){
				var $el = $(e.target);
				if ($el.hasClass('popup')) {
					$el.removeClass('open');
				}
			})
			.on('focus', '.popinput>input', function(){
				$(this).closest('.popup').addClass('open');
			})
			.on('blur', '.popinput>input', function(e) {
				$(e.target).closest('.popup').removeClass('open');
			})
			;
	});

})($);