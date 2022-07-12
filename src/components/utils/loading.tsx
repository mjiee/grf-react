import React, { lazy, Suspense } from "react";
import { Spin } from "@arco-design/web-react";
import styles from "./styles/lazyload.module.less";

export default function Loading() {
  return (
    <div className={styles.spin}>
      <Spin />
    </div>
  );
}

export function lazyload(path: string) {
  const Element = lazy(() => import(path));
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Element />
      </Suspense>
    </>
  );
}
