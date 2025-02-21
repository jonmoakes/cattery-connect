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
  todaysScheduleRoute,
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
      text: "today's schedule",
      onClick: () => hamburgerHandlerNavigate(todaysScheduleRoute),
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
  ];

  const catteryOwnerCustomerDataButtons = [
    {
      id: 7,
      text: "add booking",
      onClick: () => hamburgerHandlerNavigate(addBookingRoute),
    },
    {
      id: 8,
      text: "add a customer",
      onClick: () => hamburgerHandlerNavigate(addCustomerRoute),
    },
    {
      id: 9,
      text: "add a cat",
      onClick: () => hamburgerHandlerNavigate(addCatChooseOwnerRoute),
    },
  ];

  return {
    adminButtons,
    catteryOwnerButtons,
    catteryOwnerCustomerDataButtons,
  };
};

export default useNavigateToRoute;
