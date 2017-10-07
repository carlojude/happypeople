AppName.Modules.ThemeModule = (function() {
    //Dependencies
    var core = AppName.Core;

    //////////////////////
    // Private Methods //
    ////////////////////

    var matchHeight = function() {
        $.fn.equalHeights = function() {
            var max_height = 0;
            $(this).each(function() {
                max_height = Math.max($(this).height(), max_height);
            });
            $(this).each(function() {
                $(this).height(max_height);
            });
        };
        $('.match-height').equalHeights();
    }

    var owlCarouselBottom = function() {
        var owl = $('.owl-carousel');
        if (owl.length) {
            owl.owlCarousel({
                navigation: true,
                slideSpeed: 300,
                paginationSpeed: 1000,
                items: 1,
                itemsDesktop: false,
                itemsDesktopSmall: false,
                itemsTablet: false,
                itemsMobile: false,
                loop: true,
                autoplay: true,
                autoplayTimeout: 3000,
                animateOut: 'fadeOut',
                smartSpeed: 1000
            });
        }
        $('.slider-right').click(function() {
            owl.trigger('next.owl.carousel');
        })
        $('.slider-left').click(function() {
            owl.trigger('prev.owl.carousel', [300]);
        });
    }

    var owlCarouselHomeBanner = function() {
        var bannerMain = $('.banner-main');
        if (bannerMain.length) {
            bannerMain.owlCarousel({
                navigation: true,
                slideSpeed: 300,
                paginationSpeed: 400,
                items: 2,
                itemsDesktop: false,
                itemsDesktopSmall: false,
                itemsTablet: false,
                itemsMobile: false,
                loop: true,
                autoplay: true,
                autoplayTimeout: 5000
            });
        }
        $('.banner-arrow .slider-right').click(function() {
            bannerMain.trigger('next.owl.carousel');
        })
        $('.banner-arrow .slider-left').click(function() {
            bannerMain.trigger('prev.owl.carousel', [300]);
        });

        $('#toggle').click(function() {
            $(this).toggleClass('active');
            $('#overlay').toggleClass('open');
        });
    };

    // var offer = function() {
    //     $(window).load(function() {
    //         var showModal = $('.modal').modal('show');
    //         setTimeout(showModal, 5000);
    //     });
    // }

    var fadeEffects = function() {
        if ($(window).width() < 768) {

        } else {
            $(window).fadeThis({
                distance: 10
            });
        }
    }

    var scrollToDiv = function() {
        $('a[href*=#]:not([href=#])').click(function() {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.substr(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 55
                }, 1000);
                return false;
            }
        });
    }

    var sendMail = function() {
        var i = 0;

        $("#couponForm").submit(function() {
            var email = $("#couponEmail").val();
            var coupon = $("#coupon").val();
            var dataString = 'couponEmail=' + email + '&coupon=' + coupon;

            $.ajax({
                type: "POST",
                url: "sendMail.php",
                data: dataString,
                beforeSend: function() {
                    $('#couponBtn').val("Sending..");
                },
                success: function() {

                },
                complete: function() {
                    $('#couponBtn').val("Coupon has been successfully sent to your email.");
                    $('#couponBtn').attr('disabled', true);
                    $('#couponBtn').css({
                        "background-color": "#1fb731"
                    });
                }
            });

            return false;
        });
    }

    /////////////////////
    // Public Methods //
    ///////////////////
    var init = function() {
        owlCarouselBottom();
        // coupon();
        fadeEffects();
        scrollToDiv();
        sendMail();
    };

    var resize = function() {
        matchHeight();
    };

    return {
        init: init,
        resize: resize
    };
})();