import useGetCatteryDetailsSelectors from "../../../hooks/selectors/use-get-cattery-details-selectors";
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
  catteryDetailsRoute,
  incomeRoute,
  updatePasswordRoute,
  updateEmailRoute,
  moveCustomerToNewCatteryRoute,
  customerPortalRoute,
} from "../../../strings/routes";

const useNavigateToRoute = () => {
  const { catteryDetailsError, managesOwnPens, allowsOnlinePayments } =
    useGetCatteryDetailsSelectors();
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
    {
      id: 3,
      text: "move customer",
      onClick: () => hamburgerHandlerNavigate(moveCustomerToNewCatteryRoute),
    },
  ];

  const catteryOwnerButtons = [
    {
      id: 4,
      text: "daily schedule",
      onClick: () => hamburgerHandlerNavigate(dailyScheduleRoute),
    },
    {
      id: 5,
      text: "bookings",
      onClick: () => hamburgerHandlerNavigate(bookingsRoute),
    },
    {
      id: 6,
      text: "customers",
      onClick: () => hamburgerHandlerNavigate(allCustomersRoute),
    },
    {
      id: 7,
      text: "cats",
      onClick: () => hamburgerHandlerNavigate(allCatsRoute),
    },
    ...(managesOwnPens || catteryDetailsError
      ? []
      : [
          {
            id: 8,
            text: "pen data",
            onClick: () => hamburgerHandlerNavigate(penDataRoute),
          },
        ]),
    ...(!allowsOnlinePayments || catteryDetailsError
      ? []
      : [
          {
            id: 9,
            text: "income",
            onClick: () => hamburgerHandlerNavigate(incomeRoute),
          },
        ]),
  ];

  const catteryOwnerCustomerDataButtons = [
    {
      id: 10,
      text: "add booking",
      onClick: () => hamburgerHandlerNavigate(addBookingRoute),
    },
    {
      id: 11,
      text: "add a customer",
      onClick: () => hamburgerHandlerNavigate(addCustomerRoute),
    },
    {
      id: 12,
      text: "add a cat",
      onClick: () => hamburgerHandlerNavigate(addCatChooseOwnerRoute),
    },
    {
      id: 13,
      text: "customer portal",
      onClick: () => hamburgerHandlerNavigate(customerPortalRoute),
    },
    {
      id: 14,
      text: "update password",
      onClick: () => hamburgerHandlerNavigate(updatePasswordRoute),
    },
    {
      id: 15,
      text: "update email",
      onClick: () => hamburgerHandlerNavigate(updateEmailRoute),
    },
  ];

  const customerDetailsButtons = [
    {
      id: 16,
      text: "your bookings",
      onClick: () => hamburgerHandlerNavigate(signedInCustomersBookingsRoute),
    },
    {
      id: 17,
      text: "your details",
      onClick: () => hamburgerHandlerNavigate(signedInCustomersDetailsRoute),
    },
    {
      id: 18,
      text: "your cats",
      onClick: () => hamburgerHandlerNavigate(signedInCustomersCatsRoute),
    },
    {
      id: 19,
      text: "your cattery details",
      onClick: () => hamburgerHandlerNavigate(catteryDetailsRoute),
    },
    {
      id: 20,
      text: "update password",
      onClick: () => hamburgerHandlerNavigate(updatePasswordRoute),
    },
    {
      id: 21,
      text: "update email",
      onClick: () => hamburgerHandlerNavigate(updateEmailRoute),
    },
    {
      id: 22,
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
