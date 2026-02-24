import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import BlogList from '../views/BlogList.vue'
import BlogPost from '../views/BlogPost.vue'
import UserProfile from '../views/UserProfile.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import ProfileInfo from '../views/ProfileInfo.vue'
import ProfileSettings from '../views/ProfileSettings.vue'

let isAuthenticated = false

const routes = [
  { path: '/', name: 'Home', component: Home },

  { path: '/blogs', name: 'BlogList', component: BlogList },

  {
    path: '/blog/:id',
    name: 'BlogPost',
    component: BlogPost,
    props: true
  },

  {
    path: '/profile',
    component: UserProfile,
    alias: '/me',
    children: [
      { path: 'info', component: ProfileInfo },
      { path: 'settings', component: ProfileSettings }
    ]
  },

  { path: '/login', name: 'Login', component: Login },

  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      if (isAuthenticated) next()
      else next('/login')
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export const auth = {
  login() { isAuthenticated = true },
  logout() { isAuthenticated = false }
}

export default router
