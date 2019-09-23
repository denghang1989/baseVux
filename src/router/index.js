import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/page/MainPage.vue';
import HomePage from '@/page/tabbar/HomePage.vue';
import BoardPage from '@/page/tabbar/BoardPage.vue';
import CockpitPage from '@/page/tabbar/CockpitPage.vue';
import PanelPage from '@/page/tabbar/PanelPage.vue';
import BedData from '@/page/home/BedData.vue';
import CptData from '@/page/home/CptData.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage,
      meta: {
        keepAlive: true
      },
      children: [
        {
          path: "/main/home",
          component: HomePage
        },
        {
          path: "/main/board",
          component: BoardPage
        },
        {
          path: "/main/cockpit",
          component: CockpitPage
        },
        {
          path: "/main/panel",
          component: PanelPage
        }
      ]
    },
    {
      path:"/BedData",
      component:BedData,
      name:"BedData"
    },
    {
      path:"/CptData",
      component:CptData,
      name:"CptData"
    }
  ],
});

export default router;
