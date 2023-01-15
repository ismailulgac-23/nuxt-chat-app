<template>
  <div
    class="is-screenwidth is-screenheight is-flex is-justify-content-center is-align-items-center"
  >
    <div class="card">
      <div class="card-content">
        <div class="content">
          <h1 class="title is-3">ChatApp - Register</h1>
          <input
            v-model="username"
            type="text"
            placeholder="Username"
            class="input mb-3"
          />
          <input
            v-model="password"
            type="text"
            placeholder="Password"
            class="input mb-3"
          />
          <div class="is-flex is-align-items-center" style="gap: 8px">
            <b-button :loading="loading" @click="handleSubmit" type="is-primary"
              >Register</b-button
            >
            <nuxt-link to="/login">
              <b-button type="is-light">Login</b-button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data: () => ({
    loading: false,
    username: "",
    password: "",
  }),
  methods: {
    handleSubmit() {
      if (!this.username || !this.password) {
        this.$buefy.snackbar.open({
          message: "Required!",
          type: "is-primary",
          position: "is-top",
          indefinite: true,
        });
        return;
      }
      this.loading = true;
      this.$axios
        .post("/auth/register", {
          username: this.username,
          password: this.password,
        })
        .then(({ data }) => {
          const { user, token } = data;
          this.$store.commit("user/setUser", user);
          localStorage.setItem("token", token);
        })
        .finally(() => {
          this.loading = false;
        })
        .catch((err) => {
          console.log("err", err);
        });
    },
  },
};
</script>

<style scoped>
.card {
  max-width: 550px;
}
</style>
