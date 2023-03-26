import React from "react";
import PostCard from "../ui/PostCard";

import styles from "./home.module.scss";

const Home = () => {
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

export default Home;
