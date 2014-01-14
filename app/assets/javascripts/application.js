// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require bootstrap.min
//= require easing

    jQuery(document).ready(function () {
        /*$(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll >= 25) {
                $(".primary-nav").addClass("visible");
            } else if (scroll < 25) {
                $(".primary-nav").removeClass("visible");
            }
        }); */
        
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll >= 200) {
                $(".secondary-nav").removeClass("secondary-visible");
            } else if (scroll < 200) {
                $(".secondary-nav").addClass("secondary-visible");
            }
        });
        
        $('.open-menu').on('click', function(e){
	        $('.master').addClass('moveleft');
		 	$('nav.menu-overlay').addClass('show-right');		
		});
		
	    $('.open-contact').on('click', function(e){
	        $('.master').addClass('moveleft');
		 	$('nav.contact-overlay').addClass('show-left');		
		});
		
	    $('.close-menu').on('click', function(e){
	        $('.master').removeClass('moveleft');
		 	$('nav.contact-overlay').removeClass('show-left');	
		 	$('nav.menu-overlay').removeClass('show-right');		
		});
		

		$(document).mouseup(function (e)
		{
		    var container = $(".large-overlay");
		
		    if (!container.is(e.target) // if the target of the click isn't the container...
		        && container.has(e.target).length === 0) // ... nor a descendant of the container
		    {
		        container.removeClass('show-right');
		        container.removeClass('show-left');
		        $('.master').removeClass('moveleft');
		    }
		});
        
     });