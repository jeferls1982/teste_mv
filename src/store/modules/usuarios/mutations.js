import axios from "../../../../services/axios";
//import router from "../../../router";
const base_url = "http://127.0.0.1:9000/api"
export default {


    LOAD_USUARIOS(state) {
        axios.get(`${base_url}/users?with[]=type`).then(response => {

            state.usuarios = response.data.data;
        }).catch((e) => {
            console.log(e);
        })
    }
}