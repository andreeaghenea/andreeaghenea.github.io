<template>
    <section id="SectionHome" class="row">

        <div class="col-12 col-md-7 col-lg-7 order-2 order-lg-1 mt-4 mt-md-0">
            <h1 class="mt-lg-5">
                <span>
                    Hello! Mein Name ist Andreea Ghenea.
                </span>
                <vue-typed-js
                        class="d-lg-block d-none"
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

                <div class="d-lg-none d-block">
                    <span class="typing">
                        Ich habe mir einen Kindheitstraum damit erfüllt, Web Designer zu werden.
                    </span>
                </div>
            </h1>
        </div>

        <div class="col-12 col-md-5 col-lg-5 order-1 order-lg-2 ">
            <img :src="'assets/img/section_home/portrait.jpg'" class="img-fluid"/>
        </div>
    </section>
</template>
<script>
    import Base from "./base";

    export default {
        name: "SectionHome",
        props: {},
        mixins:[Base],

        mounted: function () {

        },
        methods: {}
    };
</script>
<style scoped lang="scss">
    @import "src/sass/variables";


    h1 {
        font-size: 40px;
        @media(max-width:992px){
            font-size: 36px;
        }


        span {
            color: $color_primary;

            &.typing {
                color: $color_text;
            }
        }
    }
</style>