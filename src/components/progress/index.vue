<template>
  <div class="progress-containner">
    <div class="bg">
      <div class="progress"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.progress-containner {
  width: 100%;
  height: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  .bg {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #cfd3dc;
    border-radius: 5px;
  }
  .progress {
    border-radius: 5px;

    z-index: 1;
    height: 100%;
    width: 66%;
    background: linear-gradient(to right, #a2d9f3, #1976d2);
  }
}
</style>
