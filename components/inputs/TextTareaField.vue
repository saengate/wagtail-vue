<template>
    <validation-provider
        :name="fieldData.tag"
        :vid="vid"
        :rules="rules"
        v-slot="validationContext"
    >
        <b-form-group
            :id="`group-${fieldData.id}`"
            :label="fieldData.label"
            :label-for="`id_${fieldData.tag}`"
            v-bind:class="{
                'is-success': validationContext.valid,
            }"
            v-bind="$attrs"
        >
            <b-form-textarea
                :id="`id_${fieldData.tag}`"
                :name="`name_${fieldData.tag}`"
                v-model="innerValue"
                :type="fieldData.field_type | html"
                :state="getValidationState(validationContext)"
                :aria-describedby="`id_${fieldData.tag}_feedback`"
                :placeholder="fieldData.help_text"
                v-bind="fieldClass"
            ></b-form-textarea>
            <b-form-invalid-feedback :id="`id_${fieldData.tag}_feedback`">
                {{ validationContext.errors[0] }}
            </b-form-invalid-feedback>
        </b-form-group>
    </validation-provider>
</template>


<script>
import wagtailFormat from "~/plugins/wagtailFormat";
import { ValidationProvider } from "vee-validate";
import { mapState, mapMutations } from "vuex";

export default {
    name: "Contact",
    components: {
        ValidationProvider,
    },
    data() {
        return {
            innerValue: "",
        };
    },
    props: {
        vid: {
            type: String,
        },
        rules: {
            type: [Object, String],
            default: "",
        },
        value: {
            type: null,
        },
        fieldData: {},
        fieldClass: [Object, String],
    },
    watch: {
        innerValue(newVal) {
            this.$emit("input", newVal);
        },
        value(newVal) {
            this.innerValue = newVal;
        },
    },
    filters: {
        html(value) {
            return wagtailFormat.html(value);
        },
    },
    methods: {
        getValidationState({ dirty, validated, valid = null }) {
            return dirty || validated ? valid : null;
        },
    },
    created() {
        if (this.value) {
            this.innerValue = this.value;
        }
    },
};
</script>
