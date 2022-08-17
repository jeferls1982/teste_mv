<template>
  <div>
    <div
      class="d-flex justify-content-between alert alert-primary"
      role="alert"
    >
      <span class="h5"> Itens </span>
      <button
        class="btn btn-sm btn-secondary"
        @click="show_form = !show_form"
        v-if="show_form"
      >
        <top />
      </button>
      <span v-else>
        <button
          v-if="userAdmin"
          class="btn btn-sm btn-secondary"
          @click="show_form = !show_form"
        >
          Add
        </button>
      </span>
    </div>
    <form-add-item @closeForm="closeForm" v-if="show_form" />
    <form-edit-item
      @closeForm="closeForm"
      v-if="show_edit"
      :id="item.id"
      :nome="item.nome"
      :calorias="item.calorias"
    />
    <table-component
      @editItem="editItem"
      :headers="headers"
      :items="getItems"
    />
  </div>
</template>

<script>
import Top from "../../icons/Top.vue";
import FormAddItem from "./FormAddItem.vue";
import FormEditItem from "./FormEditItem.vue";
import TableComponent from "./TableItems.vue";
export default {
  components: { TableComponent, FormAddItem, FormEditItem, Top },
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
      this.item = item;
      this.show_form = false;
      this.show_edit = true;
    },
    closeForm() {
      this.show_form = false;
      this.show_edit = false;
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