<template>
  <div>
    <div
      v-if="getUser"
      class="d-flex justify-content-between alert alert-default"
      role="alert"
    >
      <span class="h5"> Cardapios </span>
      <button
        v-if="show_form"
        class="btn btn-sm btn-secondary"
        @click="(show_form = !show_form), (show_edit = false)"
      >
        <top />
      </button>
      <span v-else>
        <button
          v-if="userAdmin"
          class="btn btn-sm btn-secondary"
          @click="(show_form = !show_form), (show_edit = false)"
        >
          Add
        </button>
      </span>
    </div>
    <show-cardapio
      @editCardapio="editCardapio"
      @closeInfo="closeInfo"
      v-if="show_cardapio"
      :cardapio="cardapio"
      class="card p-3"
    />
    <form-add-cardapio class="text-center my-3" v-if="show_form" />
    <form-edit-cardapio
      @closeForm="closeForm"
      :id="id"
      :titulo="titulo"
      :preco="preco"
      :descricao="descricao"
      :categoria_id="categoria_id"
      :foto="foto"
      v-if="show_edit"
    />
    <grid-cardapios @showCardapio="showCardapio" :cardapios="getCardapios" />
  </div>
</template>

<script>
import Top from "../../icons/Top.vue";
import FormAddCardapio from "./FormAddCardapio.vue";
import FormEditCardapio from "./FormEditCardapio.vue";
import GridCardapios from "./GridCardapios.vue";

import ShowCardapio from "./ShowCardapio.vue";
export default {
  components: {
    GridCardapios,
    FormAddCardapio,
    ShowCardapio,
    FormEditCardapio,
    Top,
  },
  data() {
    return {
      headers: ["Nome", "Total de Cardápios", "Ações"],
      show_form: false,
      show_edit: false,
      cardapio: null,
      show_cardapio: false,
      titulo: null,
      preco: null,
      descricao: null,
      categoria_id: null,
      foto: null,
      id: null,
    };
  },
  methods: {
    showCardapio(cardapio) {
      this.cardapio = cardapio;
      this.show_cardapio = true;
    },
    editCardapio(cardapio) {
      this.titulo = cardapio.titulo;
      this.preco = cardapio.preco;
      this.descricao = cardapio.descricao;
      this.categoria_id = cardapio.categoria_id;
      this.foto = cardapio.foto;
      this.id = cardapio.id;
      this.show_edit = true;
      this.show_form = false;
      this.closeInfo();
    },
    closeInfo() {
      this.show_cardapio = false;
    },
    closeForm() {
      this.show_edit = false;
      this.show_form = false;
    },
  },
  computed: {
    getUser() {
      return this.$store.getters.getUser;
    },
    getCardapios() {
      return this.$store.state.cardapios.cardapios;
    },
    userAdmin() {
      if (this.$store.state.login.userLogged != null) {
        if (this.$store.state.login.userLogged.user_type == 1) {
          return true;
        } else {
          return false;
        }
      }
      return false;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>