<template>
    <b-container>
        <h2 v-html="contact.intro"></h2>
        <form v-for="field in contact.form_fields" :key="field.id">
            <label v-html="field.label" />
            <input type="text" :placeholder="field.help_text" v-model="contact.help_text" />
        </form>
    </b-container>
</template>

<script>
// import AbstractFormField from "@component/wagtail/AbstractFormField";
export default {
    name: "Contact",
    components: {
        // AbstractFormField,
    },
    props: {
        msg: String,
    },
    data() {
        return {
            contact: {},
            email: "",
            name: "",
        };
    },
    async created() {
        try {
            const res = await this.$axios.get(
                `/pages/?type=blog.ContactPage&fields=intro,thank_you,form_fields`
            );
            this.contact = res.data.items[0];
        } catch (error) {
            console.log(error);
        }
    },
};
</script>
