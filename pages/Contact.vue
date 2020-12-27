<template>
    <b-container>
        <b-row no-gutters>
            <b-col md="6">
                <b-card no-body style="max-width: 40rem" class="mb-2">
                    <b-card-header v-html="contact.intro"></b-card-header>
                    <b-card-body>
                        <b-form @submit.prevent="callEnviarMensaje">
                            <b-form-group
                                v-for="field in contact.form_fields"
                                :key="field.id"
                                :id="`group-${field.id}`"
                                :label="field.label"
                                :label-for="`id_${field.tag}`"
                                label-cols-sm="5"
                                label-cols-lg="4"
                                :state="validation"
                            >
                                <b-form-input
                                    v-if="field.form === true"
                                    :id="`id_${field.tag}`"
                                    :name="field.tag"
                                    v-model="contactSG[`${field.tag}`]"
                                    :type="field.field_type | html"
                                    :placeholder="field.help_text"
                                    :required="field.required"
                                ></b-form-input>
                                <b-form-textarea
                                    v-if="
                                        field.field_type === 'multiline' &&
                                        field.form === false
                                    "
                                    :id="`id_${field.tag}`"
                                    :name="field.tag"
                                    v-model="contactSG[`${field.tag}`]"
                                    :placeholder="field.help_text"
                                    rows="3"
                                    max-rows="6"
                                ></b-form-textarea>
                                <b-form-invalid-feedback :state="validation">{{
                                    message
                                }}</b-form-invalid-feedback>
                                <b-form-valid-feedback :state="validation">{{
                                    message
                                }}</b-form-valid-feedback>
                            </b-form-group>
                            <b-button
                                class="btn-sm btn-block btn-success"
                                type="submit"
                                >{{ $t("send") }}</b-button
                            >
                        </b-form>
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
import { required, minLength, between } from "vuelidate/lib/validators";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
    name: "Contact",
    components: {},
    data() {
        return {
            contact: {},
            message: "",
            contactSG: {
                nombre: "",
                apellido: "",
                asunto: "",
                correo_electronico: "",
                mensaje: "",
            },
            form_type: {
                Nombre: "nombre",
                Apellido: "apellido",
                Asunto: "asunto",
                "Correo electrónico": "correo_electronico",
                Mensaje: "mensaje",
            },
        };
    },
    filters: {
        html(value) {
            return wagtailFormat.html(value);
        },
    },
    methods: {
        ...mapActions("contact", ["getToken", "enviarMensaje"]),
        callEnviarMensaje() {
            this.enviarMensaje(this.contactSG);
        },
    },
    async created() {
        // this.requestState;
        this.getToken();
        this.$axios
            .get(
                `/api/v2/pages/?type=blog.ContactPage&fields=intro,thank_you,form_fields`
            )
            .then((res) => {
                this.contact = res.data.items[0];
                this.contact.form_fields.forEach((element, index) => {
                    element.required =
                        element.required === true ? element.required : false;
                    element["form"] = true;
                    element["tag"] = this.form_type[element.label];
                    if (wagtailFormat.type[element.field_type] === "tag") {
                        element["form"] = false;
                        element["form_type"] = element.field_type;
                    }
                });
            })
            .catch((err) => {
                console.log(err);
            });
    },
    computed: {
        ...mapState("contact", ["token"]),
        // ...mapGetters("contact", ["requestState"]),
        validation() {
            return (
                this.contactSG.nombre.length > 4 &&
                this.contactSG.nombre.length < 13
            );
        },
    },
};
</script>
