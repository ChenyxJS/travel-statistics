<template>
  <div class="containner flex-clo">
    <div class="containner-header flex flex-cc">
      <svg-icon icon-name="header_border" icon-size="40"></svg-icon>

      <div class="glass_bg">Travel-StatisticsTravel-Statistics</div>
      <div class="header_text">Travel Statistics</div>
    </div>
    <div class="main flex flex-sbc">
      <div class="left clo-10 flex-clo">
        <div class="clo-3">
          <div class="progress flex-clo">
            <div class="title flex flex-align-center">
              <h1>佛山市</h1>
              <svg-icon
                icon-name="echange"
                style="margin-left: 10px"
                icon-size="30"
              ></svg-icon>
            </div>
            <div class="content">
              <p>累计在该城市停留</p>
              <p>08<span>年</span>06<span>月</span>178<span>天</span></p>
              <Progress style="width: 200px; margin-bottom: 10px"></Progress>
              <div class="text">
                <p style="display: inline">当前在线人数</p>
                {{ "187,52" }}<span>人</span
                ><span
                  :style="{
                    color: '#67C23A',
                    marginLeft: '5px',
                    fontWeight: 600,
                  }"
                  >↑34</span
                >
              </div>
            </div>
          </div>
        </div>
        <div class="clo-2_6 flex flex-align-center">
          <el-progress
            type="circle"
            color="#536DFE"
            stroke-width="8"
            width="90"
            :percentage="78"
          />
          <div class="bg_box"></div>
          <div class="left2_content flex-clo">
            <div class="content-top flex-clo">
              <p>
                {{ "420,57"
                }}<span :style="{ color: '#F56C6C', fontWeight: 600 }"
                  >↓23</span
                >
              </p>
              <span>当前在线人数</span>
            </div>
            <div class="content-bottom flex-clo">
              <p>
                {{ "420,547"
                }}<span :style="{ color: '#67C23A', fontWeight: 600 }"
                  >↑34</span
                >
              </p>
              <span>总人数</span>
            </div>
          </div>
        </div>
        <div class="clo-4">
          <data-panel title="千里之行始于足下">
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
                  <svg-icon icon-name="地铁" icon-size="40"></svg-icon>
                </div>
              </div>
              <div class="total-panel panel">
                <div class="header">
                  <h5>累计出行公里数</h5>
                  <span>2020年-至今</span>
                </div>
                <div class="content">
                  <div class="text">{{ "148,75" }}<span>米</span></div>
                  <svg-icon icon-name="飞机" icon-size="40"></svg-icon>
                </div>
              </div>
              <div class="total-panel panel">
                <div class="header">
                  <h5>累计出行公里数</h5>
                  <span>2020年-至今</span>
                </div>
                <div class="content">
                  <div class="text">{{ "148,75" }}<span>米</span></div>
                  <svg-icon icon-name="骑车" icon-size="40"></svg-icon>
                </div>
              </div>
            </div>
          </data-panel>
        </div>
      </div>
      <div class="center">
        <div id="map" class="map"></div>
      </div>
      <div class="right clo-10 flex-clo">
        <div class="clo-1_5 flex flex-ss">
          <div class="accumulate-panel panel flex flex-align-center">
            <div class="accumulate-panel-left">
              <svg-icon icon-name="出行" icon-size="40"></svg-icon>
            </div>
            <div class="accumulate-panel-right flex-clo flex-cc">
              <div style="color: #fff" class="text">{{ "148,75" }}</div>
              <p>累计出行距离</p>
            </div>
          </div>
          <div class="accumulate-panel panel flex flex-align-center">
            <div class="accumulate-panel-left">
              <svg-icon icon-name="出行" icon-size="40"></svg-icon>
            </div>
            <div class="accumulate-panel-right flex-clo flex-cc">
              <div style="color: #fff" class="text">{{ "148,75" }}</div>
              <p>累计出行距离</p>
            </div>
          </div>
        </div>
        <div class="clo-6">
          <data-panel title="行程折线图">
            <div class="line-panel-view flex-clo">
              <div class="line-panel panel flex-clo">
                <div class="line-panel-header flex">
                  <p>累计服务时长</p>
                  <p>08<span>年</span>06<span>月</span>178<span>天</span></p>
                </div>
                <div id="line" class="line"></div>
              </div>
              <div class="bar-panel-view flex flex-sc">
                <div class="bar-panel panel flex-clo flex-sc">
                  <div class="bar-panel-top">
                    <Bars
                      color="linear-gradient(to right, #6a3093, #a044ff)"
                      :bar-list="bars1"
                    />
                  </div>
                  <div class="bar-panel-bottom flex-clo flex-cc">
                    <div class="text">{{ "1475" }}<span>米</span></div>
                    <p>累计出行距离</p>
                  </div>
                </div>
                <div class="bar-panel panel flex-clo flex-cc">
                  <div class="bar-panel-top">
                    <Bars :bar-list="bars2" />
                  </div>
                  <div class="bar-panel-bottom flex-clo flex-cc">
                    <div class="text">{{ "1875" }}<span>米</span></div>
                    <p>累计出行距离</p>
                  </div>
                </div>
              </div>
            </div>
          </data-panel>
        </div>
        <div class="clo-2">
          <data-panel title="旅行覆盖率">
            <div class="panel flex flex-ss">
              <div class="panel-left flex flex-clo flex-cc">
                <p>累计服务时长</p>
                <div class="text">{{ "148,75" }}<span>米</span></div>
              </div>
              <div class="driver"></div>
              <div class="panel-right flex flex-clo flex-cc">
                <p>累计服务时长</p>
                <div class="text">{{ "148,75" }}<span>米</span></div>
              </div>
            </div>
          </data-panel>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import * as echarts from "echarts";
