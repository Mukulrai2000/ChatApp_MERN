import React, { Fragment } from "react";

import { GoogleOAuthProvider } from "@react-oauth/google";

import Messenger from "./components/Messenger";

const App = () => {
  const clientId =
    "172655717377-g1fp1kbl97rc93kff01fvhlbpo98vifd.apps.googleusercontent.com";
  return (
    <Fragment>
      <GoogleOAuthProvider clientId={clientId}>
        <Messenger />
      </GoogleOAuthProvider>
    </Fragment>
  );
};

export default App;
