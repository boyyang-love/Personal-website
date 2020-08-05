<template>
  <div class="contactdetail">
    <h1>联系我</h1>
    <div class="content">
      <div class="github">
        <a
          class="iconfont icon-github4"
          href="https://github.com/boyyang-love"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </div>
      <div class="qq">
        <a
          class="iconfont icon-qq1"
          href="https://github.com/boyyang-love"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </div>
      <div class="email">
        <a
          class="iconfont icon-youxiang"
          href="https://github.com/boyyang-love"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactDetail"
};
</script>

<style scoped lang="less">
.contactdetail {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  h1 {
    color: turquoise;
    justify-self: flex-start;
  }
  .content {
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    position: relative;
    div {
      margin-bottom: 45px;
      a {
        font-size: 50px;
        margin: 40px 40px;
        cursor: pointer;
        text-decoration: none;
        color: whitesmoke;
      }
      a:hover {
        color: burlywood;
      }
    }
  }
}
</style>