import useGoToAddCatRoute from "./view-customers-cats-hooks.js/use-go-to-add-cat-route";

import { Button } from "../../styles/button/button.styles";

import { getFirstNameFromString } from "../../functions/get-first-name-from-string";

const ViewCustomersAddCat = ({ customerDocumentId, customerName }) => {
  const { goToAddCatRoute } = useGoToAddCatRoute(customerDocumentId);

  return (
    <>
      {customerDocumentId ? (
        <>
          <p>
            you can add a cat for {getFirstNameFromString(customerName)} by
            tapping on the button below.
          </p>
          <Button className="teal" onClick={goToAddCatRoute}>
            add a cat
          </Button>
        </>
      ) : null}
    </>
  );
};

export default ViewCustomersAddCat;
