"use client";

import { useState, useCallback } from "react";
import classnames from "classnames/bind";

import styles from "./periodStatistics.module.scss";
import TimeTable from "../../components/ui/TimeTable";

const cx = classnames.bind(styles);

const PeriodStatistics = () => {
  const [clickTab, setClickTab] = useState("daily");

  const clickTabHandler = useCallback(
    (e: React.MouseEvent<HTMLUListElement>) => {
      const { name } = e.target as HTMLButtonElement;
      setClickTab(name);
    },
    [clickTab]
  );

  return (
    <div className={styles.wrap}>
      <ul className={styles.tabWrap} onClick={clickTabHandler}>
        <li className={cx("daily", clickTab === "daily" ? "active" : "")}>
          <button type="button" name="daily">
            일별
          </button>
        </li>
        <li className={cx("monthly", clickTab === "monthly" ? "active" : "")}>
          <button type="button" name="monthly">
            월별
          </button>
        </li>
        <li className={styles.tabBar} />
      </ul>
      <div className={styles.timeTableWrap}>
        <TimeTable />
        <TimeTable />
        <TimeTable />
      </div>
    </div>
  );
};

export default PeriodStatistics;
