<template>
    <b-container>
        <b-button
            variant="outline-dark"
            class="mr-2"
            v-for="locale in $i18n.locales"
            :key="locale.code"
            @click="changeLocale(locale.code)"
        >
            <flag :iso="locale.code" v-bind:squared="false" />
            {{ locale.name }}
        </b-button>
        <h3 class="mt-3">{{ $t("head") }}</h3>
        <div v-show="loading || loadingContact">
            <h6 font-color="danger" v-html='$t("backend")'></h6>
            <div class="spinner-border text-danger" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    </b-container>
</template>

<script>
import { mapState } from "vuex";

export default {
    name: "Header",
    methods: {
        changeLocale(locale) {
            this.$i18n.setLocale(locale);
        },
    },
    computed: {
        ...mapState(["loading"]),
        ...mapState("contact", ["loadingContact"]),
    },
};
</script>
