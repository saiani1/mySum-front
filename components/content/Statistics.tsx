import { useState, useCallback } from "react";
import classnames from "classnames/bind";

import styles from "./statistics.module.scss";
import CategoryStatistics from "./CategoryStatistics";
import PeriodStatistics from "./PeriodStatistics";

const cx = classnames.bind(styles);

const Statistics = () => {
  const [clickMenu, setClickMenu] = useState("category");

  const menuClickHandler = useCallback(
    (e: React.MouseEvent<HTMLUListElement>) => {
      const { name } = e.target as HTMLButtonElement;
      setClickMenu(name);
    },
    [clickMenu]
  );

  return (
    <div className={styles.wrap}>
      <h1>
        <img src="/assets/images/png/logo-icon.png" alt="logo" />
      </h1>
      <ul className={styles.submenuWrap} onClick={menuClickHandler}>
        <li
          className={cx("category", clickMenu === "category" ? "active" : "")}
        >
          <button type="button" name="category">
            카테고리별 조회
          </button>
        </li>
        <li className={cx("period", clickMenu === "period" ? "active" : "")}>
          <button type="button" name="period">
            기간별 조회
          </button>
        </li>
        <li className={styles.submenuBar} />
      </ul>
      {clickMenu === "category" ? <CategoryStatistics /> : <PeriodStatistics />}
    </div>
  );
};

export default Statistics;
