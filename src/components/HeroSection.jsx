import styles from "./HeroSection.module.css";
import Logo from "./Logo";
import SearchQuery from "./SearchQuery";

function HeroSection() {
  return (
    <div className={styles.hero}>
      <Logo />
      <SearchQuery />
    </div>
  );
}

export default HeroSection;
