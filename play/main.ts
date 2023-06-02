import { createApp } from 'vue';
import App from './app.vue';
import noCodeEngine from '@NoCodeEngine/components';
const app = createApp(App);

// 整体引入，应该按需引入
app.use(noCodeEngine);
app.mount('#app');
