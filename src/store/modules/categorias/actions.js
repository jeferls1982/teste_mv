import axios from "../../../../services/axios";
//import router from "../../../router";
const base_url = "http://127.0.0.1:9000/api"
export default {


    loadCategorias() {
        this.commit("LOAD_CATEGORIAS")
    },

    addCategoria(context, data) {
        axios.post(`${base_url}/categorias`, data)
            .then(() => {
                alert("Categoria adicionada.")
                this.commit('LOAD_CATEGORIAS');
            })
            .catch((e) => {
                console.log(e);
            }).finally()
    },
    deleteCategoria(context, id) {
        axios.delete(`${base_url}/categorias/${id}`)
            .then(() => {
                alert("Categoria excluida.")
                this.commit('LOAD_CATEGORIAS');
            })
            .catch((e) => {
                console.log(e);
            }).finally()
    },
    updateCategoria(context, item) {
        axios.put(`${base_url}/categorias/${item.id}`, item)
            .then(() => {
                this.commit('LOAD_CATEGORIAS');
            })
            .catch((e) => {
                console.log(e);
            }).finally()
    }


}