import CustomBalancedText from "../custom-balanced-text/custom-balanced-text.component";
import CustomSpan from "../custom-span/custom-span.component";

import { NoSearchResultDiv } from "../../styles/div/div.styles";

const NoSearchResult = () => (
  <NoSearchResultDiv>
    <CustomBalancedText type="h2">no result found....</CustomBalancedText>
    <CustomBalancedText>
      please refine your search query or tap the
      <br />
      <br />
      <CustomSpan type="clearButtonExample">X</CustomSpan>
      <br />
      <br />
      in the search bar to clear it.
    </CustomBalancedText>
  </NoSearchResultDiv>
);

export default NoSearchResult;
