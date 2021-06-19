<template>
    <b-container>
        <b-card>
            <b-card-header>
                <b-img
                    :src="require('~/assets/images/logo.png')"
                    alt="SaenGate logo"
                ></b-img>
            </b-card-header>
            <b-card-body v-if="perfil">
                <b-card v-for="item in perfil" :key="item.id">
                    <b-card-text v-html="item.description"></b-card-text>
                    <b-card-img
                        v-if="item.photo !== null"
                        width="360"
                        height="188"
                        :src="imageEndpoint + item.photo.meta.download_url"
                    ></b-card-img>
                </b-card>
            </b-card-body>
        </b-card>
    </b-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: "index",
    data() {
        return {
            perfil: [],
            imageEndpoint: this.$axios.BASE_URL,
        };
    },
    methods: {
        ...mapActions(["setLoading"]),
    },
    async created() {
        try {
            this.setLoading()
            const res = await this.$axios.get(
                `/api/v2/pages/?type=blog.PerfilPage&fields=description,photo`
            );
            let data = res.data.items;
            if (typeof data !== "undefined" && data) {
                this.perfil = data;
            }
        } catch (error) {
            console.log(error);
        } finally {
            this.setLoading()
        }
    },
};
</script>