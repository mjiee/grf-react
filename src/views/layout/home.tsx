import React, { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "service/store";
import NavBar from "components/navbar/index";
import SideBar from "components/sidebar/index";
import Footer from "components/footer/index";
import styles from "./styles/home.module.less";

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
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles["navbar-wrapper"]}>
          <NavBar />
        </div>
      </div>
      <div>
        <SideBar />
      </div>
      <div className={styles.content}>
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
