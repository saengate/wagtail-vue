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
export default {
    name: "Blog",
    data() {
        return {
            blog: [],
        };
    },
    async created() {
        try {
            const res = await this.$axios.get(
                `/pages/?type=blog.BlogsPage&fields=id,intro,body,created_at`
            );
            this.blog = res.data.items;
        } catch (error) {
            console.log(error);
        }
    },
};
</script>
