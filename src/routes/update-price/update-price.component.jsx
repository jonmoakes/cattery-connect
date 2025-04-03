import useGetUpdatePriceResultSwalUseEffect from "./hooks/use-get-update-price-result-swal-use-effect";

import TitleAndLoader from "./title-and-loader.component";
import Intro from "./intro.component";
import Instructions from "./intructions.component";
import UpdatePriceForm from "./update-price-form.component";
import NewPriceInfo from "./new-price-info.component";
import ConfirmNewPriceButton from "./confirm-new-price-button.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";

const UpdatePrice = () => {
  useGetUpdatePriceResultSwalUseEffect();

  return (
    <Container>
      <TitleAndLoader />
      <Intro />
      <Instructions />

      <ParentDiv>
        <UpdatePriceForm />
        <NewPriceInfo />
        <ConfirmNewPriceButton />
      </ParentDiv>
    </Container>
  );
};
export default UpdatePrice;
