import React from "react";
import Project from "./project";
import Header from "./header";
import styles from "./styles/index.module.less";

export function Workspace() {
  return (
    <>
      <Header />
      <div className={styles.content}>
        <div className={styles["content-box"]}>
          <Project />
        </div>
        <div className={styles["content-box"]}>
          <div className={styles.title}>最新动态</div>
        </div>
        <div className={styles["content-box"]}>
          <div className={styles.title}>我的好友</div>
        </div>
        <div className={styles["content-box"]}>
          <div className={styles.title}>消息</div>
        </div>
      </div>
    </>
  );
}
