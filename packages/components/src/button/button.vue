<template>
  <button class="my-button" @click="$emit('click')">
    {{ label ?? '默认按钮' }}
  </button>
</template>

<script lang="ts" setup>
defineProps<{
  label?: string;
  size?: string;
  color?: string;
  type?: string;
  round?: boolean;
  disabled?: boolean;
}>();
defineEmits<{
  (e: 'click'): void;
}>();
defineOptions({
  name: 'ea-button'
});
</script>
<style lang="less" scoped>
.my-button {
  width: 100px;
  height: 40px;
  background: rgb(123, 123, 223);
  outline: none;
  border: none;
  box-shadow: none;
}
</style>
