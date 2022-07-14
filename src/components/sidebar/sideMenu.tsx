import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Menu } from "@arco-design/web-react";
import {
  IconDesktop,
  IconDashboard,
  IconUser,
  IconSafe,
  IconTag,
  IconExclamationCircle,
} from "@arco-design/web-react/icon";
import { RootState } from "service/index";
import { getSideBarList } from "utils/getSideBarList";
import { appRoutes } from "routes";
import styles from "./styles/menu.module.less";

export function SideMenu() {
  const userRole = useSelector<RootState, number>(
    (state) => state.user.userInfo.role,
  );

  const ListMenu = useMemo(() => {
    return <BuildMenu userRole={userRole} />;
  }, [userRole]);

  return <>{ListMenu}</>;
}

function BuildMenu(props: { userRole: number }) {
  const menuList = getSideBarList(props.userRole, appRoutes);

  return (
    <Menu autoOpen className={styles.menu}>
      {menuList.map((child) => {
        if (child.children) {
          return (
            <Menu.ItemGroup key={child.name} title={<div>{child.name}</div>}>
              {child.children.map((value) => {
                return (
                  <div key={value.name}>
                    <Link to={value.path} key={value.name}>
                      <Menu.Item key={value.name}>
                        {getIconFromName(value.name)}
                        {value.name}
                      </Menu.Item>
                    </Link>
                  </div>
                );
              })}
            </Menu.ItemGroup>
          );
        } else {
          return (
            <Link to={child.path} key={child.name}>
              <Menu.Item key={child.name}>
                {getIconFromName(child.name)}
                {child.name}
              </Menu.Item>
            </Link>
          );
        }
      })}
    </Menu>
  );
}

function getIconFromName(name: string) {
  switch (name) {
    case "工作台":
      return <IconDesktop />;
    case "数据监控":
      return <IconDashboard />;
    case "用户":
      return <IconUser />;
    case "管理员":
      return <IconSafe />;
    case "产品":
      return <IconTag />;
    default:
      return <IconExclamationCircle />;
  }
}
