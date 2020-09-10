import {
  createApp,
} from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import LazyPlugin from './lazyPlugin'

// const app = createApp(App)
// app.directive('lazy', {
//   unmounted(el, binding) {
//     let io = new IntersectionObserver(entries => {
//       entries.forEach(entry => {
//         let lazyImage = entry.target;
//         if (entry.intersectionRatio > 0) {
//           lazyImage.src = binding.value;
//           io.unobserve(lazyImage);
//         }
//       });
//     });
//     io.observe(el);
//   }
// })
createApp(App)
  .use(router)
  .use(store)
  .use(LazyPlugin)
  .mount("#app");


// let io = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     let lazyImage = entry.target;
//     if (entry.intersectionRatio > 0) {
//       lazyImage.src = binding.value;
//       io.unobserve(lazyImage);
//     }
//   });
// });
// io.observe(el);