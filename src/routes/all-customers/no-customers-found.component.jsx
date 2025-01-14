import useNoDataFound from "../../hooks/use-no-data-found";

import { ParentDiv } from "../../styles/div/div.styles";

const NoCustomersFound = ({ data }) => {
  const { noDataFound, allUsersIsUndefined } = useNoDataFound();

  return (
    <>
      {noDataFound(data) || allUsersIsUndefined ? (
        <ParentDiv>
          <h2>no customers found.</h2>
          <p>no customers have been created yet.</p>
        </ParentDiv>
      ) : null}
    </>
  );
};

export default NoCustomersFound;
