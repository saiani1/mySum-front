import React, { useState } from "react";
import Link from "next/link";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

import styles from "./menu.module.scss";
import {
  HomeBtn,
  MyPageBtn,
  ImageBtn,
  SumBtn,
  SettingBtn,
} from "../../public/assets/svg/index";

const Menu = () => {
  const [isActive, setIsActive] = useState("imageBtn");

  const menuClickHandler = (e: any) => {
    setIsActive(e.target.ariaLabel);
  };

  return (
    <ul className={styles.wrap} onClick={menuClickHandler}>
      <li className={cx("homeBtn", isActive === "homeBtn" ? "active" : "")}>
        <Link href="/" aria-label="homeBtn">
          <HomeBtn />
        </Link>
      </li>
      <li className={cx("myPageBtn", isActive === "myPageBtn" ? "active" : "")}>
        <Link href="/" aria-label="myPageBtn">
          <MyPageBtn />
        </Link>
      </li>
      <li className={cx("imageBtn", isActive === "imageBtn" ? "active" : "")}>
        <Link href="/" aria-label="imageBtn">
          <ImageBtn />
        </Link>
      </li>
      <li className={cx("sumBtn", isActive === "sumBtn" ? "active" : "")}>
        <Link href="/" aria-label="sumBtn">
          <SumBtn />
        </Link>
      </li>
      <li
        className={cx("settingBtn", isActive === "settingBtn" ? "active" : "")}
      >
        <Link href="/" aria-label="settingBtn">
          <SettingBtn />
        </Link>
      </li>
      <li className={styles.circle} />
    </ul>
  );
};

export default Menu;
