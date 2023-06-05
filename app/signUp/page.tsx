"use client";

import React from "react";

import styles from "./signUp.module.scss";

const signUp = () => {
  return (
    <form className={styles.wrap}>
      <h1>
        <img src="/assets/images/png/logo-icon.png" alt="logo" />
      </h1>
      <div className={styles.inputWrap}>
        <input type="email" placeholder="이메일" />
        <button type="button">중복확인</button>
      </div>
      <input type="password" placeholder="비밀번호" />
      <input type="password" placeholder="비밀번호 확인" />
      <div className={styles.inputWrap}>
        <input type="text" placeholder="닉네임" />
        <button type="button">중복확인</button>
      </div>
      <input type="text" placeholder="연령대" />
      <button type="submit" className={styles.submitBtn}>
        회원가입
      </button>
    </form>
  );
};

export default signUp;
