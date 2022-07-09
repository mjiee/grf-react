import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Form, Input, Checkbox, Button, Space } from "@arco-design/web-react";
import { IconPhone, IconLock } from "@arco-design/web-react/icon";
import { RootState, AppDispatch } from "service/store";
import { setLogin, setUserInfo } from "service/states/index";
import styles from "./styles/index.module.less";
import wechat from "assets/wechat.svg";
import qq from "assets/qq.svg";
import weibo from "assets/weibo.svg";

export function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const isLogin = useSelector<RootState, boolean>(
    (state) => state.user.isLogin,
  );

  useEffect(() => {
    navigate("/");
  }, [isLogin]);

  return (
    <div className={styles.sign}>
      <div>
        <div className={styles["sign-title-wrapper"]}>
          <div className={styles["sign-title"]}>欢迎回来</div>
          <div className={styles["sign-sub-title"]}>
            输入你的手机号和密码登陆
          </div>
        </div>
        <Form
          layout="vertical"
          size={"large"}
          onSubmit={(value: { phone: string; password: string }) => {
            console.log(`${value.phone} and ${value.password}`);
            dispatch(setLogin(true));
            dispatch(setUserInfo({ name: "wang", avatar: "", role: 2 }));
          }}
        >
          <Form.Item
            field="phone"
            rules={[{ required: true, length: 11, match: /(\d){11}/ }]}
          >
            <Input prefix={<IconPhone />} placeholder="手机号" />
          </Form.Item>
          <Form.Item
            field="password"
            rules={[{ required: true, minLength: 6 }]}
          >
            <Input.Password prefix={<IconLock />} placeholder="密码" />
          </Form.Item>
          <Form.Item>
            <Space
              className={styles["sign-btn"]}
              size={16}
              direction="vertical"
            >
              <div className={styles["sign-justify"]}>
                <Checkbox>记住密码</Checkbox>
                <Link to="/">忘记秘密?</Link>
              </div>
              <Button type="primary" long htmlType="submit">
                登陆
              </Button>
            </Space>
          </Form.Item>
        </Form>

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
