<template>
  <div class="header px-3 is-flex is-justify-content-space-between is-align-items-center">
    <div class="left is-flex is-align-items-center">
      <ChatLogo />
      <div class="is-flex is-flex-direction-column is-align-items-flex-start">
        <h1 class="title m-0 is-5">{{ getCurrentChat.name }}</h1>
        <span class="m-0 is-size-6" style="color:#ccc;">{{ getMemberNames }}</span>
      </div>
    </div>
    <div class="is-flex right is-align-items-center">
      <b-button type="is-light">
        <b-icon icon="phone"></b-icon>
      </b-button>
      <b-button type="is-light">
        <b-icon icon="dots-vertical"></b-icon>
      </b-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ChatLogo from '~/components/shared/ChatLogo.vue';

export default {
  name: "Header",
  computed: {
    ...mapGetters({
      getCurrentChat: "chat/getCurrentChat"
    }),
    getMemberNames() {
      const members = this.getCurrentChat.members.map(({ user: { username } }) => {
        return '@' + username;
      });
      return members.join(", ");
    }
  },
  components: { ChatLogo }
};
</script>

<style scoped>
.header {
  border-bottom: 1px solid #eee;
  height: 87px;
}

.header .left {
  gap: 8px;
}

.header .left img {
  width: 55px;
  height: 55px;
  border-radius: 55px;
}

.header .right {
  gap: 8px;
}
</style>
