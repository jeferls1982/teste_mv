<template>
  <div>
    <div class="alert alert-dark" role="alert">
      <button
        v-if="getUser"
        class="btn btn-sm btn-secondary"
        @click="(show_form = !show_form), (show_edit = false)"
      >
        Add</button
      ><span class="h5"> Reservas </span>
    </div>
    <form-add-reserva
      v-if="show_form"
      @closeForm="closeForm"
      class="card p-3 mt-3"
    />
    <form-edit-reserva
      @closeForm="closeForm"
      v-if="show_edit"
      :id="id"
      :data="data"
      :hora="hora"
      :nome_reserva="nome_reserva"
      :contato="contato"
      :qtd_pessoas="qtd_pessoas"
      :cardapio_id="cardapio_id"
    />
    <table-reservas
      @closeForm="closeForm"
      @editReserva="editReserva"
      :headers="headers"
      :items="getItems"
    />
  </div>
</template>

<script>
import FormAddReserva from "./FormAddReserva.vue";
import FormEditReserva from "./FormEditReserva.vue";
import TableReservas from "./TableReservas.vue";

export default {
  components: { TableReservas, FormAddReserva, FormEditReserva },
  data() {
    return {
      show_form: false,
      show_edit: false,
      headers: [
        "Data",
        "Hora",
        "Nome",
        "Contato",
        "Qtd Pessoas",
        "Cardapio",
        "Ações",
      ],

      data: null,
      hora: null,
      nome_reserva: null,
      contato: null,
      qtd_pessoas: null,
      cardapio_id: null,
      id: null,
    };
  },
  methods: {
    closeForm() {
      this.show_edit = false;
      this.show_form = false;
    },
    editReserva(item) {
      this.id = item.id;
      this.data = item.data;
      this.hora = item.hora;
      this.qtd_pessoas = item.qtd_pessoas;
      this.contato = item.contato;
      this.cardapio_id = item.cardapio_id;
      this.nome_reserva = item.nome_reserva;
      this.show_form = false;
      this.show_edit = true;
    },
  },
  computed: {
    getItems() {
      return this.$store.state.reservas.reservas;
    },
    getUser() {
      return this.$store.getters.getUser;
    },
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

<style lang="scss" scoped>
</style>