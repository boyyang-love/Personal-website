import {
  createApp
} from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";


// const tcb = require('tcb-js-sdk')

// const app = tcb.init({
//   env: 'personal-web-5gfvc908ac76abb1'
// })

// const auth = app.auth({
//   persistence: 'local'
// })
// auth.anonymousAuthProvider().signIn().then((item) => {
//   console.log(item)
// }).catch((err) => {
//   console.log(err)
// })


createApp(App)
  .use(router)
  .use(store)
  .mount("#app");