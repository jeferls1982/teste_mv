<template>
  <div>
    <div class="alert alert-info" role="alert">
      <button
        v-if="userAdmin"
        class="btn btn-sm btn-secondary"
        @click="show_form = !show_form"
      >
        Add
      </button>
      <span class="h5"> Categorias </span>
    </div>

    <form-add-categoria v-if="show_form" />
    <table-categorias :headers="headers" :items="getItems" />
  </div>
</template>

<script>
import FormAddCategoria from "./FormAddCategoria.vue";
import TableCategorias from "./TableCategorias.vue";
export default {
  components: { TableCategorias, FormAddCategoria },
  data() {
    return {
      show_form: false,
      headers: ["Nome", "Total de Cardápios"],
    };
  },
  computed: {
    getItems() {
      return this.$store.state.categorias.categorias;
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