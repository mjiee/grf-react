import React from "react";
import { Trigger } from "@arco-design/web-react";
import { IconLanguage } from "@arco-design/web-react/icon";
import { useGlobalConf } from "utils/index";
import  IconWrapper  from "components/utils/iconWrapper";

export function SettingLanguage(props: { position: any }) {
  const { lang, setLang } = useGlobalConf();

  const handleClick = () => {
    if (lang == "zh-CN") setLang("en-US");
    else setLang("zh-CN");
  };

  return (
    <div onClick={handleClick}>
      <Trigger
        position={props.position}
        trigger="hover"
        popup={() => <p>切换语言</p>}
      >
        <div>
          <IconWrapper>
            <IconLanguage />
          </IconWrapper>
        </div>
      </Trigger>
    </div>
  );
}
