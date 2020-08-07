<template>
  <div id="app">
    <Head />
    <router-view />
  </div>
</template>

<script>
import Head from "@/components/Head";
export default {
  components: {
    Head
  }
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
  min-height: 600px;
  background-image: url("./assets/img/boyyang.jpg");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media screen and(max-width: 600px) {
  #app {
    width: 100%;
    min-height: 670px;
    background-image: url("./assets/img/boyyang.jpg");
    background-position-x: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
