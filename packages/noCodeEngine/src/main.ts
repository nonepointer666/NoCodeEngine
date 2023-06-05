import './assets/main.css';
import { setupApp } from './setup';
// import ElementPlus from 'element-plus';
// import 'element-plus/dist/index.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';

const app = createApp(App);

app.use(createPinia());
// app.use(ElementPlus);
setupApp(app);

app.mount('#app');
