$(window).on('scroll', function() {
	console.log()
	if ($('html').scrollTop() >= "120") {
		$('.ui-header.sticky').css({
			'display': 'flex'
		})
	} else if ($('html').scrollTop() < "120") {
		$('.ui-header.sticky').css({
			'display': 'none'
		})
	}
})

setInterval(function() {
	const activeSlide   = $('.ui-slide.active')
	const nextSlide     = activeSlide.next('.ui-slide')
	const firstSlide    = $('.ui-slide').first()
	console.log(nextSlide.length)

	if (nextSlide.length > 0) {
		activeSlide.removeClass('active')
		nextSlide.addClass('active')
	} else {
		activeSlide.removeClass('active')
		firstSlide.addClass('active')
	}
},4000)