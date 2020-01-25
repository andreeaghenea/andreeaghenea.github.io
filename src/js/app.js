import $ from "jquery";
import Vue from "vue";
//
import {i18n} from "./dictionary/i18n";
import {Util} from "./util";
//
window.$ = window.jQuery = $;
window.i18n = i18n;
window.Util = Util;
//
import "bootstrap/dist/js/bootstrap.min";
// require('bootstrap/dist/js/bootstrap.min');
//
var Application = new Vue({
    i18n,
    el: "#application",
    components: {
        AppHeader: require("./components/header").default,
        AppMain: require("./components/main").default,
        AppFooter: require("./components/footer").default
    },
    data: {},
    mounted: function () {
    }
});
