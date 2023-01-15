<template>
  <div
    class="header px-3 is-flex is-flex-direction-row is-justify-content-space-between is-align-items-center"
  >
    <h1 class="title is-4 m-0">Chats</h1>
    <b-button type="is-primary">
      <b-icon icon="account-plus"></b-icon>
    </b-button>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header {
  border-bottom: 1px solid #eee;
  height: 73px;
}
</style>
