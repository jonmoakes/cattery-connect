import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import GlobalStyles from "./global-styles";
import "./App.css";
import ErrorFallback from "./components/errors/error-fallback.component";
import SkeletonBox from "./components/skeleton-box/skeleton-box.component";
import PrivateRoutes from "./components/private-routes/private-routes.component";
import "react-loading-skeleton/dist/skeleton.css";

import { signUpRoute } from "./strings/routes";

const Navigation = lazy(() =>
  import("./routes/navigation/navigation.component")
);
const Home = lazy(() => import("./routes/home/home.component"));
const SignUp = lazy(() => import("./routes/sign-up/sign-up.component"));

function App() {
  return (
    <>
      <GlobalStyles />
      <Navigation />

      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<SkeletonBox loadingText="please wait..." />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path={signUpRoute} element={<SignUp />} />
            <Route element={<PrivateRoutes />}></Route>
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default App;
