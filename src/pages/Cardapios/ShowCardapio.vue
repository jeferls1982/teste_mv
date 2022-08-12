<template>
  <div class="card">
    <div class="row g-3">
      <div class="imagem col-md-6">
        <img
          :src="base64 + cardapio.foto"
          class="figure-img img-fluid rounded"
          alt="cardapio"
        />
      </div>
      <div class="informacao text-secondary p-4 col-md-6">
        <h6>{{ cardapio.categoria.nome }}</h6>
        <h1>{{ cardapio.titulo }}</h1>
        <h2>R$ {{ cardapio.preco }}</h2>
        <p>{{ cardapio.descricao }}</p>
        <p>
          <small>
            <i v-for="item in cardapio.items" :key="item.id">
              {{ item.nome }},
            </i>
          </small>
        </p>

        <p v-if="userAdmin">
          <button
            @click="show_checkbox_items = !show_checkbox_items"
            class="btn btn-secondary"
          >
            Adicionar Ingredientes
          </button>
          <button @click="closeInfo()" class="btn mx-3">Fechar</button>
          <button
            @click="deleteCardapio(cardapio.id)"
            class="btn text-danger mx-3"
          >
            Excluir
          </button>
        </p>
      </div>
    </div>
    <form-add-items
      @closeInfo="closeInfo"
      v-if="show_checkbox_items"
      @setItems="setItems"
    />
  </div>
</template>

<script>
import FormAddItems from "./FormAddItems.vue";
export default {
  components: { FormAddItems },
  props: ["cardapio"],
  data() {
    return {
      base64: `data:image/jpeg;base64,`,
      show_checkbox_items: false,
    };
  },
  methods: {
    setItems(items) {
      var data = {
        cardapio_id: this.cardapio.id,
        items: items,
      };

      this.$store.dispatch("addItemsCardapios", data);
      this.$emit("closeDetails");
    },
    closeInfo() {
      this.$emit("closeInfo");
    },
    deleteCardapio(id) {
      this.$store.dispatch("deleteCardapio", id);
    },
  },
  computed: {
    userAdmin() {
      if (this.$store.state.login.userLogged != null) {
        if (this.$store.state.login.userLogged.user_type == 1) {
          return true;
        } else {
          return false;
        }
      }
      return false;
    },
  },
};
</script>

<style scoped>
.detalhes {
  display: flex;
}
.informacao {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.show_cardapio {
}
.imagem {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>