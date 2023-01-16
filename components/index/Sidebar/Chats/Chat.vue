<template>
  <div @click="letsChat" class="chat p-2">
    <div class="inner is-flex is-justify-content-space-between is-align-items-center">
      <div class="left is-flex is-align-items-center is-4">
        <ChatLogo />
        <div class="is-flex is-flex-direction-column is-align-items-flex-start">
          <h1 class="title m-0 is-6">{{ data.name }}</h1>
          <span class="m-0 is-size-7" v-html="getLastMessage"></span>
        </div>
      </div>
      <div>
        <span class="tag is-primary">4</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import ChatLogo from '~/components/shared/ChatLogo.vue';

export default {
  name: "Chat",
  props: ["data"],
  computed: {
    getLastMessage() {
      const messages = this.data.messages;
      if (!messages.length) {
        return "Konuşmayı başlatmak için bir mesaj gönderin...";
      }
      const [{ content, sender }] = messages;
      const { username } = sender;
      const showMessage = `<b>${username}</b>: ${content}`;
      return showMessage;
    }
  },
  methods: {
    ...mapMutations({
      setCurrentChat: "chat/setCurrentChat"
    }),
    letsChat() {
      this.setCurrentChat(this.data);
    }
  },
  components: { ChatLogo }
};
</script>

<style scoped>
.chat {
  cursor: pointer;
  user-select: none;
}

.chat:hover {
  background-color: #f1f1f1;
}

.chat:active {
  background-color: #f9f9f9;
}


.chat .left {
  gap: 8px;
}
</style>