import china from "@/assets/echarts/china.json";

import { defineComponent, onMounted } from "vue";
import DataPanel from "@/components/data-panel/index.vue";
import Bars from "@/components/bars/index.vue";
import Progress from "@/components/progress/index.vue";

//一个包含两个到多个二维坐标的数组
var path3 = [
  {
    fromName: "上海",
    toName: "山东",
    coords: [
      [121.4771, 31.2278],
      [117.001, 36.6885],
    ],
  },
  {
    fromName: "山东",
    toName: "河南",
    coords: [
      [117.001, 36.6885],
      [113.6806, 34.7553],
    ],
  },
  {
    fromName: "河南",
    toName: "宁夏",
    coords: [
      [113.6806, 34.7553],
      [106.2196, 38.4879],
    ],
  },
  {
    fromName: "宁夏",
    toName: "新疆",
    coords: [
      [106.2196, 38.4879],
      [87.6007, 43.8223],
    ],
  },
];

export default defineComponent({
  components: {
    DataPanel,
    Bars,
    Progress,
  },
  setup() {
    onMounted(() => {
      // 初始化地图
      mapInit();
      // 初始化折线图
      lineInit();
    });
    let chinaJson: any = china;

    const mapInit = () => {
      const mapDom = document.getElementById("map");
      if (mapDom) {
        echarts.registerMap("china", chinaJson, {});
        var map = echarts.init(mapDom);
        map.setOption({
          // 进行相关配置
          backgroundColor: "transparent", //设置背景色
          tooltip: {
            // 鼠标移到图里面的浮动提示框
            show: false,
            transitionDuration: 0,
          },
          visualMap: {
            // 地图标注位置设置和内容设置（图中左下角）
            show: false,
            left: 60,
            bottom: 60,
            showLabel: false, // 显示下面属性pieces中的label
            textStyle: {
              color: "#96D7F4",
            },
            icon: "circle", // 标志框形状设置
            itemWidth: 5,
            itemHeight: 5,
            pieces: [
              //根据数据大小，各省显示不同颜色
              {
                lt: 5,
                label: "<5家",
                color: "#96b9ff",
              },
              {
                gte: 5,
                lt: 10,
                label: "5-10家",
                color: "#637fe3",
              },
              {
                gte: 10,
                lt: 20,
                label: "10-20家",
                color: "#6283e8",
              },
              {
                gte: 20,
                label: "20家以上",
                color: "#4774d9",
              },
            ],
          },
          geo: {
            // 这个是重点 —— 这里设置为地图的阴影
            map: "china", // 表示中国地图
            roam: false, // 禁止拖拽
            label: {
              // 标志信息
              normal: {
                show: false, // 是否显示对应地名
                textStyle: {
                  color: "#3F51B5",
                },
              },
            },
            regions: [
              {
                name: "南海诸岛",
                itemStyle: {
                  // 隐藏地图
                  normal: {
                    opacity: 0, // 为 0 时不绘制该图形
                  },
                },
                label: {
                  show: false, // 隐藏文字
                },
              },
            ],
            silent: true, // 禁止hover效果
            zoom: 1.1, // 地图比例
            center: [105.194115019531, 36.4], // 地图中心位置， 此处的纬度与下面的center相差1度是形成阴影的距离，可自己随意调整
            itemStyle: {
              normal: {
                areaColor: "#3F51B5",
              },
              emphasis: {
                show: false,
              },
            },
          },
          series: [
            // 此处为真正的地图
            {
              name: "城市", // 浮动框的标题
              type: "map",
              map: "china",
              zoom: 1.1,
              zlevel: 0, // 设置地图的层级，将该地图上移（类似z-index）
              emphasis: {
                // 鼠标hover是否显示内容，可自己调节
                label: {
                  show: false,
                },
                textStyle: {
                  color: "#00114F",
                },
              },
              label: {
                // 地图标注
                normal: {
                  show: false, // 是否显示对应地名
                },
              },
              center: [105.194115019531, 35.582111640625], // 设置地图中心
              itemStyle: {
                // 地图的样式
                normal: {
                  areaColor: "#96b9ff",
                  borderColor: "#FFFFFF", // 省份边框颜色
                  borderWidth: 0.5, // 省份边框宽度
                  shadowColor: "rgba(100,255,238,0.5)", // 省份边框阴影
                },
                emphasis: {
                  // 鼠标hover显示
                  show: false,
                  areaColor: "#96b9ff",
                  color: "#00114F",
                  textStyle: {
                    color: "#FFFFFF",
                  },
                },
              },
              data: [
                {
                  name: "南海诸岛",
                  itemStyle: {
                    normal: {
                      opacity: 0,
                      label: { show: false },
                      borderWidth: "0",
                      borderColor: "#fff",
                      areaStyle: { color: "#10242b" },
                    },
                    emphasis: { opacity: 0, label: { show: false } },
                  },
                },
                // { name: "广东", value: "3" },
                // { name: "江苏", value: "3" },
                // { name: "浙江", value: "2" },
                // { name: "山东", value: "0" },
                // { name: "安徽", value: "5" },
                { name: "湖北", value: "10" },
                // { name: "重庆", value: "0" },
                // { name: "湖南", value: "5" },
                // { name: "河南", value: "1" },
                // { name: "北京", value: "9" },
                { name: "天津", value: "12" },
                // { name: "上海", value: "1" },
                // { name: "河北", value: "7" },
                { name: "云南", value: "15" },
                // { name: "辽宁", value: "7" },
                // { name: "黑龙江", value: "2" },
                // { name: "新疆", value: "12" },
                // { name: "江西", value: "1" },
                // { name: "广西", value: "3" },
                // { name: "甘肃", value: "522" },
                // { name: "山西", value: "1" },
                { name: "内蒙古", value: "18" },
                // { name: "陕西", value: "5" },
                // { name: "吉林", value: "2" },
                { name: "福建", value: "111" },
                // { name: "贵州", value: "5" },
                // { name: "青海", value: "2" },
                // { name: "西藏", value: "122" },
                // { name: "四川", value: "2" },
                // { name: "宁夏", value: "511" },
                // { name: "海南", value: "2" },
                // { name: "台湾", value: "2" },
                // { name: "香港", value: "6" },
                // { name: "澳门", value: "9" },
              ],
            },
            {
              type: "lines",
              //折线图中的所有图形的zlevel的值，用于canvas分层，不同zlevel值的图形会放置在不同的canvas中，zLevel大的canvas会防在zLevel小的canvas的上面
              zlevel: 1,
              //特效
              effect: {
                //是否显示特效
                show: true,
                //特效动画的时间
                period: 6,
                //特效尾迹的长度，取向从0到1的值，数值越大尾迹越长
                trailLength: 0.7,
                color: "red", //arrow箭头的颜色
                //线两端的标记大小，可以是一个数组分别指向两端，也可以是单个统一指定。
                symbolSize: 8,
              },
              //类似于线段头部或尾部所标记的图形
              symbol: ["none", "arrow"],
              lineStyle: {
                normal: {
                  //线条颜色
                  color: "blue",
                  opacity: 1,
                  //线条宽度
                  width: 12,
                  //线条是否有弧度
                  curveness: 0.4,
                },
              },
              data: [
                {
                  fromName: "上海",
                  toName: "山东",
                  coords: [
                    [121.4648, 31.2891],
                    [118.2402, 36.2307],
                  ],
                },
                {
                  fromName: "山东",
                  toName: "河南",
                  coords: [
                    [117.001, 36.6885],
                    [113.6806, 34.7553],
                  ],
                },
                {
                  fromName: "河南",
                  toName: "宁夏",
                  coords: [
                    [113.6806, 34.7553],
                    [106.2196, 38.4879],
                  ],
                },
                {
                  fromName: "宁夏",
                  toName: "新疆",
                  coords: [
                    [106.2196, 38.4879],
                    [87.6007, 43.8223],
                  ],
                },
              ],
            },
          ],
        });

        window.addEventListener("resize", () => {
          // 地图自适应缩放
          map.resize();
        });
      }
    };
    const lineInit = () => {
      const lineDom = document.getElementById("line");
      if (lineDom) {
        const line = echarts.init(lineDom);
        line.setOption({
          color: ["#03a9f4", "#7c4dff"],
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow",
            },
          },
          grid: {
            // 控制图表的边距
            top: 0,
            bottom: "15%",
            left: 0,
            right: 0,
          },
          xAxis: {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            axisLine: {
              // 隐藏坐标线
              show: false,
            },
            axisTick: {
              // 隐藏刻度线
              show: false,
            },
          },
          yAxis: {
            show: false,
            type: "value",
          },
          series: [
            {
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: "line",
              smooth: true,
            },
            {
              data: [111, 832, 666, 934, 2222, 412, 1231],
              type: "line",
              smooth: true,
            },
          ],
        });
        window.addEventListener("resize", () => {
          // 地图自适应缩放
          line.resize();
        });
      }
    };

    const bars1 = [
      { id: 1, height: 30 },
      { id: 2, height: 40 },
      { id: 3, height: 50 },
      { id: 4, height: 70 },
      { id: 5, height: 100 },
      { id: 6, height: 90 },
      { id: 7, height: 60 },
      { id: 8, height: 30 },
      { id: 9, height: 20 },
    ];
    const bars2 = [
      { id: 1, height: 20 },
      { id: 2, height: 40 },
      { id: 3, height: 100 },
      { id: 4, height: 60 },
      { id: 5, height: 80 },
      { id: 6, height: 60 },
      { id: 7, height: 100 },
      { id: 8, height: 30 },
      { id: 9, height: 60 },
    ];
    return { bars1, bars2 };
  },
});
</script>

