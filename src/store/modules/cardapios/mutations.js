import axios from "../../../../services/axios";
//import router from "../../../router";
const base_url = "http://127.0.0.1:9000/api"
export default {


    LOAD_CARDAPIOS(state) {
        axios.get(`${base_url}/cardapios?with[]=items&with[]=categoria`).then(response => {
            state.cardapios = response.data.data;
        }).catch((e) => {
            console.log(e);
        })
    }
}