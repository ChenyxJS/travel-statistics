<template>
  <div class="panel_containner">
    <div class="header">
      <div class="driver"></div>
      <p class="title">{{title}}</p>
    </div>
    <div class="content">
        <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props:{
    title:String
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.panel_containner {
  display: flex;
  flex-direction: column;
  height: 100%;
  .header {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    margin-left: 6px;
    .driver {
      height: 20px;
      width: 0;
      border: 2px var(--primary) solid;
      border-radius: 2px;
    }
    .title {
      margin-left: 10px;
      font-weight: 600;
      font-size: 14px;
      color: black;
    }
  }
  .content {
    flex: 1;
    width: 100%;
  }
}
</style>
