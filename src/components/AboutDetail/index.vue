<template>
  <div class="aboutdetail">
    <div class="content">
      <div class="title">
        <h1>关于我</h1>
      </div>
      <div class="bodyBox">
        <div class="head">
          <img src alt />
        </div>
        <p>
          我叫杨志豪，今年24岁，坐标成都，正在找一份前端开发的工作。大学专业为机械电子工程。在自学前端之前有过
          arduino编程，用过c语言写过单片机程序，同时对python基础有过了解，前端主要技术栈为Vue,uni-app， 微信小程序，
          喜欢学习新鲜事物，同时也喜欢回过头来深入了解以前所学。
        </p>
        <p>
          您现在所看到的页面是我通过vue3.0语法所写的，通过这个项目我学习到了vue2.0与3.0之间的一些
          差异以及变化。
        </p>
        <p>
          由于是非计算机专业毕业，没有前端实际开发经验，所有希望通过这个项目能够提高自己的前端技术水平，
          同时也希望能够获得一份前端开发的工作
        </p>
      </div>
      <div class="resume">
        <a
          href="https://www.qmjianli.com/cv/20721VS0JGWT9SJQ"
          target="_blank"
          rel="noopener noreferrer"
        >我的在线简历</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutDetail"
};
</script>

<style scopend lang='less'>
.aboutdetail {
  width: 99%;
  height: 99%;
  display: flex;
  justify-content: center;
  .content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .title {
      width: 100%;
      display: flex;
      justify-content: center;
      color: tomato;
    }
    .bodyBox {
      width: 85%;
      height: 100%;
      p {
        color: #f9906f;
        padding: 10px;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 17px;
        opacity: 0.9;
      }
    }
    .resume {
      margin-bottom: 25px;
      a {
        text-decoration: none;
        color: white;
        font-size: 25px;
      }
      a:hover {
        color: red;
      }
    }
  }
}
</style>