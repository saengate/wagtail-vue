<template></template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

export default {
    components: {
        // Componenetes Vue
    },
    data() {
        // variables
        return {
            datos: "",
            dialog: false,
        };
    },
    filters: {
        // filtros y transformaciones
        upper(value) {
            return value.uppercase();
        },
    },
    created() {
        // llamadas al cargar la página
    },
    watch: {
        // Variables observadas
        dialog(val) {
            val || this.close();
        },
    },
    methods: {
        // metodos u asignaciones
        ...mapMutations(["method"]),
        // ...mapMutations("namespace-vuex", ["method"]),
        ...mapActions(["method"]),
    },
    computed: {
        // Calculos y operadores logicos
        ...mapGetters(["varGlobal"]),
        ...mapState(["stateVar"]),
    },
};
</script>
