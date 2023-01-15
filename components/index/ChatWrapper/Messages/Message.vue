<template>
  <div
    :class="[
      getBothClasses.wrapper,
      {
        [getIsMeClasses.wrapper]: isMe,
        [getOtherClasses.wrapper]: !isMe,
      },
    ]"
  >
    <div
      :class="[
        getBothClasses.message,
        {
          [getIsMeClasses.message]: isMe,
          [getOtherClasses.message]: !isMe,
        },
      ]"
      style="justify-content: start"
    >
      Selam naber nasılsınız John bey
    </div>
  </div>
</template>

<script>
export default {
  name: "Message",
  props: {
    isMe: {
      type: Boolean,
      default: () => false,
    },
  },
  computed: {
    getBothClasses() {
      return {
        wrapper: "is-flex",
        message: "message tag mb-2",
      };
    },
    getIsMeClasses() {
      return {
        wrapper: "is-fullwidth is-justify-content-end is-align-items-flex-end",
        message: "is-primary",
      };
    },
    getOtherClasses() {
      return {
        wrapper: "is-fullwidth",
        message: "is-light",
      };
    },
  },
};
</script>

<style scoped>
.message {
  width: auto !important;
  max-width: auto !important;
  min-width: auto !important;
}
</style>
