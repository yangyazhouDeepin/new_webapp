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
    ]
});
