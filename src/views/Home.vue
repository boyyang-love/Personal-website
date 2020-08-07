<template>
  <div class="home">
    <div class="content">
      <p>千山鸟飞绝</p>
      <p>万径人踪灭</p>
      <p>孤舟蓑笠翁</p>
      <p>独钓寒江雪</p>
    </div>
    <div class="title">
      <h5>hello, I'M boyyang</h5>
    </div>
    <div class="btn">
      <div class="myShows" @click="$router.push('/myshows')">我的作品</div>
      <div class="myBlog">
        <a href="https://www.cnblogs.com/boyyangD/" target="_blank" rel="noopener noreferrer">我的博客</a>
      </div>
      <div class="myGithub">
        <a href="https://github.com/boyyang-love" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
      <div class="aboutMe" @click="$router.push('/about')">关于我</div>
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
  .title {
    position: absolute;
    top: 30px;
    left: 50px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 45px;
    color: whitesmoke;
    animation: leave 15s ease-in-out;
    animation-delay: cos(50deg);
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
  .btn {
    position: absolute;
    right: 0;
    bottom: 0;
    .aboutMe,
    .myShows,
    .myBlog,
    .myGithub {
      width: 200px;
      height: 50px;
      background-color: #fff;
      margin: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      border-radius: 10px;
      box-shadow: 0px 2px 3px 0px rgba(255, 255, 255, 0.5);
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
  @keyframes leave {
    0% {
      opacity: 0;
      transform: translateX(300px) rotateY(360deg);
    }
    25% {
      opacity: 1;
      transform: translateY(200px) rotateZ(180deg);
    }
    50% {
      opacity: 0;
      transform: translateZ(100px) rotateY(100deg);
    }
    100% {
      opacity: 1;
      transform: translateX(200px);
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
      display: none;
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