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
    </b-container>
</template>

<script>
export default {
    name: "Header",
    computed: {},
    methods: {
        changeLocale(locale) {
            this.$i18n.setLocale(locale);
        },
    },
};
</script>
