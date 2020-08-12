<template>
    <b-container id="app">
        <Header/>
        <Menu/>
        <router-view/>
        <Foot/>
    </b-container>
</template>

<script>
import Header from "@/components/Header.vue"
import Menu from "@/components/Menu.vue"
import Foot from "@/components/Foot.vue"
import {
    BContainer,
} from "bootstrap-vue"

export default {
    name: 'app',
    components: {
        Header,
        Menu,
        Foot,
        'b-container': BContainer,
    },
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color:white;
}

#body-html {
    background-color: black;
    background-image: url('../src/assets/images/cieloestrellado.jpeg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
}

html {
    height: 100%;
}

.ctext {
    background-color: black;
    display: inline-block;
    padding-inline: 1%;
}
</style>
