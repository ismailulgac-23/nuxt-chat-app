<template>
  <div class="chats">
    <Chat />
    <Chat />
    <Chat />
    <Chat />
    <Chat />
  </div>
</template>

<script>
import Chat from "./Chat.vue";
export default {
  name: "Chats",
  components: { Chat },
};
</script>

<style scoped>
.chats {
  height: 100%;
  overflow: auto;
}
</style>
