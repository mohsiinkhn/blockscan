/* eslint-disable react/prop-types */
import styles from "./NavElement.module.css";

function NavElement({ imgSrc, title, value }) {
  return (
    <div className={styles.navElement}>
      <img className={styles.img} src={imgSrc} alt="Icon" />
      <span className={styles.title}>{title}</span>
      <span className={styles.value}>{value}</span>
    </div>
  );
}

export default NavElement;
