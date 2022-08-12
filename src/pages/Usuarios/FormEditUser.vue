<template>
  <div class="card my-3 p-3">
    <form @submit.prevent="updateUser()" class="row g-3">
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
        <button type="submit" class="btn btn-primary">Atualizar</button>
        <span @click="closeEdit()" class="btn btn-default mx-2">Fechar</span>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ["id", "name", "email", "password", "user_type"],
  data() {
    return {};
  },
  methods: {
    updateUser() {
      var data = {
        id: this.id,
        name: this.name,
        email: this.email,
        password: this.password,
        user_type: this.user_type,
      };
      this.$store.dispatch("updateUser", data);
      this.clearForm();
    },
    clearForm() {
      this.name = null;
      this.email = null;
      this.user_type = null;
      //this.password = null;
    },
    closeEdit() {
      this.$emit("closeEdit");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>