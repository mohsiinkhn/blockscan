import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      BlockScan &copy; {new Date().getFullYear()}
    </div>
  );
}

export default Footer;
