<template>
  <div class="chats">
    <span v-if="$fetchState.pending">Loading...</span>
    <span v-else-if="$fetchState.error">Error...</span>
    <template v-else>
      <Chat :data="chat" v-for="chat in chats" :key="chat.uuid" />
    </template>
  </div>
</template>

<script>
import Chat from "./Chat.vue";
export default {
  name: "Chats",
  components: { Chat },
  data: () => ({
    chats: [],
    loading: false
  }),
  async fetch() {
    const { data } = await this.$axios.get("/chat");
    this.chats = data;
  },
  mounted() {

  }
};
</script>

<style scoped>
.chats {
  height: 100%;
  overflow: auto;
}
</style>
