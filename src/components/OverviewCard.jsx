import { Utils } from "alchemy-sdk";
import { useRecentData } from "../contexts/RecentDataContext";
import styles from "./OverviewCard.module.css";
import OverviewElement from "./OverviewElement";

function OverviewCard() {
  const { gasPrice, recentBlockNumber } = useRecentData();

  const gasPriceInGwei = gasPrice ? Utils.formatUnits(gasPrice, "gwei") : "..";

  return (
    <div className={styles.card}>
      <div className={styles.flexbox}>
        <OverviewElement
          imgSrc={"gasIcon.svg"}
          title="Gas Price"
          value={`${gasPriceInGwei.slice(0, 5)} Gwei`}
        />
        <hr />
        <OverviewElement
          imgSrc={"block.svg"}
          title="Latest Block"
          value={recentBlockNumber}
        />
      </div>
    </div>
  );
}

export default OverviewCard;
