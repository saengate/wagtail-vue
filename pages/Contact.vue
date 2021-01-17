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
                                    v-model="
                                        contactSG[
                                            `${contactFields.form_fields[0].tag}`
                                        ]
                                    "
                                />
                                <TextField
                                    v-if="contactFields.form_fields[1]"
                                    :fieldData="contactFields.form_fields[1]"
                                    rules="required|min:4|max:20"
                                    class="text-left"
                                    v-model="
                                        contactSG[
                                            `${contactFields.form_fields[1].tag}`
                                        ]
                                    "
                                />
                                <TextField
                                    v-if="contactFields.form_fields[2]"
                                    :fieldData="contactFields.form_fields[2]"
                                    rules="required|min:20|max:150"
                                    class="text-left"
                                    v-model="
                                        contactSG[
                                            `${contactFields.form_fields[2].tag}`
                                        ]
                                    "
                                />
                                <TextField
                                    v-if="contactFields.form_fields[3]"
                                    :fieldData="contactFields.form_fields[3]"
                                    rules="required|email|max:250"
                                    class="text-left"
                                    v-model="
                                        contactSG[
                                            `${contactFields.form_fields[3].tag}`
                                        ]
                                    "
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
                                    v-model="
                                        contactSG[
                                            `${contactFields.form_fields[4].tag}`
                                        ]
                                    "
                                />
                                <b-button
                                    class="btn-sm btn-block btn-success"
                                    type="submit"
                                    :disabled="waiting"
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
        <ModalSendEmail />
    </b-container>
</template>

<script>
import wagtailFormat from "~/plugins/wagtailFormat";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import { ValidationObserver } from "vee-validate";
import TextField from "@/components/inputs/TextField";
import TextTareaField from "@/components/inputs/TextTareaField";
import ModalSendEmail from "@/components/ModalSendEmail";

export default {
    name: "Contact",
    data() {
        return {
            contactSG: {
                nombre: "",
                apellido: "",
                asunto: "",
                correo_electronico: "",
                mensaje: "",
            },
        };
    },
    components: {
        ValidationObserver,
        TextField,
        TextTareaField,
        ModalSendEmail,
    },
    methods: {
        ...mapActions("contact", ["enviarMensaje", "getFieldsContact"]),
        callEnviarMensaje() {
            this.enviarMensaje(this.contactSG);
        },
    },
    created() {
        this.getFieldsContact();
    },
    computed: {
        ...mapState("contact", ["waiting", "contactFields"]),
    },
};
</script>
