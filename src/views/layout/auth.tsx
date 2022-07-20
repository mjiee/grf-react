import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "service/store";
import NavBar from "components/navbar/index";
import Footer from "components/footer/index";
import styles from "./styles/auth.module.less";
import logo from "assets/logo.svg";

export function Auth() {
  const navigate = useNavigate();
  const isLogin = useSelector<RootState, boolean>(
    (state) => state.user.isLogin,
  );

  useEffect(() => {
    if (isLogin) navigate("/dashboard/workspace");
  }, [isLogin]);

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <NavBar />
      </div>
      <div className={styles.content}>
        <Outlet />
        <Footer />
      </div>
      <div className={styles.banner}>
        <img className={styles["banner-image"]} src={logo} alt="logo" />
      </div>
    </div>
  );
}
