import * as o from "./src/index.mjs";
console.log(o);
const l = {
  // vue在插件使用时，会调用插件暴露出的install方法，该方法取出所有的组件，并注册
  install: (e) => {
    for (let i in o)
      e.use(o[i]);
  }
};
export {
  l as default
};
