import React, { useState, useRef, useCallback } from "react";

import styles from "./selectBox.module.scss";
import { ArrowBtn } from "../../public/assets/svg";
import useOnClickOutside from "../../hooks/useOnClickOutside";

const SelectBox = () => {
  const selectRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [selectOption, setSelectOption] = useState("카테고리 선택");
  useOnClickOutside(selectRef, () => setIsActive(false));

  const selectBtnClickHandler = useCallback(() => {
    setIsActive((prev) => !prev);
  }, [isActive]);

  const optionClickHandler = useCallback((e: any) => {
    setSelectOption(e.target.name);
    setIsActive(false);
  }, []);

  return (
    <div className={styles.wrap} ref={selectRef}>
      <button
        type="button"
        className={styles.categorySelectBox}
        onClick={selectBtnClickHandler}
      >
        <span>{selectOption}</span>
        <ArrowBtn />
      </button>
      {isActive && (
        <ul className={styles.category} onClick={optionClickHandler}>
          <li>
            <button type="button" name="오운완">
              오운완
            </button>
          </li>
          <li>
            <button type="button" name="아침식사">
              아침식사
            </button>
          </li>
          <li>
            <button type="button" name="점심식사">
              점심식사
            </button>
          </li>
          <li>
            <button type="button" name="코딩테스트 풀기">
              코딩테스트 풀기
            </button>
          </li>
          <li>
            <button type="button" name="개인프로젝트">
              개인프로젝트
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default SelectBox;
