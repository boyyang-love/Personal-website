<template>
  <div class="contact">
    <div class="content animated rotateInDownLeft"></div>
  </div>
</template>

<script>
export default {
  name: "Contact"
};
</script>

<style scoped lang="less">
.contact {
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
  }
}

@media screen and(max-width: 600px) {
  .contact {
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