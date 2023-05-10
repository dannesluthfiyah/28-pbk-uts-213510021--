import {createRouter, createWebHistory} from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Contact from '../components/Contact.vue';
import kegiatan from '../components/kegiatan.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/kegiatan',
    name: 'kegiatan',
    component: kegiatan
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
