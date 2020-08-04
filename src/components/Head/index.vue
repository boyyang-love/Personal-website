<template>
  <div class="head">
    <div class="content">
      <ul>
        <li @click="routeJumb('/')" :class="{active: name=='/'}">Home</li>
        <li @click="routeJumb('music')" :class="{active: name=='music'}">Music</li>
        <li @click="routeJumb('about')" :class="{active: name=='about'}">About</li>
        <li @click="routeJumb('contact')" :class="{active: name=='contact'}">contact</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "Head",
  setup() {
    const state = reactive({
      name: "home"
    });
    const router = useRouter();

    let routeJumb = path => {
      router.push(path);
      state.name = path;
    };

    return {
      ...toRefs(state),
      routeJumb
    };
  }
};
</script>

<style scoped lang="less">
.active {
  background-color: #c32136;
  border-radius: 10px;
}
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.head {
  width: 20%;
  height: 600px;
  display: flex;
  align-items: center;
  .content {
    width: 100%;
    height: 550px;
    box-shadow: 5px 4px 7px 5px rgba(0, 0, 0, 0.4);
    background: rgba(77, 97, 153, 0.4);
    border-radius: 15px;
    margin-left: 20px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    ul {
      width: 95%;
      height: 90%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      li {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
        color: white;
        font-size: 20px;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        cursor: pointer;
        margin: 5px 0px;
      }
      li:hover {
        background: rgba(93, 98, 167, 0.6);
        color: black;
        box-shadow: 2px 3px 3px 0px rgba(121, 134, 141, 0.4);
        border-radius: 15px;
        box-sizing: border-box;
        border: 1px solid rgb(179, 165, 165);
      }
    }
  }
  .content:hover {
    background: rgba(83, 77, 167, 0.6);
  }
}

@media screen and(max-width: 600px) {
  .head {
    width: 100%;
    height: 70px;
    margin: 10px 1px 15px 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    .content {
      width: 90%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;
      ul {
        width: 95%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        margin: 0;
        li {
          flex: 1;
          height: 85%;
        }
      }
    }
  }
}
</style>