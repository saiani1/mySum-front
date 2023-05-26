import styles from "./categoryStatistics.module.scss";
import SelectBox from "../ui/SelectBox";
import StatisticsItem from "../ui/StatisticsItem";

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
