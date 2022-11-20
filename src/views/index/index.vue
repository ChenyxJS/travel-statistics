<template>
  <div class="containner">
    <div class="left clo-10">
      <div class="clo-3"></div>
      <div class="clo-3"></div>
      <div class="clo-4">
        <data-panel title="这是一个title">
          <div class="panel-view">
            <div class="total-panel panel">
              <div class="header">
                <h5>累计出行公里数</h5>
                <span>2020年-至今</span>
              </div>
              <div class="content">
                <div class="text">{{ "148,75" }}<span>米</span></div>
                <svg-icon icon-name="出行" icon-size="40"></svg-icon>
              </div>
            </div>
            <div class="total-panel panel">
              <div class="header">
                <h5>累计出行公里数</h5>
                <span>2020年-至今</span>
              </div>
              <div class="content">
                <div class="text">{{ "148,75" }}<span>米</span></div>
                <svg-icon icon-name="出行" icon-size="40"></svg-icon>
              </div>
            </div>
            <div class="total-panel panel">
              <div class="header">
                <h5>累计出行公里数</h5>
                <span>2020年-至今</span>
              </div>
              <div class="content">
                <div class="text">{{ "148,75" }}<span>米</span></div>
                <svg-icon icon-name="出行" icon-size="40"></svg-icon>
              </div>
            </div>
            <div class="total-panel panel">
              <div class="header">
                <h5>累计出行公里数</h5>
                <span>2020年-至今</span>
              </div>
              <div class="content">
                <div class="text">{{ "148,75" }}<span>米</span></div>
                <svg-icon icon-name="出行" icon-size="40"></svg-icon>
              </div>
            </div>
          </div>
        </data-panel>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DataPanel from "@/components/data-panel/index.vue";

export default defineComponent({
  components: {
    DataPanel,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.containner {
  width: 100%;
  height: 100%;
  background-color: #e5eaf3;
  color: #fff;
  .left {
    float: left;
    margin-left: 30px;
    height: 100%;
    padding: 20px 0;
  }
}
.clo-10 {
  height: 100%;
  padding: 30px 0;
  .clo-3 {
    height: 30%;
  }
  .clo-4 {
    height: 40%;
  }
}

.panel-view {
  display: grid;
  grid-template-rows: repeat(2, 110px);
  grid-template-columns: repeat(2, 200px);
}
.panel {
  padding: 5px 15px;
  margin: 5px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 0 5px 2px #cfd3dc;
}
.total-panel,
.panel {
  .header {
    color: #000;
    span {
      color: #a3a6ad;
      font-size: 10px;
    }
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #000;
    padding: 10px 0;
    .text {
      font-size: 20px;
      font-weight: 900;
      span {
        font-weight: 100;
        font-size: 4px;
      }
    }
  }
}
</style>
