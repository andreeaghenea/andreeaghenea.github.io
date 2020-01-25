<template>
    <footer>
        <div class="container">
            footer
        </div>
    </footer>
</template>

<script>
    export default {
        name: "AppFooter",
        props: {},
        mounted: function () {
        },

        methods: {
            changeLocale: function (locale) {
                Util.i18n_locale(locale);
            }
        }
    };
</script>

<style scoped lang="scss">
    .fb-comments {
        iframe {
            ._5lm5._2pi3._3-8y {
                display: none !important;
            }
        }
    }
</style>
