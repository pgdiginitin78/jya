import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import ScrollToTop from "./ScrollToTop";
import { LoaderProvider } from "./components/common/commonLoader/LoaderContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <LoaderProvider>
        <App />
      </LoaderProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

reportWebVitals();
