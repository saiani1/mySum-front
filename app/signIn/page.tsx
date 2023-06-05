"use client";

import React from "react";
import Link from "next/link";

import styles from "./loginForm.module.scss";

const LoginForm = () => {
  return (
    <form className={styles.wrap}>
      <h1>
        <img src="/assets/images/png/logo-icon.png" alt="logo" />
      </h1>
      <input type="email" placeholder="이메일" />
      <input type="password" placeholder="비밀번호" />
      <div className={styles.submitBtnWrap}>
        <button type="submit" className={styles.submitBtn}>
          로그인
        </button>
        <Link href="signUp">회원가입</Link>
      </div>
      <div className={styles.socialBtnWrap}>
        <button type="button">
          <img src="/assets/images/png/kakao-icon.png" alt="kakao" />
          <span>카카오톡 로그인</span>
        </button>
        <button type="button">
          <img src="/assets/images/png/naver-icon.png" alt="naver" />
          <span>네이버 로그인</span>
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
