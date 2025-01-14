import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import {
  SkeletonContainer,
  SkeletonDiv,
  SkeletonWrapper,
} from "../../styles/div/div.styles";
import { LoadingText } from "../../styles/p/p.styles";

const SkeletonBox = ({ loadingText }) => (
  <SkeletonDiv>
    <SkeletonTheme
      baseColor="#FCD19C"
      highlightColor="#317773"
      borderRadius="50px"
      duration={1.5}
    >
      <SkeletonContainer>
        <SkeletonWrapper>
          <Skeleton count={3} height={30} containerClassName="flex-1" />
        </SkeletonWrapper>
        <LoadingText>{loadingText}</LoadingText>
      </SkeletonContainer>
    </SkeletonTheme>
  </SkeletonDiv>
);

export default SkeletonBox;
