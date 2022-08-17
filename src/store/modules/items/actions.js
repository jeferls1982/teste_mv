import axios from "../../../../services/axios";
//import router from "../../../router";
const base_url = "http://127.0.0.1:9000/api"
export default {



    loadItem() {
        this.commit("LOAD_ITEMS")
    },
    addItem(context, data) {
        axios.post(`${base_url}/items`, data)
            .then(() => {
                alert("Item adicionado")
                this.commit('LOAD_ITEMS')
            })
            .catch((e) => {
                console.log(e);
            }).finally()
    },
    deleteItem(context, id) {
        axios.delete(`${base_url}/items/${id}`)
            .then(() => {
                alert("Item excluido")
                this.commit('LOAD_ITEMS');
            })
            .catch((e) => {
                console.log(e);
            }).finally()
    },
    updateItem(context, item) {
        axios.put(`${base_url}/items/${item.id}`, item)
            .then(() => {
                this.commit('LOAD_ITEMS');
            })
            .catch((e) => {
                console.log(e);
            }).finally()
    }


}