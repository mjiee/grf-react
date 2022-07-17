import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Trigger, Menu } from "@arco-design/web-react";
import { IconUser, IconExport } from "@arco-design/web-react/icon";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "service/store";
import { setLogin } from "service/states";
import IconWrapper from "components/utils/iconWrapper";

export function SettingUser() {
  const isLogin = useSelector<RootState, boolean>(
    (state) => state.user.isLogin,
  );
  return isLogin ? <UserSetting /> : <SettingIcon />;
}

function SettingIcon() {
  return (
    <IconWrapper color="grey">
      <IconUser />
    </IconWrapper>
  );
}

function UserSetting() {
  return (
    <Trigger popup={() => <Signout />} trigger={["click", "hover"]}>
      <div>
        <SettingIcon />
      </div>
    </Trigger>
  );
}

function Signout() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = () => {
    dispatch(setLogin(false));
    navigate("/auth/signin");
  };

  return (
    <Menu>
      <Menu.Item key="1" onClick={handleClick}>
        <IconExport />
        退出
      </Menu.Item>
    </Menu>
  );
}
