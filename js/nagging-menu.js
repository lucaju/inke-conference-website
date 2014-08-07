$(function(){
	
	var menu = $('#menuContainer'),
		pos = menu.offset();

	$(window).scroll(function(){

		if($(this).scrollTop() > pos.top && menu.hasClass('default')){
			menu.fadeOut('fast', function(){
				$(this).removeClass('default').addClass('fixed').fadeIn('fast');
				$('#menuLogo').css( "display", "inline-block" );

			});
		} else if($(this).scrollTop() <= pos.top && menu.hasClass('fixed')){
			menu.fadeOut('fast', function(){
				$(this).removeClass('fixed').addClass('default').fadeIn('fast');
				$('#menuLogo').css( "display", "none" );
			});
		}
	});

});