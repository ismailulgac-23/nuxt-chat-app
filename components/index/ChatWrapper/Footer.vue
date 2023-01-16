<template>
  <div class="is-flex is-justify-content-space-between items-align-items-center footer p-3">
    <input v-model="content" class="input" type="text" placeholder="Your message" />
    <b-button @click="handleSubmit" type="is-primary">
      <b-icon icon="send" :loading="sending"></b-icon>
    </b-button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "Footer",
  data: () => ({
    content: "",
    sending: false
  }),
  methods: {
    ...mapActions({
      sendMessage: "chat/sendMessage"
    }),
    async handleSubmit() {
      this.sending = true;
      await this.sendMessage(this.content);
      this.content = "";
      this.sending = false;
    }
  },
};
</script>

<style scoped>
.footer {
  border-top: 1px solid #eee;
  background-color: white;
  gap: 8px;
}
</style>
