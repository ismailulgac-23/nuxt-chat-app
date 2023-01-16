<template>
  <div class="header px-3 is-flex is-flex-direction-row is-justify-content-space-between is-align-items-center">
    <h1 class="title is-4 m-0">Chats</h1>
    <div class="is-flex is-justify-content-between is-align-items-center" style="gap: 8px;">
      <b-button type="is-primary">
        <b-icon icon="account-plus"></b-icon>
      </b-button>
      <b-button @click="onLogout" type="is-danger">
        <b-icon icon="logout"></b-icon>
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    onLogout() {
      this.$auth.logout().then(() => {
        this.$router.push("/login");
      });
    }
  }
};
</script>

<style scoped>
.header {
  border-bottom: 1px solid #eee;
  height: 73px;
}
</style>
