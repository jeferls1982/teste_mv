import axios from "../../../../services/axios";
//import router from "../../../router";
const base_url = "http://127.0.0.1:9000/api"
export default {


    loadUsuarios() {
        this.commit("LOAD_USUARIOS")
    },

    addUser(context, data) {
        axios.post(`${base_url}/users`, data)
            .then(() => {
                alert("Adicionado com sucesso!");
                this.commit('LOAD_USUARIOS');
            })
            .catch((e) => {
                if (e.code == "ERR_BAD_RESPONSE") {
                    alert("Email em uso!!")
                }
                console.log(e.code);
            }).finally()
    },

    deleteUser(context, id) {
        axios.delete(`${base_url}/users/${id}`)
            .then((response) => {
                console.log(response);
                this.commit('LOAD_USUARIOS');
            })
            .catch((e) => {
                console.log(e);
            }).finally()
    },
    updateUser(context, user) {

        axios.put(`${base_url}/users/${user.id}`, user)
            .then(() => {

                this.commit('LOAD_USUARIOS');
            })
            .catch((e) => {
                console.log(e);
            }).finally()
    },




}