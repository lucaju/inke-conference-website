//----------* INITIAL *---------
$(document).ready(function() {
    resizeWbesite();
    scheduleActions();
    speakerActions()
});

$(window).resize(function() {
	resizeWbesite();
});

//----------* resize *---------
function resizeWbesite() {
	if ($(window).width() <= 640) {
		$("#menu").mmenu();
	}
}

//----------* SCHEDULE *---------
function scheduleActions() {

	//initial
	var initialDay = 18;

	$("#navDay" + initialDay).addClass('active');
	scrollSchedule(initialDay);

	//click
	$( ".navDay").click(function() {
	  	
	  	//deactived any other
	  	$( ".navDay").removeClass('active');

	  	//make it active
	  	$(this).addClass('active');

	  	//define day
	  	var day = $(this).find(".monthDay").html();

	  	scrollSchedule(day);

	});

	function scrollSchedule(day) {
		//scroll
	  	$( "#scheduleContainer" ).animate({
		    top: -$( "#day"+day).position().top
		  }, 700 );

	  	$( "#scheduleMask" ).animate({
		    height: $( "#day"+day).height()
		  }, 700 );
	}
}

//----------* SPEAKERS *---------
function speakerActions() {

	//click
	$("#speakers").find( ".more").click(function() {
	  	
		//close all others
		$(".speaker").find(".speakerBio").css("display","none");
		$(".speaker").find(".more").css("display","block");

		//hide more button
		$(this).css("display","none");

	  	//get speaker ID
	  	var speakerID = $(this).parent().attr('id');
	  	var bio = $("#"+speakerID).find(".speakerBio");

	  	//show speaker bio
	  	bio.css("display","block");

	  	//render grid
	  	renderGrid();

	  	//resize list speakers
	  	$("#listSpeakers").animate({
		    height: $("#listSpeakers")[0].scrollHeight
		  }, 100 );

	  	//scroll to
	  	$('html,body').animate({
		    scrollTop: $(this).parent().offset().top - 50
		  }, 300 );
	  	
	});
}
