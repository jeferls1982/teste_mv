<template>
  <table class="table table-hover my-3">
    <thead>
      <tr>
        <th v-for="header in headers" :key="header" scope="col">
          {{ header }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.nome">
        <td>{{ item.name }}</td>
        <td>{{ item.email }}</td>
        <td>{{ item.type.tipo }}</td>
        <td class="actions">
          <span @click="editUser(item)"><pen /></span>
          <span @click="deleteUser(item.id)"><trash /></span>
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
    deleteUser(id) {
      this.$store.dispatch("deleteUser", id);
    },
    editUser(item) {
      this.$emit("editUser", item);
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