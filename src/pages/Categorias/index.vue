<template>
  <div>
    <div class="alert alert-info" role="alert">
      <button
        v-if="userAdmin"
        class="btn btn-sm btn-secondary"
        @click="(show_form = !show_form), (show_edit = false)"
      >
        Add
      </button>
      <span class="h5"> Categorias </span>
    </div>

    <form-add-categoria @closeForm="closeForm" v-if="show_form" />
    <form-edit-categoria v-if="show_edit" :id="id" :nome="nome" />

    <table-categorias
      @editCategoria="editCategoria"
      :headers="headers"
      :items="getItems"
    />
  </div>
</template>

<script>
import FormAddCategoria from "./FormAddCategoria.vue";
import FormEditCategoria from "./FormEditCategoria.vue";
import TableCategorias from "./TableCategorias.vue";
export default {
  components: { TableCategorias, FormAddCategoria, FormEditCategoria },
  data() {
    return {
      show_form: false,
      show_edit: false,
      headers: ["Nome", "Total de Cardápios"],
      nome: null,
      id: null,
    };
  },
  methods: {
    closeForm() {
      this.show_form = false;
    },
    editCategoria(item) {
      this.nome = item.nome;
      this.id = item.id;
      this.show_form = false;
      this.show_edit = true;
    },
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