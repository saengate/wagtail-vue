import qs from "qs";
import wagtailFormat from "~/plugins/wagtailFormat";


export const state = () => ({
    token: "",
    waiting: false,
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
    setToken(state, token) {
        state.token = token;
    },
    setMensaje(state, payload) {
        state.tareas.push(payload);
    },
    setContactFields(state, payload) {
        state.contactFields = payload;
    },
}

export const actions = {
    async getToken({
        commit
    }) {
        let params = {
            username: "contact",
            password: "contact",
        };
        try {
            let res = await this.$axios.post("/api-token-auth/", params);
            commit('setToken', res.data.token)
        } catch (error) {
            console.log(error);
        }
    },
    async getFieldsContact({
        state,
        commit,
    }) {
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
                console.log("error!!!");
                console.log(err);
            })
    },
    async enviarMensaje({
        state,
    }, payload) {
        try {
            await this.$axios
                .post("/contacto/", qs.stringify(payload), {
                    headers: {
                        Authorization: "Token " + state.token,
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                })
                .then((res) => {
                    // this.guardarUsuario(token);
                    console.log("Mensaje enviado!!!");
                    console.log(res);
                })
                .catch((error) => {
                    console.log("error!!!");
                    console.log(error.response.data.mensaje);
                    // this.message = err.response.data.mensaje;
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
