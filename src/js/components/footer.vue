<template>
    <footer>
        <div class="container">
            footer
            <a id="scrollToTop" href="#" @click.stop.prevent="scrollTo('#application', 2000)">
                <span class="icon-chevron-up"></span>
            </a>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "AppFooter",
        props: {},
        data: function () {
            return {
                secondsToTop: 300,
            }
        },

        mounted: function () {
            var self = this;

            $('header').removeClass('menu-shrink');
            $('#scrollToTop').fadeOut('fast');
            //
            $(window).on('scroll', function () {
                self.secondsToTop = $(window).scrollTop() / $(window).innerHeight();
                self.secondsToTop = 1200 * self.secondsToTop;
                //
                if(this.scrollY > (this.screen.height / 3 )){
                    $('#scrollToTop').fadeIn('slow');
                    $('header').addClass('menu-shrink');
                }else{
                    $('#scrollToTop').fadeOut('slow');
                    $('header').removeClass('menu-shrink');
                }
            })
        },

        methods: {
            scrollTo: function (element, seconds) {
                Util.scrollTo(element, seconds);
            }
        }
    };
</script>

<style scoped lang="scss">

</style>
