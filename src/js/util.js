export const Util = {
    i18n_locale: function (locale) {
        i18n.locale = locale;
    },

    scrollTo: function (element = "", seconds = 1000) {
        $('.navbar-collapse').collapse('hide');
        $("html, body")
            .delay(300)
            .animate({
                scrollTop: $(element).offset().top
            }, seconds);
    },

};
