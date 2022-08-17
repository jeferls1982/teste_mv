<template>
  <div class="card my-3 p-3">
    <ul class="text-danger">
      <li v-for="erro in errors" :key="erro">{{ erro }}</li>
    </ul>
    <form @submit.prevent="addCategoria()">
      <div class="input-group">
        <input
          type="text"
          aria-label="First name"
          placeholder="Nome"
          class="form-control"
          v-model="nome"
        />
        <button type="submit" class="input-group-text btn btn-secondary">
          Adicionar
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nome: null,
      errors: [],
    };
  },
  methods: {
    validateForm() {
      if (!this.nome) {
        this.errors.push("O nome é obrigatório");
      }
      if (this.errors.length > 0) {
        return false;
      } else {
        return true;
      }
    },
    addCategoria() {
      var data = {
        nome: this.nome,
      };
      this.errors = [];
      if (this.validateForm()) {
        this.$store.dispatch("addCategoria", data);
        this.clearForm();
        this.$emit("closeForm");
      }
    },
    clearForm() {
      this.nome = null;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>