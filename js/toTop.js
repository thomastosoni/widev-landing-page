$(document).ready(function() {
	var defaults = {
		containerID: 'moccaUItoTop', // fading element id
		containerHoverClass: 'moccaUIhover', // fading element hover class
		scrollSpeed: 600,
		easingType: 'linear'
	};
	$().UItoTop({ easingType: 'easeOutQuart' });
});
