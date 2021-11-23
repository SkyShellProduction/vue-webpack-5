import Home from './pages/Home.vue';
import Movies from './pages/Movies.vue';
import Single from './pages/Single.vue';
import NotFound from './pages/NotFound.vue';
import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
export default new Router({
    // mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/movies',
            name: 'movies',
            component: Movies
        },
        {
            path: '/movies/:id',
            name: 'single',
            component: Single
        },
        {
            path: '*',
            name: '404',
            component: NotFound
        }
    ]
})
