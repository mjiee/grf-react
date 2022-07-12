import React from "react";
import { Avatar, Typography } from "@arco-design/web-react";
import styles from "./styles/project.module.less";

export default function Project() {
  return (
    <>
      <div className={styles.title}>我的项目</div>
      <div className={styles.project}>
        <div className={styles["project-box"]}>
          <div className={styles.subtitle}>登月项目</div>
          <Typography.Paragraph
            className={styles.info}
            ellipsis={{ rows: 1, expandable: true }}
          >
            登月项目很有前途, 超级有前途, 前途不可限量, 赶紧加入不要忧郁
          </Typography.Paragraph>
          <Avatar.Group size={32} style={{ marginRight: 10 }}>
            <Avatar style={{ backgroundColor: "#7BC616" }}>A</Avatar>
            <Avatar style={{ backgroundColor: "#14C9C9" }}>B</Avatar>
            <Avatar style={{ backgroundColor: "#168CFF" }}>C</Avatar>
            <Avatar style={{ backgroundColor: "#FF7D00" }}>D</Avatar>
            <Avatar style={{ backgroundColor: "#FFC72E" }}>E</Avatar>
          </Avatar.Group>
          <span>等23人</span>
        </div>
        <div className={styles["project-box"]}>
          <div>两元店项目</div>
        </div>
        <div className={styles["project-box"]}>
          <div>娱乐项目</div>
        </div>
        <div className={styles["project-box"]}>
          <div>上天项目</div>
        </div>
      </div>
    </>
  );
}
