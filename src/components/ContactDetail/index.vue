<template>
  <div class="contactdetail">
    <h1>联系我</h1>
    <div class="contactMe">
      <div class="header">
        <img src="@/assets/img/不知火.jpg" alt />
      </div>
      <div class="name">
        <h4>boyyang</h4>
      </div>
      <h6>留言板</h6>
      <div class="textarea">
        <div class="login">
          <div class="logFirst">
            <i class="iconfont icon-kongjianjianmo"></i>
            {{beforeLogin}}
          </div>
          <div class="toLogin" @click="login" v-show="!isLogin">登录</div>
          <div class="outLogin" @click="outlogin" v-show="isLogin">退出</div>
        </div>
        <textarea name="comment" id cols="20" rows="10" v-model="commentText"></textarea>
      </div>
      <div class="submit" @click="submit" v-show="isLogin">提交</div>
      <div class="comment" v-for="(item, i) in commentDetail" :key="i">
        <div class="userIcon">{{(item.nickname).slice(0,1)}}</div>
        <div class="commentMes">
          <div class="commentUser">
            {{item.nickname}}
            <span class="time">{{item.commentTime}}</span>
          </div>
          <div class="commentText">{{item.commentText}}</div>
          <div class="reback" v-show="item.email == email " @click="delComment(item._id)">删除</div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="github">
        <a
          class="iconfont icon-github4"
          href="https://github.com/boyyang-love"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </div>
      <div class="qq">
        <a
          class="iconfont icon-qq1"
          href="https://github.com/boyyang-love"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </div>
      <div class="email">
        <a
          class="iconfont icon-youxiang"
          href="https://github.com/boyyang-love"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </div>
    </div>
  </div>
  <!-- 登录界面 -->
  <div class="loginbox" v-show="isLoginBox">
    <div class="logBox animated swing">
      <div class="login-head">
        <div class="login-text">登录</div>
        <div class="iconfont icon-cuowu11" @click="isLoginBox = false"></div>
      </div>
      <div class="input-box">
        <div class="nickname">
          昵称:
          <input type="text" name="nickname" v-model="nickname" placeholder="2~8位" />
          <i
            class="iconfont icon-tuichu2"
            :style="{'color': Reg_nickname.test(nickname) ? '': 'red'  }"
          ></i>
        </div>
        <div class="email">
          邮箱:
          <input type="email" name="email" v-model="email" placeholder="xxxx@xxx.com" />
          <i class="iconfont icon-tuichu2" :style="{'color': Reg_email.test(email) ? '': 'red'}"></i>
        </div>
      </div>
      <div class="message-submit">
        <div class="exit-submit" @click="isLoginBox = false">退出</div>
        <div class="login-submit" @click="logined">登录</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { reactive, toRefs, onMounted } from "vue";
export default {
  name: "ContactDetail",
  setup() {
    const state = reactive({
      beforeLogin: "先登录哦！！",
      commentText: "",
      isLogin: false,
      isLoginBox: false,
      nickname: "",
      email: "",
      commentDetail: []
    });
    // 昵称验证
    var Reg_nickname = /^.{2,8}$/;
    // 邮箱验证
    var Reg_email = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    // 评论提交
    const submit = () => {
      if (state.commentText !== "") {
        axios({
          url: "/api/comment",
          method: "post",
          data: {
            email: state.email,
            comment: state.commentText
          }
        }).then(() => {
          getComment();
          state.commentText = "";
        });
      } else {
        alert("评论不能为空");
      }
    };
    // 点击登录事件
    const login = () => {
      state.isLoginBox = true;
    };
    // 退出登录事件
    const outlogin = () => {
      state.beforeLogin = "先登录哦！！";
      state.isLogin = false;
      localStorage.removeItem("users");
    };
    // 登录事件
    const logined = () => {
      if (state.nickname !== "" && state.email !== "") {
        // 昵称以及邮箱验证
        if (Reg_nickname.test(state.nickname) && Reg_email.test(state.email)) {
          state.beforeLogin = `谢谢你的留言:${state.nickname}~~~~ `;
          state.isLoginBox = false;
          state.isLogin = true;
          // 将数据传进数据库
          axios({
            url: "/api/sinup",
            method: "post",
            data: {
              nickname: state.nickname,
              email: state.email
            }
          }).then(() => {
            let users = {
              nickname: state.nickname,
              email: state.email
            };
            localStorage.setItem("users", JSON.stringify(users));
          });
        } else {
          alert("请正确填写昵称以及邮箱");
        }
      } else {
        alert("输入不能为空");
      }
    };

    // 删除评论事件
    const delComment = id => {
      axios({
        url: "/api/delComment",
        method: "post",
        data: {
          _id: id
        }
      }).then(() => {
        getComment();
      });
    };

    // 本地储存登录信息
    onMounted(async () => {
      let users = await localStorage.getItem("users");
      if (users) {
        state.nickname = JSON.parse(users).nickname;
        state.email = JSON.parse(users).email;
        state.isLogin = true;
        state.beforeLogin = `谢谢你的留言${state.nickname}~~~~ `;
      }
      getComment();
    });

    // 获取评论数据
    const getComment = () => {
      axios({
        url: "/api/allComment",
        method: "get"
      }).then(res => {
        if (res.status == 200) {
          state.commentDetail = res.data;
          state.commentDetail.reverse();
        }
      });
    };

    return {
      ...toRefs(state),
      submit,
      login,
      logined,
      outlogin,
      Reg_nickname,
      Reg_email,
      delComment
    };
  }
};
</script>

