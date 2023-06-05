<template>
  <el-row>
    <el-col span="8">
      <widget-panel></widget-panel>
    </el-col>
    <el-col span="8">
      <toolbar-panel></toolbar-panel>
      <form-widget></form-widget>
    </el-col>
    <el-col span="8">
      <setting-panel></setting-panel>
    </el-col>
  </el-row>
</template>
<script setup lang="ts">
import formWidget from './form-widget/index.vue';
import settingPanel from './setting-panel/index.vue';
import toolbarPanel from './toolbar-panel/index.vue';
import widgetPanel from './widget-panel/index.vue';
</script>
