<template>
    <b-container>
        <b-card>
            <b-card-header>
                <b-img
                    :src="require('~/assets/images/logo.png')"
                    alt="SaenGate logo"
                ></b-img>
            </b-card-header>
            <b-card-body>
                <b-card v-for="item in perfil" :key="item.id">
                    <b-card-text v-html="item.description"></b-card-text>
                    <b-card-img
                        v-if="item.photo !== null"
                        width="360"
                        height="188"
                        :src="
                            'http://0.0.0.0:7000' + item.photo.meta.download_url
                        "
                    ></b-card-img>
                </b-card>
            </b-card-body>
        </b-card>
    </b-container>
</template>

<script>
export default {
    name: "index",
    data() {
        return {
            perfil: [],
        };
    },
    async created() {
        try {
            const res = await this.$axios.get(
                `/api/v2/pages/?type=blog.PerfilPage&fields=description,photo`
            );
            this.perfil = res.data.items;
        } catch (error) {
            console.log(error);
        }
    },
};
</script>