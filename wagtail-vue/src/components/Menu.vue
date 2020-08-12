<template>
    <div id="nav">
        <b-button-group>
            <b-button>
                <router-link to="/">Home</router-link>
            </b-button>
            <b-button>
                <router-link to="/game">Game</router-link>
            </b-button>
            <b-button>
                <router-link to="/contact">Contact</router-link>
            </b-button>
            <b-button>
                <router-link to="/blog">Blog</router-link>
            </b-button>
        </b-button-group>
    </div>
</template>

<script>
import {
    BButton,
    BButtonGroup,
} from "bootstrap-vue"

export default {
    name: 'Menu',
    components: {
        'b-button': BButton,
        'b-button-group': BButtonGroup,
    },
}
</script>

<style>
#nav {
    padding: 5px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>