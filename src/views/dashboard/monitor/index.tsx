import React, { lazy, Suspense } from "react";
import Loading from "components/utils/loading";
import useGlobalConf from "utils/globalContext";
import type { EChartOption } from "utils/echart";
import { lineOption, barOption, pieOption, sunOption } from "./data";
import styles from "./styles/index.module.less";

const AppChart = lazy(() => import("./chart"));

export function Monitor() {
  const width = useGlobalConf().width;
  const options: { title: string; option: EChartOption }[] = [
    { title: "用户数据", option: lineOption },
    { title: "内容分布", option: pieOption },
    { title: "消费数据", option: barOption },
    { title: "风味轮", option: sunOption },
  ];

  return (
    <>
      <div className={styles.container}>
        {options.map((value) => {
          return (
            <div key={value.title} className={styles.wrapper}>
              <div className={styles.title}>{value.title}</div>
              <Suspense fallback={<Loading />}>
                <AppChart width={width} option={value.option} />
              </Suspense>
            </div>
          );
        })}
      </div>
    </>
  );
}
