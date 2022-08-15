<template>
  <div class="card my-3 p-3">
    <form @submit.prevent="updateCategoria()">
      <div class="input-group">
        <input
          type="text"
          aria-label="First name"
          placeholder="Nome"
          class="form-control"
          v-model="nome"
        />
        <button type="submit" class="input-group-text btn btn-primary">
          Update
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ["nome", "id"],
  data() {
    return {};
  },
  methods: {
    updateCategoria() {
      var data = {
        nome: this.nome,
        id: this.id,
      };

      this.$store.dispatch("updateCategoria", data);
      this.clearForm();
      this.$emit("closeForm");
    },
    clearForm() {
      this.nome = null;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>