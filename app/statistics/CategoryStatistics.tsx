"use client";

import styles from "./categoryStatistics.module.scss";
import SelectBox from "../../components/ui/SelectBox";
import StatisticsItem from "../../components/ui/StatisticsItem";

const CategoryStatistics = () => {
  return (
    <>
      <div className={styles.categoryWrap}>
        <div className={styles.selectedCategory}>오운완</div>
        <SelectBox />
      </div>
      <StatisticsItem />
      <StatisticsItem />
      <StatisticsItem />
    </>
  );
};

export default CategoryStatistics;
