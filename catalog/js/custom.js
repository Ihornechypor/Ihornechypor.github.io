$(function(){
	$('.catalog-menu a').click(function() {
		$('.catalog-menu a').removeClass('active');
		$(this).addClass('active');
	});
});