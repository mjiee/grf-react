import React from "react";
import { Space } from "@arco-design/web-react";
import useGlobalConf from "utils/globalContext";
import { SettingNav } from "./setting";
import styles from "./styles/index.module.less";
import logo from "assets/logo.svg";

export function NavBar() {
  const width = useGlobalConf().width;

  return (
    <div className={styles.navbar}>
      <Space size={"medium"}>
        <img className={styles["navbar-logo"]} src={logo} alt="Logo" />
        <div className={styles["navbar-title"]}>
          {process.env.REACT_APP_NAME}
        </div>
      </Space>
      <SettingNav isFold={width < 960} />
    </div>
  );
}
