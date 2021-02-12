!(function ($) {
    "use strict";
    // Init AOS
    function aos_init() {
        AOS.init({
            duration: 1000,
            once: true
        });
    }
    $(window).on('load', function () {
        aos_init();
    });

    // ---------------------------

    $("#js-contcheckbox").change(function () {
        if (this.checked) {
            $('.js-montlypricing').css('display', 'none');
            $('.js-yearlypricing').css('display', 'flex');
            $('.afterinput').addClass('text-success');
            $('.beforeinput').removeClass('text-success');
        } else {
            $('.js-montlypricing').css('display', 'flex');
            $('.js-yearlypricing').css('display', 'none');
            $('.afterinput').removeClass('text-success');
            $('.beforeinput').addClass('text-success');
        }
    });


    $("form[name='registration']").validate({
        rules: {
            brname: "required",
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                minlength: 10
            }
        },
        messages: {
            brname: "Enter valid brand extension",
            phone: "Enter valid phone number",
            email: "Enter valid email"
        },

        submitHandler: function (form) {
            form.submit();
        }
    });


})(jQuery);