import useHamburgerHandlerNavigate from "../../hooks/use-hamburger-handler-navigate";

import { EntryOptionsButton } from "../../styles/button/button.styles";

import { editCustomerRoute } from "../../strings/routes";

const EditCustomerButton = () => {
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  return (
    <>
      <EntryOptionsButton
        className="edit"
        type="button"
        onClick={() => hamburgerHandlerNavigate(editCustomerRoute)}
      >
        edit customer
      </EntryOptionsButton>
    </>
  );
};

export default EditCustomerButton;
