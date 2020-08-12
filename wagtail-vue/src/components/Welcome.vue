<template>
    <div>
        <br>
        <div v-for="item in perfil" :key="item.id">
            <p class="ctext" v-html="item.description"></p>
            <img v-if="item.photo !== null"
                width="360" height="188"
                :src="'http://localhost:7000' + item.photo.meta.download_url"/>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Welcome',
    data() {
        return {
            perfil: []
        };
    },
    mounted () {
        axios
        .get('http://localhost:7000/api/v2/pages/?type=blog.PerfilPage&fields=description,photo')
        .then(response => (this.perfil = response.data.items))
    }
}
</script>
