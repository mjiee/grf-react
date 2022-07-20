import React from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@arco-design/web-react";
import { IconMinusCircle, IconBug } from "@arco-design/web-react/icon";
import styles from "./styles/index.module.less";

export function ErrorPage() {
  const params = useParams();

  return (
    <div className={styles.container}>
      {(params.code as string) == "403" ? <AuthError /> : <ServerError />}
      <Link to="/">
        <Button type="primary" className={styles.btn}>
          返回
        </Button>
      </Link>
    </div>
  );
}

function AuthError() {
  return (
    <>
      <IconMinusCircle className={styles.icon} />
      <div className={styles.text}>权限不足</div>
    </>
  );
}

function ServerError() {
  return (
    <>
      <IconBug className={styles.icon} />
      <div className={styles.text}>服务端异常</div>
    </>
  );
}
