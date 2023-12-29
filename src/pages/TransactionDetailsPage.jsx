import { useParams } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import TransactionDetailsContainer from "../components/TransactionDetailsContainer";

function TransactionDetailsPage() {
  const { txnHash } = useParams();

  return (
    <section>
      <PageTitle title="Transaction Details" value={txnHash.slice(0, 12)} />
      <TransactionDetailsContainer txnHash={txnHash} />
    </section>
  );
}

export default TransactionDetailsPage;
