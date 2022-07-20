import React from "react";
import { Spin } from "@arco-design/web-react";
import styles from "./styles/lazyload.module.less";

export default function Loading() {
  return (
    <div className={styles.spin}>
      <Spin />
    </div>
  );
}
