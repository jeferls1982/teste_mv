<template>
  <div class="card my-3 p-3">
    <form @submit.prevent="addItem()">
      <div class="input-group">
        <input
          type="text"
          aria-label="First name"
          placeholder="Nome"
          class="form-control"
          v-model="nome"
        />
        <input
          type="number"
          aria-label="Last name"
          placeholder="Calorias"
          class="form-control"
          v-model="calorias"
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
      calorias: null,
    };
  },
  methods: {
    addItem() {
      var data = {
        nome: this.nome,
        calorias: this.calorias,
      };
      this.$store.dispatch("addItem", data);
      this.clearForm();
      this.$emit("closeForm");
    },
    clearForm() {
      this.nome = null;
      this.calorias = null;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>