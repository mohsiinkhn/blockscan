/* eslint-disable react/prop-types */
import styles from "./DetailsRow.module.css";

function DetailsRow({ title, value }) {
  return (
    <div className={styles.row}>
      <span className={styles.title}>{title}:</span>
      <span>{value}</span>
    </div>
  );
}

export default DetailsRow;
