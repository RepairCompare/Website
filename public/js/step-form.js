$(document).ready(function () {
    $('.step-form fieldset:first-child').fadeIn('slow');
    // next step
    $('.step-form .btn-next').on('click', function () {
        var parent_fieldset = $(this).parents('fieldset');
        var next_step = true;
        if (next_step) {
            parent_fieldset.fadeOut(400, function () {
                $(this).next().fadeIn();
            });
            var $next, $selected = $(".formSteps  ul > li.active");
            $next = $selected.next('li').length ? $selected.next('li') : $first;
            $selected.removeClass("active").addClass('completedStep');
            $next.addClass('active');
        }
    });

    // previous step
    $('.step-form .btn-back').on('click', function () {
        $(this).parents('fieldset').fadeOut(400, function () {
            $(this).prev().fadeIn();
        });
        var $next, $selected = $(".formSteps  ul > li.active");
        $prev = $selected.prev('li').length ? $selected.prev('li') : $last;
        $selected.removeClass("active").removeClass('completedStep');
        $prev.addClass('active').removeClass('completedStep');
    });
});
