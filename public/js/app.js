const links = document.getElementsByTagName("a");
for (var i = 0; i < links.length; i++) {
	if (links[i].getAttribute("href") === window.location.pathname) {
		links[i].classList.add("active");
	}
}

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

function changeTestimony(req) {
	console.log(req)
	const currentTestimony = $('.ui-testimonial.active')
	const nextTestimony = currentTestimony.next()
	const prevTestimony = currentTestimony.prev()

	if (nextTestimony.length > 0 && req.direction === 'right') {
		currentTestimony.removeClass('active')
		nextTestimony.addClass('active')
	} else {
		currentTestimony.removeClass('active')
		prevTestimony.addClass('active')
	}
}

function showDropdownNav() {
	window.event.target.classList.remove
	$('.dropwon-nav').slideToggle('show')
}