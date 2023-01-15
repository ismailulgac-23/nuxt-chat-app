<template>
  <div class="is-flex is-flex-direction-column is-fullheight">
    <Header />
    <Messages />
    <Footer />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Messages from "./Messages/index.vue";
import Footer from "./Footer";
export default {
  name: "ChatWrapper",
  components: {
    Header,
    Messages,
    Footer,
  },
};
</script>

<style></style>
