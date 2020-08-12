<template>
    <div>
        <h1>{{ message|upper }}</h1>
        <div v-for="item in blog" :key="item.id">
            <h2>{{ item.created_at }}</h2>
            <h2>{{ item.title }}</h2>
            <p>{{ item.intro }}</p>
            <p v-html="item.body"></p>
        </div>
    </div>
</template>


<script>
// @ is an alias to /src
import axios from 'axios'

export default {
    name: 'About',
    filters: {
        upper: function(value){
        return value.toUpperCase()
        }
    },
    data() {
        return {
            message: 'Hello world in Blog!!',
            blog: []
        };
    },
    mounted () {
        axios
        .get('http://localhost:7000/api/v2/pages/?type=blog.BlogsPage&fields=id,intro,body,created_at')
        .then(response => (this.blog = response.data.items))
    }
}
</script>
