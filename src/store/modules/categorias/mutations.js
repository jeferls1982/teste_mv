import axios from "../../../../services/axios";
//import router from "../../../router";
const base_url = "http://127.0.0.1:9000/api"
export default {


    LOAD_CATEGORIAS(state) {
        axios.get(`${base_url}/categorias?with[]=cardapios`).then(response => {
            state.categorias = response.data.data;
        }).catch((e) => {
            console.log(e);
        })
    }
}