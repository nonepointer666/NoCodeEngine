import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// 用于解决vue3 无法获取setup写法的具名组件的问题
import DefineOptions from "unplugin-vue-define-options/vite";

export default defineConfig({
  plugins: [vue(), DefineOptions()],
});