<template>
    <b-modal v-model="isSending">
        <template #modal-header bvModalEvent.trigger="setModal">
            <p class="modal-card-title h4 text-info">Correo enviado...</p>
        </template>
        <template #default>
            <p v-html="contactFields.thank_you" />
        </template>
        <template #modal-footer bvModalEvent.trigger="setModal">
            <b-button
                class="delete"
                aria-label="close"
                size="sm"
                variant="outline-danger"
                @click="setModal(false)"
            >
                Cerrar
            </b-button>
        </template>
    </b-modal>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
    name: "ModalSendEmail",
    methods: {
        ...mapMutations("contact", ["setModal"]),
    },
    computed: {
        ...mapState("contact", ["isSending", "contactFields"]),
    },
};
</script>
