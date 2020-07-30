<template>
    <div class="home">
        <HelloWorld :msg="message"/>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'Home',
    components: {
        HelloWorld
    },
    computed: {
        message: function() {
            return this.$t('hello');
        }
    }
}
</script>
