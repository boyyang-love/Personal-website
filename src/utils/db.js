import cloudbase from "@cloudbase/js-sdk";
import { useRouter } from "vue-router";
class Database {
  constructor(state) {
    this.state = state;
    this.router = useRouter();
    this.app = cloudbase.init({
      env: "personal-web-5gfvc908ac76abb1"
    });
    this.auth = this.app.auth({
      persistence: "local"
    });
    this.auth
      .anonymousAuthProvider()
      .signIn()
      .then(() => {
        console.log("匿名登录成功");
      });
    this.db = this.app.database();
  }

  // 添加用户
  addUsers() {
    this.state.isLoading = true;
    this.state.loadingText = "用户数据加载中";
    this.db
      .collection("register")
      .where({
        email: this.state.email
      })
      .get()
      .then(res => {
        if (res.data.length !== 0) {
          this.state.loadingText = "存在该用户";
          this.state.isLoading = false;
          alert("用户已经存在,请登录");
          setTimeout(() => {
            this.state.isLogined = true;
          }, 2000);
        } else {
          this.state.loadingText = "用户数据写入中";
          this.db
            .collection("register")
            .add({
              nickname: this.state.nickname,
              email: this.state.email,
              password: this.state.password
            })
            .then(() => {
              this.state.isLoading = false;
              alert("注册成功,请前往登录");
              this.state.isLogined = true;
            })
            .catch(err => {
              console.log(err);
            });
        }
      });
  }
  // 查询登录
  userLogin() {
    this.state.isLoading = true;
    this.state.loadingText = "用户查询中";
    this.db
      .collection("register")
      .where({
        email: this.state.email
      })
      .get()
      .then(res => {
        if (res.data.length != 0) {
          this.db
            .collection("register")
            .where({
              email: this.state.email,
              password: this.state.password
            })
            .get()
            .then(res => {
              if (res.data.length == 0) {
                this.state.isLoading = false;
                alert("密码错误,请重新输入密码");
              } else {
                this.state.loadingText = "用户查询成功";
                this.state.isLoading = false;
                this.router.push({
                  name: "PersonalCenter",
                  params: {
                    id: res.data[0]._id
                  }
                });
              }
            });
        } else {
          this.state.isLoading = false;
          alert("没有该账号,请注册");
          setTimeout(() => {
            this.state.isLogined = false;
          }, 2000);
        }
      });
  }
  // 获取用户数据
  getMes() {
    this.db
      .collection("register")
      .doc(this.state.id)
      .get()
      .then(res => {
        this.state.userMes = res.data[0];
      })
      .catch(err => {
        console.log(err);
      });
  }
  // 头像上传函数
  uploadImg() {
    if (this.state.fileUrl.files.length == 0) {
      alert("请选择要上传的图片");
    } else {
      this.state.isLoading = true;
      this.app
        .uploadFile({
          cloudPath: `${this.state.id}/headerImg/${this.state.fileUrl.files[0].name}`,
          filePath: this.state.fileUrl.files[0]
        })
        .then(res => {
          this.app
            .getTempFileURL({
              fileList: [
                {
                  fileID: res.fileID,
                  tempFileURL: "",
                  maxAge: 120 * 60 * 10000
                }
              ]
            })
            .then(res => {
              this.app
                .callFunction({
                  name: "upload",
                  data: {
                    id: this.state.id,
                    userImg: res.fileList[0].tempFileURL
                  }
                })
                .then(() => {
                  this.getMes(this.state.id);
                  this.state.isLoading = false;
                  this.state.isChangeImg = false;
                });
            });
        });
    }
  }
  // 更改基本信息
  changeMes() {
    this.state.isLoading = true;
    this.app
      .callFunction({
        name: "uploadmes",
        data: {
          id: this.state.id,
          nickname: this.state.userMes.nickname,
          motto: this.state.userMes.motto,
          QQ: this.state.userMes.QQ
        }
      })
      .then(() => {
        this.getMes();
        this.state.isLoading = false;
        this.state.isShowChangeBox = false;
      });
  }
  // 上传动态
  submitNews(id, text, file) {
    if (text.length == 0) {
      alert("请输入动态内容");
    } else {
      this.state.loadingText = "动态上传中";
      if (!file) {
        this.state.isLoading = true;
        this.db
          .collection("center")
          .add({
            ID: id,
            text: text,
            img: "",
            nickname: this.state.userMes.nickname,
            time: new Date().toLocaleString()
          })
          .then(() => {
            this.state.isLoading = false;
            this.state.addNews = false;
            this.state.imgFileUrl = null;
            this.state.centerText = "";
            this.getNews(this.state.id);
          });
      } else {
        this.state.isLoading = true;
        this.app
          .uploadFile({
            cloudPath: `${id}/center/${file.name}`,
            filePath: file
          })
          .then(res => {
            this.app
              .getTempFileURL({
                fileList: [
                  {
                    fileID: res.fileID,
                    tempFileURL: "",
                    maxAge: 120 * 60 * 10000
                  }
                ]
              })
              .then(res => {
                this.db
                  .collection("center")
                  .add({
                    ID: id,
                    text: text,
                    img: res.fileList[0].tempFileURL,
                    nickname: this.state.userMes.nickname,
                    time: new Date().toLocaleString()
                  })
                  .then(() => {
                    this.state.isLoading = false;
                    this.state.addNews = false;
                    this.state.imgFileUrl = null;
                    this.state.centerText = "";
                    this.getNews(this.state.id);
                  });
              });
          });
      }
    }
    // 上传图片
  }
  // 获取动态内容
  getNews(id) {
    this.db
      .collection("center")
      .where({
        ID: id
      })
      .get()
      .then(res => {
        this.state.centerNews = res.data.reverse();
      });
  }
  // 删除动态
  delNews(_id) {
    this.state.isLoading = true;
    this.state.loadingText = "删除动态中";
    this.app
      .callFunction({
        name: "delCenterNews",
        data: {
          _id
        }
      })
      .then(() => {
        this.state.isLoading = false;
        this.getNews(this.state.id);
      })
      .catch(err => [console.log(err)]);
  }
}

export default Database;
