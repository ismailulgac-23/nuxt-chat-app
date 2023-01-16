<template>
  <div class="is-flex is-flex-direction-column is-fullheight p-3">
    <template v-if="getCurrentChat.messages.length">
      <Message v-for="message in getCurrentChat.messages" :key="message.uuid" :data="message" />
    </template>
    <!-- <Typing /> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Message from "./Message.vue";
import Typing from "./Typing.vue";
export default {
  name: "Messages",
  components: {
    Message,
    Typing,
  },
  computed: {
    ...mapGetters({
      getCurrentChat: "chat/getCurrentChat"
    })
  }
};
</script>

<style scoped>

</style>
