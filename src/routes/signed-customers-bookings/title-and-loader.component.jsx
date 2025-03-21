import useGetSignedInCustomersBookingsSelectors from "../../hooks/selectors/use-get-signed-in-customers-bookings-selectors";

import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";
import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

import { ParentDiv } from "../../styles/div/div.styles";

const TitleAndLoader = () => {
  const { signedInCustomersBookingsIsLoading } =
    useGetSignedInCustomersBookingsSelectors();

  return (
    <>
      {signedInCustomersBookingsIsLoading ? (
        <SkeletonBox loadingText="Fetching your bookings..." />
      ) : null}
      <ParentDiv>
        <CustomBalancedText type="h1">your bookings</CustomBalancedText>
      </ParentDiv>
    </>
  );
};

export default TitleAndLoader;
