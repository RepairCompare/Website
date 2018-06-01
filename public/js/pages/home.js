$(function () {
    $('a[href*=#]:not([href=#]).btnGetStarted').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 500);
                return false;
            }
        }
    });

    $('.btnGetStarted').click(function () {
        $('#main-div').slideDown();
        $('#progressbar > li:first-child').addClass('active').siblings().removeClass('active');
    });
    $('#msform .close').click(function () {
        $('#main-div').slideUp();
        $('#progressbar > li').removeClass('active completedStep');
        $('.step-form fieldset:first-child').fadeIn('slow').siblings().fadeOut();
    });
    $('#main-div .next, #main-div .previous').click(function () {
        $('html, body').animate({
            scrollTop: $("#quoteThreeSteps").offset().top
        }, 2000);
    });

    var parsedUrl = getParsedUrl();
    if(parsedUrl.hash === '#quoteThreeSteps') {
        $('.btnGetStarted').first().click();
    }
});
