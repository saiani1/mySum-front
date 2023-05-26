import React from "react";

import styles from "./addPost.module.scss";
import { ImageBtn } from "../../public/assets/svg";
import SelectBox from "../ui/SelectBox";

const AddPost = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.titWrap}>
        <h2>새 게시물</h2>
      </div>
      <button type="button" className={styles.imageWrap}>
        <ImageBtn />
        <span>클릭하면 사진을 업로드할 수 있습니다.</span>
      </button>
      <input type="text" placeholder="내용입력" />
      <div className={styles.categoryWrap}>
        <SelectBox />
        <button type="button" className={styles.addCategoryBtn}>
          카테고리 추가
        </button>
      </div>
      <button type="button" className={styles.submitBtn}>
        게시물 등록
      </button>
    </div>
  );
};

export default AddPost;
