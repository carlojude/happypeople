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
                paginationSpeed: 400,
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

    var offer = function() {
        $(window).load(function() {
            var showModal = $('.modal').modal('show');
            setTimeout(showModal, 5000);
        });
    }


    /////////////////////
    // Public Methods //
    ///////////////////
    var init = function() {
        owlCarouselBottom();
        offer();
    };

    var resize = function() {
        matchHeight();
    };

    return {
        init: init,
        resize: resize
    };
})();