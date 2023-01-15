<template>
  <div class="sidebar is-fullheight">
    <Header />
    <Chats />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Chats from "./Chats/index.vue";
export default {
  name: "Sidebar",
  components: {
    Header,
    Chats,
  },
};
</script>

<style scoped>
.sidebar {
  border-right: 1px solid #eee;
  height: 100%;
}
</style>
