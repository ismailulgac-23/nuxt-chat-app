<template>
  <div
    class="header px-3 is-flex is-justify-content-space-between is-align-items-center"
  >
    <div class="left is-flex is-align-items-center">
      <img src="~/assets/images/john-doe.jpeg" />
      <div class="is-flex is-flex-direction-column is-align-items-flex-start">
        <h1 class="title m-0 is-5">John Doe</h1>
        <span class="m-0 is-size-6 has-text-success">online</span>
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
export default {
  name: "Header",
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
