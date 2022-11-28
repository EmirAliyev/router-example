import { createRouter, createWebHistory } from "vue-router";
import MainPage from '../components/MainPage.vue'
import PostsPage from '../components/PostsPage.vue'
import UsersPage from '../components/UsersPage.vue'
import OneUserPage from '../components/OneUserPage.vue'

const routes = [
  {
    path: "/",
    name: "home",
    component: MainPage,
    alias: "/"
  },
  {
    path: "/PostsPage/",
    name: "posts",
    component: PostsPage,
  },  
  {
    path: "/PostsPage/:id",
    name: "posts",
    component: PostsPage,
    alias:"/PostsPage"
  },
  
  {
    path: "/UsersPage",
    name: "users",
    component: UsersPage,
  },
  {
    path: "/UsersPage/:id",
    name: "userPage",
    component: OneUserPage,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  mode: "history",
  routes,
});

export default router;
