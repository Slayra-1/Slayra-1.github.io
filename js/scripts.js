/*!
    * Start Bootstrap - Resume v6.0.2 (https://startbootstrap.com/theme/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });
})(jQuery); // End of use strict

	/* 이하 추가작업부분 */

	// Waypoints
	$(".animate__animated").each(function() {
		new Waypoint.Inview({
			element: this,
            enter: function(direction) {
				if($(this.element).hasClass("ani_down")){
					$(this.element).addClass("animate__fadeInDown");
					$(this.element).removeClass("ani_down");
				}else if($(this.element).hasClass("ani_left")){
					$(this.element).addClass("animate__fadeInLeft animate__fast");
					$(this.element).removeClass("ani_left");
				}else if($(this.element).hasClass("ani_right")){
					$(this.element).addClass("animate__fadeInRight");
					$(this.element).removeClass("ani_right");
				}else if($(this.element).hasClass("ani_up")){
					$(this.element).addClass("animate__fadeInUp");
					$(this.element).removeClass("ani_up");
				}else if($(this.element).hasClass("ani_rnd")){
					var rand = Math.floor(Math.random()*4);

					switch(rand){
						case 0:
							$(this.element).addClass("animate__fadeInUp");
							break;
						case 1:
							$(this.element).addClass("animate__fadeInLeft");
							break;
						case 2:
							$(this.element).addClass("animate__fadeInRight");
							break;
						case 3:
							$(this.element).addClass("animate__fadeInDown");
							break;
					}
					$(this.element).removeClass("ani_rnd");
				}
             }
        });
    });

	// 가장 위로 버튼
	$('#back-to-top').on('click',function(e){
		e.preventDefault();
		$('html,body').animate({scrollTop:0},600);
	});
	
	$(window).scroll(function() {
		if ($(document).scrollTop() > 100) {
			$('#back-to-top').addClass('show');
		}else{
			$('#back-to-top').removeClass('show');
		}
	});