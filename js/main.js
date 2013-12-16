$(window).load(function() {
	// When the page has loaded
	 $('body').css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0});
	
});

$(function(){

	/* Articles Page Tabs */
	$('#tabs').tabs();
	
	/* On Off Button */
	$("input#great").switchButton({
		show_labels: true,
		labels_placement: "left",
		 clear: false,
	});
	
	/* On Off Button */
	$('.rbutton[type="checkbox"]').button('disable');
	
	//plans pricing
	var biggestHeight = 0;

	$('.equal_height').each(function(){
		if($(this).height() > biggestHeight){

			biggestHeight = $(this).height();
		}
	});
	
	$('.equal_height').css('min-height',biggestHeight);

});

$(window).resize(function(){

	//plans pricing
	var biggestHeight = 0;

	$('.equal_height').each(function(){
		if($(this).height() > biggestHeight){

			biggestHeight = $(this).height();
		}
	});
	
	$('.equal_height').css('min-height',biggestHeight);

});

jQuery(function($){
var windowWidth = $(window).width();

$(window).resize(function() {
    if(windowWidth == $(window).width()){
    location.reload();
    return;
    }
});
});

