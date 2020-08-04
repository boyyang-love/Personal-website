<template>
  <div class="mv">
    <div class="head">
      <i class="iconfont icon-fanhui4" @click="$router.back(1)"></i>
    </div>
    <div class="mvPlayer">
      <video :src="mvUrl" autoplay></video>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
export default {
  name: "MvListDetail",
  setup() {
    const state = reactive({
      mvUrl: "",
      id: ""
    });
    const router = useRouter();
    state.id = router.currentRoute.value.params.id;

    onMounted(async () => {
      state.mvUrl = await getMvUrl(state.id);
    });

    return {
      ...toRefs(state)
    };
  }
};
// 获取mv播放地址
const getMvUrl = async id => {
  let res = await axios({
    url: "https://autumnfish.cn/mv/url",
    method: "get",
    params: {
      id
    }
  });
  if (res.status == 200) {
    console.log(res);
    return res.data.data.url;
  } else {
    console.log("获取mv播放地址出错");
  }
};
</script>

<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
}
.mv {
  position: absolute;
  z-index: 6;
  background-color: #fff;
  width: 99%;
  height: 600px;
  .head {
    width: 100%;
    height: 55px;
    display: flex;
    align-items: center;
    background-color: #44cef6;
    .iconfont {
      margin-left: 25px;
      font-size: 26px;
      cursor: pointer;
    }
    .iconfont:hover {
      color: #db5a6b;
    }
  }
  .mvPlayer {
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-self: center;
    video {
      width: 80%;
      height: 100%;
    }
  }
}
</style>