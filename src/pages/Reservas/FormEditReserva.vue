<template>
  <div>
    <form @submit.prevent="updateReserva()" class="row g-3 needs-validation">
      <div class="col-md-6">
        <label for="data" class="form-label">Data</label>
        <input
          v-model="data"
          type="date"
          class="form-control"
          id="data"
          required
        />
      </div>
      <div class="col-md-6">
        <label for="hora" class="form-label">Horários</label>
        <input v-model="hora" type="time" class="form-control" id="hora" />
      </div>
      <div class="col-12">
        <label for="nome_reserva" class="form-label">Nome</label>
        <input
          v-model="nome_reserva"
          type="text"
          class="form-control"
          id="nome_reserva"
        />
      </div>
      <div class="col-md-4">
        <label for="inputAddress2" class="form-label">Contato</label>
        <input
          v-model="contato"
          type="text"
          class="form-control"
          id="inputAddress2"
          placeholder="Adicione um contato para essa reserva"
        />
      </div>
      <div class="col-md-4">
        <label for="qtd" class="form-label">Quantidade de pessoas</label>
        <input
          v-model="qtd_pessoas"
          type="number"
          min="1"
          value="1"
          class="form-control"
          id="qtd"
        />
      </div>
      <div class="col-md-4">
        <label for="inputState" class="form-label">Cardápio</label>
        <select v-model="cardapio_id" id="inputState" class="form-select">
          <option
            v-for="item in getCardapios"
            :key="item.id"
            :value="cardapio_id"
          >
            {{ item.titulo }}
          </option>
          <option value="1" selected>Selecione...</option>
        </select>
      </div>

      <div class="col-12">
        <button type="submit" class="btn btn-primary">Update</button>
        <span @click="closeForm()" class="btn btn-default mx-5"> Fechar </span>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: [
    "id",
    "data",
    "hora",
    "nome_reserva",
    "contato",
    "qtd_pessoas",
    "cardapio_id",
  ],
  data() {
    return {};
  },
  methods: {
    updateReserva() {
      var data = {
        id: this.id,
        data: this.data,
        hora: this.hora,
        qtd_pessoas: this.qtd_pessoas,
        contato: this.contato,
        cardapio_id: this.cardapio_id,
        nome_reserva: this.nome_reserva,
      };
      this.$store.dispatch("updateReserva", data);
      this.$emit("closeForm");
    },
    closeForm() {
      this.$emit("closeForm");
    },
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