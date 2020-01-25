<template>
    <main>
        <div class="container">
            <section-home></section-home>
            <section-about-me></section-about-me>
            <section-my-skills></section-my-skills>
            <section-our-services></section-our-services>
            <section-latest-work></section-latest-work>
            <section-our-resume></section-our-resume>
            <section-our-testimonial></section-our-testimonial>
            <section-clients></section-clients>
            <section-contact-me></section-contact-me>
        </div>
    </main>
</template>

<script>
    export default {
        name: "AppMain",
        props: {},
        components: {
            SectionAboutMe :require("./section_about_me").default,
            SectionClients :require("./section_clients").default,
            SectionContactMe :require("./section_contact_me").default,
            SectionHome :require("./section_home").default,
            SectionLatestWork :require("./section_latest_work").default,
            SectionMySkills :require("./section_my_skills").default,
            SectionOurResume :require("./section_our_resume").default,
            SectionOurServices :require("./section_our_services").default,
            SectionOurTestimonial :require("./section_our_testimonial").default,
        },
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
