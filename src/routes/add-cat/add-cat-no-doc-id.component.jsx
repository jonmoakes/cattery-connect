import Balancer from "react-wrap-balancer";
import { ParentDiv } from "../../styles/div/div.styles";
import { Button } from "../../styles/button/button.styles";
import useHamburgerHandlerNavigate from "../../hooks/use-hamburger-handler-navigate";
import { allCustomersRoute } from "../../strings/routes";

const AddCatNoDocId = () => {
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  return (
    <>
      <ParentDiv>
        <h1>missing required data</h1>
      </ParentDiv>
      <ParentDiv>
        <p>
          <Balancer>
            sorry, we are missing data that is required in order to add a cat to
            the database.
          </Balancer>
        </p>
        <p>
          <Balancer>
            this data is passed through when you tap the 'add cat' button.
          </Balancer>
        </p>
        <p>
          <Balancer>
            if you use the browsers forward and back back buttons to access the
            page, the data will not be passed correctly.
          </Balancer>
        </p>
        <p>
          <Balancer>
            please make sure to access this page only by pressing the 'add cat'
            buttons in either the customers table, or the customers respective
            cats table ( not by using the browsers forward or back buttons ).
          </Balancer>
        </p>
        <Button
          className="teal"
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
