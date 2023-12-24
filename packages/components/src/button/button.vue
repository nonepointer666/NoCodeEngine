// button.vue
<template>
  <button class="ea-button" :class="buttonStyle">
    <slot />
  </button>
</template>

<script lang="ts" setup>
import './style/index.less';
import { computed } from 'vue';
defineOptions({
  name: 'ea-button',
  setup() {
    return {};
  }
});
type ButtonType = 'primary';

type ButtonProps = {
  type?: ButtonType;
};
const buttonProps = defineProps<ButtonProps>();

const buttonStyle = computed(() => {
  return { [`ea-button--${buttonProps.type}`]: buttonProps.type };
});
</script>
<!-- 
<template>
  <button>测试按钮</button>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  export default defineComponent({
    name: "ea-button",
    setup() {
      return {};
    },
  });
</script> -->
