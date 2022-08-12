<template>
  <div class="my-3">
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col" v-for="i in getCardapios" :key="i">
        <div class="card">
          <img :src="base64 + i.foto" class="card-img-top" alt="pizza" />
          <div class="card-body">
            <h5 class="card-title">{{ i.titulo }}</h5>
            <p class="card-text text-truncate">
              {{ i.descricao }}
            </p>
            <p class="text-danger">R$ {{ i.preco }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      base64: `data:image/jpeg;base64,`,
    };
  },
  computed: {
    getCardapios() {
      return this.$store.state.cardapios.cardapios;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>