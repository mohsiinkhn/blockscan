import PageTitle from "../components/PageTitle";
import BlockDetailsContainer from "../components/BlockDetailsContainer";
import { useParams } from "react-router-dom";

function BlockDetailsPage() {
  const { blockNumber } = useParams();

  return (
    <section>
      <PageTitle title="Block" value={blockNumber} />
      <BlockDetailsContainer blockNumber={blockNumber} />
    </section>
  );
}

export default BlockDetailsPage;
