$(function(){
	$('.holiday-container, .gallery-image-container').mouseenter(function(){
		$(this).find('.holiday-name-wrapper, .gallery-loop').css('z-index', '6');

	});
	$('.holiday-container, .gallery-image-container').mouseleave(function() {
		$(this).find('.holiday-name-wrapper, .gallery-loop').css('z-index', '2');
	});
	$('.nav.navbar-nav li a').click(function(e) {
		$('.nav.navbar-nav li').removeClass('active');
		$(this).parent().addClass('active');
		$('.navbar-right li').removeClass('active');
	});
	// gallery js
	$('.gallery-menu li a').click(function(e) {
		e.preventDefault();
		$('.gallery-menu li').removeClass('clicked');
		$(this).parent().addClass('clicked');
		if ($(this).hasClass('ging')){
			$('.wrapper').hide(600);
			$('.ginger').show(600);
		} else if ($(this).hasClass('zf')){
			$('.wrapper').hide(600);
			$('.zefir').show(600);
		} else if ($(this).hasClass('cap')){
			$('.wrapper').hide(600);
			$('.cap-cake').show(600);
		} else if ($(this).hasClass('chok')){
			$('.wrapper').hide(600);
			$('.chocolate-cookies').show(600);
		}
		
	});
	// validation js
	$('#customer_order').validate({
		rules: {
			email: {
				required: true,
				email: true,
			}

		},
		messages: {
			email:{
				required: "Это поле обязательно для заполнения",
				email: "Пожалуйста введите корректный email"
			},
		}

	});
	//modal js





});