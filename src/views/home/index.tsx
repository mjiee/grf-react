import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { RootState } from "service/store";

export function Home() {
  const isLogin = useSelector<RootState, boolean>(
    (state) => state.user.isLogin,
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      navigate("/auth/signin");
    }
  }, [isLogin]);

  return (
    <div>
      <p>home</p>
    </div>
  );
}
