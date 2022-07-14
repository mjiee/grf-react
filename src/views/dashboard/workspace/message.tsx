import React from "react";
import EmptyPage from "components/utils/emptyPage";
import styles from "./styles/message.module.less";

export default function Message() {
  return (
    <div className={styles.message}>
      <EmptyPage text={"暂无最新消息"} />
    </div>
  );
}
