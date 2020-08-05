<template>
  <div class="about">
    <div class="content animated slideInLeft">
      <AboutDetail />
    </div>
  </div>
</template>

<script>
import AboutDetail from "@/components/AboutDetail";
export default {
  name: "About",
  components: {
    AboutDetail
  }
};
</script>

<style scoped lang="less">
.about {
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 35px;
  .content {
    width: 95%;
    height: 550px;
    background: rgba(0, 0, 0, 0.5);
    border: 1px solid white;
    border-radius: 10px;
    box-shadow: 0 2px 3px 0px rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media screen and(max-width: 600px) {
  .about {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    .content {
      width: 95%;
      height: 550px;
      background: rgba(0, 0, 0, 0.5);
      border: 1px solid white;
      border-radius: 10px;
      box-shadow: 0 2px 3px 0px rgba(0, 0, 0, 0.5);
    }
  }
}
</style>