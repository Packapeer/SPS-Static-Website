AOS.init({
	duration: 800,
	easing: 'slide',
	once: true
});

jQuery(document).ready(function ($) {

	"use strict";



	var siteMenuClone = function () {

		$('.js-clone-nav').each(function () {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function () {

			var counter = 0;
			$('.site-mobile-menu .has-children').each(function () {
				var $this = $(this);

				$this.prepend('<span class="arrow-collapse collapsed">');

				$this.find('.arrow-collapse').attr({
					'data-toggle': 'collapse',
					'data-target': '#collapseItem' + counter,
				});

				$this.find('> ul').attr({
					'class': 'collapse',
					'id': 'collapseItem' + counter,
				});

				counter++;

			});

		}, 1000);

		$('body').on('click', '.arrow-collapse', function (e) {
			var $this = $(this);
			if ($this.closest('li').find('.collapse').hasClass('show')) {
				$this.removeClass('active');
			} else {
				$this.addClass('active');
			}
			e.preventDefault();

		});

		$(window).resize(function () {
			var $this = $(this),
				w = $this.width();

			if (w > 768) {
				if ($('body').hasClass('offcanvas-menu')) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function (e) {
			var $this = $(this);
			e.preventDefault();

			if ($('body').hasClass('offcanvas-menu')) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		})

		// click outisde offcanvas
		$(document).mouseup(function (e) {
			var container = $(".site-mobile-menu");
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				if ($('body').hasClass('offcanvas-menu')) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		});
	};
	siteMenuClone();


	var sitePlusMinus = function () {
		$('.js-btn-minus').on('click', function (e) {
			e.preventDefault();
			if ($(this).closest('.input-group').find('.form-control').val() != 0) {
				$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
			} else {
				$(this).closest('.input-group').find('.form-control').val(parseInt(0));
			}
		});
		$('.js-btn-plus').on('click', function (e) {
			e.preventDefault();
			$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
		});
	};
	// sitePlusMinus();


	var siteSliderRange = function () {
		$("#slider-range").slider({
			range: true,
			min: 0,
			max: 500,
			values: [75, 300],
			slide: function (event, ui) {
				$("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
			}
		});
		$("#amount").val("$" + $("#slider-range").slider("values", 0) +
			" - $" + $("#slider-range").slider("values", 1));
	};
	// siteSliderRange();



	var siteCarousel = function () {
		if ($('.nonloop-block-13').length > 0) {
			$('.nonloop-block-13').owlCarousel({
				center: false,
				items: 1,
				loop: true,
				stagePadding: 0,
				margin: 0,
				autoplay: true,
				nav: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
				responsive: {
					600: {
						margin: 0,
						nav: true,
						items: 2
					},
					1000: {
						margin: 0,
						stagePadding: 0,
						nav: true,
						items: 3
					},
					1200: {
						margin: 0,
						stagePadding: 0,
						nav: true,
						items: 4
					}
				}
			});
		}

		$('.slide-one-item').owlCarousel({
			center: false,
			items: 1,
			loop: true,
			stagePadding: 0,
			margin: 0,
			autoplay: true,
			pauseOnHover: false,
			nav: true,
			navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
		});
	};
	siteCarousel();

	var siteStellar = function () {
		$(window).stellar({
			responsive: false,
			parallaxBackgrounds: true,
			parallaxElements: true,
			horizontalScrolling: false,
			hideDistantElements: false,
			scrollProperty: 'scroll'
		});
	};
	siteStellar();

	var siteCountDown = function () {

		$('#date-countdown').countdown('2020/10/10', function (event) {
			var $this = $(this).html(event.strftime(''
				+ '<span class="countdown-block"><span class="label">%w</span> weeks </span>'
				+ '<span class="countdown-block"><span class="label">%d</span> days </span>'
				+ '<span class="countdown-block"><span class="label">%H</span> hr </span>'
				+ '<span class="countdown-block"><span class="label">%M</span> min </span>'
				+ '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
		});

	};
	siteCountDown();

	var siteDatePicker = function () {

		if ($('.datepicker').length > 0) {
			$('.datepicker').datepicker();
		}

	};
	siteDatePicker();

	var siteSticky = function () {
		$(".js-sticky-header").sticky({ topSpacing: 0 });
	};
	siteSticky();

	// navigation
	var OnePageNavigation = function () {
		var navToggler = $('.site-menu-toggle');
		$("body").on("click", ".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a", function (e) {
			e.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				'scrollTop': $(hash).offset().top
			}, 600, 'easeInOutCirc', function () {
				window.location.hash = hash;
			});

		});
	};
	OnePageNavigation();

	var siteScroll = function () {



		$(window).scroll(function () {

			var st = $(this).scrollTop();

			if (st > 100) {
				$('.js-sticky-header').addClass('shrink');
			} else {
				$('.js-sticky-header').removeClass('shrink');
			}

		})

	};
	siteScroll();

});



(function ($) {
	"use strict";





	/*==================================================================
	[ Validate ]*/
	var input = $('.validate-input .input100');

	$('.validate-form').on('submit', function () {
		var check = true;

		for (var i = 0; i < input.length; i++) {
			if (validate(input[i]) == false) {
				showValidate(input[i]);
				check = false;
			}
		}

		return check;
	});


	$('.validate-form .input100').each(function () {
		$(this).focus(function () {
			hideValidate(this);
		});
	});

	function validate(input) {
		if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
			if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
				return false;
			}
		}
		else {
			if ($(input).val().trim() == '') {
				return false;
			}
		}
	}

	function showValidate(input) {
		var thisAlert = $(input).parent();

		$(thisAlert).addClass('alert-validate');
	}

	function hideValidate(input) {
		var thisAlert = $(input).parent();

		$(thisAlert).removeClass('alert-validate');
	}


})(jQuery);


$(document).ready(function () {
	$('#vidbt1').on('click', function (ev) {

		$("#vid1")[0].src += "&autoplay=1";
		ev.preventDefault();

	});
});

$(document).ready(function () {
	$('#vidbt2').on('click', function (ev) {

		$("#vid2")[0].src += "&autoplay=1";
		ev.preventDefault();

	});
});

$(document).ready(function () {
	$('#vidbt3').on('click', function (ev) {

		$("#vid3")[0].src += "&autoplay=1";
		ev.preventDefault();

	});
});

$(document).ready(function () {
	$('#vidbt4').on('click', function (ev) {

		$("#vid4")[0].src += "&autoplay=1";
		ev.preventDefault();

	});
});

$(document).ready(function () {
	$('#vidbt6').on('click', function (ev) {

		$("#vid6")[0].src += "&autoplay=1";
		ev.preventDefault();

	});
});

//videoplayer----------------------------------------------------------------------------------------------------------------------------


// global variable for the player
let vid1, vid2, vid3, vid4, vid5;

// // this function gets called when API is ready to use
// function onYouTubePlayerAPIReady() {
// 	// create the global player from the specific iframe (#video)
// 	player1 = new YT.Player('video1', {
// 		events: {
// 			// call this function when player is ready to use
// 			'onReady': onPlayerReady
// 		}
// 	});
// }

// function onPlayerReady(event) {

// 	// // bind events
// 	// var playButton = document.getElementById("play-button");
// 	// playButton.addEventListener("click", function () {
// 	// 	player.playVideo();
// 	// });

// 	// var pauseButton = document.getElementById("pause-button");
// 	// pauseButton.addEventListener("click", function () {
// 	// 	player.pauseVideo();
// 	// });

// 	var stopButton = document.getElementById("stop-button");
// 	stopButton.addEventListener("click", function () {
// 		player.stopVideo();
// 	});

// }

// Inject YouTube API script
// var tag = document.createElement('script');
// tag.src = "https://www.youtube.com/player_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);



function onYouTubeIframeAPIReady() {
	// 
	// vid1 = new YT.Player('vid1', {
	//     events: {
	//       'onReady': onPlayerReady,
	//       'onStateChange': onPlayerStateChange
	//     }
	// });

	vid1 = new YT.Player('vid1', {
		events: {
			'onStateChange': onPlayer1StateChange
		}
	});
	vid2 = new YT.Player('vid2', {
		events: {
			'onStateChange': onPlayer2StateChange
		}
	});
	vid3 = new YT.Player('vid3', {
		events: {
			'onStateChange': onPlayer3StateChange
		}
	});
	vid4 = new YT.Player('vid4', {
		events: {
			'onStateChange': onPlayer4StateChange
		}
	});
	vid5 = new YT.Player('vid5', {
		events: {
			'onStateChange': onPlayer5StateChange
		}
	});
	vid6 = new YT.Player('vid6', {
		events: {
			'onStateChange': onPlayer5StateChange
		}
	});
}


function onPlayer1StateChange(event) {

	playerStatus = event.data;
	if (playerStatus == -1) {
		// unstarted
	} else if (playerStatus == 0) {
		// ended
	} else if (playerStatus == 1) {
		// playing
		onPlayer1click();
	} else if (playerStatus == 2) {
		// paused
	} else if (playerStatus == 3) {
		// buffering
	} else if (playerStatus == 5) {
		// video cued
	}
}

function onPlayer1click() {
	vid1.playVideo();
	vid2.stopVideo();
	vid3.stopVideo();
	vid4.stopVideo();
	vid5.stopVideo();
}

function onPlayer2StateChange(event) {

	playerStatus = event.data;
	if (playerStatus == -1) {
		// unstarted
	} else if (playerStatus == 0) {
		// ended
	} else if (playerStatus == 1) {
		// playing
		onPlayer2click();
	} else if (playerStatus == 2) {
		// paused
	} else if (playerStatus == 3) {
		// buffering
	} else if (playerStatus == 5) {
		// video cued
	}
}


function onPlayer2click() {
	vid1.stopVideo();
	vid2.playVideo();
	vid3.stopVideo();
	vid4.stopVideo();
	vid5.stopVideo();
}


function onPlayer3StateChange(event) {

	playerStatus = event.data;
	if (playerStatus == -1) {
		// unstarted
	} else if (playerStatus == 0) {
		// ended
	} else if (playerStatus == 1) {
		// playing
		onPlayer3click();
	} else if (playerStatus == 2) {
		// paused
	} else if (playerStatus == 3) {
		// buffering
	} else if (playerStatus == 5) {
		// video cued
	}
}


function onPlayer3click() {
	vid1.stopVideo();
	vid2.stopVideo();
	vid3.playVideo();
	vid4.stopVideo();
	vid5.stopVideo();
}


function onPlayer4StateChange(event) {

	console.log("player 4 state changed")

	playerStatus = event.data;
	if (playerStatus == -1) {
		// unstarted
	} else if (playerStatus == 0) {
		// ended
	} else if (playerStatus == 1) {
		// playing
		console.log("playing");
		onPlayer4click();
	} else if (playerStatus == 2) {
		// paused
		console.log("paused");
	} else if (playerStatus == 3) {
		// buffering
	} else if (playerStatus == 5) {
		// video cued
	}
}


function onPlayer4click() {
	console.log("player 4 click")
	vid1.stopVideo();
	vid2.stopVideo();
	vid3.stopVideo();
	vid4.playVideo();
	vid5.stopVideo();
}


function onPlayer5StateChange(event) {

	playerStatus = event.data;
	if (playerStatus == -1) {
		// unstarted
	} else if (playerStatus == 0) {
		// ended
	} else if (playerStatus == 1) {
		// playing
		onPlayer5click();
	} else if (playerStatus == 2) {
		// paused
	} else if (playerStatus == 3) {
		// buffering
	} else if (playerStatus == 5) {
		// video cued
	}
}

function onPlayer5click() {
	vid1.stopVideo();
	vid2.stopVideo();
	vid3.stopVideo();
	vid4.stopVideo();
	vid5.playVideo();
}

//videoplayer-END---------------------------------------------------------------------------------------------------------------------------
