<template>
    <div>
        <h1>{{ message|upper }}</h1>
    </div>
</template>


<script>
export default {
    name: 'About',
    filters: {
        upper: function(value){
        return value.toUpperCase()
        }
    },
    data() {
        return {
            message: '¡Página en construcción!'
        };
    }
}
</script>
