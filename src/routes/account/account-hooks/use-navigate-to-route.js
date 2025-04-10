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
  updatePriceRoute,
  deleteDatesRoute,
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
    {
      id: 4,
      text: "delete dates",
      onClick: () => hamburgerHandlerNavigate(deleteDatesRoute),
    },
  ];

  const catteryOwnerButtons = [
    {
      id: 5,
      text: "daily schedule",
      onClick: () => hamburgerHandlerNavigate(dailyScheduleRoute),
    },
    {
      id: 6,
      text: "bookings",
      onClick: () => hamburgerHandlerNavigate(bookingsRoute),
    },
    {
      id: 7,
      text: "customers",
      onClick: () => hamburgerHandlerNavigate(allCustomersRoute),
    },
    {
      id: 8,
      text: "cats",
      onClick: () => hamburgerHandlerNavigate(allCatsRoute),
    },
    ...(managesOwnPens || catteryDetailsError
      ? []
      : [
          {
            id: 9,
            text: "pen data",
            onClick: () => hamburgerHandlerNavigate(penDataRoute),
          },
        ]),
    ...(!allowsOnlinePayments || catteryDetailsError
      ? []
      : [
          {
            id: 10,
            text: "income",
            onClick: () => hamburgerHandlerNavigate(incomeRoute),
          },
        ]),
  ];

  const catteryOwnerCustomerDataButtons = [
    {
      id: 11,
      text: "add booking",
      onClick: () => hamburgerHandlerNavigate(addBookingRoute),
    },
    {
      id: 12,
      text: "add a customer",
      onClick: () => hamburgerHandlerNavigate(addCustomerRoute),
    },
    {
      id: 13,
      text: "add a cat",
      onClick: () => hamburgerHandlerNavigate(addCatChooseOwnerRoute),
    },
    {
      id: 14,
      text: "customer portal",
      onClick: () => hamburgerHandlerNavigate(customerPortalRoute),
    },
    {
      id: 15,
      text: "update prices",
      onClick: () => hamburgerHandlerNavigate(updatePriceRoute),
    },
    {
      id: 16,
      text: "update password",
      onClick: () => hamburgerHandlerNavigate(updatePasswordRoute),
    },
    {
      id: 17,
      text: "update email",
      onClick: () => hamburgerHandlerNavigate(updateEmailRoute),
    },
  ];

  const customerDetailsButtons = [
    {
      id: 18,
      text: "your bookings",
      onClick: () => hamburgerHandlerNavigate(signedInCustomersBookingsRoute),
    },
    {
      id: 19,
      text: "your details",
      onClick: () => hamburgerHandlerNavigate(signedInCustomersDetailsRoute),
    },
    {
      id: 20,
      text: "your cats",
      onClick: () => hamburgerHandlerNavigate(signedInCustomersCatsRoute),
    },
    {
      id: 21,
      text: "your cattery details",
      onClick: () => hamburgerHandlerNavigate(catteryDetailsRoute),
    },
    {
      id: 22,
      text: "update password",
      onClick: () => hamburgerHandlerNavigate(updatePasswordRoute),
    },
    {
      id: 23,
      text: "update email",
      onClick: () => hamburgerHandlerNavigate(updateEmailRoute),
    },
    {
      id: 24,
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
