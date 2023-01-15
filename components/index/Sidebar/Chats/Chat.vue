<template>
  <div class="chat p-2">
    <div
      class="inner is-flex is-justify-content-space-between is-align-items-center"
    >
      <div class="left is-flex is-align-items-center is-4">
        <img src="~/assets/images/john-doe.jpeg" />
        <div class="is-flex is-flex-direction-column is-align-items-flex-start">
          <h1 class="title m-0 is-6">Joh Doe</h1>
          <span class="m-0 is-size-7">Hello, how are u?</span>
        </div>
      </div>
      <div>
        <span class="tag is-primary">4</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Chat",
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
.chat img {
  width: 50px;
  height: 50px;
  border-radius: 50px;
}
.chat .left {
  gap: 8px;
}
</style>
