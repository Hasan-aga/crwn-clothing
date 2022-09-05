import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store/store";

import { Elements } from "@stripe/react-stripe-js";
import { stripePromis } from "./utils/stripe/stripe.utils";

import { GlobalStyle } from "./global.style";
import { register } from "./serviceWorkerRegistration";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading="fetching......." persistor={persistor}>
        <BrowserRouter>
          <Elements stripe={stripePromis}>
            <GlobalStyle />
            <App />
          </Elements>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// register service worker for PWA
register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
