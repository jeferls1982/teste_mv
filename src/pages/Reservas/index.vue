<template>
  <div>
    <div class="alert alert-dark" role="alert">
      <button
        v-if="getUser"
        class="btn btn-sm btn-secondary"
        @click="show_form = !show_form"
      >
        Add</button
      ><span class="h5"> Reservas </span>
    </div>
    <form-add-reserva
      v-if="show_form"
      @closeForm="closeForm"
      class="card p-3 mt-3"
    />
    <table-reservas :headers="headers" :items="getItems" />
  </div>
</template>

<script>
import FormAddReserva from "./FormAddReserva.vue";
import TableReservas from "./TableReservas.vue";

export default {
  components: { TableReservas, FormAddReserva },
  data() {
    return {
      show_form: false,
      headers: [
        "Data",
        "Hora",
        "Nome",
        "Contato",
        "Qtd Pessoas",
        "Cardapio",
        "Ações",
      ],
      items: [
        { nome: "feijao", calorias: "51" },
        { nome: "arros", calorias: "14" },
      ],
    };
  },
  methods: {
    closeForm() {
      this.show_form = false;
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