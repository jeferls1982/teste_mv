<template>
  <table class="table table-hover my-3">
    <thead>
      <tr>
        <th v-for="header in headers" :key="header" scope="col">
          {{ header }}
        </th>
        <th v-if="userAdmin">Ações</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.nome">
        <td>
          {{ item.nome }}
        </td>
        <td>
          {{ item.calorias }}
        </td>
        <td v-if="userAdmin" class="actions">
          <span @click="editItem(item)"><pen /></span>
          <span @click="deleteItem(item.id)"><trash /></span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import Pen from "../../icons/Pen.vue";
import Trash from "../../icons/Trash.vue";
export default {
  components: { Trash, Pen },
  methods: {
    deleteItem(id) {
      this.$store.dispatch("deleteItem", id);
    },
    editItem(item) {
      this.$emit("editItem", item);
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
  props: ["headers", "items"],
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