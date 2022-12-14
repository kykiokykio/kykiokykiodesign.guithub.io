jQuery(function($) {
    "use strict";

    var OBSEQUY = window.OBSEQUY || {};

    /* ==================================================
    	Contact Form Validations
    ================================================== */
    OBSEQUY.ContactForm = function() {
        $('.contact-form').each(function() {
            var formInstance = $(this);
            formInstance.submit(function() {

                var action = $(this).attr('action');

                $("#message").slideUp(750, function() {
                    $('#message').hide();

                    $('#submit')
                        .after('<img src="images/assets/ajax-loader.gif" class="loader" />')
                        .attr('disabled', 'disabled');

                    $.post(action, {
                            name: $('#name').val(),
                            email: $('#email').val(),
                            phone: $('#phone').val(),
                            comments: $('#comments').val()
                        },
                        function(data) {
                            document.getElementById('message').innerHTML = data;
                            $('#message').slideDown('slow');
                            $('.contact-form img.loader').fadeOut('slow', function() {
                                $(this).remove();
                            });
                            $('#submit').removeAttr('disabled');
                            if (data.match('success') !== null) {
                                $('.contact-form').slideUp('slow');
                            }

                        }
                    );
                });
                return false;
            });
        });
    };
    /* ==================================================
    	Scroll Functions
    ================================================== */
    OBSEQUY.scrollToTop = function() {
        var windowWidth = $(window).width(),
            didScroll = false;

        var $arrow = $('#back-to-top');

        $arrow.on('click', function(e) {
            $('body,html').animate({
                scrollTop: "0"
            }, 750, 'easeOutExpo');
            e.preventDefault();
        });

        $(window).scroll(function() {
            didScroll = true;
        });

        setInterval(function() {
            if (didScroll) {
                didScroll = false;

                if ($(window).scrollTop() > 200) {
                    $arrow.css("right", 10);
                } else {
                    $arrow.css("right", "-50px");
                }

            }
        }, 250);
    };
    /* ==================================================
       Accordion
    ================================================== */
    OBSEQUY.accordion = function() {
        var accordion_trigger = $('.accordion-heading.accordionize');

        accordion_trigger.delegate('.accordion-toggle', 'click', function(event) {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).addClass('inactive');
            } else {
                accordion_trigger.find('.active').addClass('inactive');
                accordion_trigger.find('.active').removeClass('active');
                $(this).removeClass('inactive');
                $(this).addClass('active');
            }
            event.preventDefault();
        });
    };
    /* ==================================================
       Toggle
    ================================================== */
    OBSEQUY.toggle = function() {
        var accordion_trigger_toggle = $('.accordion-heading.togglize');

        accordion_trigger_toggle.delegate('.accordion-toggle', 'click', function(event) {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).addClass('inactive');
            } else {
                $(this).removeClass('inactive');
                $(this).addClass('active');
            }
            event.preventDefault();
        });
    };
    /* ==================================================
       Tooltip
    ================================================== */
    OBSEQUY.toolTip = function() {
        $('a[data-toggle=tooltip]').tooltip();
        $('a[data-toggle=tooltip]').tooltip();
        $('a[data-toggle=popover]').popover({
            html: true
        }).on("click", function(e) {
            e.preventDefault();
            $(this).focus();
        });
    };
    /* ==================================================
       Twitter Widget
    ================================================== */
    OBSEQUY.TwitterWidget = function() {
        $('.twitter-widget').each(function() {
            var twitterInstance = $(this);
            var twitterTweets = twitterInstance.attr("data-tweets-count") ? twitterInstance.attr("data-tweets-count") : "1";
            twitterInstance.twittie({
                dateFormat: '%b. %d, %Y',
                template: '<li><i class="fa fa-twitter"></i> {{tweet}} <span class="tweet-date">{{date}}</span></li>',
                count: twitterTweets,
                hideReplies: true
            });
        });
    };
    /* ==================================================
       Hero Flex Slider
    ================================================== */
    OBSEQUY.heroflex = function() {
        $('.heroflex').each(function() {
            var carouselInstance = $(this);
            var carouselAutoplay = carouselInstance.attr("data-autoplay") === 'yes' ? true : false;
            var carouselPagination = carouselInstance.attr("data-pagination") === 'yes' ? true : false;
            var carouselArrows = carouselInstance.attr("data-arrows") === 'yes' ? true : false;
            var carouselDirection = carouselInstance.attr("data-direction") ? carouselInstance.attr("data-direction") : "horizontal";
            var carouselStyle = carouselInstance.attr("data-style") ? carouselInstance.attr("data-style") : "fade";
            var carouselSpeed = carouselInstance.attr("data-speed") ? carouselInstance.attr("data-speed") : "5000";
            var carouselPause = carouselInstance.attr("data-pause") === 'yes' ? true : false;

            carouselInstance.flexslider({
                animation: carouselStyle,
                easing: "swing",
                direction: carouselDirection,
                slideshow: carouselAutoplay,
                slideshowSpeed: carouselSpeed,
                animationSpeed: 600,
                initDelay: 0,
                randomize: false,
                pauseOnHover: carouselPause,
                controlNav: carouselPagination,
                directionNav: carouselArrows,
                prevText: "",
                nextText: ""
            });
        });
    };
    /* ==================================================
       Flex Slider
    ================================================== */
    OBSEQUY.galleryflex = function() {
        $('.galleryflex').each(function() {
            var carouselInstance = $(this);
            var carouselAutoplay = carouselInstance.attr("data-autoplay") === 'yes' ? true : false;
            var carouselPagination = carouselInstance.attr("data-pagination") === 'yes' ? true : false;
            var carouselArrows = carouselInstance.attr("data-arrows") === 'yes' ? true : false;
            var carouselDirection = carouselInstance.attr("data-direction") ? carouselInstance.attr("data-direction") : "horizontal";
            var carouselStyle = carouselInstance.attr("data-style") ? carouselInstance.attr("data-style") : "fade";
            var carouselSpeed = carouselInstance.attr("data-speed") ? carouselInstance.attr("data-speed") : "5000";
            var carouselPause = carouselInstance.attr("data-pause") === 'yes' ? true : false;

            carouselInstance.flexslider({
                animation: carouselStyle,
                easing: "swing",
                direction: carouselDirection,
                slideshow: carouselAutoplay,
                slideshowSpeed: carouselSpeed,
                animationSpeed: 600,
                initDelay: 0,
                animationLoop: true,
                randomize: false,
                pauseOnHover: carouselPause,
                controlNav: carouselPagination,
                directionNav: carouselArrows,
                prevText: "",
                nextText: ""
            });
        });
    };
    /* ==================================================
       Owl Carousel
    ================================================== */
    OBSEQUY.OwlCarousel = function() {
        $('.owl-carousel').each(function() {
            var carouselInstance = $(this);
            var carouselColumns = carouselInstance.attr("data-columns") ? carouselInstance.attr("data-columns") : "1";
            var carouselitemsDesktop = carouselInstance.attr("data-items-desktop") ? carouselInstance.attr("data-items-desktop") : "4";
            var carouselitemsDesktopSmall = carouselInstance.attr("data-items-desktop-small") ? carouselInstance.attr("data-items-desktop-small") : "3";
            var carouselitemsTablet = carouselInstance.attr("data-items-tablet") ? carouselInstance.attr("data-items-tablet") : "2";
            var carouselitemsMobile = carouselInstance.attr("data-items-mobile") ? carouselInstance.attr("data-items-mobile") : "1";
            var carouselAutoplay = carouselInstance.attr("data-autoplay") ? carouselInstance.attr("data-autoplay") : false;
            var carouselPagination = carouselInstance.attr("data-pagination") === 'yes' ? true : false;
            var carouselArrows = carouselInstance.attr("data-arrows") === 'yes' ? true : false;
            var carouselSingle = carouselInstance.attr("data-single-item") === 'yes' ? true : false;
            var carouselStyle = carouselInstance.attr("data-style") ? carouselInstance.attr("data-style") : "fade";

            carouselInstance.owlCarousel({
                items: carouselColumns,
                autoPlay: carouselAutoplay,
                navigation: carouselArrows,
                pagination: carouselPagination,
                itemsDesktop: [1199, carouselitemsDesktop],
                itemsDesktopSmall: [979, carouselitemsDesktopSmall],
                itemsTablet: [768, carouselitemsTablet],
                itemsMobile: [479, carouselitemsMobile],
                singleItem: carouselSingle,
                navigationText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
                stopOnHover: true,
                lazyLoad: true,
                transitionStyle: carouselStyle
            });
        });
    };
    /* ==================================================
       Magnific Popup
    ================================================== */
    OBSEQUY.Magnific = function() {
        jQuery('.format-gallery').each(function() {
            $(this).magnificPopup({
                delegate: 'a.popup-image', // child items selector, by clicking on it popup will open
                type: 'image',
                gallery: {
                    enabled: true
                }
                // other options
            });
        });
        jQuery('.magnific-image').magnificPopup({
            type: 'image',
            gallery: {
                enabled: false
            }
            // other options
        });
        jQuery('.magnific-video').magnificPopup({
            type: 'iframe',
            gallery: {
                enabled: false
            }
            // other options
        });
    };
    /* ==================================================
       Animated Counters
    ================================================== */
    OBSEQUY.Counters = function() {
        $('.counters').each(function() {
            $(".timer .count").appear(function() {
                var counter = $(this).html();
                $(this).countTo({
                    from: 0,
                    to: counter,
                    speed: 2000,
                    refreshInterval: 60
                });
            });
        });
    };
    /* ==================================================
       SuperFish menu
    ================================================== */
    OBSEQUY.SuperFish = function() {
        $('.sf-menu').superfish({
            delay: 200,
            animation: {
                opacity: 'show',
                height: 'show'
            },
            speed: 'fast',
            cssArrows: false,
            disableHI: true
        });
        $(window).on('resize', function() {
            if ($(window).width() >= 992) {
                $('.sf-menu').show();
            }
        });
        $(".dd-menu > li:has(ul)").find("a:first").append(" <i class='fa fa-caret-down'></i>");
        $(".dd-menu > li > ul > li:has(ul)").find("a:first").append(" <i class='fa fa-caret-right'></i>");
        $(".dd-menu > li > ul > li > ul > li:has(ul)").find("a:first").append(" <i class='fa fa-caret-right'></i>");
    };
    /* ==================================================
       Header Functions
    ================================================== */
    OBSEQUY.StickyHeader = function() {
        $(".site-header").sticky();
    };
    /* ==================================================
    	Responsive Nav Menu
    ================================================== */
    OBSEQUY.MobileMenu = function() {
        // Responsive Toggle Events
        $('#menu-toggle').on("click", function() {
            $(this).toggleClass("opened");
            $(".main-navigation").slideToggle();
            return false;
        });
    };
    /* ==================================================
       IsoTope Portfolio
    ================================================== */
    OBSEQUY.IsoTope = function() {
        $("ul.sort-source").each(function() {
            var source = $(this);
            var destination = $("ul.sort-destination[data-sort-id=" + $(this).attr("data-sort-id") + "]");
            if (destination.get(0)) {
                $(window).on('load', function() {
                    destination.isotope({
                        itemSelector: ".grid-item",
                        layoutMode: 'sloppyMasonry'
                    });
                    source.find("a").on("click", function(e) {
                        e.preventDefault();
                        var $this = $(this),
                            filter = $this.parent().attr("data-option-value");
                        source.find("li.active").removeClass("active");
                        $this.parent().addClass("active");
                        destination.isotope({
                            filter: filter
                        });
                        if (window.location.hash !== "" || filter.replace(".", "") !== "*") {
                            self.location = "#" + filter.replace(".", "");
                        }
                        return false;
                    });
                    $(window).on("hashchange", function() {
                        var hashFilter = "." + location.hash.replace("#", ""),
                            hash = (hashFilter === "." || hashFilter === ".*" ? "*" : hashFilter);
                        source.find("li.active").removeClass("active");
                        source.find("li[data-option-value='" + hash + "']").addClass("active");
                        destination.isotope({
                            filter: hash
                        });
                    });
                    var hashFilter = "." + (location.hash.replace("#", "") || "*");
                    var initFilterEl = source.find("li[data-option-value='" + hashFilter + "'] a");
                    if (initFilterEl.get(0)) {
                        source.find("li[data-option-value='" + hashFilter + "'] a").click();
                    } else {
                        source.find("li:first-child a").click();
                    }
                });
            }
        });
        $(window).on('load', function() {
            var IsoTopeCont = $(".isotope-grid");
            IsoTopeCont.isotope({
                itemSelector: ".grid-item",
                layoutMode: 'sloppyMasonry'
            });
            if ($(".grid-holder").length > 0) {
                var $container_blog = $('.grid-holder');
                $container_blog.isotope({
                    itemSelector: '.grid-item'
                });
                $(window).on('resize', function() {
                    var $container_blog = $('.grid-holder');
                    $container_blog.isotope({
                        itemSelector: '.grid-item'
                    });
                });
            }
        });
    };
    /* ==================================================
       Pricing Tables
    ================================================== */
    var $tallestCol;
    OBSEQUY.pricingTable = function() {
        $('.pricing-table').each(function() {
            $tallestCol = 0;
            $(this).find('> div .features').each(function() {
                ($(this).height() > $tallestCol) ? $tallestCol = $(this).height(): $tallestCol = $tallestCol;
            });
            if ($tallestCol === 0) {
                $tallestCol = 'auto';
            }
            $(this).find('> div .features').css('height', $tallestCol);
        });
    };
    /* ==================================================
       Init Functions
    ================================================== */
    $(document).on('ready', function() {
        OBSEQUY.ContactForm();
        OBSEQUY.scrollToTop();
        OBSEQUY.accordion();
        OBSEQUY.toggle();
        OBSEQUY.toolTip();
        OBSEQUY.TwitterWidget();
        OBSEQUY.OwlCarousel();
        OBSEQUY.Magnific();
        OBSEQUY.SuperFish();
        OBSEQUY.Counters();
        OBSEQUY.IsoTope();
        OBSEQUY.StickyHeader();
        OBSEQUY.heroflex();
        OBSEQUY.galleryflex();
        OBSEQUY.pricingTable();
        OBSEQUY.MobileMenu();
        $('.selectpicker').selectpicker({
            container: 'body'
        });
        WWHGetter();
        // apply matchHeight to each item container's items
        $('.content').each(function() {
            $(this).find('.owl-carousel .grid-item').find('.grid-item-content').matchHeight();
        });
        $('.featured-block').each(function() {
            $(this).find('.fbb').matchHeight();
        });
        $('.isotope-grid').each(function() {
            $(this).find('.event-grid-item').find('.grid-item-inner').matchHeight();
        });
        $('.row').each(function() {
            $(this).find('.equalize').matchHeight();
        });
        $('.next-prev-post').each(function() {
            $(this).find('.equalize').matchHeight();
        });
        $('[data-toggle="tooltip"]').tooltip();
        //$(".player").mb_YTPlayer();
    });


    // WINDOW RESIZE FUNCTIONS //
    $(window).on('resize', function() {
        WWHGetter();
    });

    // Any Button Scroll to section
    $('.scrollto').on("click", function() {
        $.scrollTo(this.hash, 800, {
            easing: 'easeOutQuint'
        });
        return false;
    });

    // Cart & Search option in header
    $(".search-module-trigger").on('click', function(e) {
        e.stopPropagation();
        $(".search-module-opened").toggle();
        $('.cart-module-opened').hide();
        e.preventDefault();
    });
    $(".search-module-opened").on('click', function(e) {
        e.stopPropagation();
    });
    $("#cart-module-trigger").on('click', function(e) {
        e.stopPropagation();
        $(".cart-module-opened").toggle();
        $('.search-module-opened').hide();
        e.preventDefault();
    });
    $(".cart-module-opened").on('click', function(e) {
        e.stopPropagation();
    });
    $(document).on('click', function() {
        $('.search-module-opened, .cart-module-opened').hide();
    });

    // FITVIDS
    $(".fw-video, .post-media").fitVids();

    $(window).on('load', function() {
        $(".format-image").each(function() {
            $(this).find(".media-box").append("<span class='zoom'><span class='icon'><i class='fa fa-search'></i></span></span>");
        });
        $(".format-standard").each(function() {
            $(this).find(".media-box").append("<span class='zoom'><span class='icon'><i class='fa fa-external-link-square'></i></span></span>");
        });
        $(".format-video").each(function() {
            $(this).find(".media-box").append("<span class='zoom'><span class='icon'><i class='fa fa-play'></i></span></span>");
        });
        $(".format-link").each(function() {
            $(this).find(".media-box").append("<span class='zoom'><span class='icon'><i class='fa fa-link'></i></span></span>");
        });
        $(".additional-images .owl-carousel .item-video").each(function() {
            $(this).append("<span class='icon'><i class='fa fa-play'></i></span>");
        });
        $(".magnific-image").append("<span class='zoom'><span class='icon'><i class='fa fa-search'></i></span></span>");
        $('.carousel-wrapper').css('background', 'none');

    });

    // Icon Append
    $('.basic-link').append(' <i class="icon icon-arrow-right"></i>');
    $('.basic-link.backward').prepend(' <i class="fa fa-angle-left"></i> ');
    $('ul.checks li').prepend('<i class="fa fa-check"></i> ');
    $('ul.angles li').prepend('<i class="fa fa-angle-right"></i> ');
    $('ul.chevrons li, .widget_categories ul li, .widget_custom_category ul li').prepend('<i class="fa fa-chevron-right"></i> ');
    $('ul.carets li, ul.inline li').prepend('<i class="fa fa-caret-right"></i> ');
    $('a.external').prepend('<i class="fa fa-external-link"></i> ');
    $('.pages-sub-menu li a').prepend('<i class="fa fa-angle-right"></i> ');

    // Animation Appear
    var AppDel;

    function AppDelFunction($appd) {
        $appd.addClass("appear-animation");
        if (!$("html").hasClass("no-csstransitions") && $(window).width() > 767) {
            $appd.appear(function() {
                var delay = ($appd.attr("data-appear-animation-delay") ? $appd.attr("data-appear-animation-delay") : 1);
                if (delay > 1) {
                    $appd.css("animation-delay", delay + "ms");
                }
                $appd.addClass($appd.attr("data-appear-animation"));
                setTimeout(function() {
                    $appd.addClass("appear-animation-visible");
                }, delay);
                clearTimeout();
            }, {
                accX: 0,
                accY: -150
            });
        } else {
            $appd.addClass("appear-animation-visible");
        }
    }

    function AppDelStopFunction() {
        clearTimeout(AppDel);
    }
    $("[data-appear-animation]").each(function() {
        var $this = $(this);
        AppDelFunction($this);
        AppDelStopFunction();
    });
    // Animation Progress Bars

    var AppAni;

    function AppAniFunction($anim) {
        $anim.appear(function() {
            var delay = ($anim.attr("data-appear-animation-delay") ? $anim.attr("data-appear-animation-delay") : 1);
            if (delay > 1) {
                $anim.css("animation-delay", delay + "ms");
            }
            $anim.addClass($anim.attr("data-appear-animation"));
            setTimeout(function() {
                $anim.animate({
                    width: $anim.attr("data-appear-progress-animation")
                }, 1500, "easeOutQuad", function() {
                    $anim.find(".progress-bar-tooltip").animate({
                        opacity: 1
                    }, 500, "easeOutQuad");
                });
            }, delay);
            clearTimeout();
        }, {
            accX: 0,
            accY: -50
        });
    }

    function AppAniStopFunction() {
        clearTimeout(AppAni);
    }
    $("[data-appear-progress-animation]").each(function() {
        var $this = $(this);
        AppAniFunction($this);
        AppAniStopFunction();
    });

    // Parallax Jquery Callings
    if (!Modernizr.touch) {
        parallaxInit();
    }

    function parallaxInit() {
        $('.parallax1').parallax("50%", 0.1);
        $('.parallax2').parallax("50%", 0.1);
        $('.parallax3').parallax("50%", 0.1);
        $('.parallax4').parallax("50%", 0.1);
        $('.parallax5').parallax("50%", 0.1);
        $('.parallax6').parallax("50%", 0.1);
        $('.parallax7').parallax("50%", 0.1);
        $('.parallax8').parallax("50%", 0.1);
        /*add as necessary*/
    }

    // Window height/Width Getter Classes
    function WWHGetter() {
        var wheighter = $(window).height();
        var wwidth = $(window).width();
        $(".wheighter").css("height", wheighter);
        $(".wwidth").css("width", wwidth);
    }
});