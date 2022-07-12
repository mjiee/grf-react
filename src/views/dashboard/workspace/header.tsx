import React from "react";
import { Avatar } from "@arco-design/web-react";
import styles from "./styles/header.module.less";

export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <span className={styles["header-icon"]}>
          <Avatar size={80}>某</Avatar>
        </span>
        <div>
          <div className={styles.title}>用户名</div>
          <div className={styles.info}>开发部门</div>
        </div>
      </div>
    </>
  );
}
