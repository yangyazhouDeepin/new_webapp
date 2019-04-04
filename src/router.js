import Vue from "vue"
import Router from "vue-router"
Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import('./views/home/Home.vue'),
            children: [
                {
                    path: '',
                    name: 'footballTodayMatch',
                    component: () => import('./views/home/FootballTodayMatch')
                },
                {
                    path: '/basketballTodayMatch',
                    name: 'basketballTodayMatch',
                    component: () => import('./views/home/BasketballTodayMatch')
                }
            ]
        },
        {
            path: '/live/:id',
            name: 'live',
            redirect: '/live/:id/matchDetail',
            component: () => import('./views/live/Live'),
            children: [
                {
                    path: 'matchDetail',
                    name: 'matchDetail',
                    component: () => import('./views/live/components/MatchDetail.vue')
                },
                {
                    path: '/liveAnimate',
                    name: 'liveAnimate',
                    component: () => import('./views/live/components/LiveAnimate.vue')
                },
                {
                    path: '/liveVideo',
                    name: 'liveVideo',
                    component: () => import('./views/live/components/LiveVideo.vue')
                }
            ]
        }
    ]
});
