<template>
    <b-container id="footer" class="mt-2">
        <p v-html="$t('foot')" class="mt-3"></p>
    </b-container>
</template>

<script>
export default {
    name: "Foot",
};
</script>

<style scoped>
#footer {
    position: relative;
    width: 100%;
    bottom: 0;
    border-top: 2px solid rgba(5, 5, 5, 0.87);
    border-bottom: 2px solid rgba(5, 5, 5, 0.87);
    min-height: 70px;
}
</style>
