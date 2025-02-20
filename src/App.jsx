import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import "react-loading-skeleton/dist/skeleton.css";

import useGetCurrentUserSelectors from "./hooks/selectors/use-get-current-user-selectors";
import useGetUserOnLoadThunkUseEffect from "./hooks/use-get-user-on-load-thunk-use-effect";
import useScrollToTop from "./hooks/use-scroll-to-top";
import useResetStoreOnRouteChangeUseEffect from "./hooks/use-reset-store-on-route-change-use-effect";

import GlobalStyles from "./global-styles";
import "./App.css";
import ErrorFallback from "./components/errors/error-fallback.component";
import SkeletonBox from "./components/skeleton-box/skeleton-box.component";
import PrivateRoutes from "./components/private-routes/private-routes.component";

import {
  accountRoute,
  addCatRoute,
  addCustomerRoute,
  allCustomersRoute,
  signInRoute,
  forgotPasswordRequestRoute,
  chooseNewPasswordRoute,
  uploadDatesAndPensDataRoute,
  viewCustomersCatsRoute,
  editCatRoute,
  editCustomerRoute,
  allCatsRoute,
  addCatChooseOwnerRoute,
  addBookingRoute,
  allUsersRoute,
  bookingsRoute,
  cancelBookingRoute,
  contactRoute,
} from "./strings/routes";

const Navigation = lazy(() =>
  import("./routes/navigation/navigation.component")
);
const Home = lazy(() => import("./routes/home/home.component"));
const SignIn = lazy(() => import("./routes/sign-in/sign-in.component"));
const Contact = lazy(() => import("./routes/contact/contact.component"));
const ForgotPasswordRequest = lazy(() =>
  import("./routes/forgot-password-request/forgot-password-request.component")
);
const ChooseNewPassword = lazy(() =>
  import("./routes/choose-new-password/choose-new-password.component")
);
const Account = lazy(() => import("./routes/account/account.component"));
const UploadDatesAndPensData = lazy(() =>
  import(
    "./routes/db-management/upload-dates-and-pens-data/upload-dates-and-pens-data.component"
  )
);
const AddCat = lazy(() => import("./routes/add-cat/add-cat.component"));
const AddCustomer = lazy(() =>
  import("./routes/add-customer/add-customer.component")
);
const AllCustomers = lazy(() =>
  import("./routes/all-customers/all-customers.component")
);
const ViewCustomersCats = lazy(() =>
  import("./routes/view-customers-cats/view-customers-cats.component")
);
const EditCat = lazy(() => import("./routes/edit-cat/edit-cat.component"));
const EditCustomer = lazy(() =>
  import("./routes/edit-customer/edit-customer.component")
);
const AllCats = lazy(() => import("./routes/all-cats/all-cats.component"));
const AddCatChooseOwner = lazy(() =>
  import("./routes/add-cat-choose-owner/add-cat-choose-owner.component")
);
const DbManageAddBooking = lazy(() =>
  import(
    "./routes/db-management/db-manage-add-booking/db-manage-add-booking.component"
  )
);
const AllUsers = lazy(() => import("./routes/all-users/all-users.component"));
const Bookings = lazy(() => import("./routes/bookings/bookings.component"));
const CancelBooking = lazy(() =>
  import("./routes/cancel-booking/cancel-booking.component")
);

const App = () => {
  const { currentUser, role } = useGetCurrentUserSelectors();
  useGetUserOnLoadThunkUseEffect();
  useResetStoreOnRouteChangeUseEffect();
  useScrollToTop();

  return (
    <>
      <GlobalStyles />
      <Navigation />

      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<SkeletonBox loadingText="please wait..." />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path={signInRoute} element={<SignIn />} />
            <Route path={contactRoute} element={<Contact />} />
            <Route
              path={forgotPasswordRequestRoute}
              element={<ForgotPasswordRequest />}
            />
            <Route
              path={chooseNewPasswordRoute}
              element={<ChooseNewPassword />}
            />

            <Route element={<PrivateRoutes />}>
              <Route path={accountRoute} element={<Account />} />

              <Route
                path={allUsersRoute}
                element={currentUser && role === "admin" ? <AllUsers /> : null}
              />

              <Route
                path={uploadDatesAndPensDataRoute}
                element={
                  currentUser && role === "admin" ? (
                    <UploadDatesAndPensData />
                  ) : null
                }
              />

              <Route
                path={bookingsRoute}
                element={currentUser && role === "owner" ? <Bookings /> : null}
              />

              <Route
                path={addCatRoute}
                element={currentUser && role === "owner" ? <AddCat /> : null}
              />

              <Route
                path={addCustomerRoute}
                element={
                  currentUser && role === "owner" ? <AddCustomer /> : null
                }
              />

              <Route
                path={allCustomersRoute}
                element={
                  currentUser && role === "owner" ? <AllCustomers /> : null
                }
              />

              <Route
                path={viewCustomersCatsRoute}
                element={
                  currentUser && role === "owner" ? <ViewCustomersCats /> : null
                }
              />

              <Route
                path={editCatRoute}
                element={currentUser && role === "owner" ? <EditCat /> : null}
              />

              <Route
                path={editCustomerRoute}
                element={
                  currentUser && role === "owner" ? <EditCustomer /> : null
                }
              />

              <Route
                path={allCatsRoute}
                element={currentUser && role === "owner" ? <AllCats /> : null}
              />

              <Route
                path={addCatChooseOwnerRoute}
                element={
                  currentUser && role === "owner" ? <AddCatChooseOwner /> : null
                }
              />

              <Route
                path={addBookingRoute}
                element={
                  currentUser && role === "owner" ? (
                    <DbManageAddBooking />
                  ) : null
                }
              />

              <Route
                path={cancelBookingRoute}
                element={
                  currentUser && role === "owner" ? <CancelBooking /> : null
                }
              />
            </Route>
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default App;
