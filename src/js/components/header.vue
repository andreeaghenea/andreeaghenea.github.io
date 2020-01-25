<template>
    <header>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav class="navbar navbar-expand-lg">

                        <a class="navbar-brand" href="#">
                            <h2>Andreea GHENEA</h2>
                        </a>

                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="icon-bars"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">


                            <ul class="navbar-nav mr-0 ml-auto">
                                <li class="nav-item active">
                                    <a class="nav-link" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Services</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Works</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Resume</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Testimonials</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Contact</a>
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
            }
        }
    };
</script>

<style scoped lang="scss">

</style>
