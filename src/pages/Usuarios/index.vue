<template>
  <div>
    <div class="alert alert-success" role="alert">
      <button
        class="btn btn-sm btn-secondary"
        @click="(show_form = !show_form), (show_edit = false)"
      >
        Add
      </button>
      <span class="h5"> Usuários </span>
    </div>
    <form-add-user @closeForm="closeForm" v-if="show_form" />
    <form-edit-user
      @closeEdit="closeEdit"
      v-if="show_edit"
      :id="user.id"
      :name="user.name"
      :email="user.email"
      :password="user.password"
      :user_type="user.user_type"
    />
    <table-usuarios @editUser="editUser" :headers="headers" :items="getItems" />
  </div>
</template>

<script>
import FormAddUser from "./FormAddUser.vue";
import FormEditUser from "./FormEditUser.vue";
import TableUsuarios from "./TableUsuarios.vue";
export default {
  components: { TableUsuarios, FormAddUser, FormEditUser },
  data() {
    return {
      show_form: false,
      show_edit: false,
      user: null,

      headers: ["Nome", "Email", "Tipo", "Ações"],
      items: [
        { nome: "feijao", calorias: "51" },
        { nome: "arros", calorias: "14" },
      ],
    };
  },
  computed: {
    getItems() {
      return this.$store.state.usuarios.usuarios;
    },
  },
  methods: {
    editUser(user) {
      this.user = user;
      this.show_edit = true;
      this.show_form = false;
    },
    closeEdit() {
      this.show_edit = false;
    },
    closeForm() {
      this.show_form = false;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>