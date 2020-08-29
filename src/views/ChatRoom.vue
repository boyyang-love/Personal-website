<template>
  <div class="myshows">
    <div class="header">
      <div class="iconfont icon-fanhui1" @click="$router.back(1)"></div>
    </div>
    <div class="content">
      <h1>功能还在完善中------</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatRoom",
  setup() {
    var ws = new WebSocket("ws://localhost:3000");

    ws.onopen = function(evt) {
      console.log(evt);
      console.log("Connection open ...");
      ws.send("Hello WebSockets!");
    };

    ws.onmessage = function(evt) {
      console.log("Received Message: " + evt.data);
      ws.close();
    };

    ws.onclose = function(evt) {
      console.log("Connection closed.");
      console.log(evt);
    };
  }
};
</script>

<style scoped lang="less">
@center: {
  display: flex;
  align-items: center;
  justify-content: center;
};
@left : {
  display: flex;
  align-items: center;
};
.myshows {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
  width: 100%;
  height: 100%;
  background-color: red;
  background-size: cover;
  background-position: center;
  background-image: url("../assets/img/boyyang.jpg");
  overflow-y: scroll;
  .header {
    width: 100%;
    height: 45px;
    position: sticky;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.6);
    @left();
    z-index: 5;
    .iconfont {
      font-size: 30px;
      color: cadetblue;
      cursor: pointer;
      margin-left: 15px;
    }
    .iconfont:hover {
      color: pink;
    }
  }
  .content {
    width: 100%;
    position: relative;
    @center();
  }
}

@media screen and(max-width: 600px) {
  .myshows {
    width: 100%;
    height: 675px;
    overflow-y: scroll;
  }
}
</style>