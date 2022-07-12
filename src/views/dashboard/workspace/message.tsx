import React from "react";
import { IconMessageBanned } from "@arco-design/web-react/icon";
import styles from "./styles/message.module.less";

export default function Message() {
  return (
    <div className={styles.message}>
      <div>
        <IconMessageBanned className={styles["message-icon"]} />
      </div>
      <div className={styles.text}>暂无最新消息</div>
    </div>
  );
}
