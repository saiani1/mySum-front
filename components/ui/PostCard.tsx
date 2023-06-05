"use client";

import React from "react";
import classnames from "classnames/bind";

import { GoodBtn, CommentBtn, EtcBtn } from "../../public/assets/svg";
import styles from "./postCard.module.scss";

const cx = classnames.bind(styles);

const PostCard = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.img} />
      <div className={styles.middleWrap}>
        <span className={styles.category}>오운완</span>
        <ul className={styles.iconWrap}>
          <li>
            <button type="button" aria-label="good-btn">
              <GoodBtn />
            </button>
          </li>
          <li>
            <button type="button" aria-label="comment-btn">
              <CommentBtn />
            </button>
          </li>
          <li>
            <button
              type="button"
              aria-label="etc-btn"
              className={styles.etcBtn}
            >
              <EtcBtn />
            </button>
          </li>
        </ul>
      </div>
      <div className={styles.idWrap}>
        <button type="button">mysum</button>
        <span>좋아요 1,000개</span>
      </div>
      <div className={styles.contentWrap}>
        <p className={styles.contents}>오늘은 5km를 뛰었다.</p>
        <button type="button">더 보기</button>
      </div>
      <button type="button" className={styles.comment}>
        댓글 20개 모두 보기
      </button>
      <span className={styles.time}>2분 전</span>
    </div>
  );
};

export default PostCard;
