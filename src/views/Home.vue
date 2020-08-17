<template>
  <div class="home">
    <div class="content">
      <p>千山鸟飞绝</p>
      <p>万径人踪灭</p>
      <p>孤舟蓑笠翁</p>
      <p>独钓寒江雪</p>
    </div>
    <div class="title">
      <div>I</div>
      <div>A</div>
      <div>M</div>
      <div>B</div>
      <div>O</div>
      <div>Y</div>
      <div>Y</div>
      <div>A</div>
      <div>N</div>
      <div>G</div>
    </div>
    <div class="btn">
      <!-- <div class="myShows" @click="$router.push('/myshows')">我的作品</div> -->
      <div class="myBlog">
        <a href="https://www.cnblogs.com/boyyangD/" target="_blank" rel="noopener noreferrer">我的博客</a>
      </div>
      <div class="myGithub">
        <a href="https://github.com/boyyang-love" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
      <div class="aboutMe" @click="$router.push('/about')">关于我</div>
    </div>
    <div class="weather"></div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>

<style scoped lang='less'>
.home {
  width: 100%;
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
      animation: MOVERIGHT 3s;
    }
    :nth-child(1) {
      animation-delay: 0s;
    }
    :nth-child(2) {
      animation-delay: 0.3s;
    }
    :nth-child(3) {
      animation-delay: 0.6s;
    }
    :nth-child(4) {
      animation-delay: 1.2s;
    }
  }
  .title {
    position: absolute;
    right: 250px;
    top: 400px;
    font-size: 30px;
    color: white;
    display: flex;
    div {
      position: relative;
      margin: 20px;
      width: 45px;
      height: 45px;
      text-align: center;
      box-shadow: 0 3px 4px 0 rgba(36, 182, 121, 0.5);
      border-radius: 10px;
      animation: MOVE 1.8s;
      animation-iteration-count: infinite;
      transition: all 1.8s linear;
      transition-timing-function: linear;
    }
    :nth-child(1) {
      animation-delay: 0s;
    }
    :nth-child(2) {
      animation-delay: 0.2s;
    }
    :nth-child(3) {
      animation-delay: 0.4s;
    }
    :nth-child(4) {
      animation-delay: 0.6s;
    }
    :nth-child(5) {
      animation-delay: 0.8s;
    }
    :nth-child(6) {
      animation-delay: 1s;
    }
    :nth-child(7) {
      animation-delay: 1.2s;
    }
    :nth-child(8) {
      animation-delay: 1.4s;
    }
    :nth-child(9) {
      animation-delay: 1.6s;
    }
    :nth-child(10) {
      animation-delay: 1.8s;
    }
  }
  .btn {
    position: absolute;
    right: 0;
    bottom: 0;
    .aboutMe,
    .myShows,
    .myBlog,
    .myGithub {
      width: 150px;
      height: 50px;
      background-color: #bf242a;
      margin: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      border-radius: 10px;
      box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.5);
    }
    .myBlog,
    .myGithub {
      a {
        text-decoration: none;
        color: black;
      }
    }
    .aboutMe:hover,
    .myShows:hover,
    .myBlog:hover,
    .myGithub:hover {
      background-color: #44cef6;
    }
  }
  @keyframes MOVE {
    0% {
      transform: translateY(0px);
      color: red;
    }
    50% {
      transform: translateY(80px);
      color: yellow;
      padding: 3px;
    }
    100% {
      transform: translateY(0px);
      color: #00e500;
    }
  }
  @keyframes MOVERIGHT {
    0% {
      transform: translateY(0px);
      opacity: 0;
    }
    50% {
      transform: translateY(100px);
      color: royalblue;
      opacity: 1;
    }
    100% {
      transform: translateY(0px);
      opacity: 0;
    }
  }
}
@media screen and(max-width: 600px) {
  .home {
    width: 100%;
    height: 500px;
    margin-top: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    .content {
      display: none;
    }
    .title {
      // display: none;
      top: 0;
      right: 17px;
      div {
        width: 30px;
        height: 30px;
        font-size: 20px;
        margin: 0;
        text-align: center;
      }
    }
    .btn {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 100%;
      position: absolute;
      z-index: 10;
      bottom: 0;
      right: 0;
    }
  }
}
</style>