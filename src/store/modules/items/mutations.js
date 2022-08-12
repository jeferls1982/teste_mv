import axios from "../../../../services/axios";
//import router from "../../../router";
const base_url = "http://127.0.0.1:9000/api"
export default {
    ADD_ITEM(state, item) {
        console.log(item)
        state.data.push(item)
    },
    DELETE_ITEM(state, id) {

        var index = state.data.map((e) => {
            console.log(e);
        });
        console.log(id)
        console.log(index)

    },

    LOAD_ITEMS(state) {
        axios.get(`${base_url}/items`).then(response => {
            state.items = response.data.data;
        }).catch((e) => {
            console.log(e);
        })
    }
}