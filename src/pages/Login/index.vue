<template>
  <div class="container w-50 mt-5 card p-5 shadow">
    <form @submit.prevent="login()">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email</label>
        <input
          type="email"
          v-model="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" class="form-text">Informe seu e-mail.</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input
          type="password"
          v-model="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Lembrar-me</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null,
    };
  },
  methods: {
    login() {
      var data = {
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch("login", data);
      this.$store.dispatch("loadContent");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>