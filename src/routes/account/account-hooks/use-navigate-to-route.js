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
    ...(managesOwnPens || catteryDetailsError
      ? []
      : [
          {
            id: 7,
            text: "pen data",
            onClick: () => hamburgerHandlerNavigate(penDataRoute),
          },
        ]),
    ...(!allowsOnlinePayments || catteryDetailsError
      ? []
      : [
          {
            id: 8,
            text: "income",
            onClick: () => hamburgerHandlerNavigate(incomeRoute),
          },
        ]),
  ];

  const catteryOwnerCustomerDataButtons = [
    {
      id: 9,
      text: "add booking",
      onClick: () => hamburgerHandlerNavigate(addBookingRoute),
    },
    {
      id: 10,
      text: "add a customer",
      onClick: () => hamburgerHandlerNavigate(addCustomerRoute),
    },
    {
      id: 11,
      text: "add a cat",
      onClick: () => hamburgerHandlerNavigate(addCatChooseOwnerRoute),
    },
    {
      id: 12,
      text: "update password",
      onClick: () => hamburgerHandlerNavigate(updatePasswordRoute),
    },
    {
      id: 13,
      text: "update email",
      onClick: () => hamburgerHandlerNavigate(updateEmailRoute),
    },
  ];

  const customerDetailsButtons = [
    {
      id: 14,
      text: "your bookings",
      onClick: () => hamburgerHandlerNavigate(signedInCustomersBookingsRoute),
    },
    {
      id: 15,
      text: "your details",
      onClick: () => hamburgerHandlerNavigate(signedInCustomersDetailsRoute),
    },
    {
      id: 16,
      text: "your cats",
      onClick: () => hamburgerHandlerNavigate(signedInCustomersCatsRoute),
    },
    {
      id: 17,
      text: "your cattery details",
      onClick: () => hamburgerHandlerNavigate(catteryDetailsRoute),
    },
    {
      id: 18,
      text: "update password",
      onClick: () => hamburgerHandlerNavigate(updatePasswordRoute),
    },
    {
      id: 19,
      text: "update email",
      onClick: () => hamburgerHandlerNavigate(updateEmailRoute),
    },
    {
      id: 20,
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
