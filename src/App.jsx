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
import FloatingBackButton from "./components/floating-back-button/floating-back-button.component";
import SkeletonBox from "./components/skeleton-box/skeleton-box.component";
import PrivateRoutes from "./components/private-routes/private-routes.component";
import RouteNotFound from "./components/route-not-found/route-not-found.component";

import {
  accountRoute,
  addCatRoute,
  addCustomerRoute,
  allCustomersRoute,
  signInRoute,
  signUpRoute,
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
  dailyScheduleRoute,
  penDataRoute,
  termsRoute,
  privacyPolicyRoute,
  cookiesRoute,
  securityPolicyRoute,
  refundsPolicyRoute,
  dataProtectionPolicyRoute,
  creditsRoute,
  aboutRoute,
  signedInCustomersDetailsRoute,
  catteryDetailsRoute,
  signedInCustomersCatsRoute,
  signedInCustomersBookingsRoute,
  settleBookingPaymentRoute,
  paymentResultRoute,
  pricingRoute,
  paymentTermsRoute,
  incomeRoute,
  updatePasswordRoute,
  updateEmailRoute,
  moveCustomerToNewCatteryRoute,
} from "./strings/routes";
import Footer from "./components/footer/footer.component";

const Navigation = lazy(() =>
  import("./routes/navigation/navigation.component")
);
const Home = lazy(() => import("./routes/home/home.component"));
const About = lazy(() => import("./routes/about/about.component"));
const SignIn = lazy(() => import("./routes/sign-in/sign-in.component"));
const SignUp = lazy(() => import("./routes/sign-up/sign-up.component"));
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
const AddBooking = lazy(() =>
  import("./routes/add-booking/add-booking.component")
);
const AllUsers = lazy(() => import("./routes/all-users/all-users.component"));
const Bookings = lazy(() => import("./routes/bookings/bookings.component"));
const CancelBooking = lazy(() =>
  import("./routes/cancel-booking/cancel-booking.component")
);
const DailySchedule = lazy(() =>
  import("./routes/daily-schedule/daily-schedule.component")
);
const ViewPenData = lazy(() =>
  import("./routes/view-pen-data/view-pen-data.component")
);
const TermsAndConditions = lazy(() =>
  import("./routes/terms-and-conditions/terms-and-conditions.component")
);
const PrivacyPolicy = lazy(() =>
  import("./routes/privacy-policy/privacy-policy.component")
);
const CookiePolicy = lazy(() =>
  import("./routes/cookie-policy/cookie-policy.component")
);
const SecurityPolicy = lazy(() =>
  import("./routes/security-policy/security-policy.component")
);
const PaymentTerms = lazy(() =>
  import("./routes/payment-terms/payment-terms.component")
);
const RefundsPolicy = lazy(() =>
  import("./routes/refunds-policy/refunds-policy.component")
);
const DataProtection = lazy(() =>
  import("./routes/data-protection/data-protection.component")
);
const Credits = lazy(() => import("./routes/credits/credits.component"));
const SignedInCustomersDetails = lazy(() =>
  import(
    "./routes/signed-in-customers-details/signed-in-customers-details.component"
  )
);
const CatteryDetails = lazy(() =>
  import("./routes/cattery-details/cattery-details.component")
);
const SignedInCustomersCats = lazy(() =>
  import("./routes/signed-in-customers-cats/signed-in-customers-cats.component")
);
const SignedInCustomersBookings = lazy(() =>
  import(
    "./routes/signed-customers-bookings/signed-in-customers-bookings.component"
  )
);
const SettleBookingPayment = lazy(() =>
  import("./routes/settle-booking-payment/settle-booking-payment.component")
);
const PaymentResult = lazy(() =>
  import("./routes/payment-result/payment-result.component")
);
const Pricing = lazy(() => import("./routes/pricing/pricing.component"));
const Income = lazy(() => import("./routes/income/income.component"));
const UpdatePassword = lazy(() =>
  import("./routes/update-password/update-password.component")
);
const UpdateEmail = lazy(() =>
  import("./routes/update-email/update-email.component")
);
const MoveCustomerToNewCattery = lazy(() =>
  import(
    "./routes/move-customer-to-new-cattery/move-customer-to-new-cattery.component"
  )
);

