import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import "react-loading-skeleton/dist/skeleton.css";

import useGetCurrentUserSelectors from "./hooks/selectors/use-get-current-user-selectors";
import useGetUserOnLoadThunkUseEffect from "./hooks/use-get-user-on-load-thunk-use-effect";
import useScrollToTop from "./hooks/use-scroll-to-top";

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
  uploadDatesAndPensDataRoute,
  viewCustomersCatsRoute,
} from "./strings/routes";

const Navigation = lazy(() =>
  import("./routes/navigation/navigation.component")
);
const Home = lazy(() => import("./routes/home/home.component"));
const SignIn = lazy(() => import("./routes/sign-in/sign-in.component"));
const Account = lazy(() => import("./routes/account/account.component"));
const UploadDatesAndPensData = lazy(() =>
  import(
    "./routes/db-management/upload-dates/upload-dates-and-pens-data.component"
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

const App = () => {
  useGetUserOnLoadThunkUseEffect();
  const { currentUser, role } = useGetCurrentUserSelectors();
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
            <Route element={<PrivateRoutes />}>
              <Route path={accountRoute} element={<Account />} />
              <Route
                path={uploadDatesAndPensDataRoute}
                element={
                  currentUser && role === "admin" ? (
                    <UploadDatesAndPensData />
                  ) : null
                }
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
            </Route>
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default App;
