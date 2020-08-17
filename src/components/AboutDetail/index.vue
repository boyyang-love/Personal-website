<template>
  <div class="aboutdetail">
    <div class="content">
      <div class="header">
        <div class="img">
          <img src="@/assets/img/boyyang.jpg" alt />
        </div>
      </div>
      <div class="name">
        <h3>boyyang</h3>
      </div>
      <div class="resume">
        <div class="personalMes">
          <div class="square"></div>
          <h3>个人信息</h3>
        </div>
        <div class="personalBox">
          <div class="aboutMe">
            <div class="mine">杨志豪 | 男 | 1995</div>
            <div class="school">本科 | 四川文理学院 | 机械电子工程</div>
            <div class="hopeJop">求职意向 : 前端开发</div>
          </div>
          <div class="hopeCity">
            <div class="hopecity">期望城市 : 成都</div>
          </div>
          <div class="git">
            <div class="githup">
              GitHub :
              <a
                href="https://github.com/boyyang-love"
                target="_blank"
                rel="noopener noreferrer"
                >https://github.com/boyyang-love</a
              >
            </div>
            <div class="gitee">
              Gitee :
              <a
                href="https://gitee.com/boyyanglove"
                target="_blank"
                rel="noopener noreferrer"
                >https://gitee.com/boyyanglove</a
              >
            </div>
          </div>
        </div>
        <div class="personalMes">
          <div class="square"></div>
          <h3>联系方式</h3>
        </div>
        <div class="personalBox">
          <div class="contectMehod">
            <div class="phone">电话: 13183505856</div>
            <div class="qq">QQ: 1761617270</div>
            <div class="email">Email: 1761617270@qq.com</div>
          </div>
        </div>
        <div class="personalMes">
          <div class="square"></div>
          <h3>技能掌握</h3>
        </div>
        <div class="personalBox">
          <div class="skills">
            <div class="s1">
              1.熟练使用Html, Css, Css3, 以及JavaScript,
              jquery快速搭建网页界面实现动态交互
            </div>
            <div class="s2">
              2.掌握vue框架语法,并能够使用vue-cli快速搭建项目进行组件化开发
            </div>
            <div class="s3">3.掌握vue3.0新特性并能够正确使用</div>
            <div class="s4">
              4.掌握uni-app框架开发微信小程序,并且熟练使用uni-app的unicloud云开发
            </div>
            <div class="s5">5.掌握微信原生小程序开发</div>
            <div class="s6">6.后端了解node.js , express, mongodb等</div>
            <div class="s7">
              7.熟练使用git版本控制工具, 了解webpack打包以及配置
            </div>
            <div class="s8">
              8.学习并了解typescript基本语法,掌握es6新语法特性等
            </div>
          </div>
        </div>
        <div class="personalMes">
          <div class="square"></div>
          <h3>项目经验</h3>
        </div>
        <div class="personalBox">
          <div class="myshows">
            <div class="shows1">
              <h4>1. web在线音乐（2020年4月）</h4>
              <h4>主要技术栈</h4>
              <p>vue2.0, vue-router, vuex, vue-cli, element-ui, axios</p>
              <p>——基于vue2.0语法配合vue-cli搭建项目进行组件化开发</p>
              <p>——通过axios发送请求获取页面相关数据动态渲染页面</p>
              <h4>工作内容:</h4>
              <p>1. 根据设计图还原前端页面</p>
              <p>2. 完成前端交互逻辑</p>
              <p>3. 通过axios发送数据请求获取后端数据,实时渲染页面</p>
              <p>4. 通过localstorage本地存储页面一些相关数据</p>
              <h4>解决难点:</h4>
              <p>1. 数据分页处理，数据分类</p>
              <p>2. 搜索功能防抖处理</p>
              <p>3. 前端跨域问题</p>
              <p>4. 组件开发，将一些多页面需要的功能模块分离成单个组件</p>
              <h4>实现功能:</h4>
              <p>1. 发现音乐</p>
              <p>2. 推荐歌单</p>
              <p>3. 最新音乐</p>
              <p>4. 推荐MV</p>
              <P>5. 首页收索</P>
            </div>
            <div class="line">--------------------------</div>
            <div class="shows2">
              <h4>2. 原生微信交友小程序（2020年5月）</h4>
              <h4>主要技术栈</h4>
              <p>微信原生小程序开发</p>
              <h4>工作内容:</h4>
              <p>1. 根据设计图还原前端页面</p>
              <p>2. 完成前端交互逻辑</p>
              <p>3. 微信云开发</p>
              <h4>解决难点:</h4>
              <p>1. 通过微信云开发实现微信注册登录</p>
              <p>2. 微信地图用户位置实时分享</p>
              <p>3. 用户相关数据修改与添加</p>
              <p>4. 用户好友添加与删除</p>
              <p>5. 用户之间点赞功能</p>
              <h4>实现功能:</h4>
              <p>1. 微信一键登录</p>
              <p>2. 用户昵称，电话号码，头像，个性签名的更改</p>
              <p>3. 好友添加以及删除</p>
              <p>4. 用户位置地图显示</p>
            </div>
          </div>
        </div>
        <div class="personalMes">
          <div class="square"></div>
          <h3>自我评价</h3>
        </div>
        <div class="personalBox">
          <div class="selfEvaluation">
            <p>追求完美，注重细节</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Aboutdetail",
};
</script>

<style scopend lang="less">
// 居中
@center: {
  display: flex;
  justify-content: center;
  align-items: center;
};
@left: {
  display: flex;
  align-items: center;
};
@spacearound : {
  display: flex;
  justify-content: space-around;
  align-items: center;
};
.aboutdetail {
  width: 100%;
  height: 550px;
  display: flex;
  justify-content: center;
  overflow-y: scroll;
  background-color: #eedeb0;
  border-radius: 5px;
  opacity: 0.7;
  .content {
    width: 95%;
    .header {
      width: 100%;
      height: 120px;
      overflow: hidden;
      margin-top: 10px;
      @center();
      .img {
        width: 120px;
        height: 99%;
        border-radius: 100%;
        overflow: hidden;
        border: 4px solid whitesmoke;
        box-sizing: border-box;
        @center();
        img {
          width: 175%;
        }
      }
    }
    .name {
      @center();
      h3 {
        font-size: 24px;
        background-color: #fff;
        border-radius: 2px;
        padding: 4px;
        box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.6);
      }
    }
    .resume {
      width: 100%;
      .personalMes {
        .square {
          width: 45px;
          height: 25px;
          background-color: red;
        }
        h3 {
          margin: 10px;
          font-size: 16px;
        }
        width: 100%;
        display: flex;
        align-items: center;
      }
      .personalBox {
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.6);
        padding: 20px;
        border-radius: 10px;
        margin-bottom: 5px;
        div {
          margin: 10px;
        }
        .aboutMe {
          @spacearound();
        }
        .hopeCity {
          @center();
        }
        .git {
          @spacearound();
        }
        .contectMehod {
          @spacearound();
        }
      }
    }
  }
}
@media screen and(max-width: 600px) {
  .aboutdetail {
    .content {
      .resume {
        .personalBox {
          div {
            flex-wrap: wrap;
          }
        }
      }
    }
  }
}
</style>
