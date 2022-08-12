<template>
  <div>
    <div v-if="getUser" class="alert alert-default" role="alert">
      <button
        v-if="userAdmin"
        class="btn btn-sm btn-secondary"
        @click="show_form = !show_form"
      >
        Add
      </button>
      <span class="h5"> Cardapios </span>
    </div>
    <show-cardapio
      @closeInfo="closeInfo"
      v-if="show_cardapio"
      :cardapio="cardapio"
      class="card p-3"
    />
    <form-add-cardapio class="text-center my-3" v-if="show_form" />
    <grid-cardapios @showCardapio="showCardapio" :cardapios="getCardapios" />
  </div>
</template>

<script>
import FormAddCardapio from "./FormAddCardapio.vue";
import GridCardapios from "./GridCardapios.vue";

import ShowCardapio from "./ShowCardapio.vue";
export default {
  components: { GridCardapios, FormAddCardapio, ShowCardapio },
  data() {
    return {
      headers: ["Nome", "Total de Cardápios", "Ações"],
      show_form: false,
      cardapio: null,
      show_cardapio: false,
    };
  },
  methods: {
    showCardapio(cardapio) {
      this.cardapio = cardapio;
      this.show_cardapio = true;
    },
    closeInfo() {
      this.show_cardapio = false;
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