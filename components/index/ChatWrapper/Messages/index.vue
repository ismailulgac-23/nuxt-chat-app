<template>
  <div class="is-flex is-flex-direction-column is-fullheight p-3">
    <Message />
    <Message :isMe="true" />
    <Message />
    <Message />
    <Typing />
  </div>
</template>

<script>
import Message from "./Message.vue";
import Typing from "./Typing.vue";
export default {
  name: "Messages",
  components: {
    Message,
    Typing,
  },
};
</script>

<style scoped></style>
