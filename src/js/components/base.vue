<script>
    import MobileDetect from "mobile-detect";

    export default {
        name: "Base",
        props: {},
        data: function () {
            return {}
        },

        computed: {
            MobileDetect: function(){
                return new MobileDetect();
            }
        },

        mounted: function () {

        },
        methods: {}
    };
</script>