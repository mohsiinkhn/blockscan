/* eslint-disable react/prop-types */
import styles from "./PageTitle.module.css";

function PageTitle({ title, value }) {
  return (
    <div className={styles.title}>
      <span>{title} </span>
      <span className={styles.value}>#{value}</span>
    </div>
  );
}

export default PageTitle;
