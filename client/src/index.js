import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from "./App";

import { Provider } from "react-redux";
import store from "./store";
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Auth0Provider
    domain="dev-867ewf0h2lv0q1d7.us.auth0.com"
    clientId="AgP0AfHrsyn1N2UqYRs7aOcXcbviE4yK"
    redirectUri={window.location.origin}
    > 
      <App />
    </Auth0Provider>
  </Provider>
);
