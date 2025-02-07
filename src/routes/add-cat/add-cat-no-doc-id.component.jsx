import useHamburgerHandlerNavigate from "../../hooks/use-hamburger-handler-navigate";

import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { Button } from "../../styles/button/button.styles";

import { allCustomersRoute } from "../../strings/routes";

const AddCatNoDocId = () => {
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  return (
    <>
      <ParentDiv>
        <CustomBalancedText type="h1">missing required data</CustomBalancedText>
      </ParentDiv>
      <ParentDiv>
        <CustomBalancedText>
          sorry, we are missing data that is required in order to add a cat to
          the database.
        </CustomBalancedText>
        <CustomBalancedText>
          this data is passed through when you tap the 'add cat' button.
        </CustomBalancedText>
        <CustomBalancedText>
          if you use the browsers forward and back back buttons to access the
          page, the data will not be passed correctly.
        </CustomBalancedText>
        <CustomBalancedText>
          please make sure to access this page only by pressing the 'add cat'
          buttons in either the customers table, or the customers respective
          cats table ( not by using the browsers forward or back buttons ).
        </CustomBalancedText>
        <Button
          className="red"
          type="button"
          onClick={() => hamburgerHandlerNavigate(allCustomersRoute)}
        >
          go back
        </Button>
      </ParentDiv>
    </>
  );
};

export default AddCatNoDocId;
