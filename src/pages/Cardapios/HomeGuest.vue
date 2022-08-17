<template>
  <div>
    <span class="nav-cat mx-1 d-flex flex-wrap justify-content-around">
      <nav-categorias
        @mostraTodos="mostraTodos"
        text="Todos"
        :total="getCardapios.length"
      />
      <span v-for="item in getCategorias" :key="item.id">
        <nav-categorias
          @showByCategory="showByCategory"
          class="my-1"
          :item="item"
          :text="item.nome"
          :total="item.cardapios.length"
        />
      </span>
    </span>
    <div class="my-2">
      <span v-if="show == 'todos'">
        <h3 class="text-secondary">Todos os Cardápios</h3>
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
      </span>
      <span v-else>
        <h3 class="text-secondary">{{ show }}</h3>
        <div class="row row-cols-1 row-cols-md-4 g-4">
          <div class="col" v-for="i in cardapios" :key="i">
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
      </span>
    </div>
  </div>
</template>

<script>
import NavCategorias from "./NavCategorias.vue";

export default {
  components: { NavCategorias },
  data() {
    return {
      lista: this.getCategorias,
      base64: `data:image/jpeg;base64,`,
      show: "todos",
      cardapios: [],
    };
  },
  methods: {
    mostraTodos() {
      this.show = "todos";
      console.log(this.show);
    },
    showByCategory(cat) {
      console.log(cat.nome);
      this.show = cat.nome;
      this.cardapios = cat.cardapios;
    },
  },
  computed: {
    getCardapios() {
      return this.$store.state.cardapios.cardapios;
    },
    getCategorias() {
      return this.$store.state.categorias.categorias;
    },
  },
};
</script>

<style  scoped>
.nav-cat {
  height: 50px;
  align-items: center;
}
</style>