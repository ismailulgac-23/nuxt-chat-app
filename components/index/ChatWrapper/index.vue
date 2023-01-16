<template>
  <div class="is-flex is-flex-direction-column is-fullheight">
    <NoChat v-if="!isUserInChat" />
    <template class="is-flex is-flex-direction-column is-fullheight" v-else>
      <Header />
      <Messages />
      <Footer />
    </template>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Messages from "./Messages/index.vue";
import Footer from "./Footer";
import NoChat from "../NoChat.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ChatWrapper",
  components: {
    Header,
    Messages,
    Footer,
    NoChat
  },
  computed: {
    ...mapGetters({
      isUserInChat: "chat/isUserInChat",
      getCurrentChat: "chat/getCurrentChat"
    })
  },
  methods: {
    ...mapActions({
      fetchChatMessages: "chat/fetchChatMessages"
    })
  },
  watch: {
    getCurrentChat(val) {
      this.fetchChatMessages();
    }
  },
};
</script>

<style>

</style>
