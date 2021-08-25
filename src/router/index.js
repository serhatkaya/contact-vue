import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '@/components/auth/Login.vue';
import Master from '@/components/Master.vue';
import UserDetail from '@/views/User-detail.vue';

const routes = [
    {
        path: '',
        component: Master,
        children: [
            {
                path: '/home',
                name: 'Home',
                component: Home,
                meta: {
                    requiresAuth: true,
                },
            },
            {
                path: '/users',
                name: 'Users',
                component: () => import('../views/Users.vue'),
                meta: {
                    requiresAuth: true,
                },
            },
            {
                path: '/users/detail/:id',
                props: true,
                name: 'UserDetail',
                component: UserDetail,
            },
        ],
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (isAuthenticated()) {
            next();
            return;
        }
        next('/login');
    }
    next();
});

function isAuthenticated() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
        return true;
    }
    return false;
}

export default router;
