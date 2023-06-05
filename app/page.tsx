"use client";

import React from "react";
import PostCard from "../components/ui/PostCard";

import styles from "./home.module.scss";

const Page = () => {
  return (
    <div className={styles.wrap}>
      <h1>
        <img src="/assets/images/png/logo-icon.png" alt="logo" />
      </h1>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
};

export default Page;
