import React from "react";
import PostCard from "../ui/PostCard";

import styles from "./myPage.module.scss";
import { MenuBtn, MyPageBtn } from "../../public/assets/svg";

const MyPage = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.profileWrap}>
        <div className={styles.titWrap}>
          <span className={styles.id}>mysum</span>
          <button type="button" aria-label="menu">
            <MenuBtn />
          </button>
        </div>
        <div className={styles.profileMiddleWrap}>
          <div className={styles.profileImageWrap}>
            <div className={styles.profileImage}>
              <MyPageBtn />
              <button type="button" aria-label="insert-image" />
            </div>
          </div>
          <ul className={styles.statusWrap}>
            <li>
              <button type="button">1</button>
              <span>게시물</span>
            </li>
            <li>
              <button type="button">10</button>
              <span>팔로워</span>
            </li>
            <li>
              <button type="button">2</button>
              <span>팔로잉</span>
            </li>
          </ul>
        </div>
        <span className={styles.nickname}>릿</span>
      </div>
      <ul className={styles.postCardWrap}>
        <PostCard />
      </ul>
    </div>
  );
};

export default MyPage;
