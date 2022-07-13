import React from "react";
import styles from "./styles/icon.module.less";

export default function IconWrapper(props: { children: React.ReactNode }) {
  return <div className={styles["icon-wrapper"]}>{props.children}</div>;
}
