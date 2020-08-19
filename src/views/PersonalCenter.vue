<template>
  <div class="personalcenter">
    <div class="header">
      <div class="welcome">
        <i class="iconfont icon-kongjian2" @click="isShow = true"></i>
        欢迎boyyang来到你的个人空间
      </div>
      <div class="toHome">
        <i class="iconfont icon-shouye3" @click="$router.push('/')"></i>
      </div>
    </div>
    <div class="content">
      <div class="userMes animated slideInRight" v-show="isShow">
        <span class="hidden iconfont icon-back" @click="isShow = false"></span>
        <span class="setting iconfont icon-shezhi3"></span>
        <div class="headerImg">
          <div class="img">
            <img src="../assets/img/2.jpg" alt />
          </div>
        </div>
        <div class="input">
          <input type="file" ref="fileUrl" />
          <button @click="uploadImg">上传</button>
        </div>
        <div class="nickname">
          <div class="name">boyyang</div>
        </div>
        <div class="motto">第一行没有你，第二行没有你，第三行没有也罢</div>
        <div class="contact">
          QQ:
          <span>1233444555</span>
        </div>
        <div class="card">
          <div class="card1"></div>
          <div class="card2"></div>
        </div>
      </div>
      <div>
        <img :src="headImg" alt />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, ref } from "vue";
import { useRouter } from "vue-router";
import Detabase from "@/utils/db";
export default {
  name: "PersonalCenter",
  setup() {
    const state = reactive({
      isShow: true,
      id: "",
      fileUrl: ref(null),
      headImg: ""
    });

    const detabase = new Detabase(state);
    const router = useRouter();
    state.id = router.currentRoute.value.params.id;

    const uploadImg = () => {
      detabase.uploadImg();
    };
    return {
      ...toRefs(state),
      uploadImg
    };
  }
};
</script>

<style scoped lang='less'>
@center: {
  display: flex;
  justify-content: center;
  align-items: center;
};
@spaceAround: {
  display: flex;
  justify-content: space-around;
  align-items: center;
};
@end: {
  display: flex;
  justify-content: space-between;
  align-items: center;
};
.personalcenter {
  z-index: 30;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #eedeb0;
  .header {
    width: 100%;
    height: 60px;
    background: rgba(188, 230, 114, 0.7);
    @end();
    div {
      @center();
      margin: 0 45px;
      .iconfont {
        margin: 0 15px;
        font-size: 35px;
        color: #177cb0;
        cursor: pointer;
        &:hover {
          color: red;
        }
      }
      &.toHome {
        cursor: pointer;
        .iconfont:hover {
          color: #ed5736;
        }
      }
    }
  }
  .content {
    width: 100%;
    height: calc(100% - 60px);
    .userMes {
      width: 25%;
      height: 95%;
      background-color: rgba(51, 83, 121, 0.8);
      box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.6);
      margin: 10px;
      border-radius: 10px;
      position: relative;
      .hidden,
      .setting {
        width: 25px;
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 25px;
        cursor: pointer;
        &:hover {
          color: red;
        }
      }
      .setting {
        top: 10px;
        left: 10px;
      }
      .headerImg {
        width: 100%;
        height: 125px;
        @center();
        .img {
          width: 95px;
          height: 95px;
          border: 2px solid red;
          border-radius: 100%;
          overflow: hidden;
          @center();
          img {
            height: 95px;
          }
        }
      }
      .nickname {
        width: 100%;
        height: 45px;
        @center();
      }
      .input {
        width: 100%;
        @center();
        input {
          @center();
        }
      }
      .motto {
        width: 100%;
        height: 25px;
        font-size: 14px;
        margin: 10px 0;
        @center();
        border-bottom: 1px solid rosybrown;
      }
      .contact {
        width: 100%;
        height: 25px;
        border-bottom: 1px solid rosybrown;
        font-size: 17px;
        box-sizing: border-box;
        @center();
        span {
          font-size: 15px;
          margin: 0 15px;
        }
      }
      .card {
        width: 100%;
        height: calc(100% - 250px);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        div {
          width: 90%;
          height: 40%;
          background-color: #fff;
          box-shadow: 1px 2px 2px 1px rgba(0, 0, 0, 0.6);
          border-radius: 10px;
        }
      }
    }
  }
}
</style>