<template>
  <div class="card my-3 p-3">
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
    };
  },
  methods: {
    addCategoria() {
      var data = {
        nome: this.nome,
      };
      this.$store.dispatch("addCategoria", data);
      this.clearForm();
    },
    clearForm() {
      this.nome = null;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>