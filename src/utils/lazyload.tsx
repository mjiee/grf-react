import React from "react";
import loadable from "@loadable/component";
import { Spin } from "@arco-design/web-react";
import styles from "./styles/lazyload.module.less";

function load(fn: any) {
  const Component = fn();

  return Component as any;
}

function LoadingComponent(props: {
  error: boolean;
  timedOut: boolean;
  pastDelay: boolean;
}) {
  if (props.error) {
    console.error(props.error);
    return null;
  }
  return (
    <div className={styles.spin}>
      <Spin />
    </div>
  );
}

export default (loader: any) => load(loader);
