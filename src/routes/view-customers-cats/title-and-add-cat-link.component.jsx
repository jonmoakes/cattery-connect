import useHamburgerHandlerNavigate from "../../hooks/use-hamburger-handler-navigate";

import { MinimalButton } from "../../styles/button/button.styles";
import { ParentDiv } from "../../styles/div/div.styles";

import { addCatRoute } from "../../strings/routes";

const TitleAndAddCatLink = ({ customerName, customerDocumentId, cats }) => {
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  //hamburger navigate expects an object even though this is just a simple string.
  const dataToBePassed = { ...{ customerDocumentId } };

  return (
    <ParentDiv>
      {customerName ? <h1>{customerName}'s cats</h1> : <h1>no cats found</h1>}

      {customerDocumentId && cats.length ? (
        <MinimalButton
          className="margin-bottom"
          onClick={() => hamburgerHandlerNavigate(addCatRoute, dataToBePassed)}
        >
          add another cat
        </MinimalButton>
      ) : null}
    </ParentDiv>
  );
};

export default TitleAndAddCatLink;
