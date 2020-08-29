import cloudbase from "@cloudbase/js-sdk";
class WechatMonents {
    constructor(state) {
        this.state = state
        this.app = cloudbase.init({
            env: "personal-web-5gfvc908ac76abb1"
        })
        this.auth = this.app.auth({
            persistence: 'local'
        })
    }

    getAllNews() {
        this.auth
            .getLoginState()
            .then((loginstate) => {
                if (loginstate) {
                    const db = this.app.database()
                    db.collection('center')
                        .get()
                        .then((res) => {
                            this.state.news = res.data.reverse()
                        })
                } else {
                    console.log("登录无效")
                }
            })
    }
}


export default WechatMonents