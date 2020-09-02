<template>
  <div class="content">
    <div class="title">
      星座运势
      <span class="change" @click="isShowAlert = !isShowAlert">({{defauleName}})</span>
    </div>
    <div class="img">
      <img src="@/assets/img/黄昏星空.png" alt />
    </div>
    <div class="alert animated bounceInDown" v-show="isShowAlert">
      <ul>
        <li v-for="(item,i) in list" :key="i" @click="change(i)">{{item}}</li>
      </ul>
    </div>
    <div class="mes"></div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
import Http from "@/utils/http";
export default {
  name: "Constellation",
  setup() {
    const state = reactive({
      isShowAlert: false,
      defauleName: "白羊座",
      list: [
        "白羊座",
        "金牛座",
        "双子座",
        "巨蟹座",
        "狮子座",
        "处女座",
        "天秤座",
        "天蝎座",
        "射手座",
        "摩羯座",
        "水瓶座",
        "双鱼座"
      ]
    });

    const change = i => {
      state.defauleName = state.list[i];
    };

    onMounted(async () => {
      const http = new Http();
      http.init();
      // const res = await axios({
      //   url: `/api/constellation/getAll`,
      //   method: "get",
      //   params: {
      //     key: "477469c470445e5af4e6f48c957f3cec",
      //     consName: "处女座",
      //     type: "today"
      //   }
      // });

      // console.log(res);

      // const res = await http.get("/api/constellation/getAll", {
      //   key: "477469c470445e5af4e6f48c957f3cec",
      //   consName: "处女座",
      //   type: "today"
      // });

      // console.log(res);
    });

    return {
      ...toRefs(state),
      change
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
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.content {
  width: 100%;
  height: 100%;
  .title {
    width: 100%;
    height: 55px;
    background-color: rgb(38, 63, 73);
    border-radius: 5px 5px 0 0;
    text-align: center;
    color: whitesmoke;
    @center();
    .change {
      cursor: pointer;
      margin-left: 10px;
      &:hover {
        color: red;
      }
    }
  }
  .img {
    width: 100px;
    height: 100px;
    position: absolute;
    top: -50px;
    right: 0;
    img {
      width: 100%;
    }
  }
  .mes {
    width: 100%;
    height: calc(100% - 55px);
    border-radius: 0 0 5px 5px;
  }
  .alert {
    width: 100%;
    height: calc(100% - 55px);
    border-radius: 0 0 5px 5px;
    background-color: rgb(32, 23, 110);
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.5);
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 2;
    ul {
      width: 100%;
      height: 100%;
      @center();
      flex-wrap: wrap;
      li {
        width: 45%;
        height: 15%;
        background-color: #fff;
        box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.5);
        margin: 0 5px;
        border-radius: 3px;
        cursor: pointer;
        &:hover {
          background-color: rgb(49, 133, 87);
        }
        @center();
      }
    }
  }
}
</style>