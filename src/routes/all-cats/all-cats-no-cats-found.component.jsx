import useGetAllCatsTableVariables from "./all-cats-hooks/use-all-cats-table-variables";

import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

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
          <CustomBalancedText>
            no customers have been added yet.
          </CustomBalancedText>
          <CustomBalancedText>
            please <StyledLink to={addCustomerRoute}>add a customer</StyledLink>{" "}
            first.
          </CustomBalancedText>
          <CustomBalancedText>
            you will then be able to create a cat.
          </CustomBalancedText>
        </ParentDiv>
      ) : atLeastOneCustomerExists && !data.length ? (
        <ParentDiv>
          <h2>no cats found.</h2>
          <CustomBalancedText>
            no cats have been created yet.
          </CustomBalancedText>
          <CustomBalancedText>
            tap the 'add a cat' button above to create a cat.
          </CustomBalancedText>
        </ParentDiv>
      ) : null}
    </>
  );
};

export default AllCatsNoCatsFound;
