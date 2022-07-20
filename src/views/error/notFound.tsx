import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Space, Button } from "@arco-design/web-react";
import { IconEmpty } from "@arco-design/web-react/icon";
import { RootState } from "service/store";
import styles from "./styles/index.module.less";

export function NotFound() {
  const isLogin = useSelector<RootState, boolean>(
    (state) => state.user.isLogin,
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) navigate("/auth/signin");
  }, [isLogin]);

  return (
    <div className={styles.container}>
      <IconEmpty className={styles.icon} />
      <div className={styles.text}>抱歉，页面丢失了</div>
      <Space className={styles.btn} size="large">
        <Button type="secondary" onClick={() => window.location.reload()}>
          重试
        </Button>
        <Button onClick={() => navigate("/")} type="primary">
          返回
        </Button>
      </Space>
    </div>
  );
}
