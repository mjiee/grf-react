import React from "react";
import { Trigger } from "@arco-design/web-react";
import { IconMoon, IconSun } from "@arco-design/web-react/icon";
import IconWrapper from "components/utils/iconWrapper";
import useGlobalConf from "utils/globalContext";

export function SettingTheme(props: { position: any }) {
  const { theme, setTheme } = useGlobalConf();

  const handleClick = () => {
    if (theme) setTheme(false);
    else setTheme(true);
  };

  return (
    <div onClick={handleClick}>
      <Trigger
        position={props.position}
        trigger="hover"
        popup={() => <p>改变主题</p>}
      >
        <div>
          {theme ? (
            <IconWrapper color="grey">
              <IconSun />
            </IconWrapper>
          ) : (
            <IconWrapper color="grey">
              <IconMoon />
            </IconWrapper>
          )}
        </div>
      </Trigger>
    </div>
  );
}
