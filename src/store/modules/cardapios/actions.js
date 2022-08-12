import axios from "../../../../services/axios";
import router from "../../../router";
const base_url = "http://127.0.0.1:9000/api"

export default {

    loadCardapios() {
        this.commit("LOAD_CARDAPIOS")
    },
    addCardapio(context, data) {
        console.log(data);
        axios.post(`${base_url}/cardapios`, data)
            .then(() => {
                this.commit('LOAD_CARDAPIOS');
                this.commit('LOAD_CATEGORIAS');
            })
            .catch((e) => {
                console.log(e);
            }).finally()
    },

    addItemsCardapios(context, data) {
        data.items.forEach(item_id => {
            let dados = {
                cardapio_id: data.cardapio_id,
                item_id: item_id
            }
            axios.post(`${base_url}/cardapio-items`, dados)
                .then(() => {})
                .catch((e) => {
                    console.log(e);
                }).finally(() => {
                    this.commit('LOAD_CARDAPIOS');
                    this.commit('LOAD_CATEGORIAS');
                })
            router.push('/cardapios')
        });

    },
    deleteCardapio(context, id) {
        axios.delete(`${base_url}/cardapios/${id}`)
            .then((response) => {
                console.log(response);
                this.commit('LOAD_CARDAPIOS');
                this.commit('LOAD_CATEGORIAS');
            })
            .catch((e) => {
                console.log(e);
            }).finally()
    },


}