import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";

import {
  uploadDatesAndPensDataRoute,
  addBookingRoute,
  addCustomerRoute,
  allCustomersRoute,
} from "../../../strings/routes";

const useNavigateToRoute = () => {
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const adminButtons = [
    {
      id: 1,
      text: "upload dates",
      onClick: () => hamburgerHandlerNavigate(uploadDatesAndPensDataRoute),
    },
  ];

  const catteryOwnerButtons = [
    {
      id: 2,
      text: "add booking",
      onClick: () => hamburgerHandlerNavigate(addBookingRoute),
    },
    {
      id: 3,
      text: "customers & cats",
      onClick: () => hamburgerHandlerNavigate(allCustomersRoute),
    },
  ];

  const catteryOwnerCustomerDataButtons = [
    {
      id: 4,
      text: "add a customer",
      onClick: () => hamburgerHandlerNavigate(addCustomerRoute),
    },
  ];

  return {
    adminButtons,
    catteryOwnerButtons,
    catteryOwnerCustomerDataButtons,
  };
};

export default useNavigateToRoute;