const App = () => {
  const { currentUser, role } = useGetCurrentUserSelectors();
  useGetUserOnLoadThunkUseEffect();
  useResetStoreOnRouteChangeUseEffect();
  useScrollToTop();

  return (
    <>
      <GlobalStyles />
      <FloatingBackButton />
      <Navigation />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<SkeletonBox loadingText="please wait..." />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path={aboutRoute} element={<About />} />
            <Route path={pricingRoute} element={<Pricing />} />
            <Route path={signInRoute} element={<SignIn />} />
            <Route path={signUpRoute} element={<SignUp />} />
            <Route path={contactRoute} element={<Contact />} />
            <Route
              path={forgotPasswordRequestRoute}
              element={<ForgotPasswordRequest />}
            />
            <Route
              path={chooseNewPasswordRoute}
              element={<ChooseNewPassword />}
            />
            <Route path={termsRoute} element={<TermsAndConditions />} />
            <Route path={privacyPolicyRoute} element={<PrivacyPolicy />} />
            <Route path={cookiesRoute} element={<CookiePolicy />} />
            <Route path={securityPolicyRoute} element={<SecurityPolicy />} />
            <Route path={paymentTermsRoute} element={<PaymentTerms />} />
            <Route path={refundsPolicyRoute} element={<RefundsPolicy />} />
            <Route
              path={dataProtectionPolicyRoute}
              element={<DataProtection />}
            />
            <Route path={creditsRoute} element={<Credits />} />

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
                path={moveCustomerToNewCatteryRoute}
                element={
                  currentUser && role === "admin" ? (
                    <MoveCustomerToNewCattery />
                  ) : null
                }
              />

              <Route
                path={dailyScheduleRoute}
                element={
                  currentUser && role === "owner" ? <DailySchedule /> : null
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
                  (currentUser && role === "owner") ||
                  (currentUser && role === "customer") ? (
                    <EditCustomer />
                  ) : null
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
                  currentUser && role === "owner" ? <AddBooking /> : null
                }
              />

              <Route
                path={cancelBookingRoute}
                element={
                  currentUser && role === "owner" ? <CancelBooking /> : null
                }
              />

              <Route
                path={penDataRoute}
                element={
                  currentUser && role === "owner" ? <ViewPenData /> : null
                }
              />

              <Route
                path={signedInCustomersDetailsRoute}
                element={
                  currentUser && role === "customer" ? (
                    <SignedInCustomersDetails />
                  ) : null
                }
              />

              <Route
                path={catteryDetailsRoute}
                element={
                  currentUser && role === "customer" ? <CatteryDetails /> : null
                }
              />
              <Route
                path={signedInCustomersCatsRoute}
                element={
                  currentUser && role === "customer" ? (
                    <SignedInCustomersCats />
                  ) : null
                }
              />

              <Route
                path={signedInCustomersBookingsRoute}
                element={
                  currentUser && role === "customer" ? (
                    <SignedInCustomersBookings />
                  ) : null
                }
              />

              <Route
                path={settleBookingPaymentRoute}
                element={
                  currentUser && role === "customer" ? (
                    <SettleBookingPayment />
                  ) : null
                }
              />

              <Route
                path={paymentResultRoute}
                element={
                  currentUser && role === "customer" ? <PaymentResult /> : null
                }
              />

              <Route
                path={incomeRoute}
                element={currentUser && role === "owner" ? <Income /> : null}
              />

              <Route
                path={updatePasswordRoute}
                element={
                  currentUser && role !== "admin" ? <UpdatePassword /> : null
                }
              />
              <Route
                path={updateEmailRoute}
                element={
                  currentUser && role !== "admin" ? <UpdateEmail /> : null
                }
              />
            </Route>
            <Route path="*" element={<RouteNotFound />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
      <Footer />
    </>
  );
};

export default App;
