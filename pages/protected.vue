<template>
  <div>
    <h1>{{ userState.user.username }}</h1>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      userState: (state) => state.user,
    }),
  },
};
</script>

<style></style>
