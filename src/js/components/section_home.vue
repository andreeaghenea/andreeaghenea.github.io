<template>
    <section id="SectionHome" class="row">

        <div class="col-12 col-md-7">
            <h1 class="mt-lg-5">
                <span>
                    Hello! Mein Name ist Andreea Ghenea.
                </span>
                <vue-typed-js
                        :strings="['Ich habe mir einen Kindheitstraum damit erfüllt, Web Designer zu werden.']"
                        :loop="true"
                        :typeSpeed="150"
                        :startDelay="1000"
                        :backSpeed="100"
                        :backDelay="2000"
                        :showCursor="false"
                >
                        <span class="typing">

                        </span>
                </vue-typed-js>
            </h1>
        </div>

        <div class="col-12 col-md-5">
            <img :src="'assets/img/section_home/portrait.jpg'" class="img-fluid"/>
        </div>
    </section>
</template>
<script>
    export default {
        name: "SectionHome",
        props: {},
        mounted: function () {

        },
        methods: {}
    };
</script>
<style scoped lang="scss">
    @import "src/sass/variables";

    h1 {
        span {
            color: $color_primary;
            &.typing {
                color: $color_text;
            }
        }
    }
</style>