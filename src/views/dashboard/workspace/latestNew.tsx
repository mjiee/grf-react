import React from "react";
import EmptyPage from "components/utils/emptyPage";
import styles from "./styles/message.module.less";

export default function LatestNew() {
  return (
    <div className={styles.message}>
      <EmptyPage text={"暂无最新动态"} />
    </div>
  );
}
