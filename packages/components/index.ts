import * as components from './src/index';
import { App } from 'vue';

console.log(components);
export default {
  // vue在插件使用时，会调用插件暴露出的install方法，该方法取出所有的组件，并注册
  install: (app: App) => {
    for (const i in components) {
      app.use(components[i]);
    }
  }
};
