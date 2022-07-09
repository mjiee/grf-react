import React, { useMemo } from "react";
import { IconList } from "@arco-design/web-react/icon";
import { useGlobalConf } from "utils/index";
import { IconWrapper } from "components/icon/index";
import styles from "./styles/index.module.less";

export function SideBar() {
  const width = useGlobalConf().width;

  // 防止屏幕尺寸变化时频繁渲染
  const SiderBarComponent = useMemo(() => {
    return width < 960 ? <SiderBarClose /> : <SiderBarOpen />;
  }, [width < 960]);

  return SiderBarComponent;
}

function SiderBarOpen() {
  return (
    <div className={styles["sidebar-open"]}>
      <div>open</div>
    </div>
  );
}

function SiderBarClose() {
  return (
    <div className={styles["sidebar-close"]}>
      <IconWrapper>
        <IconList />
      </IconWrapper>
    </div>
  );
}
