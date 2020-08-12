<template>
    <div>
        <p class="ctext">{{ message }}</p>
    </div>
</template>

<script>
export default {
    name: 'Foot',
    computed: {
        message: function() {
            return this.$t('foot');
        }
    }
}
</script>
