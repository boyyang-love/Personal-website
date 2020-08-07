import {
  createRouter,
  createWebHashHistory
} from "vue-router";


const routes = [{
    path: "/",
    name: "Home",
    component: () => import( /* webpackChunkName: "home" */ "@/views/Home.vue")
  },
  {
    path: "/music",
    name: "Music",
    // // route level code-splitting
    // // this generates a separate chunk (about.[hash].js) for this route
    // // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "music" */ "@/views/Music.vue")
  },
  {
    path: "/about",
    name: "About",
    // // route level code-splitting
    // // this generates a separate chunk (about.[hash].js) for this route
    // // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ "@/views/About.vue")
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import( /* webpackChunkName: "contact" */ "@/views/Contact.vue")
  },
  {
    path: "/listDetail/:id",
    name: "ListDetail",
    component: () => import( /* webpackChunkName: "detail" */ "@/components/ListDetail")
  },
  {
    path: "/MvListDetail/:id",
    name: "MvListDetail",
    component: () => import( /* webpackChunkName: "mvdetail" */ "@/components/MvListDetail")
  },
  {
    path: "/myshows",
    name: "MyShows",
    component: () => import( /* webpackChunkName: "myshows" */ "@/views/MyShows")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;