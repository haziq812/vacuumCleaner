import './bootstrap';
import 'owl.carousel';
import { TempusDominus } from '@eonasdan/tempus-dominus';
import '@eonasdan/tempus-dominus/dist/css/tempus-dominus.min.css';
import '@popperjs/core';
import 'jquery.easing';
import 'waypoints/lib/jquery.waypoints.js';
import 'jquery.counterup';
import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';


(function ($) {
    "use strict";

    //swiper


    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 90) {
            $('.nav-bar').addClass('sticky-top shadow');
        } else {
            $('.nav-bar').removeClass('sticky-top shadow');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })

        // Initiate the wowjs
        new WOW().init();

        // const element = document.getElementById('datetimepicker');
        // new TempusDominus(element, {
        //     display: {
        //         components: {
        //             calendar: true,
        //             date: true,
        //             month: true,
        //             year: true,
        //             decades: true,
        //             clock: true,
        //             hours: true,
        //             minutes: true,
        //             seconds: false,
        //         },
        //     },
        // });

        const swiper = new Swiper('.swiper', {
            loop: true, // Enable infinite loop
            slidesPerView: 1, // Show one slide at a time
            spaceBetween: 10, // Space between slides
            pagination: {
              el: '.swiper-pagination',
              clickable: true, // Make pagination dots clickable
            },
            navigation: {
              nextEl: '.swiper-button-next', // Selector for the "next" button
              prevEl: '.swiper-button-prev', // Selector for the "prev" button
            },
            autoplay: {
              delay: 3000, // Auto-slide every 3 seconds
              disableOnInteraction: false, // Continue autoplay after user interaction
            },
          });
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Service carousel
    $(".service-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 25,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);



