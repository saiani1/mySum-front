"use client";

import styles from "./statisticsItem.module.scss";

const StatisticsItem = () => {
  return (
    <div className={styles.statisticsItemWrap}>
      <h2>오늘</h2>
      <div className={styles.statusWrap}>
        <span className={styles.accumulateStatus}>
          <strong className={styles.time}>2시간</strong> 완료
        </span>
        <span className={styles.compareStatus}>
          <span className={styles.arrow}>▲</span>1시간
        </span>
      </div>
    </div>
  );
};

export default StatisticsItem;
