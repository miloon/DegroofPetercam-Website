$(document).ready(function () {
	$(function () {
		var heightEligibility = $('#eligibility').height();
		var heightEvaluation = $('#evaluation').height();
		var maxHeight;
		if(heightEligibility >= heightEvaluation){
			maxHeight = heightEligibility
		} else {
			maxHeight = heightEvaluation;
		}
		$('#eligibility').height(maxHeight);
		$('#evaluation').height(maxHeight);
	});

	$(".carousel").swipe({

	  swipe: function(event, direction, distance, duration, fingerCount, fingerData) {

	    if (direction == 'left') $(this).carousel('next');
	    if (direction == 'right') $(this).carousel('prev');

	  },
	  allowPageScroll:"vertical"

	});

});