import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { DataProvider } from "./components/Hooks/useContext";
import { AccountProvider } from "./components/Hooks/AccountContext";

ReactDOM.render(
  <AccountProvider>
    <DataProvider>
      <App />
    </DataProvider>
  </AccountProvider>,
  document.getElementById("root")
);
