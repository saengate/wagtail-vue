import qs from "qs";
import wagtailFormat from "~/plugins/wagtailFormat";


export const state = () => ({
    waiting: false,
    loadingContact: false,
    isSending: false,
    contactFields: {
        "id": "",
        "meta": "",
        "title": "",
        "intro": "",
        "form_fields": [],
        "thank_you": "",
    },
    form_type: {
        Nombre: "nombre",
        Apellido: "apellido",
        Asunto: "asunto",
        "Correo electrónico": "correo_electronico",
        Mensaje: "mensaje",
    },
})

export const mutations = {
    setMensaje: (state, payload) => {
        state.tareas.push(payload);
    },
    setContactFields: (state, payload) => {
        state.contactFields = payload;
    },
    changeWaiting: (state, waiting) => {
        state.waiting = waiting;
    },
    setModal: (state, payload) => {
        state.isSending = payload;
    },
    setLoadingContact (state, payload) {
        state.loadingContact = payload;
    }
}

export const actions = {
    async getFieldsContact({
        state,
        commit,
    }) {
        commit('setLoadingContact', true);
        await this.$axios
            .get(`/api/v2/pages/?type=blog.ContactPage&fields=intro,thank_you,form_fields`)
            .then((res) => {
                res = res.data.items[0]
                res.form_fields.forEach((element, _) => {
                    element.required =
                        element.required === true ? element.required : false;
                    element["form"] = true;
                    element["tag"] = state.form_type[element.label];
                    if (wagtailFormat.type[element.field_type] === "tag") {
                        element["form"] = false;
                        element["form_type"] = element.field_type;
                    }
                });
                commit('setContactFields', res);
                return res;
            }).catch((err) => {
                console.log(err);
            }).finally(() => {
                commit('setLoadingContact', false);
            })
    },
    async enviarMensaje({
        commit,
    }, payload) {
        try {
            commit('changeWaiting', 'disabled');
            await this.$axios
                .post("/contacto/", qs.stringify(payload), {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                })
                .then((res) => {
                    commit('changeWaiting', false);
                    commit('setModal', true);
                })
                .catch((error) => {
                    console.log(error.response.data.mensaje);
                });
        } catch (error) {
            console.log(error);
        }
    },
}

export const getters = {
    /* requestState: (state) => {
        return state.waiting
    } */
}
