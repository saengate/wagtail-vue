<template>
    <b-container id="app">
        <b-card bg-variant="Light">
            <b-card-header>
                <Header />
            </b-card-header>
            <b-card-body>
                <Menu />
            </b-card-body>
            <Nuxt />
            <b-card-footer>
                <Foot />
            </b-card-footer>
        </b-card>
    </b-container>
</template>

<script>
import Header from "~/components/Header.vue";
import Menu from "~/components/Menu.vue";
import Foot from "~/components/Foot.vue";

export default {
    name: "app",
    components: {
        Header,
        Menu,
        Foot,
    },
};
</script>

<style scope>
html {
    height: 100%;
}

body {
    background-color: black;
    background-image: url("../assets/images/cieloestrellado.jpeg");
    background-repeat: repeat;
    background-size: 100% 100%;
}

#app {
    text-align: center;
}
</style>