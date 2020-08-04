<template>
  <div class="Mv">
    <div class="content">
      <div class="mv" v-for="(item, i) in mvList" :key="i">
        <img :src="item.cover" alt />
        <h5>{{item.name}}</h5>
        <div class="iconfont icon-mv1" @click="mvPlay(item.id)"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  name: "MvList",
  setup() {
    const state = reactive({
      mvList: ""
    });
    const store = useStore();
    const router = useRouter();
    state.mvList = computed(() => {
      return store.state.MvList;
    });
    const mvPlay = id => {
      router.push({
        name: "MvListDetail",
        params: {
          id
        }
      });
    };
    return {
      ...toRefs(state),
      mvPlay
    };
  }
};
</script>

<style scoped lang="less">
.Mv {
  width: 100%;
  .content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    align-items: center;
    .mv {
      width: 25%;
      height: 150px;
      margin: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      position: relative;
      img {
        width: 100%;
        height: 135.17px;
        border: 2px solid whitesmoke;
        border-radius: 3px;
      }
      h5 {
        margin-top: 5px;
        padding: 0;
        text-align: center;
      }
      .iconfont {
        position: absolute;
        font-size: 35px;
        cursor: pointer;
      }
      .iconfont:hover {
        color: red;
      }
    }
  }
}

@media screen and(max-width: 600px) {
  .Mv {
    width: 100%;
    .content {
      width: 100%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      display: flex;
      justify-content: center;
      align-items: center;
      .mv {
        width: 65%;
        height: 150px;
        margin: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        img {
          width: 100%;
          border: 2px solid whitesmoke;
        }
        h5 {
          margin: 0;
          padding: 0;
          text-align: center;
        }
      }
    }
  }
}
</style>
