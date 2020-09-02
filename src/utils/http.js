import axios from 'axios'

class Http {
    constructor(state) {
        this.state = state
    }
    init() {
        console.log('ok')
    }
    async get(url, params) {
        const res = await axios({
            method: 'get',
            url: url,
            params: params
        })

        if (res.status == 200) {
            return res.data
        } else {
            return {
                err: '请求错误'
            }
        }

    }
}

export default Http