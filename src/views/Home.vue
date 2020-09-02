<template>
  <div class="home">
    <div class="exit iconfont icon-icon1" @click="hiddenNav"></div>
    <div class="nav" v-show="isShow">
      <ul>
        <li @click="routeJumb('/')" class="active">
          <i class="iconfont icon-shouye3"></i>Home
        </li>
        <li @click="routeJumb('music')">
          <i class="iconfont icon-yinle"></i>Music
        </li>
        <li @click="routeJumb('center')">
          <i class="iconfont icon-tubiaosvg-"></i>Center
        </li>
        <li @click="routeJumb('contact')">
          <i class="iconfont icon-41shuoshuo"></i>Contact
        </li>
        <li @click="routeJumb('about')">
          <i class="iconfont icon-guanyuwomen"></i>About
        </li>
      </ul>
    </div>
    <div class="other">
      <div class="blog">
        <a href="https://www.cnblogs.com/boyyangD/" target="_blank" rel="noopener noreferrer">我的博客</a>
      </div>
      <div class="github">
        <a
          href="https://github.com/boyyang-love"
          target="_blank"
          rel="noopener noreferrer"
          class="iconfont icon-github"
        >GitHub</a>
      </div>
      <div class="chatRoom" @click="routeJumb('chatRoom')">聊天室</div>
    </div>
    <div class="constellation">
      <Constellation />
    </div>
  </div>
</template>

<script>
import Constellation from "@/components/Constellation";
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "Home",
  components: {
    Constellation
  },
  setup() {
    const state = reactive({
      isShow: true
    });
    const router = useRouter();

    let routeJumb = path => {
      router.push(path);
    };

    const hiddenNav = () => {
      state.isShow = !state.isShow;
    };

    return {
      ...toRefs(state),
      routeJumb,
      hiddenNav
    };
  }
};
</script>

<style scoped lang="less">
.active {
  background-color: rgba(185, 31, 31, 0.6);
}
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
@center: {
  display: flex;
  justify-content: center;
  align-items: center;
};
.home {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  position: relative;
  @media screen and(max-width: 600px) {
    height: 660px;
  }
  .exit {
    display: none;
    @media screen and(max-width: 600px) {
      width: 100%;
      height: 50px;
      display: block;
      font-size: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      &:hover {
        color: red;
      }
    }
  }
  .nav {
    width: 95%;
    height: 75px;
    background: rgba(133, 86, 86, 0.6);
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.6);
    margin-top: 10px;
    border-radius: 5px;
    @media screen and(max-width: 600px) {
      height: 60%;
    }
    ul {
      width: 100%;
      height: 100%;
      @center();
      @media screen and(max-width: 600px) {
        flex-direction: column;
      }
      li {
        flex: 1;
        height: 100%;
        font-size: 20px;
        cursor: pointer;
        border-radius: 5px;
        color: whitesmoke;
        @center();
        &:hover {
          background-color: rgba(24, 21, 21, 0.6);
        }
        @media screen and(max-width: 600px) {
          width: 100%;
        }
        i {
          font-size: 24px;
          margin: 5px;
        }
      }
    }
  }
  .other {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 25%;
    height: 40%;
    @center();
    flex-direction: column;
    @media screen and(max-width: 600px) {
      height: 25%;
      width: 100%;
      bottom: 0;
    }
    div {
      width: 45%;
      height: 20%;
      background-color: #fff;
      margin: 10px;
      box-shadow: 0 2px 3px 1px rgba(0, 0, 0, 0.6);
      border-radius: 10px;
      cursor: pointer;
      @center();
      a {
        font-size: 18px;
        margin: 3px;
        text-decoration: none;
        @media screen and(max-width: 600px) {
          font-size: 16px;
        }
      }
      &:hover {
        background-color: rgb(48, 129, 84);
      }
    }
  }
  .constellation {
    width: 40%;
    height: 55%;
    position: absolute;
    left: 15px;
    bottom: 25px;
    border-radius: 5px;
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.6);
  }
}
</style>
