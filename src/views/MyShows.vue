<template>
  <div class="myshows animated rotateInUpLeft">
    <div class="header">
      <div class="iconfont icon-fanhui1" @click="$router.back(1)"></div>
    </div>
    <div class="content">
      <div class="shows">
        <img src="../assets/img/photo3.jpg" alt />
        <a
          href="http://boyyanglove.gitee.io/web-music/#/findMusic"
          target="_blank"
          rel="noopener noreferrer"
        >web在线音乐</a>
      </div>
      <div class="shows">
        <img src="../assets/img/不知火.jpg" alt />
        <a
          href="http://boyyanglove.gitee.io/todolist/#/"
          target="_blank"
          rel="noopener noreferrer"
        >Todolist</a>
      </div>
      <div class="shows">
        <img src="../assets/img/boyyang.jpg" alt />
        <a
          href="http://boyyanglove.gitee.io/vue3.0study/#/music"
          target="_blank"
          rel="noopener noreferrer"
        >音乐</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyShows"
};
</script>

<style scoped lang="less">
@center: {
  display: flex;
  align-items: center;
  justify-content: center;
};
@left : {
  display: flex;
  align-items: center;
};
.myshows {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
  width: 100%;
  height: 100%;
  background-color: red;
  background-size: cover;
  background-position: center;
  background-image: url("../assets/img/不知火.jpg");
  overflow-y: scroll;
  .header {
    width: 100%;
    height: 45px;
    position: sticky;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.6);
    @left();
    .iconfont {
      font-size: 30px;
      color: cadetblue;
      cursor: pointer;
      margin-left: 15px;
    }
    .iconfont:hover {
      color: pink;
    }
  }
  .content {
    @center();
    flex-wrap: wrap;
    .shows {
      width: 400px;
      height: 300px;
      background-color: #fff;
      margin: 10px;
      border-radius: 3px;
      box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.6);
      cursor: pointer;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      img {
        width: 100%;
        height: 253.6px;
        border: 3px solid white;
        box-sizing: border-box;
        border-radius: 20px;
      }
      a {
        text-align: center;
      }
    }
    .shows:hover > img {
      transform: scale(1.1);
      transition: all 1s ease;
    }
  }
}

@media screen and(max-width: 600px) {
  .myshows {
    width: 100%;
    height: 675px;
    overflow-y: scroll;
  }
}
</style>