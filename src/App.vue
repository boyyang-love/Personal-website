<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app {
  width: 100%;
  height: 100%;
  background-image: url("./assets/img/犬夜叉桔梗4k动漫壁纸3840x2160_彼岸图网.jpg");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media screen and(max-width: 600px) {
  #app {
    width: 100%;
    min-height: 100%;
    background-position-x: 525px;
    background-size: cover;
    align-items: flex-start;
  }
}
</style>