<style lang="scss" scoped>
.bg_box {
  position: relative;
  left: -40px;
  width: 100px;
  height: 100px;
  z-index: 0;
  background-color: #448aff;
  filter: blur(60px);
}
.containner {
  width: 100%;
  height: 100%;
  background-image: url("@/assets/images/bg.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  color: #000;
  overflow: hidden;
  &-header {
    height: 60px;
    color: #448aff;
    font-size: 26px;
    font-weight: bold;
    .header_text {
      position: absolute;
      z-index: 9;
      width: 100%;
      text-align: center;
    }
    .glass_bg {
      position: absolute;
      z-index: 0;
      height: 60px;
      width: 100%;
      filter: blur(20px);
      text-align: center;
    }
  }
  .main {
    flex: 1;
    width: 100%;
    .left {
      margin-left: 30px;
      height: 100%;
      padding: 20px 0;
    }
    .center {
      position: absolute;
      width: 70%;
      height: 70%;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      .map {
        width: 100%;
        height: 100%;
      }
    }
    .right {
      margin-right: 30px;
      width: 350px;
      height: 100%;
      padding: 20px 0;
    }
  }
}
.row-2 {
  width: 20%;
}
.clo-10 {
  height: 100%;
  padding: 30px 0;
  .clo-1_5 {
    width: 100%;
    height: 15%;
  }
  .clo-2 {
    width: 100%;
    height: 20%;
  }
  .clo-2_6 {
    width: 100%;
    height: 26%;
  }
  .clo-3 {
    width: 100%;
    height: 30%;
  }
  .clo-4 {
    width: 100%;
    height: 40%;
  }
  .clo-5 {
    width: 100%;
    height: 50%;
  }
  .clo-6 {
    width: 100%;
    height: 60%;
  }
}

.panel-view {
  display: grid;
  grid-template-rows: repeat(2, 120px);
  grid-template-columns: repeat(2, 230px);
}
.panel {
  padding: 10px 15px;
  margin: 5px;
  border-radius: var(--border-radius);
  background-color: #fff;
  box-shadow: 0 0 5px 2px #cfd3dc;
}
.panel {
  &-left {
    padding: 5px 0;
    width: 45%;
    p {
      font-size: 6px;
      margin-bottom: 15px;
    }
  }
  &-right {
    padding: 5px 0;
    width: 45%;
    p {
      font-size: 10px;

      margin-bottom: 15px;
    }
  }
}
.progress {
  .title {
    margin-bottom: 20px;
  }
  .content {
    p:nth-of-type(1) {
      font-size: 12px;
      margin-bottom: 5px;
    }
    p:nth-of-type(2) {
      color: #000;
      font-size: 24px;
      font-weight: 900;
      letter-spacing: 2px;
      margin-bottom: 15px;
      span {
        font-size: 10px;
      }
    }
  }
}
.left2_content {
  position: absolute;
  margin-left: 120px;
  p {
    font-size: 20px;
    font-weight: 600;
    span {
      margin-left: 5px;
    }
  }
  span {
    font-weight: 300;
    font-size: 10px;
  }
}

.total-panel {
  // width: 50%;
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
    padding: 10px 0;
  }
}
.text {
  color: #000;
  font-size: 20px;
  font-weight: 900;
  span {
    font-weight: 100;
    font-size: 4px;
  }
}
.accumulate-panel:nth-of-type(1) {
  background: linear-gradient(to right, #d1c4e9, #7c4dff);
}
.accumulate-panel:nth-of-type(2) {
  background: linear-gradient(to right, #b3e5fc, #03a9f4);
}
.accumulate-panel {
  width: 200px;
  color: #fff;
  &-left {
    margin-right: 10px;
  }
  &-right {
    .text {
      font-size: 20px;
      font-weight: 900;
    }
    p {
      text-align: center;
      font-size: 6px;
      margin-bottom: 10px;
    }
  }
}

.line-panel-view {
  width: 100%;
  height: 100%;
  .line-panel {
    height: 50%;
    margin-bottom: 20px;

    &-header p:first-child {
      color: #a3a6ad;
      font-size: 10px;
      line-height: 26px;
    }
    &-header p:last-child {
      margin-left: 10px;
      color: #000;
      font-size: 16px;
      font-weight: 200;
      span {
        font-size: 10px;
      }
    }
    .line {
      flex: 1;
    }
  }
  .bar-panel-view {
    height: 25%;
    .bar-panel {
      width: 50%;
      height: 100%;
      &-top {
        height: 40%;
        width: 100%;
        margin-bottom: 10px;
      }
      &-bottom {
        flex: 1;
        p {
          color: #a3a6ad;
          font-size: 12px;
        }
      }
    }
  }
}

.driver {
  height: 50px;
  width: 0;
  border-left: 1px #e5eaf3 solid;
}
</style>