<style scoped lang="less">
@center : {
  display: flex;
  justify-content: center;
  align-items: center;
};
@spacearound : {
  display: flex;
  justify-content: space-around;
  align-items: center;
};
@space: {
  display: flex;
  align-items: center;
};
.contactdetail {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  overflow-y: scroll;
  background-color: #665757;
  h1 {
    color: turquoise;
    justify-self: flex-start;
  }
  .contactMe {
    width: 100%;
    flex-direction: column;
    @center();
    .header {
      width: 150px;
      height: 150px;
      border-radius: 100%;
      @center();
      border-radius: 100%;
      overflow: hidden;
      border: 3px solid whitesmoke;
      img {
        width: 200%;
      }
    }
    .name {
      font-size: 24px;
      color: white;
    }
    .textarea {
      width: 75%;
      height: 200px;
      background-color: #fff;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      box-sizing: border-box;
      overflow-y: hidden;
      position: relative;
      .login {
        width: 90%;
        height: 45px;
        @space();
        justify-content: space-between;
        border-bottom: 1px solid pink;
        .logFirst {
          @center();
          i {
            font-size: 45px;
            margin: 5px;
            color: plum;
          }
        }
        .toLogin,
        .outLogin {
          cursor: pointer;
        }

        .toLogin:hover,
        .outLogin:hover {
          color: red;
          text-decoration: underline;
        }
      }
      textarea {
        width: 95%;
        height: 100px;
        border: 1px solid pink;
        outline-color: #edd1d8;
      }
    }
    .submit {
      width: 15%;
      height: 40px;
      background-color: #fff;
      margin: 15px;
      border-radius: 5px;
      box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.6);
      cursor: pointer;
      @center();
    }
    .submit:hover {
      background-color: #21a675;
    }
    .comment {
      width: 75%;
      min-height: 160px;
      margin: 10px;
      display: flex;
      border-bottom: 2px solid #4c221b;
      .userIcon {
        width: 40px;
        height: 40px;
        border-radius: 100%;
        background-color: rgb(216, 114, 114);
        @center();
      }
      .commentMes {
        margin-left: 25px;
        .commentUser {
          font-size: 15px;
          color: #88ada6;
          .time {
            font-size: 14px;
            color: #808080;
            margin-left: 15px;
          }
        }
        .commentText {
          margin-top: 14px;
          font-size: 16px;
        }
        .reback {
          width: 45px;
          font-size: 13px;
          color: #4c8dae;
          margin: 15px;
          cursor: pointer;
          @center();
        }
        .reback:hover {
          color: red;
        }
      }
    }
  }
  .content {
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    position: relative;
    div {
      margin-bottom: 45px;
      a {
        font-size: 50px;
        margin: 40px 40px;
        cursor: pointer;
        text-decoration: none;
        color: whitesmoke;
      }
      a:hover {
        color: burlywood;
      }
    }
  }
}
// 登录样式
.loginbox {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  @center();
  .logBox {
    width: 55%;
    height: 85%;
    background-color: #a4e2c6;
    box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.6);
    border-radius: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    .login-head {
      width: 100%;
      height: 10%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      div {
        margin: 15px;
      }
      .iconfont {
        font-size: 24px;
        cursor: pointer;
      }
      .iconfont:hover {
        color: red;
      }
    }
    .input-box {
      width: 95%;
      height: 50%;
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.6);
      @center();
      flex-direction: column;
      div {
        width: 95%;
        height: 20%;
        border: 1px solid #bacac6;
        margin: 10px;
        @center();
        input {
          width: 75%;
          height: 95%;
          border: none;
          outline: none;
          margin-left: 25px;
          font-size: 20px;
        }
        i {
          font-size: 24px;
          color: seagreen;
        }
      }
      // .nickname {
      // }
      // .email {
      // }
    }
    .message-submit {
      width: 95%;
      height: 60px;
      margin-top: 25px;
      @spacearound();
      div {
        width: 45%;
        height: 100%;
        border-radius: 10px;
        box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.6);
        cursor: pointer;
        @center();
      }
      div:hover {
        background-color: salmon;
      }
      .exit-submit {
        background-color: #1bd1a5;
      }
      .login-submit {
        background-color: #2add9c;
      }
    }
  }
}

@media screen and(max-width: 600px) {
  .contactdetail {
    .contactMe {
      .header {
        img {
          width: 200%;
        }
      }
      .textarea {
        width: 100%;
      }
      .submit {
        width: 45%;
      }
    }
  }
}
</style>
