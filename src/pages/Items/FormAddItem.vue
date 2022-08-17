<template>
  <div class="card my-3 p-3">
    <ul class="text-danger">
      <li v-for="erro in errors" :key="erro">{{ erro }}</li>
    </ul>
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
      errors: [],
    };
  },
  methods: {
    validateForm() {
      if (!this.nome) {
        this.errors.push("Informe o nome do item.");
      }
      if (!this.calorias) {
        this.errors.push("Informe as calorias do item.");
      }

      if (this.errors.length > 0) {
        return false;
      } else {
        return true;
      }
    },
    addItem() {
      var data = {
        nome: this.nome,
        calorias: this.calorias,
      };
      this.errors = [];
      if (this.validateForm()) {
        this.$store.dispatch("addItem", data);
        this.clearForm();
        this.$emit("closeForm");
      }
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