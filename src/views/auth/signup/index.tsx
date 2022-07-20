import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Form, Input, Button, Space, Message } from "@arco-design/web-react";
import { IconPhone, IconLock, IconUser } from "@arco-design/web-react/icon";
import { useLazySignupQuery } from "service/api/index";
import { setLogin, setUserInfo, setAuth, Auth } from "service/states/index";
import { AppDispatch } from "service/store";
import styles from "./styles/index.module.less";
import wechat from "assets/wechat.svg";
import qq from "assets/qq.svg";
import weibo from "assets/weibo.svg";

export function SignUp() {
  const [button, setButton] = useState<boolean>(false);
  const [trigger, { data }] = useLazySignupQuery();
  const dispatch = useDispatch<AppDispatch>();
  const [form] = Form.useForm();

  const handleSubmit = (value: {
    name: string;
    phone: string;
    password: string;
  }) => {
    setButton(true);
    console.log(value);
    trigger({
      name: value.name,
      phone: value.phone,
      password: value.password,
      admin: true,
    });
  };

  useEffect(() => {
    if (data && data.status != 0) {
      Message.error(data.message);
      setButton(false);
    } else if (data) {
      const { user, auth } = data.data;
      if (user.actived) {
        dispatch(
          setUserInfo({
            name: user?.name,
            avatar: user?.avatar,
            role: user?.role,
            describe: user?.describe,
          }),
        );
        dispatch(setAuth(auth as Auth));
        dispatch(setLogin(true));
      } else {
        Message.error("用户还未激活, 请联系管理员激活");
      }
    }
  }, [data]);

  return (
    <div className={styles.sign}>
      <div>
        <div className={styles["sign-title-wrapper"]}>
          <div className={styles["sign-title"]}>注册账户</div>
        </div>
        <Form
          form={form}
          layout="vertical"
          size={"large"}
          onSubmit={(value) => handleSubmit(value)}
        >
          <Form.Item field="name" rules={[{ required: true }]}>
            <Input prefix={<IconUser />} placeholder="用户名" />
          </Form.Item>
          <Form.Item
            field="phone"
            rules={[{ required: true, length: 11, match: /(\d){11}/ }]}
          >
            <Input prefix={<IconPhone />} placeholder="手机号" />
          </Form.Item>
          <Form.Item
            field="password"
            rules={[{ required: true, type: "string", minLength: 6 }]}
          >
            <Input.Password prefix={<IconLock />} placeholder="密码" />
          </Form.Item>
          <Form.Item>
            <Button disabled={button} type="primary" long htmlType="submit">
              注册
            </Button>
          </Form.Item>
        </Form>
        <Link className={styles["sign-link"]} to="/auth/signin">
          已有账户, 返回登陆.
        </Link>
        <Space className={styles["sign-btn"]} size={16} direction="vertical">
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
