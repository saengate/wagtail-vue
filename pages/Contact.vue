<template>
    <b-container>
        <b-row no-gutters>
            <b-col md="6">
                <b-card no-body style="max-width: 40rem" class="mb-2">
                    <b-card-header v-html="contactFields.intro"></b-card-header>
                    <b-card-body>
                        <validation-observer
                            ref="observer"
                            v-slot="{ handleSubmit }"
                        >
                            <b-form
                                @submit.stop.prevent="
                                    handleSubmit(callEnviarMensaje)
                                "
                            >
                                <TextField
                                    v-if="contactFields.form_fields[0]"
                                    :fieldData="contactFields.form_fields[0]"
                                    rules="required|min:4|max:20"
                                    class="text-left"
                                />
                                <TextField
                                    v-if="contactFields.form_fields[1]"
                                    :fieldData="contactFields.form_fields[1]"
                                    rules="required|min:4|max:20"
                                    class="text-left"
                                />
                                <TextField
                                    v-if="contactFields.form_fields[2]"
                                    :fieldData="contactFields.form_fields[2]"
                                    rules="required|min:20|max:150"
                                    class="text-left"
                                />
                                <TextField
                                    v-if="contactFields.form_fields[3]"
                                    :fieldData="contactFields.form_fields[3]"
                                    rules="required|email|max:250"
                                    class="text-left"
                                />
                                <TextTareaField
                                    v-if="contactFields.form_fields[4]"
                                    :fieldData="contactFields.form_fields[4]"
                                    rules="required|min:50|max:1000"
                                    class="text-left"
                                    :fieldClass="{
                                        rows: '6',
                                        'max-rows': '6',
                                    }"
                                />
                                <b-button
                                    class="btn-sm btn-block btn-success"
                                    type="submit"
                                >
                                    {{ $t("send") }}
                                </b-button>
                            </b-form>
                        </validation-observer>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col md="6">
                <b-card-img
                    src="https://placekitten.com/290/280"
                    alt="Image"
                    class="rounded-0"
                ></b-card-img>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import wagtailFormat from "~/plugins/wagtailFormat";
import { mapState, mapGetters, mapActions } from "vuex";
import { ValidationObserver } from "vee-validate";
import TextField from "@/components/inputs/TextField";
import TextTareaField from "@/components/inputs/TextTareaField";

export default {
    name: "Contact",
    components: {
        ValidationObserver,
        TextField,
        TextTareaField,
    },
    data() {
        return {
            message: "",
            contactSG: {
                nombre: "",
                apellido: "",
                asunto: "",
                correo_electronico: "",
                mensaje: "",
            },
        };
    },
    filters: {
        html(value) {
            return wagtailFormat.html(value);
        },
    },
    methods: {
        ...mapActions("contact", [
            "getToken",
            "enviarMensaje",
            "getFieldsContact",
        ]),
        getValidationState({ dirty, validated, valid = null }) {
            return dirty || validated ? valid : null;
        },
        callEnviarMensaje() {
            this.enviarMensaje(this.contactSG);
        },
    },
    created() {
        this.getToken();
        this.getFieldsContact();
    },
    computed: {
        ...mapState("contact", ["token", "contactFields"]),
    },
};
</script>
