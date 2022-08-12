<template>
  <div>
    <hr />
    <div class="form-check" v-for="item in getItems" :key="item.id">
      <input
        v-model="selected"
        class="form-check-input"
        type="checkbox"
        :value="item.id"
        :id="item.id"
      />
      <label class="form-check-label" :for="item.id">
        {{ item.nome }}
      </label>
    </div>

    {{ selected }}
    <hr />
    <button @click="setItemsCardapio()" class="btn btn-outline-success">
      Confirma
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: [],
    };
  },
  methods: {
    setItemsCardapio() {
      this.$emit("setItems", this.selected);
    },
  },
  computed: {
    getItems() {
      return this.$store.state.items.items;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>