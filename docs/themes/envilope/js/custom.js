jQuery(document).ready(function ($) {

	if($('.post_searchbar_wrap').length) {
	}

	// On load / resize triggers

	$( window ).resize(function() {
	});

	$('.ca_lightbox-trigger').on('click',function(){


	});

	$('.sign-up-for-email-trigger').on('click',function(event) {
		event.preventDefault();
		if ($('.purchase_or_newsletter_wrap').hasClass('email_form_active')) {
			$('#gform_submit_button_1').trigger('click');
		} else {
			$('.purchase_or_newsletter_wrap').addClass('email_form_active');
		}
	});

	$('.newsletter-gf1-trigger').on('click',function(event) {
		event.preventDefault();
		$(this).closest('.newsletter_wrap').find('.gform_button').trigger('click');
	});


	$(document).bind('gform_post_render', function(){
 		$.each( $('.gform_wrapper'), function( index, $form_wrap ) {
		  	if ($($form_wrap).attr('id') == 'gform_wrapper_1' || $($form_wrap).attr('id') == 'gform_wrapper_2') {
		  		if($($form_wrap).hasClass('gform_validation_error')) {
		  			$($form_wrap).closest('.newsletter_wrap').find('.newsletter-gf1-trigger').addClass('submission_error');
		  			window.scrollTo($($form_wrap).offset().left,$($form_wrap).offset().top - 200);
		  		}
		  	}
		});

 		$.each( $('.gform_confirmation_wrapper'), function( index, $form_wrap ) {
 			if ($($form_wrap).attr('id') == 'gform_confirmation_wrapper_1' || $($form_wrap).attr('id') == 'gform_confirmation_wrapper_2') {
			  	$($form_wrap).closest('.newsletter_wrap').find('.newsletter-gf1-trigger').addClass('submission_confirmed');
			  	window.scrollTo($($form_wrap).offset().left,$($form_wrap).offset().top - 200);
			}
		});
    });

    /*
	function check_if_gf_1_submitted($elem) {
		setTimeout(function($elem){ 
			if ($('#gform_confirmation_wrapper_1').length) {
				$('.newsletter-gf1-trigger').addClass('submission_confirmed');
			} else if ($('#gform_wrapper_1').hasClass('gform_validation_error')) {
				$('.newsletter-gf1-trigger').addClass('submission_error');
			} else {
				check_if_gf_1_submitted();
			}
		}, 250);
	} */

	$('.member_vertical_layout .readmore_trigger').on('click',function(event) {
		event.preventDefault();
		$(this).closest('.description').toggleClass('active');
	});

	/* 
	if($('.hero_slider_row').length) {
		dealWHomeHeroSlider();
	}

	function dealWHomeHeroSlider() {
		$wrapper = $('.hero_slider_row');

		$slides = $('.hero_slider_row .owl-carousel-wrapper .single-media-wrapper');

		$.each( $slides, function($i,$slide) {
			$image_url = $slide.closest('img').attr('src');
			$($slide).css('background','url(' + $image_url + ')');
		}


	}*/


});