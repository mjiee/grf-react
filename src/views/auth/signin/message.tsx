import React from "react";
import { Form, Input, Button } from "@arco-design/web-react";
import { IconPhone, IconLock } from "@arco-design/web-react/icon";

export default function Message() {
  return (
    <Form
      layout="vertical"
      size={"large"}
      onSubmit={(value: { phone: string; password: string }) => {
        console.log(`${value.phone} and ${value.password}`);
      }}
    >
      <Form.Item
        field="phone"
        rules={[{ required: true, length: 11, match: /(\d){11}/ }]}
      >
        <Input prefix={<IconPhone />} placeholder="手机号" />
      </Form.Item>
      <Form.Item field="code" rules={[{ required: true, minLength: 6 }]}>
        <Input prefix={<IconLock />} placeholder="验证码" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" long htmlType="submit">
          登陆
        </Button>
      </Form.Item>
    </Form>
  );
}
