<template>
  <div class="is-screenwidth is-screenheight is-flex is-justify-content-center is-align-items-center">
    <div class="card">
      <div class="card-content">
        <div class="content">
          <h1 class="title is-3">ChatApp - Login / Register</h1>
          <input v-model="username" type="text" placeholder="Username" class="input mb-3" />
          <input v-model="password" type="text" placeholder="Password" class="input mb-3" />
          <div class="is-flex is-align-items-center" style="gap: 8px">
            <b-button @click="handleSubmit" type="is-primary">Login / Register</b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data: () => ({
    username: "",
    password: "",
  }),
  methods: {
    handleSubmit() {
      /* this.$http
        .post("/auth/register", {
          username: this.username,
          password: this.password,
        })
        .then(({ data }) => {
          console.log("data", data);
        })
        .catch();
    }, */
      this.$auth.loginWith('local', { data: { username: this.username, password: this.password } })
        .then(() => {
          this.$router.push("/");
        }).catch((err) => {
          const message = err.response.data.error;
          this.$buefy.snackbar.open({
            message: message,
            type: "is-primary",
            position: "is-top",
            indefinite: true,
          });
        })
    }
  },
};
</script>

<style scoped>
.card {
  max-width: 550px;
}
</style>
