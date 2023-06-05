"use client";

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
  const [isActive, setIsActive] = useState("homeBtn");

  const menuClickHandler = (e: React.MouseEvent<HTMLUListElement>) => {
    const { ariaLabel } = e.target as HTMLButtonElement;
    if (ariaLabel !== null) setIsActive(ariaLabel);
  };

  return (
    <div className={styles.background}>
      <ul className={styles.wrap} onClick={menuClickHandler}>
        <li className={cx("homeBtn", isActive === "homeBtn" ? "active" : "")}>
          <Link href="/" aria-label="homeBtn">
            <HomeBtn />
          </Link>
        </li>
        <li
          className={cx("myPageBtn", isActive === "myPageBtn" ? "active" : "")}
        >
          <Link href="/myPage" aria-label="myPageBtn">
            <MyPageBtn />
          </Link>
        </li>
        <li className={cx("imageBtn", isActive === "imageBtn" ? "active" : "")}>
          <Link href="/addPost" aria-label="imageBtn">
            <ImageBtn />
          </Link>
        </li>
        <li className={cx("sumBtn", isActive === "sumBtn" ? "active" : "")}>
          <Link href="/statistics" aria-label="sumBtn">
            <SumBtn />
          </Link>
        </li>
        <li
          className={cx(
            "settingBtn",
            isActive === "settingBtn" ? "active" : ""
          )}
        >
          <Link href="/setting" aria-label="settingBtn">
            <SettingBtn />
          </Link>
        </li>
        <li className={styles.circle} />
      </ul>
    </div>
  );
};

export default Menu;
