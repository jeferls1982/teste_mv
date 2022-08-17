<template>
  <nav class="navbar navbar-expand-sm bg-light fixed-top">
    <div class="container-fluid">
      <span v-if="getUser">
        <router-link class="navbar-brand" to="cardapios">Cardapios</router-link>
      </span>
      <span v-else>
        <router-link class="navbar-brand" to="/">Cardapios</router-link>
      </span>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <span class="d-flex" v-if="getUser">
            <li class="nav-item">
              <router-link class="nav-link" to="reservas">Reservas</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="categorias"
                >Categorias</router-link
              >
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="items">Items</router-link>
            </li>
          </span>
          <li v-if="userAdmin" class="nav-item">
            <router-link class="nav-link" to="usuarios">Usuários</router-link>
          </li>
        </ul>

        <div v-if="!getUser" title="Login" class="d-flex" role="search">
          <router-link class="nav-link" to="login"
            ><login class="mx-3"
          /></router-link>
        </div>
        <div v-else class="d-flex">
          <span class="mx-3"> Olá {{ getUserLogged.name }} </span>
          <span @click="logout()">
            <logout title="logout" />
          </span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Login from "../../../icons/Login.vue";
import Logout from "../../../icons/Logout.vue";
export default {
  components: { Login, Logout },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
  computed: {
    getUser() {
      return this.$store.getters.getUser;
    },
    getUserLogged() {
      console.log(this.$store.state.login.userLogged.user_type);
      return this.$store.state.login.userLogged;
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