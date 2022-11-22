<template>
  <div class="bars_container">
    <div class="bars">
      <div class="bar" :style="{background:color,height:item.height+'%'}" v-for="item in bars" key="item"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    color: {
      type: String,
      default: "#409EFF",
    },
    barList: {
      type: Array,
      default: [
        { id: 1, height: 100 },
        { id: 2, height: 100 },
        { id: 3, height: 100 },
        { id: 4, height: 100 },
        { id: 5, height: 100 },
        { id: 6, height: 100 },
        { id: 7, height: 100 },
        { id: 8, height: 100 },
        { id: 9, height: 100 },
      ],
    },
  },
  setup(props) {
    var bars: any = ref();
    if (props.barList) {
      bars = props.barList;
    }

    return { bars };
  },
});
</script>

<style lang="scss" scoped>
.bars_container {
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
  .bars {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    -webkit-box-reflect: below -7px -webkit-linear-gradient(
        transparent,
        transparent 40%,
        rgba(0, 0, 0, 0.2)
      );

    .bar {
      margin: 1px;
      height: 100%;
      width: 10%;
      border-radius: 5px 5px 0 0;
    }
  }
}
</style>
