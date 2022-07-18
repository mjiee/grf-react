import React from "react";
import {
  Form,
  Input,
  Button,
  Space,
  Upload,
  Avatar,
} from "@arco-design/web-react";

import {
  IconPhone,
  IconLock,
  IconCamera,
  IconUser,
} from "@arco-design/web-react/icon";
import styles from "./styles/index.module.less";
import wechat from "assets/wechat.svg";
import qq from "assets/qq.svg";
import weibo from "assets/weibo.svg";

export function SignUp() {
  return (
    <div className={styles.sign}>
      <div>
        <div className={styles["sign-title-wrapper"]}>
          <div className={styles["sign-title"]}>注册账户</div>
        </div>
        <Form
          layout="vertical"
          size={"large"}
          onSubmit={(value) => {
            alert(value);
          }}
        >
          <Form.Item field="avatar" triggerPropName="file">
            <Upload showUploadList={false}>
              <div className={styles["sign-form"]}>
                <Avatar size={70} triggerIcon={<IconCamera />}>
                  <IconUser />
                </Avatar>
              </div>
            </Upload>
          </Form.Item>
          <Form.Item field="username" rules={[{ required: true }]}>
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
            <Button type="primary" long htmlType="submit">
              注册
            </Button>
          </Form.Item>
        </Form>

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
