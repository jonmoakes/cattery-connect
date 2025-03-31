import { useDispatch } from "react-redux";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";
import useGetSignedInCustomersDetailsSelectors from "../../../hooks/selectors/use-get-signed-in-customers-details-selectors";
import {
  setCustomerDetailForFormComparison,
  setCustomerDetails,
} from "../../../store/customer-details-management/customer-details-management.slice";
import {
  editCustomerRoute,
  signedInCustomersDetailsRoute,
} from "../../../strings/routes";

const useSignedInCustomersDetailsFunctions = () => {
  const { signedInCustomerDetailsForEditing } =
    useGetSignedInCustomersDetailsSelectors();
  const dispatch = useDispatch();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const getLabel = (label) => {
    switch (label) {
      case "customerId":
        return "customer ID";
      case "emergencyContactDetails":
        return "emergency contact details";
      case "phoneNumber":
        return "phone number";
      case "email":
        return "correspondence email";
      default:
        return label;
    }
  };

  const handleEditDetailsNavigation = () => {
    dispatch(setCustomerDetails(signedInCustomerDetailsForEditing));
    dispatch(
      setCustomerDetailForFormComparison(signedInCustomerDetailsForEditing)
    );
    hamburgerHandlerNavigate(editCustomerRoute, {
      fromRoute: signedInCustomersDetailsRoute,
    });
  };

  return { getLabel, handleEditDetailsNavigation };
};

export default useSignedInCustomersDetailsFunctions;
