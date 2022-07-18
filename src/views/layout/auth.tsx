import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "components/navbar/index";
import Footer from "components/footer/index";
import styles from "./styles/auth.module.less";
import logo from "assets/logo.svg";

export function Auth() {
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
