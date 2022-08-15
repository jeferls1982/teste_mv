<template>
  <div class="card p-3">
    <div class="input-group mb-3">
      <span class="input-group-text">T</span>
      <input
        required
        v-model="titulo"
        type="text"
        class="form-control"
        placeholder="Titulo"
        aria-label="Titulo"
        aria-describedby="basic-addon1"
      />
    </div>
    <div class="input-group mb-3">
      <span class="input-group-text">$</span>
      <input
        required="required"
        v-model="preco"
        placeholder="Preço"
        type="text"
        v-mask="'#####.##'"
        class="form-control"
        aria-label="Amount (to the nearest dollar)"
      />

      <span class="input-group-text">.00</span>
    </div>

    <div class="input-group">
      <span class="input-group-text">Descrição</span>
      <textarea
        required="required"
        v-model="descricao"
        class="form-control"
        aria-label="Descrição"
      ></textarea>
    </div>
    <div class="input-group mt-3">
      <label class="input-group-text" for="inputGroupSelect01">Categoria</label>
      <select
        v-model="categoria_id"
        required="required"
        class="form-select"
        id="inputGroupSelect01"
      >
        <option selected>Selecione...</option>
        <option v-for="item in getCategorias" :key="item.id" :value="item.id">
          {{ item.nome }}
        </option>
      </select>
    </div>
    <div class="mt-3">
      <input
        required="required"
        class="form-control"
        type="file"
        @change="convertImage()"
        id="foto"
      />
    </div>
    <div class="mt-3">
      <button @click="updateCardapio()" class="btn btn-primary">Update</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id", "foto", "titulo", "descricao", "categoria_id", "preco"],
  data() {
    return {};
  },
  methods: {
    updateCardapio() {
      var data = {
        id: this.id,
        titulo: this.titulo,
        preco: this.preco,
        descricao: this.descricao,
        categoria_id: this.categoria_id,
        foto: this.foto,
      };
      this.$store.dispatch("updateCardapio", data);
      this.clearForm();
      this.$emit("closeForm");
    },
    clearForm() {
      this.titulo = null;
      this.preco = null;
      this.descricao = null;
      this.categoria_id = null;
      this.foto = null;
    },
    convertImage() {
      const file = document.querySelector("input[type=file]").files[0];
      const reader = new FileReader();

      let rawImg;
      reader.onloadend = () => {
        rawImg = reader.result;
        this.foto = rawImg;
      };
      reader.readAsDataURL(file);
    },
  },
  computed: {
    getCategorias() {
      return this.$store.state.categorias.categorias;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>