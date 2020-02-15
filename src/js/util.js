export const Util = {
    i18n_locale: function (locale) {
        i18n.locale = locale;
    },

    scrollTo: function (element = "", seconds = 1000) {
        // preia offset
        var offset_top = $(element).offset().top;
        // preia inaltime meniu header (daca e vizibil butonul)
        var step = $('header button.navbar-toggler').css('display') === 'none'
            ? 0
            : parseInt($('header div.navbar-collapse').height(), 10);
        // daca meniul e deschis, se strange
        $('.navbar-collapse').collapse('hide');
        // salt cu animatie la element
        $("html, body")
            .delay(300)
            .animate({
                scrollTop: offset_top - step
            }, seconds);
    },

};
