import { useNavigate } from "react-router-dom";

function SearchQuery() {
  const navigate = useNavigate();

  return (
    <input
      type="text"
      placeholder="Search balance of any Ethereum address"
      onChange={(e) => navigate(`address/${e.target.value}`)}
    ></input>
  );
}

export default SearchQuery;
