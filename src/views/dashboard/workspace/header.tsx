import React from "react";
import { Avatar, Upload } from "@arco-design/web-react";
import { IconCamera, IconUser } from "@arco-design/web-react/icon";
import styles from "./styles/header.module.less";

export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <Upload showUploadList={false}>
          <Avatar
            className={styles.icon}
            size={70}
            triggerIcon={<IconCamera />}
          >
            <IconUser />
          </Avatar>
        </Upload>
        <div>
          <div className={styles.title}>用户名</div>
          <div className={styles.info}>开发部门</div>
        </div>
      </div>
    </>
  );
}
