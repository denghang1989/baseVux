import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/page/MainPage.vue';
import HomePage from '@/page/tabbar/HomePage.vue';
import BoardPage from '@/page/tabbar/BoardPage.vue';
import CockpitPage from '@/page/tabbar/CockpitPage.vue';
import PanelPage from '@/page/tabbar/PanelPage.vue';
import BedData from '@/page/home/BedData.vue';
import CptData from '@/page/home/CptData.vue';
import PieData from '@/page/home/PieData.vue';
import ScatterData from '@/page/home/ScatterData.vue';
import GaugeData from '@/page/home/GaugeData.vue';
import BedDataPage from '@/page/home/BedDataPage.vue';
import OutPatientData from '@/page/home/OutPatientData.vue';
import MenuPage from '@/page/home/MenuPage.vue';
import CellPage from '@/page/home/CellPage.vue';
import ButtonGroup from '@/page/home/ButtonGroup.vue';
import OnePage from '@/components/date/OnePage.vue';
import TwoPage from '@/components/date/TwoPage.vue';
import ThreePage from '@/components/date/ThreePage.vue';

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
    },
    {
      path:"/PieData",
      component:PieData,
      name:"PieData"
    },
    {
      path:"/ScatterData",
      component:ScatterData,
      name:"ScatterData"
    },
    {
      path:"/GaugeData",
      component:GaugeData,
      name:"GaugeData"
    },
    {
      path:"/BedDataPage",
      component:BedDataPage,
      name:"BedDataPage"
    },
    {
      path:"/OutPatientData",
      component:OutPatientData,
      name:"OutPatientData"
    },
    {
      path:"/MenuPage",
      component:MenuPage,
      name:"MenuPage"
    },
    {
      path:"/CellPage",
      component:CellPage,
      name:"CellPage"
    },
    {
      path:"/ButtonGroup",
      component:ButtonGroup,
      name:"ButtonGroup",
      children: [
        {
          path:"/ButtonGroup/OnePage",
          component:OnePage
        },
        {
          path:"/ButtonGroup/TwoPage",
          component:TwoPage
        },
        {
          path:"/ButtonGroup/ThreePage",
          component:ThreePage
        }
      ]
    }
  ],
});

export default router;
