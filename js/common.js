jQuery(function() {
	jQuery(document).ready(function() {
		// header-search toggle
		$('.header__search-toggle').click(function() {
			var $th = $(this);
			$th.closest('.header__inner')
				.toggleClass('mob-search-open')
			$th.addClass('active');
			
			setTimeout(function() {

				$th.removeClass('active');
			}, 500)
		});

	});
	// END header-search toggle

	// toggle icon anim
		$('.acordeon-link').click(function(e) {
			e.preventDefault();
			var $th = $(this),
					$currentItem = $th.closest('.acordeon-item'),
					$toggleIcon = $th.find('.list-lesson__icon');

			
			$toggleIcon.addClass('active');
			

			if($currentItem.hasClass('acordeon-item-with-sublist')){
				$currentItem.toggleClass('active')

				$currentItem.find('.acordeon-sublist')
				.stop(true, true)
				.slideToggle(100);
				// $currentItem.siblings()
				// .find('.acordeon-sublist')
				// .stop(true, true)
				// .slideUp();
				setTimeout(function() {
					$toggleIcon.removeClass('active');
				}, 500)

			}else{
				return;
			}
		});

	// END toggle icon anim

	// scroll to sections
	if($('.contents-course__nav').length > 0){

		$('.contents-course__anchor a').click(function(e){
			e.preventDefault();
			$(this).closest('.contents-course__anchor')
				.addClass('active')
				.siblings()
				.removeClass('active');

			var location = $(this).attr('href'), //секция с id, равным href текущей ссылки
			sectionCoord = $(location).offset().top - $('.header').height() ;
			docScroll(sectionCoord);
		});
		// END scroll to sections

		// up button handler
			var $navTabsTop = $('.contents-course__nav').offset().top,
					headerHeight = $('.header').height(),
					$toUpBtn = $('.btn-up');
			
			$(window).scroll(function() {
				if($(this).scrollTop() > $navTabsTop - headerHeight - 20){
					$toUpBtn.addClass('reverse');
				}else{
					$toUpBtn.removeClass('reverse');
				}

			});

			$toUpBtn.click(function() {
				var contentTarget = $('#contents').offset().top - $('.header').height(),
						coordTop;
				
				if(!$(this).hasClass('reverse')){
					coordTop = contentTarget
				}else{
					coordTop = 0
				}
				docScroll(coordTop);
			});
		// ENDup button handler

		function docScroll(sectionCoord) {
				$('html, body').animate({scrollTop: sectionCoord}, 800);
		}
	}
	
});

$(window).load(function() {
	
});
