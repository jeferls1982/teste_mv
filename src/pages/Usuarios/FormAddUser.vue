<template>
  <div class="card my-3 p-3">
    <ul class="text-danger">
      <li v-for="erro in errors" :key="erro">{{ erro }}</li>
    </ul>
    <form @submit.prevent="addUser()" class="row g-3">
      <div class="col-md-12">
        <label for="Nome" class="form-label">Nome</label>
        <input
          v-model="name"
          type="text"
          class="form-control"
          placeholder="Nome"
          aria-label="Nome"
          id="Nome"
        />
      </div>
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">Email</label>
        <input
          v-model="email"
          type="email"
          class="form-control"
          id="inputEmail4"
          autocomplete="off"
          placeholder="email@email.com"
        />
      </div>
      <div class="col-md-6">
        <label for="inputPassword4" class="form-label">Password</label>
        <input
          v-model="password"
          type="password"
          class="form-control"
          id="inputPassword4"
          autocomplete="off"
        />
      </div>
      <div class="form-check">
        <input
          v-model="user_type"
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          value="1"
        />
        <label class="form-check-label" for="flexRadioDefault1"> Admin </label>
      </div>
      <div class="form-check">
        <input
          v-model="user_type"
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          checked="checked"
          value="2"
        />
        <label class="form-check-label" for="flexRadioDefault2">
          Usuário
        </label>
      </div>

      <div class="col-12 text-end">
        <button type="submit" class="btn btn-primary">Adicionar</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      email: null,
      password: null,
      user_type: 2,
      errors: [],
    };
  },
  methods: {
    validateForm() {
      if (!this.name) {
        this.errors.push("O nome é obrigatório.");
      }
      if (!this.email) {
        this.errors.push("O e-mail é obrigatório.");
      }
      if (!this.password) {
        this.errors.push("O password é obrigatório.");
      }
      if (!this.user_type) {
        this.errors.push("O user type é obrigatório.");
      }

      if (this.errors.length > 0) {
        return false;
      } else {
        return true;
      }
    },
    resetErrors() {
      if (
        this.name != "" &&
        this.email != "" &&
        this.password &&
        this.user_type != ""
      ) {
        true;
      }
      return false;
    },
    addUser() {
      this.errors = [];
      if (this.validateForm()) {
        var data = {
          name: this.name,
          email: this.email,
          password: this.password,
          user_type: this.user_type,
        };

        this.$store.dispatch("addUser", data);

        this.clearForm();
        this.$emit("closeForm");
      }
    },
    clearForm() {
      this.name = null;
      this.email = null;
      this.user_type = null;
      //this.password = null;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>