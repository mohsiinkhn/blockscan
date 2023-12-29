import { useParams } from "react-router-dom";
import AddOverviewContainer from "../components/AddOverviewContainer";
// import AddDetailsContainer from "../components/AddDetailsContainer";
import PageTitle from "../components/PageTitle";

function AddressDetailsPage() {
  const { address } = useParams();

  return (
    <section>
      <PageTitle title="Address" value={address} />
      <AddOverviewContainer />
      {/* <h3>Transactions:</h3>
      <AddDetailsContainer /> */}
    </section>
  );
}

export default AddressDetailsPage;
