<template>
  <div id="app">
    <!-- CSS only -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Bootstrap demo</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
      crossorigin="anonymous"
    />

    <navbar />
    <div class="container conteudo">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/parts/nav/Navbar.vue";
export default {
  components: { Navbar },
  methods: {},
  mounted() {
    this.$store.dispatch("loadContent");
    this.$router.push("/");
  },
};
</script>

<style>
.conteudo {
  margin-top: 3rem;
}
</style>
