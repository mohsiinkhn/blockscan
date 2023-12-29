import { Utils } from "alchemy-sdk";
import { useRecentData } from "../contexts/RecentDataContext";
import styles from "./NavBar.module.css";
import NavElement from "./NavElement";

function NavBar() {
  return (
    <div className={styles.nav}>
      <NavBox />
    </div>
  );
}

function NavBox() {
  const { gasPrice } = useRecentData();

  const gasPriceInGwei = gasPrice ? Utils.formatUnits(gasPrice, "gwei") : "..";

  return (
    <div className={styles.navBox}>
      <NavElement
        imgSrc={"gasIcon.svg"}
        title="Gas Price"
        value={`${gasPriceInGwei.slice(0, 5)} Gwei`}
      />
    </div>
  );
}

export default NavBar;
