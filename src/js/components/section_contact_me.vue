<template>
    <section id="SectionContactMe">
        <div class="row">
            <div class="col-12 mb-5">
                <h2 class="text-center">Contact Me</h2>
                <p class="text-center pl-5 pr-5">
                    It is a long established fact that a reader will be distracted by the readable
                    content of a page when looking at its layout
                </p>
            </div>

            <div class="col-12 col-lg-8">
                <form @submit.stop.prevent="submit()">
                    <div class="row">
                        <div class="form-group col-md-4">
                            <input type="text" name="name" class="form-control" id="first-name" placeholder="Full Name" required="required">
                        </div>

                        <div class="form-group col-md-4">
                            <input type="email" name="email" class="form-control" id="emailn" placeholder="Email" required="required">
                        </div>

                        <div class="form-group col-md-4">
                            <input type="text" name="subject" class="form-control" id="subject" placeholder="Subject" required="required">
                        </div>

                        <div class="form-group col-md-12">
                            <textarea rows="6" name="message" class="form-control" id="description" placeholder="Your Message" required="required"></textarea>
                        </div>

                        <div class="col-md-12 text-center">
                            <div class="actions">
                                <input type="submit" value="Send Me" name="submit" id="submitButton" class="main-btn">
                            </div>
                        </div>

                    </div>
                </form>
            </div>

            <div class="col-12 col-lg-4">
                <h4 >Andreea Ghenea</h4>

                <p>Web Design & Web Development</p>
                <p class="mb-3 pb-2">
                    <span class="icon-map-marked-alt d-block d-sm-inline-block mb-2"></span>
                    <a href="https://www.google.de/maps/place/Munich,+Germany/@48.1360411,11.5977896,12z"
                       target="_blank">
                        München, Deutschland
                    </a>
                </p>
                <p class="mb-3 pb-2">
                    <span class="icon-headset d-block d-sm-inline-block mb-2"></span>
                    <a href="tel:00491737078695" target="_blank">
                        (0049) 173 707 8695
                    </a>
                </p>
                <p class="mb-3 pb-2">
                    <span class="icon-envelope d-block d-sm-inline-block mb-2"></span>
                    <a href="mailto:contact@angreeaghenea.com" target="_blank">
                        contact@angreeaghenea.com
                    </a>
                </p>
            </div>
        </div>


    </section>
</template>
<script>
    export default {
        name: "SectionContactMe",
        props: {},
        data: function () {
            return {
                name: '',
                email: '',
                subject: '',
                message: ''
            }
        },
        computed: {
            mail_href: function () {
                var href = "";
                href += "mailto:" + this.$t('contact.content.emails')[0];
                href += "?subject=" + encodeURI(this.name.trim() + ' | ' + this.subject.trim());
                href += "&body=" + encodeURI(this.message.trim());

                return href;
            }
        },
        mounted: function () {
        },
        methods: {}
    };
</script>
<style scoped lang="scss">
    @import "src/sass/variables";

    p {
        overflow: hidden;
        clear: both;
        color: #666;

        span {
            display: inline-block;
            color: #18c9de;
            margin-right: 25px;
            font-size: 20px;
            width: 60px;
            height: 60px;
            line-height: 60px;
            border-radius: 50%;
            background-color: #f7faff;
            box-shadow: 0 5px 15px rgba(0, 0, 0, .1);
            text-align: center;
        }

        a {
            transition: all 0.3s ease-in-out;

            &:hover {
                color: $color_primary;
            }
        }
    }

    .form-control {
        display: block;
        width: 100%;
        height: 50px;
        line-height: 50px;
        padding: 6px 15px;
        border-top: 1px solid transparent;
        border-left: 1px solid transparent;
        border-right: 1px solid transparent;
        border-bottom: 1px solid #ddd;
        margin-bottom: 15px;
        border-radius: 4px;
        background: #f7faff;
        position: relative;
        box-shadow: inherit;

    }

    textarea.form-control  {
        margin: 0px -6.5px 15px 0px;
        height: 259px;
        line-height: 35px;
    }


</style>