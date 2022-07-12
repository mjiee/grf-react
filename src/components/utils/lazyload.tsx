import React, { lazy, Suspense } from "react";
import { Spin } from "@arco-design/web-react";
import styles from "./utils/styles/lazyload.module.less";

function LoadingComponent() {
  return (
    <div className={styles.spin}>
      <Spin />
    </div>
  );
}

export default function lazyload(path: string): React.ReactNode {
  const Element = lazy(() => import(path));
  return (
    <>
      <Suspense fallback={<LoadingComponent />}>
        <Element />
      </Suspense>
    </>
  );
}
