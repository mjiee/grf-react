import * as echarts from "echarts";
import type { EChartsType } from "echarts";

export type EChartOption = echarts.EChartsOption;
export type EChartType = EChartsType;
export const echart = echarts;

const echartDom: EChartType[] = [];
export function echartResize(eDom: EChartType) {
  echartDom.push(eDom);
  window.onreset = () => {
    echartDom.forEach((elem) => elem.resize());
  };
}
