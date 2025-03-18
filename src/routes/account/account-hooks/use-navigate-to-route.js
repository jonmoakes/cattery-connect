import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";

import {
  uploadDatesAndPensDataRoute,
  addCustomerRoute,
  allCustomersRoute,
  allCatsRoute,
  addCatChooseOwnerRoute,
  addBookingRoute,
  allUsersRoute,
  bookingsRoute,
  dailyScheduleRoute,
  penDataRoute,
  signedInCustomersDetailsRoute,
  signedInCustomersCatsRoute,
  signedInCustomersBookingsRoute,
  contactRoute,
} from "../../../strings/routes";

const useNavigateToRoute = () => {
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const adminButtons = [
    {
      id: 1,
      text: "all users",
      onClick: () => hamburgerHandlerNavigate(allUsersRoute),
    },
    {
      id: 2,
      text: "upload dates",
      onClick: () => hamburgerHandlerNavigate(uploadDatesAndPensDataRoute),
    },
  ];

  const catteryOwnerButtons = [
    {
      id: 3,
      text: "daily schedule",
      onClick: () => hamburgerHandlerNavigate(dailyScheduleRoute),
    },
    {
      id: 4,
      text: "bookings",
      onClick: () => hamburgerHandlerNavigate(bookingsRoute),
    },
    {
      id: 5,
      text: "customers",
      onClick: () => hamburgerHandlerNavigate(allCustomersRoute),
    },
    {
      id: 6,
      text: "cats",
      onClick: () => hamburgerHandlerNavigate(allCatsRoute),
    },
    {
      id: 7,
      text: "pen data",
      onClick: () => hamburgerHandlerNavigate(penDataRoute),
    },
  ];

  const catteryOwnerCustomerDataButtons = [
    {
      id: 8,
      text: "add booking",
      onClick: () => hamburgerHandlerNavigate(addBookingRoute),
    },
    {
      id: 9,
      text: "add a customer",
      onClick: () => hamburgerHandlerNavigate(addCustomerRoute),
    },
    {
      id: 10,
      text: "add a cat",
      onClick: () => hamburgerHandlerNavigate(addCatChooseOwnerRoute),
    },
  ];

  const customerDetailsButtons = [
    {
      id: 11,
      text: "view bookings",
      onClick: () => hamburgerHandlerNavigate(signedInCustomersBookingsRoute),
    },
    {
      id: 12,
      text: "view your data",
      onClick: () => hamburgerHandlerNavigate(signedInCustomersDetailsRoute),
    },
    {
      id: 13,
      text: "view your cats",
      onClick: () => hamburgerHandlerNavigate(signedInCustomersCatsRoute),
    },
    {
      id: 14,
      text: "contact cattery",
      onClick: () => hamburgerHandlerNavigate(contactRoute),
    },
  ];

  return {
    adminButtons,
    catteryOwnerButtons,
    catteryOwnerCustomerDataButtons,
    customerDetailsButtons,
  };
};

export default useNavigateToRoute;
