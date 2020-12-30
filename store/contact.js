import qs from "qs";


export const state = () => ({
    token: "",
    waiting: false,
})

export const mutations = {
    setToken(state, token) {
        state.token = token;
    },
    setMensaje(state, payload) {
        state.tareas.push(payload);
    }
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
            const res = await this.$axios.post("/api-token-auth/", params);
            commit('setToken', res.data.token)
        } catch (error) {
            console.log(error);
        }
    },
    async enviarMensaje({
        state,
    }, payload) {
        try {
            const res = await this.$axios
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
