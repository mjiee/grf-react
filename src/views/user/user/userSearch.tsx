import React from "react";
import { Form, Input, Button } from "@arco-design/web-react";
import styles from "./styles/search.module.less";

const FormItem = Form.Item;

export function UserSearch() {
  const [form] = Form.useForm();
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>用户查询</div>
      <Form form={form}>
        <div className={styles.form}>
          <FormItem label="用户名" field="name">
            <Input />
          </FormItem>
          <FormItem label="手机号" field="phone">
            <Input />
          </FormItem>
          <FormItem label="邮箱" field="email">
            <Input />
          </FormItem>
        </div>
      </Form>
      <Button
        type="primary"
        shape="round"
        loading={false}
        style={{ width: "100px", height: "30px", left: "30px" }}
      >
        搜索
      </Button>
    </div>
  );
}
