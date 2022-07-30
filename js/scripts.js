jQuery(document).ready(function() {	

		// Scroll to Top start
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 100) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});
		// Scroll to Top end
		
		// owlCarousel start	

			window.ityped.init(document.querySelector('.ityped'), {
            strings : ['Hi I am Parves Mosarof', 'I am Web Designer &', ' Web Developer'],
            loop : true,
        });

		// owlCarousel end
		
		// $(".demo23").animatext({speed: 50,
		// 	effect: 'flipInX',
		// 	infinite: true});
		
		
		


		function makeTimer() {

			//var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");

			var endTime = new Date("10 January 2023 9:00:00 GMT+01:00");			
				endTime = (Date.parse(endTime) / 1000);

				var now = new Date();
				now = (Date.parse(now) / 1000);

				var timeLeft = endTime - now;

				var days = Math.floor(timeLeft / 86400); 
				var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
				var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
				var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
	  
				if (hours < "10") { hours = "0" + hours; }
				if (minutes < "10") { minutes = "0" + minutes; }
				if (seconds < "10") { seconds = "0" + seconds; }

				$("#days").html(days + "<span>Days</span>");
				$("#hours").html(hours + "<span>Hours</span>");
				$("#minutes").html(minutes + "<span>Minutes</span>");
				$("#seconds").html(seconds + "<span>Seconds</span>");		

		}

			setInterval(function() { makeTimer(); }, 1000);


			// $(document).ready(function(){
   //              $('#count-box').CountUpCircle({
   //                  duration: 2000,
   //                  opacity_anim: true,
   //                  step_divider: 2,
   //                  time: 100 // 1000 = 1 second
   //              });
   //          });



			$("#owl-csel1").owlCarousel({
					items: 4,
					autoplay: true,
					autoplayTimeout: 1500,
					startPosition: 0,
					ltr: true,
					loop: true,
					margin: 15,
					dots: true,
					nav: true,
					smartSpeed: 1200,
					autoplayHoverPause: true,
					navText: [
								'<i class="fa fa-angle-left" aria-hidden="true"></i>',
								'<i class="fa fa-angle-right" aria-hidden="true"></i>'
							],
					navContainer: '.main-content .custom-nav',
					responsive:{
						0: {
							items: 1,						
						},
						767: {
							items: 1,						
						},
						768: {
							items: 2,						
						},
						992: {
							items: 3,
							dots: false,						
						},
						1200: {
							items: 4,
							dots: false,						
						}
					}

				});








			$('.ziehharmonika').ziehharmonika({
			  headline: 'span',
			  prefix: false, 
			  highlander: true,
			  collapsible: false,
			  arrow: true,  
			  collapseIcons: {
			    opened: '-',
			    closed: '+'
			  },
			  collapseIconsAlign: 'left', 
			  scroll: true
			  
			});





			window.ityped.init(document.querySelector('.itypedb'), {
            strings : ['Hi I am Parves Mosarof', 'সম্মানিত বন্ধুবান্ধব আসসালামু আলাইকুম । আমাদের তারাগঞ্জ ফাজিল মাদ্রাসা এর ২০১৮/২০১৯ ব্যাচের  পক্ষ থেকে  কক্সবাজার ভ্রমনের একটি আয়োজন করা হয়েছে । চারদিন ব্যাপী ভ্রমণ করা হবে । আশা করি আপনারা সকলেই এর সাথে একমত! এই ভ্রমণের জন্য আমরা একটি   মাসিক চাঁদার ব্যবস্থা করেছি । আমরা সাত মাস  এ সমিতি তে অর্থ একত্রিত করব ইনশাআল্লাহ । এই সমিতি থেকে থাকা-খাওয়া গাড়ি ভাড়া  হোটেল ভাড়া সমস্ত খরচ বহন করা হবে ।',],
            loop : true,
        });





			 


		


});
