import styles from "./timeTable.module.scss";

const TimeTable = () => {
  return (
    <table className={styles.timeTable}>
      <caption>
        3월 24일 <span>(금)</span>
      </caption>
      <colgroup>
        <col width="12%" />
        <col width="88%" />
      </colgroup>
      <tr>
        <th className={styles.time}>08</th>
        <td className={styles.acting}>아침식사</td>
      </tr>
      <tr>
        <th className={styles.time}>09</th>
        <td className={styles.acting}>모자딥 읽기</td>
      </tr>
      <tr>
        <th className={styles.time}>10</th>
        <td className={styles.acting}>모자딥 읽기</td>
      </tr>
      <tr>
        <th className={styles.time}>11</th>
        <td className={styles.acting}>코딩테스트 풀기</td>
      </tr>
      <tr>
        <th className={styles.time}>12</th>
        <td className={styles.acting}>코딩테스트 풀기</td>
      </tr>
      <tr>
        <th className={styles.time}>13</th>
        <td className={styles.acting}>점심식사</td>
      </tr>
      <tr>
        <th className={styles.time}>14</th>
        <td className={styles.acting}>개인 프로젝트</td>
      </tr>
      <tr>
        <th className={styles.time}>15</th>
        <td className={styles.acting}>개인 프로젝트</td>
      </tr>
      <tr>
        <th className={styles.time}>16</th>
        <td className={styles.acting}>개인 프로젝트</td>
      </tr>
      <tr>
        <th className={styles.time}>17</th>
        <td className={styles.acting}>개인 프로젝트</td>
      </tr>
      <tr>
        <th className={styles.time}>18</th>
        <td className={styles.acting}>저녁식사</td>
      </tr>
      <tr>
        <th className={styles.time}>19</th>
        <td className={styles.acting}>{""}</td>
      </tr>
      <tr>
        <th className={styles.time}>20</th>
        <td className={styles.acting}>오운완</td>
      </tr>
      <tr>
        <th className={styles.time}>21</th>
        <td className={styles.acting}>오운완</td>
      </tr>
      <tr>
        <th className={styles.time}>22</th>
        <td className={styles.acting}>{""}</td>
      </tr>
      <tr>
        <th className={styles.time}>23</th>
        <td className={styles.acting}>{""}</td>
      </tr>
    </table>
  );
};

export default TimeTable;
