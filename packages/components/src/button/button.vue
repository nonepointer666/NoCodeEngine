// button.vue
<template>
  <button class="ea-button"
          :class="buttonStyle">
    <slot />
  </button>
</template>

<script lang="ts" setup>
import "./style/index.less";
import { computed } from "vue";
defineOptions({ name: "ea-button" });
type ButtonType = "primary";

type ButtonProps = {
  type?: ButtonType;
};
const buttonProps = defineProps<ButtonProps>();

const buttonStyle = computed(() => {
  return { [`ea-button--${buttonProps.type}`]: buttonProps.type };
});
</script>
