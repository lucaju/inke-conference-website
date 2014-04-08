function scheduleClick(target) {
	
	var scheduleSection = document.getElementById("schedule");
	var day = target.getElementsByTagName("div")[2].innerHTML;
	
	var actualHeight;
	
	if (day == "18") {
		actualHeight = "500px"
	} else {
		actualHeight = "900px"
	}
	
	 $( "#schedule" ).animate({
	    height: actualHeight
	  }, 700 );

}

//-------* Speaker info *----------

var speakersOpened = false;

$(".more").click(function() {
	
	$('#listSpeakers').fadeOut('fast', function() {

		var speakers;

		if (speakersOpened == false) {

			$('#listSpeakers').removeClass("wrapperSpeakers");

			$('.speakerWrapperClose').removeClass("speakerWrapperClose").addClass("speakerWrapperOpen");
		
			$('.speakerBioClose').removeClass("speakerBioClose").addClass("speakerBioOpen");

			$('.speakerBioExtended').css("display", "block");

			speakers = $('.speakerClose').removeClass("speakerClose").addClass("speakerOpen");

			speakers.each(function(index, element) {
				if (index%2 == 0) {
					$(this).addClass('odd');
				}
			});

			$('.more').html("less");

			speakersOpened = true;

		} else {

			$('#listSpeakers').addClass("wrapperSpeakers");

			$('.speakerWrapperOpen').removeClass("speakerWrapperOpen").addClass("speakerWrapperClose");

			$('.speakerBioClose').removeClass("speakerBioClose").addClass("speakerBioOpen");

			$('.speakerBioExtended').css("display", "none");

			speakers = $('.speakerOpen').removeClass("speakerOpen").addClass("speakerClose");

			speakers.each(function(index, element) {
				if ($(this).hasClass('odd')) {
					$(this).removeClass("odd")
				}
			});

			$('.more').html("more");

			$('html, body').animate({
		        scrollTop: $("#speakers").offset().top
		    }, 700);

			speakersOpened = false;
		}

		$('#listSpeakers').fadeIn('fast');
	})

	

});


//----------* resize *---------
$(window).resize(function(){

  if ($(window).width() < 1000) {
  
  		 //info
         $('#featImg1').removeClass('img').addClass('imgSmall');
         $('#featImg2').removeClass('img').addClass('imgSmall');
         
    } else {
    
    	 //info
    	$('#featImg1').removeClass('imgSmall').addClass('img');
	    $('#featImg2').removeClass('imgSmall').addClass('img');
	}
    
    
});