 $(function() {

 // Button active
	$('.menu-opener').on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('menu-btn_active');
	});
// Menu Opener
	$('.menu-opener').click(function(e) {
		e.preventDefault();
		$('.menu-collaps').toggleClass('d-none').css('order', '1');
		$('.main-menu').toggleClass('menu-active');
	});
// Menu closed
	

	// Preloader
	var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.cssload-preloader');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');

    // Pop Windos
	$('.call').click(function() {
		$('#exampleModal').arcticmodal();
	});

	// Slow Scroll
	$("a.go").click(function (e) {
		e.preventDefault();
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 800);
	});   

	// slider

  $('.slider').slick({
  	dots:true,
  	prevArrow:'<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
  	nextArrow:'<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>'
  });
	
		
});