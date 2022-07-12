import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Menu } from "@arco-design/web-react";
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
                      <Menu.Item key={value.name}>{value.name}</Menu.Item>
                    </Link>
                  </div>
                );
              })}
            </Menu.ItemGroup>
          );
        } else {
          return (
            <Link to={child.path} key={child.name}>
              <Menu.Item key={child.name}>{child.name}</Menu.Item>
            </Link>
          );
        }
      })}
    </Menu>
  );
}
