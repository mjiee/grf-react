import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Navbar } from "components/navbar/index";
import { Footer } from "components/footer/index";
import styles from "./styles/index.module.less";
import logo from "assets/logo.svg";

export function Auth() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/auth/signin");
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.content}>
        <Outlet />
        <div>
          <Footer />
        </div>
      </div>
      <div className={styles.banner}>
        <img className={styles["banner-image"]} src={logo} alt="logo" />
      </div>
    </div>
  );
}
