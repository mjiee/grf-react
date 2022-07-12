import React, { useMemo, useState } from "react";
import { Drawer } from "@arco-design/web-react";
import { IconList } from "@arco-design/web-react/icon";
import { useGlobalConf } from "utils/index";
import { IconWrapper } from "components/utils/iconWrapper";
import { SideMenu } from "./sideMenu";
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
      <SideMenu />
    </div>
  );
}

function SiderBarClose() {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <>
      <div
        onClick={() => {
          setVisible(true);
        }}
        className={styles["sidebar-close"]}
      >
        <IconWrapper>
          <IconList />
        </IconWrapper>
      </div>
      <div onClick={() => setVisible(false)}>
        <Drawer
          style={{ backgroundColor: "rgb(113,113,88,0.05)" }}
          className={styles.drawer}
          title={null}
          footer={null}
          width={260}
          visible={visible}
          placement="left"
        >
          <SideMenu />
        </Drawer>
      </div>
    </>
  );
}
