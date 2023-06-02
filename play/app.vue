<template>
  <div>启动测试</div>
  <ea-button @click="clickHandle" label="测试一下"></ea-button>
</template>
<script lang="ts" setup>
const clickHandle = () => {
  console.log('test');
};
</script>
