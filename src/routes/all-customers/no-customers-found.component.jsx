import Balancer from "react-wrap-balancer";

import { ParentDiv } from "../../styles/div/div.styles";

const NoCustomersFound = ({ data }) => {
  return (
    <>
      {!data.length ? (
        <ParentDiv>
          <h2>no customers found.</h2>
          <p>
            <Balancer>no customers have been created yet.</Balancer>
          </p>
        </ParentDiv>
      ) : null}
    </>
  );
};

export default NoCustomersFound;
