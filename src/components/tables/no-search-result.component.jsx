import Balancer from "react-wrap-balancer";

import { NoSearchResultDiv } from "../../styles/div/div.styles";

import { ClearButtonExampleSpan } from "../../styles/span/span.styles";

const NoSearchResult = () => (
  <NoSearchResultDiv>
    <h2>no result found....</h2>
    <p>
      <Balancer>
        please refine your search query or tap the
        <br />
        <br />
        <ClearButtonExampleSpan>X</ClearButtonExampleSpan>
        <br />
        <br />
        in the search bar to clear it.
      </Balancer>
    </p>
  </NoSearchResultDiv>
);

export default NoSearchResult;
