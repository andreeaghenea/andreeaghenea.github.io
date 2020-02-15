<template>
    <header>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav class="navbar navbar-expand-lg">

                        <div class="navbar-brand" href="#">
                            <h2>
                                &lt;
                                A / G
                                &gt;
                            </h2>
                        </div>

                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="icon-bars"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">


                            <ul class="navbar-nav mr-0 ml-auto">
                                <li class="nav-item active">
                                    <a class="nav-link" href="#" @click.stop.prevent="scrollTo('#SectionHome', 200)">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#" @click.stop.prevent="scrollTo('#SectionOurServices', 1000)">Services</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#" @click.stop.prevent="scrollTo('#SectionLatestWork', 1000)">Works</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#" @click.stop.prevent="scrollTo('#SectionOurResume', 1000)">Resume</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#" @click.stop.prevent="scrollTo('#SectionOurTestimonial', 1000)">Testimonials</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#" @click.stop.prevent="scrollTo('#SectionContactMe', 1000)">Contact</a>
                                </li>
                            </ul>

                        </div>
                    </nav>
                </div>
            </div>
        </div>

    </header>
</template>

<script>
    export default {
        name: "AppHeader",
        props: {},
        mounted: function () {
        },

        methods: {
            changeLocale: function (locale) {
                Util.i18n_locale(locale);
            },

            scrollTo: function (element, seconds) {
                Util.scrollTo(element, seconds);
            }
        }
    };
</script>

<style scoped lang="scss">
    header {
        @media(min-width: 992px) {
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            z-index: 1030;
        }
    }
</style>
