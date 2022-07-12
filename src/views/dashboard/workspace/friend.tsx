import React from "react";
import { Avatar, Divider } from "@arco-design/web-react";
import { UserInfo } from "service/states/userSlice";
import styles from "./styles/friend.module.less";

const friends: UserInfo[] = [
  { name: "小王", avatar: "#7BC616", describe: "灵活的胖子" },
  { name: "张三", avatar: "#14C9C9", describe: "快活的瘦子" },
  { name: "李四", avatar: "#168CF", describe: "XX" },
  { name: "王五", avatar: "#FF7D00", describe: "yy" },
  { name: "小二", avatar: "#FFC72E", describe: "yy" },
];

export default function Friend() {
  return (
    <>
      {friends.map((value) => {
        return (
          <div key={value.name}>
            <div className={styles.friend}>
              <span className={styles["friend-icon"]}>
                <Avatar
                  size={60}
                  style={{ backgroundColor: `${value.avatar}` }}
                >
                  {value.name}
                </Avatar>
              </span>

              <div className={styles["friend-content"]}>
                <div className={styles.subtitle}>{value.name}</div>
                <div>{value.describe}</div>
              </div>
            </div>
            <Divider className={styles["friend-divider"]} />
          </div>
        );
      })}
    </>
  );
}
