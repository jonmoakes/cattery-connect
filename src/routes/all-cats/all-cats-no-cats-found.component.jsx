import Balancer from "react-wrap-balancer";

import useHamburgerHandlerNavigate from "../../hooks/use-hamburger-handler-navigate";

import { ParentDiv } from "../../styles/div/div.styles";
import { MinimalButton } from "../../styles/button/button.styles";

import { addCatRoute } from "../../strings/routes";

// need to pass a doc id here when tapping add cat
const AllCatsNoCatsFound = ({ data }) => {
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  return (
    <>
      {!data.length ? (
        <ParentDiv>
          <h2>no cats found.</h2>
          <p>
            <Balancer>no cats have been created yet.</Balancer>
          </p>

          <MinimalButton
            className="margin-bottom"
            onClick={() => hamburgerHandlerNavigate(addCatRoute)}
          >
            add a cat
          </MinimalButton>
        </ParentDiv>
      ) : null}
    </>
  );
};

export default AllCatsNoCatsFound;
