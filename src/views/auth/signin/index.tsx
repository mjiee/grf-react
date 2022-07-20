import React from "react";
import { Link } from "react-router-dom";
import { Space } from "@arco-design/web-react";
import Phone from "./phone";
import styles from "./styles/index.module.less";
import wechat from "assets/wechat.svg";
import qq from "assets/qq.svg";
import weibo from "assets/weibo.svg";

export function SignIn() {
  return (
    <div className={styles.sign}>
      <div>
        <div className={styles["sign-title-wrapper"]}>
          <div className={styles["sign-title"]}>欢迎回来</div>
          <div className={styles["sign-sub-title"]}>
            输入你的手机号和密码登陆
          </div>
        </div>
        <Phone />

        <Space className={styles["sign-btn"]} size={16} direction="vertical">
          <div className={styles["sign-justify"]}>
            <Link to="/">短信验证登陆</Link>
            <div>
              没有账户?<Link to="/auth/signup">立即注册</Link>
            </div>
          </div>
          <div className={styles["sign-sub-title"]}>OR</div>
          <div className={styles["sign-justify"]}>
            <img src={wechat} alt="wechat" />
            <img src={qq} alt="wechat" />
            <img src={weibo} alt="wechat" />
          </div>
        </Space>
      </div>
    </div>
  );
}
