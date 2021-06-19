<template>
    <div>
        <div v-for="item in blog" :key="item.id">
            <h2>{{ item.created_at }}</h2>
            <h2>{{ item.title }}</h2>
            <p>{{ item.intro }}</p>
            <p v-html="item.body"></p>
        </div>
    </div>
</template>


<script>
import { mapActions } from "vuex";

export default {
    name: "Blog",
    data() {
        return {
            blog: [],
        };
    },
    methods: {
        ...mapActions(["setLoading"]),
    },
    async created() {
        try {
            this.setLoading()
            const res = await this.$axios.get(
                `/api/v2/pages/?type=blog.BlogsPage&fields=id,intro,body,created_at`
            );
            this.blog = res.data.items;
        } catch (error) {
            console.log(error);
        } finally {
            this.setLoading()
        }
    },
};
</script>
