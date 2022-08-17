<template>
  <span>
    <span v-if="item" @click="showByCategory(item)">
      <span class="btn-categoria shadow-md my-1">
        {{ item.nome }}
        <small class="text-ligth"> - {{ item.cardapios.length }}</small>
      </span>
    </span>
    <span v-else @click="mostraTodos()">
      <span class="btn-categoria shadow-md my-1">
        {{ text }} <small class="text-ligth"> - {{ total }}</small>
      </span>
    </span></span
  >
</template>

<script>
export default {
  props: ["text", "total", "item"],
  data() {
    return {};
  },
  methods: {
    showByCategory(categoria) {
      this.$emit("showByCategory", categoria);
    },
    mostraTodos() {
      this.$emit("mostraTodos");
    },
  },
};
</script>

<style scoped>
.btn-categoria {
  background-color: rgba(156, 156, 156, 0.748);
  width: 100%;
  padding: 1px 10px;
  border-radius: 2rem;
  color: white;
  cursor: pointer;
}
</style>