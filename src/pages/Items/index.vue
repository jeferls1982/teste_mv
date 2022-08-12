<template>
  <div>
    <div class="alert alert-primary" role="alert">
      <button
        v-if="userAdmin"
        class="btn btn-sm btn-secondary"
        @click="show_form = !show_form"
      >
        Add
      </button>
      <span class="h5"> Itens </span>
    </div>
    <form-add-item v-if="show_form" />
    <form-edit-item
      @editItem="editItem"
      v-if="show_edit"
      :id="item.id"
      :nome="item.nome"
      :calorias="item.calorias"
    />
    <table-component :headers="headers" :items="getItems" />
  </div>
</template>

<script>
import FormAddItem from "./FormAddItem.vue";
import FormEditItem from "./FormEditItem.vue";
import TableComponent from "./TableItems.vue";
export default {
  components: { TableComponent, FormAddItem, FormEditItem },
  data() {
    return {
      show_form: false,
      show_edit: false,
      headers: ["Nome", "Calorias"],
      item: null,
    };
  },
  methods: {
    editItem(item) {
      alert("adskfh");
      this.item = item;
      this.show_form = false;
      this.show_edit = true;
    },
  },
  computed: {
    getItems() {
      return this.$store.state.items.items;
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