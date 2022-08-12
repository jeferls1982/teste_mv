<template>
  <table class="table table-hover">
    <thead>
      <tr>
        <th v-for="header in headers" :key="header" scope="col">
          {{ header }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.nome">
        <td>
          {{ formatData(item.data) }}
        </td>
        <td>
          {{ item.hora }}
        </td>
        <td>
          {{ item.nome_reserva }}
        </td>
        <td>
          {{ item.contato }}
        </td>
        <td>
          {{ item.qtd_pessoas }}
        </td>
        <td>
          {{ item.cardapio.titulo }}
        </td>
        <td class="actions">
          <span><pen /></span>
          <span @click="deleteReserva(item.id)"><trash /></span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import moment from "moment";
import Pen from "../../icons/Pen.vue";
import Trash from "../../icons/Trash.vue";
export default {
  components: { Trash, Pen },
  props: ["headers", "items"],
  methods: {
    deleteReserva(id) {
      this.$store.dispatch("deleteReserva", id);
    },
    formatData(data) {
      return moment(data).format("DD/MM/YYYY");
    },
  },
};
</script>

<style  scoped>
th,
td {
  text-align: center;
}
.actions {
  display: flex;
  justify-content: space-around;
}
</style>