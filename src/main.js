import { createApp } from 'vue';
import Master from './components/Master.vue';
import router from './router';

createApp(Master)
    .use(router)
    .mount('#app');
