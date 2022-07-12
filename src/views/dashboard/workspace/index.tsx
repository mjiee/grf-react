import React, { lazy, Suspense } from "react";
import Header from "./header";
import Loading from "components/utils/loading";
import styles from "./styles/index.module.less";
const Project = lazy(() => import("./project"));
const LastestNew = lazy(() => import("./latestNew"));
const Friend = lazy(() => import("./friend"));
const Message = lazy(() => import("./message"));

export function Workspace() {
  const components: { title: string; element: any }[] = [
    { title: "Project", element: <Project key="project" /> },
    { title: "News", element: <LastestNew key="new" /> },
    { title: "Friends", element: <Friend key="friend" /> },
    { title: "Messages", element: <Message key="message" /> },
  ];

  return (
    <>
      <Header />
      <div className={styles.content}>
        {components.map((value) => {
          return (
            <div key={value.title} className={styles["content-box"]}>
              <div className={styles.title}>{value.title}</div>
              <Suspense fallback={<Loading />}>{value.element}</Suspense>
            </div>
          );
        })}
      </div>
    </>
  );
}
