"use client";

import styles from "./setting.module.scss";
import {
  MyPageBtn,
  ArrowBtn,
  AlertBtn,
  SettingBtn,
} from "../../public/assets/svg/index";

const Setting = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.titWrap}>
        <h2>설정</h2>
      </div>
      <ul className={styles.menuWrap}>
        <li>
          <button type="button">
            <div className={styles.left}>
              <MyPageBtn className={styles.icon} />
              <span>계정</span>
            </div>
            <ArrowBtn className={styles.arrow} />
          </button>
        </li>
        <li>
          <button type="button">
            <div className={styles.left}>
              <AlertBtn className={styles.icon} />
              <span>알림</span>
            </div>
            <ArrowBtn className={styles.arrow} />
          </button>
        </li>
        <li>
          <button type="button">
            <div className={styles.left}>
              <SettingBtn className={styles.icon} />
              <span>앱 설정</span>
            </div>
            <ArrowBtn className={styles.arrow} />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Setting;
