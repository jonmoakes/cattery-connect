import Balancer from "react-wrap-balancer";

import useAllCatsTableVariables from "./all-cats-hooks/use-all-cats-table-variables";

import { ParentDiv } from "../../styles/div/div.styles";

const AllCatsTitle = () => {
  const { hasCatsOwnerDetails, selectedCatsName } = useAllCatsTableVariables();

  return (
    <ParentDiv>
      <h1>
        <Balancer>
          {!hasCatsOwnerDetails
            ? "all cats"
            : `${selectedCatsName}'s owner details`}
        </Balancer>
      </h1>
    </ParentDiv>
  );
};

export default AllCatsTitle;
