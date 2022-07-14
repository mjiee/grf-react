import React from "react";
import styles from "./styles/icon.module.less";

export default function IconWrapper(props: {
  color: string;
  children: React.ReactNode;
}) {
  return <div className={styles[props.color]}>{props.children}</div>;
}
