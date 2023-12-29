/* eslint-disable react/prop-types */
import styles from "./AddOverviewCard.module.css";

function AddOverviewCard({ title, value }) {
  return (
    <div className={styles.card}>
      <span>{title}</span>
      <span className={styles.value}>{value}</span>
    </div>
  );
}

export default AddOverviewCard;
