import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Form,
  Input,
  Checkbox,
  Button,
  Space,
  Message,
} from "@arco-design/web-react";
import { IconPhone, IconLock } from "@arco-design/web-react/icon";
import { useLazySigninQuery } from "service/api/index";
import { setLogin, setUserInfo, setAuth, Auth } from "service/states/index";
import { AppDispatch, RootState } from "service/store";
import styles from "./styles/index.module.less";

export default function Phone() {
  const [disabled, setDisabled] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [trigger, { data }] = useLazySigninQuery();
  const [phone, password] = useSelector<RootState, string[]>((state) => [
    state.user.userInfo.phone,
    state.user.userInfo.password,
  ]);
  const dispatch = useDispatch<AppDispatch>();
  const [form] = Form.useForm();

  const handleSubmit = (value: { phone: string; password: string }) => {
    setDisabled(true);
    trigger({ phone: value.phone, password: value.password });
  };

  useEffect(() => {
    if (data && data.status != 0) {
      Message.error(data.message);
      setDisabled(false);
    } else if (data) {
      const { user, auth } = data.data;
      if (user.actived) {
        dispatch(
          setUserInfo({
            name: user?.name,
            avatar: user?.avatar,
            phone: isChecked ? form.getFieldValue("phone") : "",
            password: isChecked ? form.getFieldValue("password") : "",
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
    <Form
      form={form}
      layout="vertical"
      size={"large"}
      initialValues={{
        phone: phone ? phone : "",
        password: password ? password : "",
      }}
      onSubmit={handleSubmit}
      validateMessages={{
        string: {
          length: `手机号长度必须是#{length}`,
          match: `手机号只能是数字`,
          minLength: `密码最小长度为#{minLength}`,
        },
      }}
    >
      <Form.Item
        field="phone"
        rules={[
          { required: true, type: "string", length: 11, match: /(\d){11}/ },
        ]}
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
        <Space className={styles["sign-btn"]} size={16} direction="vertical">
          <div className={styles["sign-justify"]}>
            <Checkbox
              onChange={(checked) => {
                if (checked) setIsChecked(true);
              }}
            >
              记住密码
            </Checkbox>
            <Link to="/">忘记秘密?</Link>
          </div>
          <Button disabled={disabled} type="primary" long htmlType="submit">
            登陆
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
}
