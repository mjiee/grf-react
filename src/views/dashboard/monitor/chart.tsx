import React, { useRef, useEffect } from "react";
// import useGlobalConf from "utils/globalContext";
import type { EChartOption } from "utils/echart";
import type { EChartType } from "utils/echart";
import { echart } from "utils/echart";
import styles from "./styles/chart.module.less";

let chart: EChartType;
export default function AppChart(props: {
  width: number;
  option: EChartOption;
}) {
  const chartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    chart = echart.init(chartRef.current as HTMLDivElement, undefined, {
      width: chartRef.current?.offsetWidth,
      height: chartRef.current?.offsetHeight,
    });

    chart.setOption(props.option);
    return () => chart.dispose();
  }, [props]);

  useEffect(() => {
    chart.resize({
      width: chartRef.current?.offsetWidth,
      height: chartRef.current?.offsetHeight,
    });
  }, [props]);

  return <div ref={chartRef} className={styles.box}></div>;
}
