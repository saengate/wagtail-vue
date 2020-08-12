<template>
    <div id="language">
        <b-button
            v-for="entry in languages" :key="entry.title"
            @click="changeLocale(entry.language)">
        <flag :iso="entry.flag" v-bind:squared=false /> {{entry.title}}
        </b-button>
        <h1 >{{ message }}</h1>
    </div>
</template>

<script>
import i18n from '@/plugins/i18n';
import {
    BButton,
} from "bootstrap-vue"

export default {
    name: 'Header',
    components: {
        'b-button': BButton,
    },
    computed: {
        message: function() {
            return this.$t('head');
        }
    },
    data() {
        return {
            languages: [
                {
                    flag: 'us',
                    language: 'en',
                    title: 'English'
                },
                {
                    flag: 'es',
                    language: 'es',
                    title: 'Español'
                }
            ]
        };
    },
    methods: {
    changeLocale(locale) {
            i18n.locale = locale;
        }
    }
}
</script>

<style>
#language {
    padding-top: 5px;
}
</style>