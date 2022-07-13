import React from "react";
import { Avatar, Typography } from "@arco-design/web-react";
import { UserInfo } from "service/states/userSlice";
import styles from "./styles/project.module.less";

interface ProjectData {
  title: string;
  describe: string;
  userList?: UserInfo[];
}

const users: UserInfo[] = [
  { name: "A", avatar: "#7BC616" },
  { name: "B", avatar: "#14C9C9" },
  { name: "C", avatar: "#168CSS" },
  { name: "D", avatar: "#FF7D00" },
  { name: "E", avatar: "#FFC72E" },
];

const data: ProjectData[] = [
  {
    title: "登月项目",
    describe: "登月项目很有前途, 超级有前途, 前途不可限量, 赶紧加入不要忧郁",
    userList: users,
  },
  {
    title: "2元店项目",
    describe: "2元店项目有的搞",
    userList: users,
  },
  {
    title: "搞钱项目",
    describe: "搞钱项目很有前途, 超级有前途, 前途不可限量, 赶紧加入不要忧郁",
    userList: users,
  },
];

export default function Project() {
  return (
    <>
      <div className={styles.project}>
        {data.map((value) => {
          return (
            <div key={value.title} className={styles["project-box"]}>
              <div className={styles.subtitle}>{value.title}</div>
              <Typography.Paragraph
                className={styles.text}
                ellipsis={{ rows: 1, expandable: true }}
              >
                {value.describe}
              </Typography.Paragraph>
              <Avatar.Group size={32} style={{ marginRight: "5px" }}>
                {value.userList?.map((user) => {
                  return (
                    <Avatar
                      key={user.name}
                      style={{ backgroundColor: `${user.avatar}` }}
                    >
                      {user.name}
                    </Avatar>
                  );
                })}
              </Avatar.Group>
              <span style={{ color: "var(--color-neutral-6)" }}>等23人</span>
            </div>
          );
        })}
      </div>
    </>
  );
}
