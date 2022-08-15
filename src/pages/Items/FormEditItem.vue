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
          type="string"
          aria-label="Last name"
          placeholder="Calorias"
          class="form-control"
          v-model="calorias"
        />
        <button type="submit" class="input-group-text btn btn-secondary">
          Update
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ["id", "nome", "calorias"],
  data() {
    return {};
  },
  methods: {
    addItem() {
      var data = {
        id: this.id,
        nome: this.nome,
        calorias: this.calorias,
      };
      this.$store.dispatch("updateItem", data);
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