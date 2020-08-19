import cloudbase from "@cloudbase/js-sdk";
import {
    useRouter
} from "vue-router";
class Database {
    constructor(state) {
        this.state = state
        this.router = useRouter()
        this.app = cloudbase.init({
            env: "personal-web-5gfvc908ac76abb1"
        })
        this.auth = this.app.auth({
            persistence: 'local'
        })
        this.auth
            .anonymousAuthProvider()
            .signIn()
            .then(() => {
                console.log('匿名登录成功')
            })
        this.db = this.app.database()
    }

    // 添加用户
    addUsers() {
        this.state.isLoading = true;
        this.state.loadingText = '用户数据加载中'
        this.db.collection('register').where({
            email: this.state.email
        }).get().then((res) => {
            if (res.data.length !== 0) {
                this.state.loadingText = '存在该用户'
                this.state.isLoading = false;
                alert('用户已经存在,请登录')
                setTimeout(() => {
                    this.state.isLogined = true
                }, 2000);
            } else {
                this.state.loadingText = '用户数据写入中'
                this.db.collection('register').add({
                    nickname: this.state.nickname,
                    email: this.state.email,
                    password: this.state.password,
                }).then(() => {
                    this.state.isLoading = false;
                    alert('注册成功,请前往登录')
                    this.state.isLogined = true
                }).catch((err) => {
                    console.log(err)
                })
            }
        })

    }
    // 查询登录
    userLogin() {
        this.state.isLoading = true;
        this.state.loadingText = '用户查询中'
        this.db.collection('register').where({
            email: this.state.email
        }).get().then((res) => {
            if (res.data.length != 0) {
                this.db.collection('register').where({
                    email: this.state.email,
                    password: this.state.password
                }).get().then((res) => {
                    if (res.data.length == 0) {
                        this.state.isLoading = false;
                        alert('密码错误,请重新输入密码')
                    } else {
                        this.state.loadingText = '用户查询成功'
                        this.state.isLoading = false;
                        this.router.push({
                            name: 'PersonalCenter',
                            params: {
                                id: res.data[0]._id
                            }
                        })
                    }
                })
            } else {
                this.state.isLoading = false;
                alert('没有该账号,请注册')
                setTimeout(() => {
                    this.state.isLogined = false
                }, 2000);
            }
        })
    }
    // 获取用户数据
    getMes() {

    }
    // 头像上传函数
    uploadImg() {
        this.app.uploadFile({
            cloudPath: `${this.state.id}.jpg`,
            filePath: this.state.fileUrl.files[0]
        }).then((res) => {
            this.app.getTempFileURL({
                fileList: [{
                    fileID: res.fileID,
                    tempFileURL: '',
                    maxAge: 120 * 60 * 10000
                }]
            }).then((res) => {
                this.db.collection('register')
                    .doc(this.state.id)
                    .update({
                        userImg: res.fileList[0].tempFileURL
                    }).then((res) => {
                        console.log(res)
                    })
            })
        })
    }
}

export default Database