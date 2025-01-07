import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { StyleSheetManager } from "styled-components";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <StyleSheetManager shouldForwardProp={(prop) => prop !== "theme"}>
          <App />
        </StyleSheetManager>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
