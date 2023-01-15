<template>
  <div
    class="is-flex is-justify-content-space-between items-align-items-center footer p-3"
  >
    <input class="input" type="text" placeholder="Your message" />
    <b-button type="is-primary">
      <b-icon icon="send"></b-icon>
    </b-button>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  border-top: 1px solid #eee;
  background-color: white;
  gap: 8px;
}
</style>
