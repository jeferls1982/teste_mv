import axios from "../../../../services/axios";

const base_url = "http://127.0.0.1:9000/api"



export default {
    login(context, data) {
        axios.post(`${base_url}/auth/login`, data).then((response) => {
            console.log(response);
            let token = response.data.data.token;
            localStorage.setItem("access_token", token);
            this.commit('SET_USER');
        }).catch((e) => {
            console.log(e);
        })


    },
    logout() {
        localStorage.setItem("access_token", "")
        this.commit("LOGOUT")
    },

    loadContent() {
        this.dispatch("loadItem")
        this.dispatch("loadCategorias")
        this.dispatch("loadUsuarios")
        this.dispatch("loadReservas")
        this.dispatch("loadCardapios")
    },



}