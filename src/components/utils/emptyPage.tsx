import React from "react";
import { IconEmpty } from "@arco-design/web-react/icon";
import styles from "./styles/empty.module.less";

export default function EmptyPage(props: { text?: string }) {
  return (
    <div className={styles.container}>
      <IconEmpty className={styles.icon} />
      <div className={styles.text}>
        {props.text ? props.text : "等待补充 ..."}
      </div>
    </div>
  );
}
