/* eslint-disable react/prop-types */
import styles from "./OverviewElement.module.css";

function OverviewElement({ imgSrc, title, value }) {
  return (
    <div className={styles.element}>
      <img src={imgSrc} alt="icon" />
      <div className={styles.box}>
        <span className={styles.title}>{title}</span>
        <span className={styles.value}>{value}</span>
      </div>
    </div>
  );
}

export default OverviewElement;
