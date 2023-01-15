<template>
  <div class="is-screenheight">
    <div class="columns is-gapless is-fullheight">
      <div class="column is-fullheight">
        <Sidebar />
      </div>
      <div class="column is-four-fifths">
        <ChatWrapper />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "~/components/index/Sidebar/index.vue";
import ChatWrapper from "~/components/index/ChatWrapper/index.vue";
export default {
  name: "index",
  components: {
    Sidebar,
    ChatWrapper,
  },
};
</script>

<style scoped></style>
