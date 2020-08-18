import cloudbase from "@cloudbase/js-sdk";
import {
    useRouter
} from "vue-router";
class Database {
    constructor(state) {
        this.state = state
        this.router = useRouter()
        const app = cloudbase.init({
            env: "personal-web-5gfvc908ac76abb1"
        })
        const auth = app.auth({
            persistence: 'local'
        })
        auth
            .anonymousAuthProvider()
            .signIn()
            .then(() => {
                console.log('匿名登录成功')
            })
        this.db = app.database()
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
                        this.router.push('/center/personalCenter')
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
}

export default Database