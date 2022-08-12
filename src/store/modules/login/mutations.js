import axios from "../../../../services/axios";
import router from "../../../router";
const base_url = "http://127.0.0.1:9000/api"

export default {
    SET_USER(state) {
        axios.get(`${base_url}/user`).then(response => {
            state.user = true;
            state.userLogged = response.data;
            router.push('/cardapios')
        }).catch((e) => {
            console.log(e);
        })
    },

    LOGOUT(state) {
        console.log("logout");
        state.user = false
        state.userLogged = null
        router.push('/')
    },










}