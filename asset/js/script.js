$(document).ready(function () {
	var $nav_fixed = $('.header-section .navbar.fixed-top');
	if ($nav_fixed.length > 0) {
		$('body').addClass('has-nav-fixed');
	}
	$('body').scroll(function () {
		($(this).scrollTop() > 200) ? $nav_fixed.addClass('affix') : $nav_fixed.removeClass('affix');
	});
	$(window).on('load', function () {
		$('body').trigger('scroll');
	});
});
