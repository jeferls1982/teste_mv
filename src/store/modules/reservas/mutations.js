import axios from "../../../../services/axios";
//import router from "../../../router";
const base_url = "http://127.0.0.1:9000/api"
export default {


    LOAD_RESERVAS(state) {
        axios.get(`${base_url}/reservas?with[]=cardapio`).then(response => {
            state.reservas = response.data.data;
        }).catch((e) => {
            console.log(e);
        })
    }
}