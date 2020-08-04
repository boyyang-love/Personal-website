<template>
  <div class="home">
    <div class="content">
      <p>千山鸟飞绝</p>
      <p>万径人踪灭</p>
      <p>孤舟蓑笠翁</p>
      <p>独钓寒江雪</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped lang='less'>
.home {
  width: 80%;
  height: 550px;
  margin-top: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .content {
    width: 15%;
    height: 200px;
    display: flex;
    flex-direction: row-reverse;
    position: absolute;
    right: 10px;
    top: 15px;
    p {
      font-size: 25px;
      margin: 0;
      padding: 0;
      color: rgba(155, 82, 82, 0.5);
      font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
  }
}
@media screen and(max-width: 600px) {
  .home {
    width: 100%;
    height: 550px;
    margin-top: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    .content {
      width: 90%;
      height: 500px;
      display: flex;
      flex-direction: column;
    }
  }
}
</style>