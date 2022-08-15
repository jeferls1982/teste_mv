import axios from "../../../../services/axios";
//import router from "../../../router";
const base_url = "http://127.0.0.1:9000/api"
export default {


    loadReservas() {
        this.commit("LOAD_RESERVAS")
    },

    addReserva(context, data) {
        axios.post(`${base_url}/reservas`, data)
            .then(() => {
                this.commit('LOAD_RESERVAS');

            })
            .catch((e) => {
                console.log(e);
            }).finally()
    },
    deleteReserva(context, id) {
        axios.delete(`${base_url}/reservas/${id}`)
            .then((response) => {
                console.log(response);
                this.commit('LOAD_RESERVAS');
            })
            .catch((e) => {
                console.log(e);
            }).finally()
    },
    updateReserva(context, data) {
        console.log(data);
        axios.put(`${base_url}/reservas/${data.id}`, data)
            .then((response) => {
                console.log(response);
                this.commit('LOAD_RESERVAS');
            })
            .catch((e) => {
                console.log(e);
            }).finally()
    }


}