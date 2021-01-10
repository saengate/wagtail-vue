<template>
    <b-container>
        <b-card class="mt-4">
            <b-card-header header-bg-variant="dark">
                <b-img
                    height="300"
                    width="450"
                    alt="Luna Roja"
                    :src="require('~/assets/images/lunaroja.jpeg')"
                ></b-img>
            </b-card-header>
            <b-card-body body-bg-variant="danger" body-text-variant="white">
                <b-card-text v-html="message"></b-card-text>
            </b-card-body>
        </b-card>
    </b-container>
</template>

<script>
export default {
    name: "BuildingPage",
    computed: {
        message: function () {
            return this.$t("build").toUpperCase();
        },
    },
};
</script>
