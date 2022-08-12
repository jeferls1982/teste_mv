<template>
  <div>
    <div class="row d-flex row-cols-1 row-cols-md-4 g-4 my-3">
      <div v-for="item in cardapios" :key="item.id" class="col item">
        <div @click="showCardapio(item)" class="card shadow-sm">
          <img
            :src="base64 + item.foto"
            class="card-img-top"
            :alt="item.titulo"
          />
          <div class="card-body">
            <h5 class="card-title">{{ item.titulo }}</h5>
            <p class="card-text text-truncate">
              {{ item.descricao }}
            </p>
            <h6 class="card-subtitle text-danger">R$ {{ item.preco }}</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cardapios"],
  data() {
    return {
      base64: `data:image/jpeg;base64,`,
    };
  },
  methods: {
    showCardapio(item) {
      this.$emit("showCardapio", item);
    },
  },
};
</script>

<style scoped>
.item {
  cursor: pointer;
}
</style>