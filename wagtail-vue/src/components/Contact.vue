<template>
    <div>
        <div v-for="item in contact" :key="item.id">
            <h2 v-html="item.intro"></h2>
            <!-- <div v-for="field in item.form_fields" :key="field.id"> -->
                <form>
                    <input
                        type="text"
                        :placeholder="item.form_fields[0].meta.help_text"
                        v-model="name"
                    >
                </form>
            <!-- </div> -->
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Contact',
    props: {
        msg: String
    },
    data() {
        return {
            contact: [],
            email: '',
            name: ''
        };
    },
    mounted () {
        axios
        .get('http://localhost:7000/api/v2/pages/?type=blog.ContactPage&fields=intro,thank_you,form_fields')
        .then(response => {
                this.contact = response.data.items
                console.log(this.contact[0].form_fields[0])
                return this.contact
            }
        )
    }
}
</script>
