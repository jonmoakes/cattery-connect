import Balancer from "react-wrap-balancer";

import useGetAllCatsTableVariables from "./all-cats-hooks/use-all-cats-table-variables";

import { ParentDiv } from "../../styles/div/div.styles";

import { StyledLink } from "../../styles/link/link.styles";

import { addCustomerRoute } from "../../strings/routes";

// need to pass a doc id here when tapping add cat
const AllCatsNoCatsFound = ({ data }) => {
  const { atLeastOneCustomerExists } = useGetAllCatsTableVariables();

  return (
    <>
      {!atLeastOneCustomerExists ? (
        <ParentDiv>
          <p>
            <Balancer>no customers have been added yet.</Balancer>
          </p>
          <p>
            <Balancer>
              please{" "}
              <StyledLink to={addCustomerRoute}>add a customer</StyledLink>{" "}
              first.
            </Balancer>
          </p>
          <p>
            <Balancer>you will then be able to create a cat.</Balancer>
          </p>
        </ParentDiv>
      ) : atLeastOneCustomerExists && !data.length ? (
        <ParentDiv>
          <h2>no cats found.</h2>
          <p>
            <Balancer>no cats have been created yet.</Balancer>
          </p>
          <p>
            <Balancer>
              tap the 'add a cat' button above to create a cat.
            </Balancer>
          </p>
        </ParentDiv>
      ) : null}
    </>
  );
};

export default AllCatsNoCatsFound;
